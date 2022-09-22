let idade = prompt ("Qual é sua idade?")

let filmes = [
    { nome: "Deadpool", classificacaoEtaria: 18 },
    { nome: "Your Name", classificacaoEtaria: 0 },
    { nome: "Kill Bill", classificacaoEtaria: 18 },
    { nome: "Shrek", classificacaoEtaria: 0 },
    { nome: "Matrix ", classificacaoEtaria: 14 },
    { nome: "Você nem imagina", classificacaoEtaria: 12 },
    { nome: "Brilho eterno de uma mente sem lembranças", classificacaoEtaria: 14 },
    { nome: "Scott Pilgrim contra o mundo", classificacaoEtaria: 12 },
    { nome: "Capitão Fantástico", classificacaoEtaria: 14 },
    { nome: "El Camino", classificacaoEtaria: 16 },
    { nome: "Parasita", classificacaoEtaria: 16 },
    { nome: "Star Wars: o retorno do jedi", classificacaoEtaria: 0 },
    { nome: "Red: crescer é uma fera", classificacaoEtaria: 0 },
    { nome: "Ninja Assassino", classificacaoEtaria: 18 },
]


let filmesDisponiveis = "";

document.write("Filmes disponíveis para você:", "<br><br>");

for (i = 0; i < filmes.length; i++){
    if (filmes[i].classificacaoEtaria <= idade) {
        filmesDisponiveis = filmesDisponiveis.concat(filmes[i].nome, ", ");
        document.write(filmes[i].nome,"<br>");
    }
}
