import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: 'url(/images/equipamentos-eletricos-sobre-projeto-v5.webp)' }}
      aria-label="Leo Pessoa — Engenheiro Eletricista"
    >
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.inner}>

          {/* Eyebrow */}
          <p className={styles.eyebrow}>12 Anos de Excelência · CREA-PB · MBA FGV</p>

          {/* Headline */}
          <h1 className={styles.headline}>
            Projetos Inteligentes que{' '}
            <span className={styles.headlineAccent}>Transformam</span>{' '}
            Ambientes
          </h1>

          <p className={styles.subheadline}>
            Automação residencial e projetos elétricos com tecnologia de ponta.
            Atendimento em João Pessoa — PB e região.
          </p>

          {/* Seletor de perfil */}
          <div className={styles.profileSelector}>
            <p className={styles.profileLabel}>Qual é o seu perfil?</p>
            <div className={styles.profileCards}>
              <a
                href="https://casainteligente.leopessoa.eng.br"
                className={`${styles.profileCard} ${styles.profileCardB2C}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sou cliente residencial — ir para casainteligente.leopessoa.eng.br"
              >
                <i className="fas fa-home" aria-hidden="true" />
                <span className={styles.profileCardTitle}>Sou Cliente</span>
                <span className={styles.profileCardDesc}>Casa ou apartamento</span>
                <span className={styles.profileCardArrowB2C} aria-hidden="true">→</span>
              </a>

              <a
                href="https://parceiros.leopessoa.eng.br"
                className={`${styles.profileCard} ${styles.profileCardB2B}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sou arquiteto ou designer — ir para parceiros.leopessoa.eng.br"
              >
                <i className="fas fa-drafting-compass" aria-hidden="true" />
                <span className={styles.profileCardTitle}>Sou Parceiro</span>
                <span className={styles.profileCardDesc}>Arquiteto ou designer</span>
                <span className={styles.profileCardArrowB2B} aria-hidden="true">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
