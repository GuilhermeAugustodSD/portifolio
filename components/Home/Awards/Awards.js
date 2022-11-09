import styles from './Awards.module.scss'

export default function Awards(props) {
  const { data, classTemplate } = props;

  return (
    <div className={`${styles.awards} ${classTemplate}`}>
      {data?.map((item) => (
        <div key={item.name}>
          <div className={styles.item}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <small>{item.date}</small>
              <h3>{item.name}</h3>
              <p>{item.title} <small>- {item.category}</small></p>
              
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}