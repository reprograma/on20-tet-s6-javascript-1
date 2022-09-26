
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

/*function faixaEtaria(item) {
  if (idade < 12){
    return item.classificacaoEtaria === 0
  } else if (idade >= 12 && idade < 14) {
    return item.classificacaoEtaria <= 12
  } else if (idade >= 14 && idade < 16) {
    return item.classificacaoEtaria <= 14
  } else if (idade >= 16 && idade < 18) {
    return item.classificacaoEtaria <= 16
  } else if  (idade >= 18) {
    return item.classificacaoEtaria <= 18
  }
}
let filmesPorIdade = filmes.filter(faixaEtaria);

console.log(filmesPorIdade);*/


// console.log(filmesPorIdade);




 /*let exibir = filmes.filter((item) => {
  if(idade < item.classificacaoEtaria) {
  return console.log(`O filme ${item.nome} é inapropriado para sua idade!`)
}
else{
  return console.log(`Livre para assistir ${item.nome} !`)
}

})
console.log(exibir); */











