import styles from './AboutSimpleSection.module.css';

const diferenciais = [
  {
    id: '01',
    title: 'Projetos Elétricos',
    desc: 'AutoCAD 2D e Revit BIM 3D. Compatibilidade total com projetos arquitetônicos.',
  },
  {
    id: '02',
    title: 'Automação Residencial',
    desc: 'Iluminação, climatização, som ambiente, persianas e segurança integrados.',
  },
  {
    id: '03',
    title: 'SPDA',
    desc: 'Sistema de Proteção contra Descargas Atmosféricas conforme NBR 5419.',
  },
];

export default function AboutSimpleSection() {
  return (
    <section className={styles.section} id="sobre">
      <div className={styles.container}>

        <div className={styles.grid}>

          {/* Foto */}
          <div className={styles.imageCol}>
            <div className={styles.photoWrap}>
              <img
                src="/images/leonardo-pessoa.webp"
                alt="Leonardo Pessoa — Engenheiro Eletricista"
                className={styles.photo}
                loading="lazy"
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className={styles.contentCol}>
            <p className={styles.eyebrow}>Engenheiro Eletricista · CREA-PB</p>
            <h2 className={styles.title}>Leo Pessoa</h2>
            <div className={styles.titleLine} aria-hidden="true" />

            <blockquote className={styles.missao}>
              <p>
                "Transformar ambientes com tecnologia de ponta, criando experiências
                que impressionam e valorizam o imóvel."
              </p>
            </blockquote>

            <ul className={styles.diferencialList}>
              {diferenciais.map((d) => (
                <li key={d.id} className={styles.diferencialItem}>
                  <span className={styles.num}>{d.id}</span>
                  <div>
                    <h4 className={styles.diferencialTitle}>{d.title}</h4>
                    <p className={styles.diferencialDesc}>{d.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className={styles.credenciais}>
              MBA FGV · CREA-PB Ativo · João Pessoa — PB
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
