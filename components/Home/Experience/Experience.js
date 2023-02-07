import styles from './Experience.module.scss'

export default function Experience(props) {
  const {data, classTemplate} = props;

  const language = props.language;

  return (
    <>
      <div className={`${styles.timeline} ${classTemplate}`}>

        {data?.map((item, index) => (
          <div key={index}>
            <div className={`${styles.pointTimeline} ${item.type}`}></div>
            <a className={`${styles.item} ${item.type}`} href={item.link} target="blank">
                <div>
                  <h5>{item.dateStart} {(item.dateEnd) ? ` - ${item.dateEnd}` : ''} </h5>
                  <h4>{item.institution}</h4>
                  <span>{item.role}</span>
                  {/* <small>{item.locate}</small> */}
                </div>
                <div>
                  <p>{language == "BR" ? item.descriptionBR : item.descriptionUS}</p>
                </div>
            </a>
          </div>
        ))}


      </div>
    </>
  )
}