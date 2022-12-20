export default function handler(req, res) {
  res.status(200).json({
    experience: [
      {
        "type": "project",
        "dateStart": "2022",
        "dateEnd": "Nov",
        "institution": "Escolha a Escola",
        "role": "Guia de escolas",
        "locate": "Brasília, DF",
        "description": "Guia de escolas do DF utilizando Next.JS, Laravel e AWS",
        "link": "https://escolhaaescola.correiobraziliense.com.br"
      },
      {
        "type": "project",
        "dateStart": "2022",
        "dateEnd": "Out",
        "institution": "Eleições 2022",
        "role": "Cobertura das eleições",
        "locate": "Brasília, DF",
        "description": "Guia de EleiçÕes do DF utilizando Next.JS, Laravel e AWS",
        "link": "https://eleicoes.correiobraziliense.com.br"
      },
      {
        "type": "project",
        "dateStart": "2022",
        "dateEnd": "Out",
        "institution": "Correio Braziliense",
        "role": "Capa do Correio Braziliense",
        "locate": "Brasília, DF",
        "description": "Capa do Correio Braziliense",
        "link": "https://correiobraziliense.com.br"
      },
      {
        "type": "certified",
        "dateStart": "2022",
        "dateEnd": "2023",
        "institution": "RocketSeat",
        "role": "Ignite",
        "locate": "Brasília, DF",
        "description": "Expecialização através de um método eficiente, uma grade curricular alinhada com o mercado",
        "link": ""
      },
      {
        "type": "certified",
        "dateStart": "2022",
        "dateEnd": "2022",
        "institution": "RocketSeat",
        "role": "Explorer",
        "locate": "Brasília, DF",
        "description": "O Explorer contém tudo o que você precisa para desenvolver habilidades técnicas e comportamentais, iniciar uma carreira sólida na programação e se tornar um destaque",
        "link": ""
      },
      {
        "type": "job",
        "dateStart": "2022",
        "dateEnd": "atual",
        "institution": "Correio Braziliense",
        "role": "Analista FrontEnd",
        "locate": "Brasília, DF",
        "description": "Atual emprego e fonte de novos desafios pessoais e profissionais"
      },
      {
        "type": "job",
        "dateStart": "2020",
        "dateEnd": "2022",
        "institution": "Tribunais Regionais Federais",
        "role": "Estágio",
        "locate": "Brasília, DF",
        "description": "Estágio de desenvolvimento no TRF, onde aprendi novas tecnologias como HTML, CSS, JS e Git"
      },
      {
        "type": "study",
        "dateStart": "2018",
        "dateEnd": "2023",
        "institution": "Centro Universitário de Brasília",
        "role": "University",
        "locate": "Brasília, DF",
        "description": "Graduando em Ciência da Computação"
      }
      
    ],
    expertise: [
      {
        "title": "Front-End",
        "description": "A arte de juntar ótima experiência do usuário, boa navegação e tecnicas modernas de desenvolvimento para uma entrega eficiente e de alta performance."
      },
      {
        "title": "WordPress",
        "description": "Vivencia no CMS mais presente na web. Usado da forma correta e com os recursos certos, o WP pode ser o CMS da sua empresa."
      },
      {
        "title": "Design Gráfico / UX",
        "description": "Trabalho com ferramentas Adobe CC e Figma com foco na web."
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
        "size": "70"
      },
      {
        "title": "CSS",
        "size": "65",
        "prop": {
          "1": "Stylus",
          "2": "PostCSS",
          "3": "Sass",
          "4": "bootstrap",
          "5": "Bulma"
        }
      },
      {
        "title": "Javascript",
        "size": "65"
      },
      {
        "title": "React",
        "size": "80"
      },
      {
        "title": "NextJS",
        "size": "65"
      },
      {
        "title": "NodeJS",
        "size": "55"
      },
      {
        "title": "Git",
        "size": "60"
      },
      {
        "title": "PHP",
        "size": "30"
      },
      {
        "title": "Python",
        "size": "30"
      },
      {
        "title": "Scrum",
        "size": "80"
      },
      {
        "title": "AWS",
        "size": "30"
      },
      {
        "title": "Google Analytics",
        "size": "20"
      },
      {
        "title": "SEO",
        "size": "20"
      },
      {
        "title": "Adobe Illustrator",
        "size": "45"
      },
      {
        "title": "Adobe Photoshop",
        "size": "80"
      },
      {
        "title": "Figma",
        "size": "65"
      },
    ],
  })
}