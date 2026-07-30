import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ContactFormData, FormStatus } from '@/types/form';
import { whatsappUrl, whatsappBaseUrl, WHATSAPP_DISPLAY } from '@/utils/whatsapp';
import styles from './ContactSection.module.css';
import emailjs from '@emailjs/browser';

// Inicializa uma única vez por módulo — evita repassar a chave em cada envio
emailjs.init({ publicKey: 'Hm7UaQdaVhNY7XQyc' });

const EMAILJS_SITE = 'Principal';
const EMAILJS_SERVICE_ID = 'service_1ehb865';
const EMAILJS_TEMPLATE_ID = 'template_ldhbw1b';

const contatos = [
  { label: 'WhatsApp', value: WHATSAPP_DISPLAY, isWhatsapp: true },
  { label: 'Email', value: 'contato@leopessoa.eng.br', href: 'mailto:contato@leopessoa.eng.br' },
  { label: 'Local', value: 'João Pessoa — PB' },
];

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  async function onSubmit(data: ContactFormData) {
    setStatus('submitting');
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        site: EMAILJS_SITE,
        name: data.name,
        email: data.email,
        cel: '-',
        projectType: '-',
        message: data.message,
      });
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className={styles.section} id="contato" aria-label="Contato">
      {/* Grafismo triangular de transição */}
      <div className={styles.backgroundLayers} aria-hidden="true">
        <div className={styles.triangleOverlay} />
        <div className={styles.imageBg} />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className={styles.grid}>

            {/* Info */}
            <div className={styles.infoCol}>
              <p className={styles.eyebrow}>Próximo passo</p>
              <h2 className={styles.headline}>
                Seu próximo projeto{' '}
                <span className={styles.accent}>merece uma conversa</span>.
              </h2>
              <div className={styles.headlineLine} aria-hidden="true" />
              <p className={styles.sub}>
                Sem compromisso. Só uma conversa entre profissionais.
                Respondo em até 2 horas no horário comercial.
              </p>

              <ul className={styles.contatoList}>
                {contatos.map((c) => {
                  const href = c.isWhatsapp ? whatsappBaseUrl() : c.href;
                  const Tag = href ? 'a' : 'div';
                  return (
                    <Tag
                      key={c.label}
                      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className={styles.contatoItem}
                    >
                      <span className={styles.contatoLabel}>{c.label}</span>
                      <span className={styles.contatoSep} aria-hidden="true" />
                      <span className={styles.contatoValue}>{c.value}</span>
                    </Tag>
                  );
                })}
              </ul>

              <a
                href={whatsappUrl('Olá Leo! Gostaria de conversar sobre um projeto.')}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappCta}
                aria-label="Falar pelo WhatsApp"
              >
                <i className="fab fa-whatsapp" aria-hidden="true" />
                Prefiro falar pelo WhatsApp agora
              </a>
            </div>

            {/* Formulário */}
            <div className={styles.formCol}>
              <div className={styles.formWrap}>
                <p className={styles.formEyebrow}>Conte sobre seu projeto</p>

                {status === 'success' ? (
                  <div className={styles.successMsg} role="status">
                    <span className={styles.successIcon} aria-hidden="true">✓</span>
                    <div>
                      <p className={styles.successTitle}>Mensagem enviada.</p>
                      <p className={styles.successDesc}>Entrarei em contato em breve.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
                    {status === 'error' && (
                      <p className={styles.errorMsg} role="alert">Erro ao enviar. Tente novamente.</p>
                    )}

                    <div className={styles.fieldGroup}>
                      <label htmlFor="c-name" className={styles.fieldLabel}>Nome</label>
                      <input
                        id="c-name"
                        type="text"
                        className={`${styles.fieldInput} ${errors.name ? styles.fieldInputError : ''}`}
                        placeholder="Seu nome completo"
                        aria-invalid={!!errors.name}
                        {...register('name', { required: 'Nome é obrigatório', validate: (v) => v.trim().length > 0 || 'Nome é obrigatório' })}
                      />
                      {errors.name && <span className={styles.fieldError} role="alert">{errors.name.message}</span>}
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="c-email" className={styles.fieldLabel}>Email</label>
                      <input
                        id="c-email"
                        type="email"
                        className={`${styles.fieldInput} ${errors.email ? styles.fieldInputError : ''}`}
                        placeholder="seu@email.com.br"
                        aria-invalid={!!errors.email}
                        {...register('email', {
                          required: 'Email é obrigatório',
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Formato inválido' },
                        })}
                      />
                      {errors.email && <span className={styles.fieldError} role="alert">{errors.email.message}</span>}
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="c-message" className={styles.fieldLabel}>Mensagem</label>
                      <textarea
                        id="c-message"
                        className={styles.fieldTextarea}
                        placeholder="Conte brevemente sobre o projeto..."
                        {...register('message')}
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Enviando...' : 'Enviar mensagem'}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
