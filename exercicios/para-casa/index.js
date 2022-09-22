let idade = prompt ("Para escolher o melhor filme, me diga qual sua idade?")
console.log = idade

function mais18 (elemento,mais18) {
  return elemento.classificacaoEtaria === 18 }
filmes.filter (mais18) 

function mais16 (elemento,mais16) {
  return elemento.classificacaoEtaria <= 16 }
filmes.filter (mais16) 

function mais12 (elemento,mais12) {
  return elemento.classificacaoEtaria <= 12 }
filmes.filter (mais12) 

function mais14 (elemento,mais14) {
  return elemento.classificacaoEtaria <= 14 }
filmes.filter (mais14) 

function mais0 (elemento,mais0) {
  return elemento.classificacaoEtaria <= 0 }
filmes.filter (mais0) 

function menos11 (elemento,mais12) {
  return elemento.classificacaoEtaria <= 11 }
filmes.filter (menos11) 


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
  }]