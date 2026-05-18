import styles from './KeepinSection.module.css';

const beneficios = [
  {
    id: '01',
    title: 'Suporte local',
    desc: 'Assistência técnica direta, sem depender de importação ou fila de SAC nacional.',
  },
  {
    id: '02',
    title: 'Integração nativa',
    desc: 'Módulos compatíveis com qualquer projeto elétrico residencial — cabeado ou híbrido.',
  },
  {
    id: '03',
    title: 'Custo-benefício real',
    desc: 'Tecnologia brasileira com preço acessível e peças sempre disponíveis no estado.',
  },
];

export default function KeepinSection() {
  return (
    <section className={styles.section} id="keepin" aria-label="Representante Keepin">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Representante exclusivo na Paraíba</p>
          <h2 className={styles.title}>Tecnologia Keepin</h2>
          <div className={styles.titleLine} aria-hidden="true" />
          <p className={styles.intro}>
            Automação cabeada com módulos brasileiros de alta confiabilidade.
            Controle total de iluminação, climatização, persianas e segurança
            — com suporte local e garantia direta.
          </p>
        </div>

        {/* Grid: logo + benefícios */}
        <div className={styles.grid}>

          {/* Logo / imagem */}
          <div className={styles.logoCol}>
            <div className={styles.logoWrap}>
              <img
                src="/images/keepin-logo.webp"
                alt="Keepin — Automação Residencial"
                className={styles.logo}
                loading="lazy"
              />
            </div>
            <p className={styles.logoCaption}>
              Único integrador certificado Keepin no estado da Paraíba.
            </p>
          </div>

          {/* Benefícios */}
          <div className={styles.beneficiosCol}>
            <ul className={styles.beneficioList}>
              {beneficios.map((b) => (
                <li key={b.id} className={styles.beneficioItem}>
                  <span className={styles.num}>{b.id}</span>
                  <div>
                    <h4 className={styles.beneficioTitle}>{b.title}</h4>
                    <p className={styles.beneficioDesc}>{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Selo de rodapé */}
        <div className={styles.footer}>
          <a
            href="https://keepin.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
            aria-label="Visitar site oficial da Keepin"
          >
            Conheça a Keepin →
          </a>
        </div>

      </div>
    </section>
  );
}
