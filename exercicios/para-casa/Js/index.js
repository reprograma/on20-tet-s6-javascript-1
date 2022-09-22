//Pedir idade usuário;
//Apresentar a lista de filmes e faixa etária;
//Criar o resultado com grupo de filmes com faixa etária igual ou maior que a idade do usuário;
//Mostrar só o nome dos filmes do resultado.




//Pedir idade usuário (criar uma variavel);
let idade =  Number(prompt("Informe a sua idade")); 

//Apresentar a lista de filmes e faixa etária;
let filmes = [ 
    {nome: "Deadpool", classificacaoEtaria: 18},
    {nome: "Your Name", classificacaoEtaria: 0},
    {nome: "Kill Bill", classificacaoEtaria: 18},
    {nome: "Shrek", classificacaoEtaria: 0},
    {nome: "Matrix ", classificacaoEtaria: 14},
    {nome: "Você nem imagina", classificacaoEtaria: 12},
    {nome: "Brilho eterno de uma mente sem lembranças", classificacaoEtaria: 14},
    {nome: "Scott Pilgrim contra o mundo", classificacaoEtaria: 12},
    {nome: "Capitão Fantástico", classificacaoEtaria: 14},
    {nome: "El Camino", classificacaoEtaria: 16},
    {nome: "Parasita", classificacaoEtaria: 16},
    {nome: "Star Wars: o retorno do jedi", classificacaoEtaria: 0},
    {nome: "Red: crescer é uma fera",  classificacaoEtaria: 0},
    {nome: "Ninja Assassino", classificacaoEtaria: 18}]

//Criar o resultado com grupo de filmes com faixa etária igual ou maior que a idade do usuário;
//Mostrar só o nome dos filmes do resultado.


document.write(`Estes filmes são apropriados para a sua idade:  `,"<br>")

  filmes.forEach ((item) => {
    if (idade >= item.classificacaoEtaria){
        return console.log (document.write(`- ${item.nome}; `,"<br>"))
    }    
  }
  )


/////