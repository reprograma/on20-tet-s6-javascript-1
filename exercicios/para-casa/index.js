const filmes = [
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
];

const filtrarFilmesPorIdade = (filmesParaFiltrar, idadeMaxima) => filmesParaFiltrar
    .filter(({ classificacaoEtaria }) => classificacaoEtaria <= idadeMaxima)
    .map(({ nome }) => nome);

const botaoFiltro = document.querySelector("#filtrar");
const inputIdade = document.querySelector("[name='idade']");
const containerLista = document.querySelector("#list-container");

botaoFiltro.addEventListener('click', () => {
    const idade = Number(inputIdade.value);
    const filmesFiltrados = filtrarFilmesPorIdade(filmes, idade);
    const listaFilmesFiltrados = filmesFiltrados.map(filme => `<li>${filme}</li>`).join('\n');
    containerLista.innerHTML = `<ul>${listaFilmesFiltrados}</ul>`;
});