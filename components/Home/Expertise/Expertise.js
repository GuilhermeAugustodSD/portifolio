import styles from './Expertise.module.scss'

export default function Expertise(props) {
  const { data } = props;

  const language = props.language;

  return (
    <main className={props.classTemplate}>
      <ul className={styles.media}>
        {data?.map((item, index) => (
          <li key={index} className={styles.item}>
            <h3>{item.title}</h3>
            <p>{language == "BR" ? item.descriptionBR : item.descriptionUS}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}