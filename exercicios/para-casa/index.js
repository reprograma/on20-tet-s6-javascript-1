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

let idade = 15;

/*-----------usando for--------*/

 //só vai mostrar os filmes disponíveis SE a idade recebida for maior ou igual a classificacaoEtaria
 
/*function listarFilmesPermitidos(idadeRecebida) {
  // indice = indice + 1 // indice++ 
  for (let indice = 0; indice < filmes.length; indice++){
    if (idadeRecebida >= filmes[indice].classificacaoEtaria) {
      console.log(`${filmes[indice].nome} - classificação: ${filmes[indice].classificacaoEtaria}`)
    }
  }
}listarFilmesPermitidos(idade)*/

/*------------forEach(para cada)----------*/
 //só vai mostrar os filmes disponíveis SE a idade recebida for maior ou igual a classificacaoEtaria

function compararIdade(elemento) {
  if (idade >= elemento.classificacaoEtaria) {
    console.log(`${elemento.nome} - classificação: ${elemento.classificacaoEtaria}`)
  }
} 
function listarFilmesPermitidos2() {
  filmes.forEach(compararIdade)
}
listarFilmesPermitidos2()

/*-----------filter(retorna array)--------*/
/*Além de precisar colocar o return dentro de variável, no filter a callback precisa retornar um valor boolean(true ou false) para passar na condição atribuída pois ela fará o filtro por comparação, se a condição for verdadeira,ela passa no filtro; se a condição for falsa ela não passa no filtro.*/

//só vai mostrar os filmes disponíveis SE a idade recebida for maior ou igual a classificacaoEtaria.

/*function compararIdadeFilter(elemento) {
  return idade >= elemento.classificacaoEtaria
}
function listarFilmesPermitidos3() {
  let filmesFiltrados = filmes.filter(compararIdadeFilter)
  console.log(filmesFiltrados)
}
listarFilmesPermitidos3()*/


