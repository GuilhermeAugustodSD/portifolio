import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { GitHub, Linkedin, Twitter, Instagram, MapPin, Phone, Globe, Mail } from 'react-feather'
import Flag from 'react-flagkit'
import { useState, useEffect } from 'react'

import HeaderSection from '../components/Header/HeaderSection'
import Expertise from '../components/Home/Expertise/Expertise'
import Skills from '../components/Home/Skills/Skills'

export default function Home() {

  const [about, setAbout] = useState();
  const [expertise, setExpertise] = useState();
  const [skills, setSkills] = useState();

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
      });

  }, []);

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
        <meta property="og:url" content="https://gdantasit.com" />
        <meta property="og:title" content="Guilherme Dantas - Desenvolvedor web, Frontend" />
        <meta property="og:site_name" content="Dantas IT" />
        <meta property="og:description" content="Currículum Vitae" />
        <meta property="og:image" content="https://gdantasit.com/images/share.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
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
                <Flag country="BR" />
              </div>
              <div>
                <Flag country="US" />
              </div>
            </div>
          </div>

          <div className={styles.contentBody}>
            <h1>Guilherme Dantas</h1>
            <h2>Desenvolvedor Web<span> Frontend </span></h2>
            <button>
              <a href='/pdf/cv.pdf' target="blanc">Baixe meu Currículo</a>
            </button>
            {/* I am a WordPress Developer at heart and create features that are best suited for the job at hand. */}
            <ul className={styles.social}>
              <li><a href="https://github.com/guilhermeaugustodsd/" title="Github"><GitHub size={24} /></a></li>
              <li><a href="https://www.linkedin.com/in/guilhermedanta-s/" title="Linkedin"><Linkedin size={24} /></a></li>
              <li><a href="https://www.instagram.com/guilherme.asdantas/" title="Instagram"><Instagram size={24} /></a></li>
            </ul>
          </div>

          <div className={styles.contentFooter}>
            <hr />
            <ul className={styles.perosnalContact}>
              <li className={styles.local}>
                <div>
                  <MapPin size={16} />
                  <small>Local</small>
                </div>
                <div>Brasília, DF</div>
              </li>
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
                  <Link href="https://dantas-it.digital">gdantasit.com</Link>
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
            <small>Um pouco sobre meu <strong>perfil</strong></small>
          </header>
          <main className={styles.col}>
            <p className={styles.firstParagraph}>
              Bem vindo!
            </p>
            <p>
              Me chamo {about?.name}, tenho {about?.age} anos e moro em {about?.leave}. Trabalho pela minha empresa Dantas IT como 
              desenvolvedor de software.
              Estudante de Ciência da Computação, atuo com tecnologia a {about?.workingTime} anos.
              {/* Conquistei <a href="#awards">três prêmios</a> nos últimos anos. */}
            </p>
            {/* <p>Atualmente, foco no desenvolvimento frontend para aplicações web e mobile.</p> */}
            <p>Possuo um perfil comunicativo, responsável, engajado e disposto a absorver desafios.
              Tenho muito interesse em novas tecnologias e tendências de mercado.
            </p>
            <p>Confira algumas das minhas experiências: </p>
          </main>
        </section>

        <section id="expertise">
          <HeaderSection 
            title="Experiência"
            desc="Ainda faltam muitas linhas de código"
            classTemplate={`${styles.col}`}
          />

          <Expertise 
            classTemplate={`${styles.col}`}
            data={expertise}
          />
        </section>

        <section id="skills">
          <HeaderSection 
            title="Habilidades"
            desc="Linguagens, ferramentas e soluções"
            classTemplate={`${styles.col}`}
          />

          <Skills 
            classTemplate={`${styles.col}`}
            data={skills}
          />
        </section>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
