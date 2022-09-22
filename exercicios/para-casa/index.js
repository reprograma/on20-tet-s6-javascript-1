let filmes = [
    {
      nome: "Deadpool" ,
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
      nome: "Matrix",
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

let idade =Number(prompt("Insira aqui sua idade:"))

const nomes = filmes.map((item) =>{
    if(item.classificacaoEtaria <= idade)  {
        return " " + item.nome
    } else {
        return " xxx" 
    }
} )

alert("Os filmes disponíveis para sua idade são: " + nomes + ".")

filmes.forEach(minhaFuncao)

function minhaFuncao(item) {
    if (item.classificacaoEtaria <= idade) {
        alert("Você pode ver " + item.nome)
    }
}
