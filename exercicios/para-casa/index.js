let filmes = [
  {
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

let idade = Number(prompt("Qual a sua idade"))

function listarFilmesPermitidos(idadeRecebida) {
  // indice = indice + 1 // indice++ 
  for (let indice = 0; indice < filmes.length; indice++){
    if (idadeRecebida >= filmes[indice].classificacaoEtaria) {
      console.log(`${filmes[indice].nome} - classificação: ${filmes[indice].classificacaoEtaria}`)
    }
  }
}

listarFilmesPermitidos(idade)

function compararIdade(elemento) {
  if (idade >= elemento.classificacaoEtaria) {
    console.log(`${elemento.nome} - classificação: ${elemento.classificacaoEtaria}`)
  }
}

function listarFilmesPermitidos2() {
  filmes.forEach(compararIdade)
}
listarFilmesPermitidos2()

function compararIdadeFilter(elemento) {
  return idade >= elemento.classificacaoEtaria
}

function listarFilmesPermitidos3() {
  let filmesFiltrados = filmes.filter(compararIdadeFilter)
  console.log(filmesFiltrados)
}

listarFilmesPermitidos3()
