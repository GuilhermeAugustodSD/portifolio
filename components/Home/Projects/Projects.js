import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, X } from 'react-feather'
import styles from './Projects.module.scss'

function ProjectModal({ project, language, onClose, globalStyles }) {
  if (!project) return null
  const isBR = language !== 'US'

  return (
    <div className={globalStyles.overlay} onClick={onClose}>
      <div className={globalStyles.modal} onClick={e => e.stopPropagation()}>
        <button className={globalStyles.modalClose} onClick={onClose}>
          <X size={16} />
        </button>
        <div className={globalStyles.modalImg}>
          <img src={project.img} alt={project.title} />
        </div>
        <div className={globalStyles.modalBody}>
          <div className={globalStyles.modalMeta}>
            <span>{project.company}</span>
            <span>{project.date}</span>
          </div>
          <h2 className={globalStyles.modalTitle}>{project.title}</h2>
          {(project.descriptionBR || project.descriptionUS) && (
            <p className={globalStyles.modalDesc}>
              {isBR ? project.descriptionBR : project.descriptionUS}
            </p>
          )}
          <div className={globalStyles.modalTags}>
            {Object.values(project.skills).map(s => (
              <span key={s}>{s}</span>
            ))}
          </div>
          {project.site && project.site !== '#' && (
            <a
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
              className={globalStyles.modalLink}
            >
              <ExternalLink size={14} />
              {isBR ? 'Ver projeto' : 'View project'}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects({ data, language, styles: globalStyles }) {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div className={styles.col2}>
        {data?.map((item) => (
          <div
            className={styles.item}
            key={item.title}
            onClick={() => setSelected(item)}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.imageWrapper}>
              <picture>
                <Image src={item.img} alt={item.title} width={600} height={338} />
              </picture>
              <div className={styles.overlay}>
                <ExternalLink size={18} />
                <span>{language === 'US' ? 'View details' : 'Ver detalhes'}</span>
              </div>
            </div>

            <div className={styles.info}>
              <h3>{item.title}</h3>
              <small>{item.company} · {item.date}</small>
            </div>

            <ul className={styles.tags}>
              {Object.values(item.skills).map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          language={language}
          onClose={() => setSelected(null)}
          globalStyles={globalStyles}
        />
      )}
    </>
  )
}
