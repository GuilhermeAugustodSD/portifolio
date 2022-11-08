export default function handler(req, res) {
  const yearsOld = () => {
    const now = new Date();
    const mes = now.getMonth();
    const dia = now.getDate();
  
    if(( mes > 6) && ( dia > 23)){
      return now.getFullYear() - 2000;
    } else if(mes > 7) {
      return now.getFullYear() - 2000;
    } else {
      return now.getFullYear() - 2001;
    }
  }

  res.status(200).json({
    name: 'Guilherme Dantas',
    nickname: 'Gui',
    age: `${yearsOld()}`,
    leave: `Brasília-DF`,
    from: `Brasília-BR`,
    workingTime: `${new Date().getFullYear() - 2020}`,
    degrees: [{
      first: 'Ciência da Computação',
      secound: 'Design Gráfico',
      pos: ''
    }],
    languages:[
      {
        native: 'Português - BR',
        secound: 'Inglês',
      }
    ],
    email: `guilhermednts2@gmail.com`,
    phone: `+5561982625630`,
    social:[
      {
        github: 'https://github.com/guilhermeaugustodsd/',
        linkedin: 'https://www.linkedin.com/in/guilhermedanta-s/',
        instagram: 'https://www.instagram.com/guilherme.asdantas/'
      }
    ]
  })
}