let filmes = [
    { nome: "Deadpool", classificacaoEtaria: 18 },
    { nome: "Kill Bill", classificacaoEtaria: 18 },
    { nome: "Ninja Assassino", classificacaoEtaria: 18 },
    { nome: "El Camino", classificacaoEtaria: 16 },
    { nome: "Parasita", classificacaoEtaria: 16 },
    { nome: "Matrix ", classificacaoEtaria: 14 },
    { nome: "Capitão Fantástico", classificacaoEtaria: 14 },
    { nome: "Brilho eterno de uma mente sem lembranças", classificacaoEtaria: 14 },
    { nome: "Você nem imagina", classificacaoEtaria: 12 },
    { nome: "Scott Pilgrim contra o mundo", classificacaoEtaria: 12 },
    { nome: "Star Wars: o retorno do jedi", classificacaoEtaria: 0 },
    { nome: "Red: crescer é uma fera", classificacaoEtaria: 0 },
    { nome: "Shrek", classificacaoEtaria: 0 },
    { nome: "Your Name", classificacaoEtaria: 0 }
  ]
  
  function receberIdade() {
    let idade = parseInt(prompt("Diga a sua idade: "));
    console.log(idade);
    return idade; 
  }

  function mostrarFilmes(){
      let idade = receberIdade();
      
    filmes.forEach(linhaFilme => {

        if(idade >= linhaFilme["classificacaoEtaria"]){
            // console.log(linhaFilme ["nome"], linhaFilme["classificacaoEtaria"]);
            document.write(linhaFilme["nome"], " ", linhaFilme["classificacaoEtaria"], "<br>");
        } 
    });
}

mostrarFilmes();

  
  // let filmes = [
  //   /0/    {nome: "Deadpool", classificacaoEtaria: 18 },
  //   /1/    { nome: "Kill Bill", classificacaoEtaria: 18 },
  //   /2/    {nome: "Ninja Assassino", classificacaoEtaria: 18 },
  //   /3/    { nome: "Parasita", classificacaoEtaria: 16 },
  //   /4/    { nome: "El Camino", classificacaoEtaria: 16 },
  //   /5/    { nome: "Capitão Fantástico", classificacaoEtaria: 14 },
  //   /6/    { nome: "Matrix ", classificacaoEtaria: 14 },
  //   /7/    { nome: "Brilho eterno de uma mente sem lembranças", classificacaoEtaria: 14 },
  //   /8/    { nome: "Você nem imagina", classificacaoEtaria: 12 },
  //   /9/    { nome: "Scott Pilgrim contra o mundo", classificacaoEtaria: 12 },
  //   /10/    { nome: "Shrek", classificacaoEtaria: 0 },
  //   /11/    { nome: "Your Name", classificacaoEtaria: 0 },
  //   /12/    { nome: "Star Wars: o retorno do jedi", classificacaoEtaria: 0 },
  //   /13/    {nome: "Red: crescer é uma fera", classificacaoEtaria: 0 },
  //     ]
      
  //     function receberIdade(){
  //       let idade = parseInt(prompt("Digite sua idade: "));
  //       console.log(idade);
  //       return idade;
  //     }
    
      // console.log(nomeArray [linha]["coluna"]);
      
      // function filtrarFilmes(){
        
      //   idade = receberIdade();
      //   console.log(idade);
    
      //   if( idade >= 18){
      //     console.log(filmes[0].nome, filmes[0].classificacaoEtaria);
      //     console.log(filmes[1].nome, filmes[1].classificacaoEtaria);
      //     console.log(filmes[2].nome, filmes[2].classificacaoEtaria);
      //     console.log(filmes[3].nome, filmes[3].classificacaoEtaria);
      //     console.log(filmes[4].nome, filmes[4].classificacaoEtaria);
      //     console.log(filmes[5].nome, filmes[5].classificacaoEtaria);
      //     console.log(filmes[6].nome, filmes[6].classificacaoEtaria);
      //     console.log(filmes[7].nome, filmes[7].classificacaoEtaria);
      //     console.log(filmes[8].nome, filmes[8].classificacaoEtaria);
      //     console.log(filmes[9].nome, filmes[9].classificacaoEtaria);
      //     console.log(filmes[10].nome, filmes[10].classificacaoEtaria);
      //     console.log(filmes[11].nome, filmes[11].classificacaoEtaria);
      //     console.log(filmes[12].nome, filmes[12].classificacaoEtaria);
      //     console.log(filmes[13].nome, filmes[13].classificacaoEtaria);
      //   } else if (idade >= 16){
      //     console.log(filmes[3].nome, filmes[3].classificacaoEtaria);
      //     console.log(filmes[4].nome, filmes[4].classificacaoEtaria);
      //     console.log(filmes[5].nome, filmes[5].classificacaoEtaria);
      //     console.log(filmes[6].nome, filmes[6].classificacaoEtaria);
      //     console.log(filmes[7].nome, filmes[7].classificacaoEtaria);
      //     console.log(filmes[8].nome, filmes[8].classificacaoEtaria);
      //     console.log(filmes[9].nome, filmes[9].classificacaoEtaria);
      //     console.log(filmes[10].nome, filmes[10].classificacaoEtaria);
      //     console.log(filmes[11].nome, filmes[11].classificacaoEtaria);
      //     console.log(filmes[12].nome, filmes[12].classificacaoEtaria);
      //     console.log(filmes[13].nome, filmes[13].classificacaoEtaria);
      //   } else if(idade >=14){
      //     console.log(filmes[5].nome, filmes[5].classificacaoEtaria);
      //     console.log(filmes[6].nome, filmes[6].classificacaoEtaria);
      //     console.log(filmes[7].nome, filmes[7].classificacaoEtaria);
      //     console.log(filmes[8].nome, filmes[8].classificacaoEtaria);
      //     console.log(filmes[9].nome, filmes[9].classificacaoEtaria);
      //     console.log(filmes[10].nome, filmes[10].classificacaoEtaria);
      //     console.log(filmes[11].nome, filmes[11].classificacaoEtaria);
      //     console.log(filmes[12].nome, filmes[12].classificacaoEtaria);
      //     console.log(filmes[13].nome, filmes[13].classificacaoEtaria);
      //   }  else{
      //     console.log(filmes[8].nome, filmes[8].classificacaoEtaria);
      //     console.log(filmes[9].nome, filmes[9].classificacaoEtaria);
      //     console.log(filmes[10].nome, filmes[10].classificacaoEtaria);
      //     console.log(filmes[11].nome, filmes[11].classificacaoEtaria);
      //     console.log(filmes[12].nome, filmes[12].classificacaoEtaria);
      //     console.log(filmes[13].nome, filmes[13].classificacaoEtaria);
      //   } 
    
      // }
    
      // filtrarFilmes();