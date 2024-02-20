import styles from './Projects.module.scss'
import Image from 'next/image'
export default function Projects(props) {
  const { data } = props;

  return (
    <main className={props.classTemplate}>
      <div className={styles.col2}>
        {data?.map((item) => (
          <div className={styles.item} key={item.title}>
              <a href={item.site} target='_blank' rel='noopener noreferrer'>
                <h3>{item.title}</h3>
                <picture>
                  <Image src={item.img} alt="" width={400} height={250} />
                </picture>
                <small>{item.company} - {item.date}</small>
              </a>
          </div>
        ))}
      </div>
    </main>
  )
}