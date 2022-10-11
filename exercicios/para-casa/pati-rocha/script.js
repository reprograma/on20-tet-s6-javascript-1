
// Criar uma função que receba a idade de uma pessoa e diga quais filmes aquela pessoa pode assistir. Use como base o seguinte objeto:     (0, 12, 14, 16, 18)

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



let idade = Number(prompt("Digite sua idade e veja quais filmes você pode assistir:"));


/*function listarFilmesPermitidos(idade) {

  for (let i = 0; i < filmes.length; i++) {
    if (idade >= filmes[i].classificacaoEtaria) {
      console.log(`Filme: ${filmes[i].nome} - Classificação: ${filmes[i].classificacaoEtaria} anos`)
    }
  }
}
listarFilmesPermitidos(idade) */

/*const filmesPermitidos = filmes.forEach((item) =>{
  if (idade >= item.classificacaoEtaria) {
    console.log(`Filme: ${item.nome} - Classificação: ${item.classificacaoEtaria} anos`);    
  }
})*/

//usando o filter retorna um array

function listarFilmesFiltrados () {
  let filmesFiltrados = filmes.filter((elemento) => {
    return idade >= elemento.classificacaoEtaria
  })
  console.log(filmesFiltrados);
}
listarFilmesFiltrados(idade)
















