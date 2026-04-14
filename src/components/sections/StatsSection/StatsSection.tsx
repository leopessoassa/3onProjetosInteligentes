import styles from './StatsSection.module.css';

const stats = [
  { stat: '95+', desc: 'Cômodos entregues', sub: 'Residenciais e corporativos' },
  { stat: '30+', desc: 'Clientes satisfeitos', sub: 'Taxa de satisfação 98%' },
  { stat: '12',   desc: 'Anos de experiência', sub: 'Inovação constante' },
];

export default function StatsSection() {
  return (
    <div className={styles.bar} aria-label="Números de impacto">
      <div className={styles.container}>
        {stats.map((item, index) => (
          <div key={item.stat} className={styles.item}>
            {index > 0 && <div className={styles.sep} aria-hidden="true" />}
            <span className={styles.stat}>{item.stat}</span>
            <div className={styles.textGroup}>
              <span className={styles.desc}>{item.desc}</span>
              <span className={styles.sub}>{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
