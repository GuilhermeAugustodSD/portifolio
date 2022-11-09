import styles from './Experience.module.scss'

export default function Experience(props) {
  const {data, classTemplate} = props;

  return (
    <div className={`${styles.timeline} ${classTemplate}`}>
      {data?.map((item, index) => (
        <div key={index}>
          <div className={`${styles.pointTimeline} ${item.type}`}></div>
          <div className={`${styles.item} ${item.type}`}>
            <div>
              <h5>{item.dateStart} {(item.dateEnd) ? ` - ${item.dateEnd}` : ''} </h5>
              <h4>{item.institution}</h4>
              <span>{item.role}</span>
              {/* <small>{item.locate}</small> */}
            </div>
            <div>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}