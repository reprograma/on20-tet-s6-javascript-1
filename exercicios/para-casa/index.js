//LISTINHA DA ANA
let filmes = [ {nome: "Deadpool", classificacaoEtaria: 18},
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
//FUNCTION: colhe o input do usuário e devolve o valor
function bilheteria() {
let idade =  Number(prompt("Digite o número da sua idade")); //prompt para recebimento de input do usuário, que é convertido em número
let numeroDeFilmes = Number(alert("O número de filmes que você pode ver é " + filmes.filter(filmes => filmes.classificacaoEtaria <= idade).length))  //retorna o número de filmes que passa pela classificação etária 
let podeAssistir = (alert("E eles são " + (JSON.stringify(filmes.filter(({classificacaoEtaria}) => classificacaoEtaria <= idade))))) //retorna os nomes dos filmes que passam pela classificação etária e também o valor das classificações, queria que só retornasse os nomes, mas não consegui fazer de um jeito que fizesse sentido, por ser um alert de um objeto em string, me deparei com o erro de [object object]
}
bilheteria()	