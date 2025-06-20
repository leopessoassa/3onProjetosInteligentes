import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useEffect, useRef } from 'react';
import { normalizePhoneNumber } from '../utils/Mask';


const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch
  } = useForm({
    defaultValues: {
      name: '',
      telefone: '',
      email: '',
      tipoProjeto: '',
      localizacao: '',
      descricao: ''
    }
  });

  const phoneValue = watch("telefone")

  useEffect(() => {
    setValue("telefone", normalizePhoneNumber(phoneValue))
  },[phoneValue])

  const onSubmit = async (data: any) => {
    try {
        console.log('Dados do formulário:', form.current);
        const params = {...data, time: new Date().toLocaleString('pt-BR', {timeZone: 'America/Sao_Paulo'})};
        console.log('Dados do formulário:', params);
    
      

      await emailjs
      .sendForm('service_w74bo07', 'template_x81q8m9', form.current as HTMLFormElement , {
        publicKey: 'Hm7UaQdaVhNY7XQyc',
      })
      .then(
        () => {
          alert('Solicitação enviada com sucesso!');;
          reset(); // Limpa o formulário após envio
        },
        (error) => {
            alert('[1] Erro ao enviar solicitação. Tente novamente.');
            console.log('FAILED...', error);
        },
      );
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('[2]Erro ao enviar solicitação. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" ref={form}>
        <input type="hidden" name="time" value={new Date().toLocaleString('pt-BR', {timeZone: 'America/Sao_Paulo'})} />
        <input type="hidden" name="title" value="Contato através do site" />
      {/* Nome e Telefone */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            {...register('name', {
              required: 'Nome completo é obrigatório',
              minLength: {
                value: 2,
                message: 'Nome deve ter pelo menos 2 caracteres'
              }
            })}
            className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none text-white transition duration-300 ${
              errors.name 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-gray-600 focus:border-gold'
            }`}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2">
            Telefone *
          </label>
          <input
            type="tel"
            {...register('telefone', {
              required: 'Telefone é obrigatório',
              pattern: {
                value: /^[\d\s\(\)\-\+]+$/,
                message: 'Formato de telefone inválido'
              }
            })}
            className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none text-white transition duration-300 ${
              errors.telefone 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-gray-600 focus:border-gold'
            }`}
            placeholder="(83) 99999-9999"
          />
          {errors.telefone && (
            <p className="text-red-400 text-sm mt-1">
              {errors.telefone.message}
            </p>
          )}
        </div>
      </div>
      
      {/* E-mail */}
      <div>
        <label className="block text-sm font-semibold mb-2">
          E-mail *
        </label>
        <input
          type="email"
          {...register('email', {
            required: 'E-mail é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'E-mail inválido'
            }
          })}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none text-white transition duration-300 ${
            errors.email 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-gray-600 focus:border-gold'
          }`}
          placeholder="seu@email.com"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>
      
      {/* Tipo de Projeto */}
      <div>
        <label className="block text-sm font-semibold mb-2">
          Tipo de Projeto
        </label>
        <select
          {...register('tipoProjeto')}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-gold focus:outline-none text-white"
        >
          <option value="">Selecione o tipo de projeto</option>
          <option value="projeto-eletrico">Projeto Elétrico Residencial</option>
          <option value="automacao-residencial">Automação Residencial</option>
          <option value="sistema-seguranca">Sistema de Segurança</option>
          <option value="iluminacao-inteligente">Iluminação Inteligente</option>
          <option value="energia-solar">Energia Solar</option>
          <option value="consultoria-tecnica">Consultoria Técnica</option>
          <option value="outros">Outros</option>
        </select>
      </div>
      
      {/* Localização */}
      <div>
        <label className="block text-sm font-semibold mb-2">
          Localização do Projeto
        </label>
        <input
          type="text"
          {...register('localizacao')}
          placeholder="Bairro, Cidade"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-gold focus:outline-none text-white"
        />
      </div>
      
      {/* Descrição */}
      <div>
        <label className="block text-sm font-semibold mb-2">
          Descreva seu Projeto
        </label>
        <textarea
          rows={4}
          {...register('descricao')}
          placeholder="Conte-nos mais detalhes sobre o que você precisa..."
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-gold focus:outline-none text-white resize-none"
        />
      </div>
      
      {/* Botão Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 transform ${
          isSubmitting
            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
            : 'bg-gold text-charcoal hover:bg-dark-gold hover:scale-105'
        }`}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
      </button>
    </form>
  );
};

export default ContactForm;