import styles from './Expertise.module.scss'

export default function Expertise(props) {
  const { data } = props;

  return (
    <main className={props.classTemplate}>
      <ul className={styles.media}>
        {data?.map((item, index) => (
          <li key={index} className={styles.item}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}