let nome ;
let idade;
let acesso = false;

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
  }]

  while (!acesso){
    nome = prompt("Informe seu nome");
    idade = Number (prompt("Informe sua idade"));
    
    filmes.forEach((element)=> { 
        if (idade >= element.classificacaoEtaria){
            alert (`Acesso liberado a lista ${element.nome}.classificacaoEtaria é 
          ${element.classificacaoEtaria}`
            );
            acesso = true;
        } else {
            alert (`Você não pode acessar esse filme ${element.nome}. classificacaoEtaria é 
            ${element.nome}.classificacaoEtaria{element.classificacaoEtaria}`
            );
        }
        });   
                
        if(acesso) {
            alert ("Volte sempre{nome}!");

        } else {
            alert ("Porcure um filme com a classificação indicada para sua idade");
        }
    }



