import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { GitHub, Linkedin, Instagram, DownloadCloud, ArrowUpRight, Sun, Moon, X, ExternalLink, MessageCircle, Mail } from 'react-feather'
import Flag from 'react-flagkit'
import { useState, useEffect, useCallback } from 'react'
import Projects from '../components/Home/Projects/Projects'
import Analytics from '../components/Analytics/Analytics'
import useScrollAnimation from '../hooks/useScrollAnimation'

const SKILL_GROUPS = [
  { label: 'Frontend',      keys: ['HTML', 'CSS', 'Javascript', 'TypeScript', 'React', 'NextJS', 'Vue.js', 'Tailwind CSS'] },
  { label: 'Backend & DB',  keys: ['NodeJS', 'PHP', 'Laravel', 'GraphQL', 'SQL', 'Python'] },
  { label: 'Tools',         keys: ['Git', 'Docker', 'WordPress', 'AWS', 'GCP', 'Figma', 'Scrum', 'Google Analytics', 'SEO'] },
]

const NAV_LINKS = [
  { id: 'about',      labelBR: 'Sobre',        labelUS: 'About'      },
  { id: 'projects',   labelBR: 'Projetos',     labelUS: 'Projects'   },
  { id: 'skills',     labelBR: 'Skills',       labelUS: 'Skills'     },
  { id: 'experience', labelBR: 'Experiência',  labelUS: 'Experience' },
  { id: 'contact',    labelBR: 'Contato',      labelUS: 'Contact'    },
]

function getAge() {
  const birth = new Date(2000, 6, 24)
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  if (
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
  ) age--
  return age
}

export default function Home() {
  const [skills,     setSkills]     = useState()
  const [experience, setExperience] = useState()
  const [projects,   setProjects]   = useState()
  const [language,   setLanguage]   = useState('BR')
  const [active,     setActive]     = useState('about')
  const [theme,      setTheme]      = useState('dark')
  const [github,     setGithub]     = useState(null)

  useScrollAnimation()

  useEffect(() => {
    fetch('/api/data').then(r => r.json()).then(d => {
      setSkills(d.skills)
      setExperience(d.experience)
      setProjects(d.projects)
    })
    fetch('https://api.github.com/users/guilhermeaugustodsd')
      .then(r => r.json())
      .then(d => setGithub({ repos: d.public_repos, followers: d.followers }))
      .catch(() => {})
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const observers = NAV_LINKS.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id) },
        { rootMargin: '-20% 0px -65% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(t => t === 'dark' ? 'light' : 'dark')
  }, [])

  const jobs = experience?.filter(e => e.type !== 'project' && e.type !== 'study') ?? []
  const edu  = experience?.filter(e => e.type === 'study') ?? []

  return (
    <div className={styles.page}>
      <Head>
        <title>Guilherme Dantas — Full Stack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Full Stack Developer Portfolio — React, NextJS, Node" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://www.gdantasit.com" />
        <meta property="og:title" content="Guilherme Dantas — Full Stack Developer" />
        <meta property="og:image" content="https://gdantasit.com/images/share.png" />
        <Analytics id="1" trakingID="G-EZ5X0QJCE0" />
      </Head>

      {/* ── NAV ── */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a href="#about" className={styles.brand}>GD.</a>

          <ul className={styles.navLinks}>
            {NAV_LINKS.map(({ id, labelBR, labelUS }) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? styles.navOn : ''}>
                  {language === 'BR' ? labelBR : labelUS}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.navActions}>
            <div className={styles.lang}>
              <button onClick={() => setLanguage('BR')} className={language === 'BR' ? styles.langOn : ''}>
                <Flag country="BR" />
              </button>
              <button onClick={() => setLanguage('US')} className={language === 'US' ? styles.langOn : ''}>
                <Flag country="GB" />
              </button>
            </div>
            <button onClick={toggleTheme} className={styles.themeBtn} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <a href={`/api/generate-cv?lang=${language}`} download className={styles.cvBtn}>
              <DownloadCloud size={14} />
              <span>CV</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={`${styles.heroInner} fade-up`}>
          <div className={styles.heroTop}>
            <picture className={styles.avatar}>
              <Image src="/images/avatar.jpeg" alt="Guilherme" width={56} height={56} />
            </picture>
            <div className={styles.heroBadge}>
              <span className={styles.dot} />
              {language === 'BR' ? 'Disponível para projetos' : 'Available for projects'}
            </div>
          </div>

          <h1 className={styles.heroName}>Guilherme Dantas</h1>
          <p className={styles.heroSub}>
            Full Stack Developer &nbsp;·&nbsp; Brasília, DF
          </p>

          <p className={styles.heroBio}>
            {language === 'BR'
              ? 'Desenvolvedor Full Stack com mais de 5 anos de experiência construindo produtos web de alta performance. Especializado em React, NextJS e ecossistema JavaScript.'
              : 'Full Stack Developer with 5+ years of experience building high-performance web products. Specialized in React, NextJS and the JavaScript ecosystem.'
            }
          </p>

          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <strong>5+</strong>
              <span>{language === 'BR' ? 'anos de exp.' : 'years exp.'}</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.stat}>
              <strong>{projects?.length ?? '9'}</strong>
              <span>{language === 'BR' ? 'projetos' : 'projects'}</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.stat}>
              <strong>4+</strong>
              <span>{language === 'BR' ? 'empresas' : 'companies'}</span>
            </div>
            {github && (
              <>
                <div className={styles.statDiv} />
                <div className={styles.stat}>
                  <strong>{github.repos}</strong>
                  <span>repos</span>
                </div>
              </>
            )}
          </div>

          <div className={styles.heroSocials}>
            <a href="https://github.com/guilhermeaugustodsd/" target="_blank" rel="noopener noreferrer">
              <GitHub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/guilhermedanta-s/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/guilherme.asdantas/" target="_blank" rel="noopener noreferrer">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className={styles.section}>
        <div className={`${styles.inner} fade-up`}>
          <span className={styles.label}>{language === 'BR' ? 'SOBRE' : 'ABOUT'}</span>
          <div className={styles.aboutGrid}>
            <h2>{language === 'BR' ? 'Desenvolvedor apaixonado por tecnologia e produto.' : 'Developer passionate about technology and product.'}</h2>
            <div className={styles.aboutText}>
              {language === 'BR' ? (
                <>
                  <p>Sou Guilherme Dantas, {getAge()} anos, resido em Brasília, DF. Bacharel em Ciência da Computação pelo UniCEUB e pós-graduado em Engenharia de Software pela FAVENI.</p>
                  <p>Atualmente na <strong>Offshore2go</strong> e no grupo <strong>Diários Associados</strong>. Tenho experiência em portais de notícias, plataformas SaaS e sistemas com integrações complexas. Busco oportunidades no exterior e tenho inglês intermediário.</p>
                </>
              ) : (
                <>
                  <p>I&apos;m Guilherme Dantas, {getAge()} years old, living in Brasília, Brazil. Computer Science graduate from UniCEUB with a postgraduate degree in Software Engineering from FAVENI.</p>
                  <p>Currently at <strong>Offshore2go</strong> and <strong>Diários Associados</strong> group. Experience in news portals, SaaS platforms and systems with complex integrations. Seeking international opportunities — intermediate English.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className={styles.section}>
        <div className={`${styles.inner} fade-up`}>
          <span className={styles.label}>{language === 'BR' ? 'PROJETOS' : 'PROJECTS'}</span>
          <h2>{language === 'BR' ? 'Trabalhos recentes' : 'Recent work'}</h2>
          <Projects data={projects} language={language} styles={styles} />
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className={styles.section}>
        <div className={`${styles.inner} fade-up`}>
          <span className={styles.label}>SKILLS</span>
          <h2>{language === 'BR' ? 'Stack & ferramentas' : 'Stack & tools'}</h2>
          <div className={styles.skillGroups}>
            {SKILL_GROUPS.map(group => (
              <div key={group.label} className={styles.skillGroup}>
                <h4>{group.label}</h4>
                <div className={styles.pills}>
                  {skills
                    ?.filter(s => group.keys.includes(s.title))
                    .sort((a, b) => b.size - a.size)
                    .map(s => (
                      <span key={s.title} className={styles.pill}>{s.title}</span>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className={styles.section}>
        <div className={`${styles.inner} fade-up`}>
          <span className={styles.label}>{language === 'BR' ? 'EXPERIÊNCIA' : 'EXPERIENCE'}</span>
          <h2>{language === 'BR' ? 'Trajetória profissional' : 'Professional journey'}</h2>
          <div className={styles.expList}>
            {jobs.map((e, i) => (
              <div key={i} className={styles.expRow}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>{e.dateStart} — {e.dateEnd}</span>
                  <span className={styles.expType}>{e.type}</span>
                </div>
                <div className={styles.expBody}>
                  <strong>{e.institution}</strong>
                  <span>{e.role}</span>
                  {e.link ? (
                    <a href={e.link} target="_blank" rel="noopener noreferrer" className={styles.expLink}>
                      {language === 'BR' ? 'Ver projeto' : 'View project'} <ArrowUpRight size={12} />
                    </a>
                  ) : null}
                  <p>{language === 'BR' ? e.descriptionBR : e.descriptionUS}</p>
                </div>
              </div>
            ))}
          </div>

          {edu.length > 0 && (
            <>
              <h2 style={{ marginTop: '64px' }}>{language === 'BR' ? 'Formação' : 'Education'}</h2>
              <div className={styles.expList}>
                {edu.map((e, i) => (
                  <div key={i} className={styles.expRow}>
                    <div className={styles.expMeta}>
                      <span className={styles.expPeriod}>{e.dateStart} — {e.dateEnd}</span>
                    </div>
                    <div className={styles.expBody}>
                      <strong>{e.institution}</strong>
                      <span>{e.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className={styles.section}>
        <div className={`${styles.inner} fade-up`}>
          <span className={styles.label}>{language === 'BR' ? 'CONTATO' : 'CONTACT'}</span>
          <h2>{language === 'BR' ? 'Vamos conversar.' : "Let's talk."}</h2>
          <p className={styles.contactLead}>
            {language === 'BR'
              ? 'Aberto a projetos freelance, oportunidades remotas e colaborações. Me manda uma mensagem.'
              : 'Open to freelance projects, remote opportunities and collaborations. Send me a message.'}
          </p>
          <div className={styles.contactLinks}>
            <a href="mailto:guilhermednts2@gmail.com" className={styles.contactMain}>
              guilhermednts2@gmail.com
            </a>
            <div className={styles.contactSide}>
              <a href="https://wa.me/5561982625630" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <a href="https://www.linkedin.com/in/guilhermedanta-s/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a href="https://github.com/guilhermeaugustodsd/" target="_blank" rel="noopener noreferrer">
                <GitHub size={14} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>Guilherme Dantas · {new Date().getFullYear()}</p>
          <div className={styles.footSocials}>
            <a href="https://github.com/guilhermeaugustodsd/" target="_blank" rel="noopener noreferrer"><GitHub size={16} /></a>
            <a href="https://www.linkedin.com/in/guilhermedanta-s/" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /></a>
            <a href="mailto:guilhermednts2@gmail.com"><span>guilhermednts2@gmail.com</span></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
