function assistirFilmes(idade) {
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
        { nome: "Ninja Assassino", classificacaoEtaria: 18 }
    ];

    document.write("Filmes que pode assistir: <br><br>");
    for (let contador = 0; contador < filmes.length; contador++) {
        if (filmes[contador].classificacaoEtaria <= idade) {
            document.write("Pode assistir: " + filmes[contador].nome + "<br>");
            console.log("Pode assistir: " + filmes[contador].nome);
        }
    }

    document.write("<br><br>");
    document.write("Filmes que não pode assistir: <br><br>");
    for (let contador = 0; contador < filmes.length; contador++) {
        if (filmes[contador].classificacaoEtaria > idade) {
            document.write("Não pode assistir: " + filmes[contador].nome + "<br>");
            console.log("Não pode assistir: " + filmes[contador].nome);
        }
    }
}

let idade = prompt("Digite sua idade");
assistirFilmes(idade);