import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { GitHub, Linkedin, Twitter, Instagram, MapPin, Phone, Globe, Mail, DownloadCloud } from 'react-feather'
import Flag from 'react-flagkit'
import { useState, useEffect } from 'react'

import HeaderSection from '../components/Header/HeaderSection'
import Expertise from '../components/Home/Expertise/Expertise'
import Experience from '../components/Home/Experience/Experience'
import Skills from '../components/Home/Skills/Skills'
import Projects from '../components/Home/Projects/Projects'
import Canvas from '../components/Home/Canvas/Canvas'
import Analytics from '../components/Analytics/Analytics'

export default function Home() {

  const [about, setAbout] = useState();
  const [expertise, setExpertise] = useState();
  const [skills, setSkills] = useState();
  const [experience, setExperience] = useState();
  const [projects, setProjects] = useState();
  const [language, setLanguage] = useState("BR");
  const [titlePDF, setTitlePDF] = useState("Baixe meu currículo")
  const [urlPDF, setUrlPDF] = useState("/pdf/cv-portugues.pdf")

  useEffect(() => {
    fetch(`/api/about`)
      .then((response) => response.json())
      .then((response) => {
        setAbout(response);
      });

    fetch(`/api/data`)
      .then((response) => response.json())
      .then((response) => {
        setExpertise(response.expertise);
        setSkills(response.skills);
        setExperience(response.experience);
        setProjects(response.projects);
      });


  }, []);

  function changeLanguage(lang) {
    console.log("***", lang);
    setLanguage(lang)
    console.log(language);
  }

  useEffect(() => {
    if (language == "BR") {
      setUrlPDF("/pdf/cv-portugues.pdf");
      setTitlePDF("Baixe meu currículo");
    } else {
      setUrlPDF("/pdf/english-cv.pdf");
      setTitlePDF("Download my CV");
    }
  }, [language])


  return (
    <div className={styles.container}>
      <Head>
        <title>Guilherme Dantas - Desenvolvedor web, Frontend</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Currículum Vitae" />
        <meta name="keywords" content="desenvolvedor web, frontend, currículo, brasília, df" />
        <meta name="author" content="Guilherme Dantas" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="fb:app_id" content="1306835976749394" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://www.gdantasit.com" />
        <meta property="og:title" content="Guilherme Dantas - Desenvolvedor web, Frontend" />
        <meta property="og:site_name" content="Dantas IT" />
        <meta property="og:description" content="Currículum Vitae" />
        <meta property="og:image" content="https://gdantasit.com/images/share.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <Analytics id="1" trakingID="G-EZ5X0QJCE0" />
      </Head>

      <header className={styles.header}>

        <div className={`${styles.col} ${styles.col1}`}>
          <picture>
            <Image src="/images/avatar.jpeg" alt="Foto Guilherme" width={540} height={400} />
          </picture>
        </div>

        <div className={`${styles.contentText} ${styles.col}`}>

          <div className={styles.contentHeader}>
            <div>
              <div>
                <Flag country="BR" onClick={() => changeLanguage('BR')} />
              </div>
              <div>
                <Flag country="GB" onClick={() => changeLanguage('US')} />
              </div>
            </div>
          </div>

          <div className={styles.contentBody}>
            {/* <h1>Guilherme Dantas</h1> */}
            <Canvas />

            {(language == 'US') && (
              <h2>Full Stack Developer</h2>
            )}

            {(language == 'BR') && (
              <h2>Desenvolvedor<span> Full Stack </span></h2>
            )}

            {/* I am a WordPress Developer at heart and create features that are best suited for the job at hand. */}
            <ul className={styles.social}>
              <li><a href="https://github.com/guilhermeaugustodsd/" title="Github"><GitHub size={24} /></a></li>
              <li><a href="https://www.linkedin.com/in/guilhermedanta-s/" title="Linkedin"><Linkedin size={24} /></a></li>
              <li><a href="https://www.instagram.com/guilherme.asdantas/" title="Instagram"><Instagram size={24} /></a></li>
              <li><a href={urlPDF} title={titlePDF} ><DownloadCloud size={24} /></a></li>
            </ul>
          </div>

          <div className={styles.contentFooter}>
            <hr />
            <ul className={styles.perosnalContact}>
              {/* <li className={styles.local}>
                <div>
                  <MapPin size={16} />
                  {(language == "BR") && (
                    <small>Local</small>
                  )}

                  {(language == "US") && (
                    <small>Local</small>
                  )}
                </div>
                <div>Brasília, DF</div>
              </li> */}
              <li className={styles.whatsapp}>
                <div>
                  <Phone size={16} />
                  <small>Phone</small>
                </div>
                <div>
                  <Link href="tel:+5561982625630">(61) 98262-5630</Link>
                </div>
              </li>
              <li className={styles.email}>
                <div>
                  <Globe size={16} />
                  <small>Web</small>
                </div>
                <div>
                  <Link href="https://www.gdantasit.com">gdantasit.com</Link>
                </div>
              </li>
              <li className={styles.email}>
                <div>
                  <Mail size={16} />
                  <small>E-mail</small>
                </div>
                <div>
                  <Link href="mailto:guilhermednts2@gmail.com">guilhermednts2@gmail.com</Link>
                </div>
              </li>
            </ul>

          </div>

        </div>

      </header>

      <main className={styles.main}>
        <section>
          <header className={styles.col}>
            <h3>Intro</h3>
            {(language == 'US') && (
              <small>My <strong>profile</strong></small>
            )}

            {(language == 'BR') && (
              <small>Um pouco sobre meu <strong>perfil</strong></small>
            )}
          </header>
          <main className={styles.col}>
            {(language == "US") && (
              <>
                <p className={styles.firstParagraph}>Hello and welcome!</p>
                <p>
                  I am Guilherme Dantas, a {about?.age}-year-old technology enthusiast, thirsty for innovation and residing in Brasília-DF. As a software developer leading Dantas IT, my journey in the world of technology began {about?.workingTime} years ago. I graduated in Computer Science from the University Center of Brasília.
                </p>
                <p>My profile is marked by a combination of technical skills and personal traits that drive my professional growth. I am naturally communicative, responsible, and committed to everything I set out to do. I see each challenge as an opportunity for learning and growth, constantly seeking to improve myself and adapt to new market trends.
                </p>

                <p>
                  My passionate interest in new technologies and market trends not only shapes my work but also drives me to explore new horizons and blaze new digital trails.
                </p>
              
              </>
            )}

            {(language == "BR") && (
              <>
                <p className={styles.firstParagraph}>Olá e bem-vindo!</p>
                <p>
                  Sou Guilherme Dantas, um entusiasta da tecnologia de {about?.age} anos, com sede de inovação e residente em Brasília-DF. Como desenvolvedor de software à frente da Dantas IT, minha jornada no mundo da tecnologia começou há {about?.workingTime} anos. Graduado em Ciência da Computação pelo Centro Universitário de Brasília.
                </p>
                <p>Meu perfil é marcado por uma combinação de habilidades técnicas e traços pessoais que impulsionam meu crescimento profissional. Sou comunicativo por natureza, responsável e engajado em tudo o que me proponho a fazer. Encaro cada desafio como uma oportunidade de aprendizado e crescimento, buscando constantemente me aprimorar e me adaptar às novas tendências do mercado.
                </p>

                <p>
                  Meu interesse apaixonado por novas tecnologias e tendências de mercado não apenas molda meu trabalho, mas também me impulsiona a explorar novos horizontes e desbravar novos territórios digitais.
                </p>
              </>
            )}

          </main>
        </section>

        <section id="expertise">
          <HeaderSection
            title="Expertise"
            desc={language == "BR" ? "Ainda faltam muitas linhas de código" : ""}
            classTemplate={`${styles.col}`}
            classSticky={`${styles.sticky}`}
          />

          <Expertise
            classTemplate={`${styles.col}`}
            data={expertise}
            language={language}
          />{console.log(expertise)}

        </section>

        <section id="skills">
          <HeaderSection
            title={language == "BR" ? "Habilidades" : "Skills"}
            desc={language == "BR" ? "Linguagens, ferramentas e soluções" : "Languages, tools and solutions"}
            classTemplate={`${styles.col}`}
            classSticky={`${styles.sticky}`}
          />

          <Skills
            classTemplate={`${styles.col}`}
            data={skills}
          />
        </section>

        <section id="expirience">
          <HeaderSection
            title={language == "BR" ? "Experiência e Formação" : "Professional Experience and Education"}
            desc={language == "BR" ? "Clique nas experiências para ver mais" : "Click on experince's name to see more"}
            classTemplate={`${styles.col}`}
            classSticky={`${styles.sticky}`}
          />

          <Experience
            classTemplate={`${styles.col}`}
            data={experience}
            language={language}
          />
        </section>

        <section id="projects">
          <HeaderSection
            title={language == "BR" ? "Projetos" : "Projects"}
            desc={language == "BR" ? "Clique nos projetos para acessar o site" : "Click on the projects to access the website"}
            classTemplate={`${styles.col}`}
            classSticky={`${styles.sticky}`}

          />

          <Projects
            classTemplate={`${styles.col}`}
            data={projects}
            language={language}
          />
        </section>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
