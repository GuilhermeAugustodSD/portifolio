export default function handler(req, res) {
  res.status(200).json({
    experience: [
      {
        "type": "job",
        "dateStart": "abr/2024",
        "dateEnd": "ATUAL",
        "institution": "Alright",
        "role": "Desenvolvedor Full Stack Pleno",
        "locate": "Brasília, DF",
        "descriptionBR": "Desenvolvimento de sistema com integração ao Google Ad Manager para gerenciamento de contas filhas da Alright, além de realizar manutenção e melhorias contínuas em projetos existentes da empresa.",
        "descriptionUS": "Development of a system with integration with Google Ad Manager for managing Alright's child accounts, in addition to carrying out maintenance and continuous improvements in the company's existing projects."
      },
      {
        "type": "project",
        "dateStart": "2022",
        "dateEnd": "Nov",
        "institution": "Escolha a Escola",
        "role": "Guia de escolas",
        "locate": "Brasília, DF",
        "descriptionBR": "Guia de escolas do DF utilizando Next.JS, Laravel e AWS",
        "descriptionUS": "Guia de escolas do DF utilizando Next.JS, Laravel e AWS",
        "link": "https://escolhaaescola.correiobraziliense.com.br"
      },
      {
        "type": "project",
        "dateStart": "2022",
        "dateEnd": "Out",
        "institution": "Eleições 2022",
        "role": "Cobertura das eleições",
        "locate": "Brasília, DF",
        "descriptionBR": "Guia de EleiçÕes do DF utilizando Next.JS, Laravel e AWS",
        "descriptionUS": "Guia de EleiçÕes do DF utilizando Next.JS, Laravel e AWS",
        "link": "https://eleicoes.correiobraziliense.com.br"
      },
      {
        "type": "project",
        "dateStart": "2022",
        "dateEnd": "Out",
        "institution": "Correio Braziliense",
        "role": "Capa do Correio Braziliense",
        "locate": "Brasília, DF",
        "descriptionBR": "Capa do Correio Braziliense",
        "descriptionUS": "Capa do Correio Braziliense",
        "link": "https://correiobraziliense.com.br"
      },
      {
        "type": "certified",
        "dateStart": "2022",
        "dateEnd": "2023",
        "institution": "RocketSeat",
        "role": "Ignite",
        "locate": "Brasília, DF",
        "descriptionBR": "Expecialização através de um método eficiente, uma grade curricular alinhada com o mercado",
        "descriptionUS": "React, Node and React Native specialization and development program",
        "link": ""
      },
      {
        "type": "certified",
        "dateStart": "2022",
        "dateEnd": "2022",
        "institution": "RocketSeat",
        "role": "Explorer",
        "locate": "Brasília, DF",
        "descriptionBR": "O Explorer contém tudo o que você precisa para desenvolver habilidades técnicas e comportamentais, iniciar uma carreira sólida na programação e se tornar um destaque",
        "descriptionUS": "React, Node and React Native specialization and development program",
        "link": ""
      },
      {
        "type": "job",
        "dateStart": "2022",
        "dateEnd": "atual",
        "institution": "Correio Braziliense",
        "role": "Analista Front-End",
        "locate": "Brasília, DF",
        "descriptionBR": "Atual emprego e fonte de novos desafios pessoais e profissionais",
        "descriptionUS": "Current job. Most used techs: HTML, CSS, JS, React, NextJS, WordPress and Git."
      },
      {
        "type": "job",
        "dateStart": "2020",
        "dateEnd": "2022",
        "institution": "Tribunais Regionais Federais",
        "role": "Estágio",
        "locate": "Brasília, DF",
        "descriptionBR": "Estágio de desenvolvimento no TRF, onde aprendi novas tecnologias como HTML, CSS, JS e Git",
        "descriptionUS": "Web development internship. Most used techs: HTML, CSS, JS e Git"
      },
      {
        "type": "study",
        "dateStart": "2018",
        "dateEnd": "2023",
        "institution": "Centro Universitário de Brasília",
        "role": "University",
        "locate": "Brasília, DF",
        "descriptionBR": "Graduado em Ciência da Computação",
        "descriptionUS": "Bachelor of Computer Science"
      }
      
    ],
    expertise: [
      {
        "title": "Front-End",
        "descriptionBR": "A arte de juntar ótima experiência do usuário, boa navegação e tecnicas modernas de desenvolvimento para uma entrega eficiente e de alta performance.",
        "descriptionUS": "A arte de juntar ótima experiência do usuário, boa navegação e tecnicas modernas de desenvolvimento para uma entrega eficiente e de alta performance."
      },
      {
        "title": "WordPress",
        "descriptionBR": "Vivencia no CMS mais presente na web. Usado da forma correta e com os recursos certos, o WP pode ser o CMS da sua empresa.",
        "descriptionUS": "Vivencia no CMS mais presente na web. Usado da forma correta e com os recursos certos, o WP pode ser o CMS da sua empresa."
      },
      {
        "title": "Back-End",
        "descriptionBR": "Responsável por criar e manter a lógica e o funcionamento dos sistemas e aplicativos, garantindo que tudo opere de forma eficiente e segura nos bastidores.",
        "descriptionUS": "Responsável por criar e manter a lógica e o funcionamento dos sistemas e aplicativos, garantindo que tudo opere de forma eficiente e segura nos bastidores."
      },
      {
        "title": "Design Gráfico / UX",
        "descriptionBR": "Trabalho com ferramentas Adobe CC e Figma com foco na web.",
        "descriptionUS": "Trabalho com ferramentas Adobe CC e Figma com foco na web."
      }
    ],
   
    // awards: [
    //   {
    //     "link": "https://www.metropoles.com/materias-especiais/a-tragedia-de-mariana-mg-vista-pela-janela-do-trem-efvm",
    //     "date": "2019",
    //     "name": "2° Prêmio de Jornalismo ANPTrilhos",
    //     "category": "Mídia Digital",
    //     "title": "A tragédia de Mariana (MG) vista pela janela do trem"
    //   },
    //   {
    //     "link": "https://www.metropoles.com/materias-especiais/mulheres-caminhoneiras-superam-preconceitos-pelas-estradas-do-brasil-2",
    //     "date": "2018",
    //     "name": "25º Prêmio CNT de Jornalismo",
    //     "category": "Internet",
    //     "title": "Caminhoneiras, codinome coragem"
    //   },
    //   {
    //     "link": "https://especiais.correiobraziliense.net.br/ciclovias-em-busca-de-uma-cidade/",
    //     "date": "2017",
    //     "name": "24º Prêmio CNT de Jornalismo",
    //     "category": "Meio ambiente e transporte",
    //     "title": "Ciclovias em busca de uma cidade"
    //   }
    // ],
    
    skills: [
      {
        "title": "HTML",
        "size": "90"
      },
      {
        "title": "CSS",
        "size": "85",
        "prop": {
          "1": "Stylus",
          "2": "PostCSS",
          "3": "Sass",
          "4": "bootstrap",
          "5": "Bulma"
        }
      },
      {
        "title": "TypeScript",
        "size": "60"
      },
      {
        "title": "Javascript",
        "size": "80"
      },
      {
        "title": "React",
        "size": "90"
      },
      {
        "title": "NextJS",
        "size": "90"
      },
      {
        "title": "Laravel",
        "size": "60"
      },
      {
        "title": "WordPress",
        "size": "70"
      },
      {
        "title": "GraphQL",
        "size": "70"
      },
      {
        "title": "SQL",
        "size": "75"
      },
      {
        "title": "NodeJS",
        "size": "65"
      },
      {
        "title": "Git",
        "size": "85"
      },
      {
        "title": "PHP",
        "size": "80"
      },
      {
        "title": "Python",
        "size": "60"
      },
      {
        "title": "Scrum",
        "size": "80"
      },
      {
        "title": "AWS",
        "size": "60"
      },
      {
        "title": "Google Analytics",
        "size": "50"
      },
      {
        "title": "SEO",
        "size": "50"
      },
      {
        "title": "Figma",
        "size": "65"
      },
    ],

    projects: [
      {
        "title": "Capa do Correio Braziliense",
        "date": "2022",
        "site": "https://www.correiobraziliense.com.br/",
        "img": "/images/capa-correio.png",
        "company": "Correio Braziliense",
        "skills": {
          "1": "JavaScript",
          "2": "HTML",
          "3": "SASS",
          "4": "SQL",
        }
      },
      {
        "title": "Site de cobertuda das Eleições 2022",
        "date": "2022",
        "site": "https://eleicoes.correiobraziliense.com.br/",
        "img": "/images/capa-eleicoes.png",
        "company": "Correio Braziliense",
        "skills": {
          "1": "NextJS",
          "2": "HTML",
          "3": "SASS",
          "4": "SQL",
        }
      },
      {
        "title": "Escolha a Escola",
        "date": "2023",
        "site": "https://escolhaaescola.correiobraziliense.com.br/",
        "img": "/images/capa-escolha-a-escola.png",
        "company": "Correio Braziliense",
        "skills": {
          "1": "NextJS",
          "2": "HTML",
          "3": "SASS",
          "4": "SQL",
        }
      },
      {
        "title": "Maratona Brasília 2023",
        "date": "2023",
        "site": "https://www.correiobraziliense.com.br/maratonabrasilia2023",
        "img": "/images/capa-maratona.png",
        "company": "Correio Braziliense",
        "skills": {
          "1": "JavaScript",
          "2": "HTML",
          "3": "SASS",
          "4": "SQL",
        }
      },
      {
        "title": "Plataforma Cubus",
        "date": "2024",
        "site": "https://cinterfor.vulpecomunicacao.com.br/",
        "img": "/images/capa-cubus.png",
        "company": "Vulpe Comunicações",
        "skills": {
          "1": "NextJS",
          "2": "HTML",
          "3": "SASS",
          "4": "WordPress",
          "5": "GraphQL",
        }
      },
    ],
  })
}