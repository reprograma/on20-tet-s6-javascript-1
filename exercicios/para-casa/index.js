let filmes = [{
    nome: "Deadpool",
    classificacaoEtaria: 18
  },
  {
    nome: "Your Name",
    classificacaoEtaria: 0
  },
  {
    nome: "Kill Bill",
    classificacaoEtaria: 18
  },
  {
    nome: "Shrek",
    classificacaoEtaria: 0
  },
  {
    nome: "Matrix ",
    classificacaoEtaria: 14
  },
  {
    nome: "Você nem imagina",
    classificacaoEtaria: 12
  },
  {
    nome: "Brilho eterno de uma mente sem lembranças",
    classificacaoEtaria: 14
  },
  {
    nome: "Scott Pilgrim contra o mundo",
    classificacaoEtaria: 12
  },
  {
    nome: "Capitão Fantástico",
    classificacaoEtaria: 14
  },
  {
    nome: "El Camino",
    classificacaoEtaria: 16
  },
  {
    nome: "Parasita",
    classificacaoEtaria: 16
  },
  {
    nome: "Star Wars: o retorno do jedi",
    classificacaoEtaria: 0
  },
  {
    nome: "Red: crescer é uma fera",
    classificacaoEtaria: 0
  },
  {
    nome: "Ninja Assassino",
    classificacaoEtaria: 18
  },
]
let idade = prompt("Digite sua idade")
filmes.forEach(
  (item) => {
    if (idade < item.classificacaoEtaria) {
      return console.log (`oFilme ${item.nome} é apropriado para a sua idade`)
    } else {
      return console.log ((document.write`Livre para assistir ${item.nome}`))
    }
  }
)