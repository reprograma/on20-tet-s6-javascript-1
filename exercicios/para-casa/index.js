let filmes = [
    {
      nome: "Deadpool",
      classificacaoEtaria: 15
    },
    {
      nome: "Your Name",
      classificacaoEtaria: 12
    },
    {
      nome: "Kill Bill",
      classificacaoEtaria: 18
    },
    {
      nome: "Shrek",
      classificacaoEtaria: 4
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
      classificacaoEtaria: 16
    },
    {
      nome: "Scott Pilgrim contra o mundo",
      classificacaoEtaria: 16
    },
    {
      nome: "Capitão Fantástico",
      classificacaoEtaria: 10
    },
    {
      nome: "El Camino",
      classificacaoEtaria: 16
    },
    {
      nome: "Parasita",
      classificacaoEtaria: 18
    },
    {
      nome: "Star Wars: o retorno do jedi",
      classificacaoEtaria: 12
    },
    {
      nome: "Red: crescer é uma fera",
      classificacaoEtaria: 0
    },
    {
      nome: "Ninja Assassino",
      classificacaoEtaria: 18
    },
  ];

let idade = (prompt("Digite a Sua Idade"));

idade = Number(idade);


for (let indice = 0; indice < filmes.length; indice++) {
  if (idade >= filmes[indice].classificacaoEtaria) {
    (console.log(filmes[indice].nome))
  };
};