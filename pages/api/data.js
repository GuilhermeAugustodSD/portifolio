export default function handler(req, res) {
  res.status(200).json({
    experience: [
      // {
      //   "type": "certified",
      //   "dateStart": "2019",
      //   "dateEnd": "2022",
      //   "institution": "Fundamentos do Gerenciador de tags do Google",
      //   "role": "Google Academy",
      //   "locate": "Brasília, DF",
      //   "description": "Gerenciador de tags do Google pode simplificar a implementação de tags e o processo de gerenciamento para profissionais de marketing, analistas e desenvolvedores.",
      //   "link": "https://analytics.google.com/analytics/academy/certificate/f01blr-RTG-wofBAlg7ePA"
      // },
      {
        "type": "study",
        "dateStart": "2018",
        "dateEnd": "2022",
        "institution": "Centro Universitário de Brasília",
        "role": "Udacity",
        "locate": "Brasília, DF",
        "description": "Bacharelado em Ciência da Computação"
      },
      {
        "type": "job",
        "dateStart": "2022",
        "dateEnd": "atual",
        "institution": "Correio Braziliense",
        "role": "Analista FrontEnd",
        "locate": "Brasília, DF",
        "description": "Atual emprego e fonte de novos desafios pessoais e profissionais."
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
        "size": "60"
      },
      {
        "title": "NextJS",
        "size": "50"
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
        "size": "70"
      },
    ],
    // clients: [
    //   {
    //     name: 'Correio Braziliense',
    //     image: '/images/clients/cb.jpg'
    //   },
    //   {
    //     name: 'Mais Goiás',
    //     image: '/images/clients/mg.jpg'
    //   },
    // ]
  })
}