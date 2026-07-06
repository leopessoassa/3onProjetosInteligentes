/**
 * SolutionsSection — leopessoa.eng.br
 *
 * Vitrine dos 3 produtos/serviços de Leo Pessoa.
 * Cada card descreve o produto, o público e leva ao site especializado.
 *
 * Intenção: o visitante que ainda não escolheu seu perfil no Hero
 * encontra aqui a explicação clara do que cada site oferece,
 * com igual peso visual entre os três destinos.
 */
import styles from './SolutionsSection.module.css';

interface Solution {
  icon: string;
  color: 'b2c' | 'b2b' | 'iot';
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  href: string;
}

const solutions: Solution[] = [
  {
    icon: 'fas fa-home',
    color: 'b2c',
    eyebrow: 'Residencial',
    title: 'Casa Inteligente',
    description:
      'Automação completa para residências. Iluminação cênica, climatização, persianas, segurança e controle por voz ou app.',
    bullets: [
      'Controle total pelo smartphone',
      'Iluminação circadiana e cênica',
      'Integração com Alexa e Google',
      'Suporte local em João Pessoa',
    ],
    cta: 'Quero automatizar minha casa →',
    href: 'https://casainteligente.leopessoa.eng.br',
  },
  {
    icon: 'fas fa-drafting-compass',
    color: 'b2b',
    eyebrow: 'Para Arquitetos e Designers',
    title: 'Parceria Técnica',
    description:
      'Projetos elétricos em BIM, iluminação cênica e automação desenvolvidos em parceria com arquitetos e designers de interiores.',
    bullets: [
      'Projetos elétricos em Revit MEP',
      'Iluminação circadiana e cênica',
      'SPDA e infraestrutura elétrica',
      'Parceiro técnico no canteiro',
    ],
    cta: 'Quero ser parceiro →',
    href: 'https://parceiros.leopessoa.eng.br',
  },
  {
    icon: 'fas fa-satellite-dish',
    color: 'iot',
    eyebrow: 'Para Empresas',
    title: 'KPRemote — IoT',
    description:
      'Monitoramento ambiental 24h para supermercados, câmaras frias e indústria alimentícia. Alertas no WhatsApp antes que o prejuízo aconteça.',
    bullets: [
      'Sensores de temperatura e umidade',
      'Alertas instantâneos no WhatsApp',
      'Relatórios automáticos para VISA',
      'Elimina passivo trabalhista',
    ],
    cta: 'Proteger minha operação →',
    href: 'https://iot.leopessoa.eng.br',
  },
];

export default function SolutionsSection() {
  return (
    <section className={styles.section} id="solucoes" aria-label="Nossas Soluções">

      {/* Triângulo de transição About (claro #f4f4f2) → Solutions (branco #fff) */}
      <div className={styles.backgroundLayers} aria-hidden="true">
        <div className={styles.triangleOverlay} />
        <div className={styles.imageBg} />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.container}>

        {/* Cabeçalho */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>O Que Fazemos</p>
          <h2 className={styles.title}>Uma Marca, Três Especialidades</h2>
          <div className={styles.titleLine} aria-hidden="true" />
          <p className={styles.intro}>
            Cada solução tem seu próprio site especializado — com conteúdo,
            linguagem e foco no público certo. Escolha a que faz sentido para você.
          </p>
        </div>

        {/* Grid de soluções */}
        <div className={styles.grid}>
          {solutions.map((sol) => (
            <a
              key={sol.href}
              href={sol.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${styles[`card-${sol.color}`]}`}
              aria-label={`${sol.title} — ${sol.eyebrow}`}
            >
              {/* Ícone */}
              <div className={`${styles.iconWrap} ${styles[`iconWrap-${sol.color}`]}`}>
                <i className={sol.icon} aria-hidden="true" />
              </div>

              {/* Conteúdo */}
              <div className={styles.cardContent}>
                <p className={`${styles.cardEyebrow} ${styles[`eyebrow-${sol.color}`]}`}>
                  {sol.eyebrow}
                </p>
                <h3 className={styles.cardTitle}>{sol.title}</h3>
                <p className={styles.cardDesc}>{sol.description}</p>

                {/* Bullets */}
                <ul className={styles.bullets}>
                  {sol.bullets.map((b) => (
                    <li key={b} className={styles.bullet}>
                      <span className={`${styles.bulletDot} ${styles[`dot-${sol.color}`]}`} aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className={`${styles.cardCta} ${styles[`cta-${sol.color}`]}`}>
                {sol.cta}
              </div>
            </a>
          ))}
        </div>

        </div>{/* fim container */}
      </div>{/* fim contentWrapper */}
    </section>
  );
}
