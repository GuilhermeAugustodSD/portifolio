import styles from './Skills.module.scss'

export default function Skills(props) {
  const { data } = props;

  return (
    <main className={props.classTemplate}>
      <div className={styles.col2}>
        {data?.map((item) => (
          <div className={styles.item} key={item.title}>
            <h3>{item.title}</h3>
            <div className={styles.progressBarColumn}>
              <div className={styles.contentProgressBar}>
                {/* <div className={styles.progressBar} style={{width : item.size + '%' }}></div> */}
                <div className={`${styles.progressBar} ${styles.animateBar}`} data-width={item.size} style={{ width: `${item.size}%` }}></div>
              </div>
              <div>
                <span>{item.size}</span><small>%</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}