let filmes = [
    {
      nome: "Senhor dos Aneis",
      classificacaoEtaria: 12 
    },
    {
      nome: "Jogos Vorazes",
      classificacaoEtaria: 14
    },
    {
      nome: "Harry Potter",
      classificacaoEtaria: 10
    },
    {
      nome: "10 coisas que odeio em você",
      classificacaoEtaria: 12
    },
    {
      nome: "Avatar",
      classificacaoEtaria: 12 
    },
    {
      nome: "Zootopia",
      classificacaoEtaria: 0
    },
    {
      nome: "A Bruxa",
      classificacaoEtaria: 16
    },
    {
      nome: "A chegada",
      classificacaoEtaria: 10
    },
    {
      nome: "Azul é a Cor Mais Quente",
      classificacaoEtaria: 18
    },
    {
      nome: "Efeito Borboleta",
      classificacaoEtaria: 14
    },
    {
      nome: "Bacurau",
      classificacaoEtaria: 16 
    },
    {
      nome: "Metropolis",
      classificacaoEtaria: 14
    },
    {
      nome: "Red: crescer é uma fera",
      classificacaoEtaria: 0
    },
    {
      nome: "O boneco do mal",
      classificacaoEtaria: 14
    },
  ]

 let idade = Number (prompt("Antes de escolher o filme, digite sua idade"))
 console.log(idade)

 filmes.forEach(list =>{
  if (idade >= list ["classificacaoEtaria"]){
    document.write(list["nome"], "<br>")
    console.log(list["nome"])
  }
 });

  
