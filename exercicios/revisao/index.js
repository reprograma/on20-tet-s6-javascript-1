[8, 19, 33, 37, 49, 51] //lista de numeros

["Ana", "Mica", "Patrícia", "Marta"] // lista de strings

[true, false, true, false, true] // lista de booleanos

[null, null, null, null, null] // lista de valores nulos

[undefined, undefined, undefined] // lista de valores undefined

[{
  nome: "Fusca",
   qtdPortas: 2
}, 
{
   nome: "Gol",
    qtdPortas: 4
},
{
   nome: "Ferrari",
    qtdPortas: 2
},
{
   nome: "Porsche",
    qtdPortas: 4
}] // lista de objetos


let megaSena = [8, 19, 33, 37, 49, 51]

megaSena[4] // 49
megaSena[1] // 19
megaSena.length // 6


let carros = [{
  nome: "Fusca",
   qtdPortas: 2
}, 
{
   nome: "Gol",
    qtdPortas: 4
},
{
   nome: "Ferrari",
    qtdPortas: 2
},
{
   nome: "Porsche",
    qtdPortas: 4
}]

carros[2].nome // 'Ferrari'
carros[2].qtdPortas // 2

`O carro ${carros[2].nome} tem ${carros[2].qtdPortas} portas` // template string, permite que coloquemos variáveis na nossa string assim ele susbstitui o que esta dentro do ${} pelo valor 
// 'O carro Ferrari tem 2 portas'

"O carro ${carros[2].nome} tem ${carros[2].qtdPortas} portas" // string convencional não permite o uso de variáveis no texto
// "O carro ${carros[2].nome} tem ${carros[2].qtdPortas} portas"
'O carro ${carros[2].nome} tem ${carros[2].qtdPortas} portas' // string convencional não permite o uso de variáveis no texto
  
// 'O carro ${carros[2].nome} tem ${carros[2].qtdPortas} portas'
`O carro ${carros[3].nome} tem ${carros[3].qtdPortas} portas`
// 'O carro Porsche tem 4 portas'


carros = [{
  nome: "Fusca",
   qtdPortas: 2,
   estilo: {
       pintura: "fosca",
       cor: "azul"
   }
}, 
{
   nome: "Gol",
    qtdPortas: 4,
   estilo: {
       pintura: "brilhante",
       cor: "vermelho"
   }
},
{
   nome: "Ferrari",
    qtdPortas: 2,
   estilo: {
       pintura: "fosca",
       cor: "vermelho"
   }
},
{
   nome: "Porsche",
    qtdPortas: 4,
   estilo: {
       pintura: "fosca",
       cor: "amarelo"
   }
}]

carros[3]
// {nome: 'Porsche', qtdPortas: 4, estilo: {…}}estilo: {pintura: 'fosca', cor: 'amarelo'}
carros[3].estilo.cor
// 'amarelo'


for (let indice = 0; indice < carros.length; indice++) {
  console.log(carros[indice].nome)
}
// Fusca
// Gol
// Ferrari
// Porsche

for (let indice = 0; indice < carros.length; indice++) {
  console.log(carros[indice])
}
// {nome: 'Fusca', qtdPortas: 2, estilo: {…}}estilo: {pintura: 'fosca', cor: 'azul'}
// {nome: 'Gol', qtdPortas: 4, estilo: {…}}estilo: {pintura: 'brilhante', cor: 'vermelho'}
// {nome: 'Ferrari', qtdPortas: 2, estilo: {…}}estilo: {pintura: 'fosca', cor: 'vermelho'}
// {nome: 'Porsche', qtdPortas: 4, estilo: {…}}estilo: {pintura: 'fosca', cor: 'amarelo'}

for (let indice = 0; indice < carros.length; indice++) {
  alert(carros[indice])
}

for (let indice = 0; indice < carros.length; indice++) {
  console.log(carros[indice].nome)
}
// Fusca
// Gol
// Ferrari
// Porsche


for (let indice in carros) { // a variavel criada no for in assume o valor de cada indice da lista
  console.log(indice)
}
// 0
// 1
// 2
// 3

for (let carro of carros) { // a variavel criada no for of assume o valor de cada elemento da lista
  console.log(carro)
}
// {nome: 'Fusca', qtdPortas: 2, estilo: {…}}estilo: {pintura: 'fosca', cor: 'azul'}
// {nome: 'Gol', qtdPortas: 4, estilo: {…}}
// {nome: 'Ferrari', qtdPortas: 2, estilo: {…}}
// {nome: 'Porsche', qtdPortas: 4, estilo: {…}}

for (let elemento of carros) {
  console.log(elemento)
}
// {nome: 'Fusca', qtdPortas: 2, estilo: {…}}estilo: {pintura: 'fosca', cor: 'azul'}
// {nome: 'Gol', qtdPortas: 4, estilo: {…}}
// {nome: 'Ferrari', qtdPortas: 2, estilo: {…}}
// {nome: 'Porsche', qtdPortas: 4, estilo: {…}}

for (let elemento of carros) {
  console.log(elemento.nome)
}
// Fusca
// Gol
// Ferrari
// Porsche


// consigo chegar no mesmo resultado do for of utilizando o for in, mas neste caso eu preciso escrever um pouco mais 
for (let indice in carros) {
  console.log(carros[indice].nome)
}
// Fusca
// Gol
// Ferrari
// Porsche


function log (item) {
  console.log(item)
}

carros.forEach() // o for each espera receber uma função (callback) para funcionar se não for passada uma função o erro abaixo aparece
// VM2794:4 Uncaught TypeError: undefined is not a function
//   at Array.forEach (<anonymous>)
//   at <anonymous>:4:8
// (anonymous) @ VM2794:4


carros.forEach(log)
// {nome: 'Fusca', qtdPortas: 2, estilo: {…}}
// {nome: 'Gol', qtdPortas: 4, estilo: {…}}
// {nome: 'Ferrari', qtdPortas: 2, estilo: {…}}
// {nome: 'Porsche', qtdPortas: 4, estilo: {…}}

carros.forEach(function (item) {
  console.log(item)
})
// {nome: 'Fusca', qtdPortas: 2, estilo: {…}}
// {nome: 'Gol', qtdPortas: 4, estilo: {…}}
// {nome: 'Ferrari', qtdPortas: 2, estilo: {…}}
// {nome: 'Porsche', qtdPortas: 4, estilo: {…}}


carros.forEach(function (carro) {
  console.log(carro)
})
// {nome: 'Fusca', qtdPortas: 2, estilo: {…}}estilo: {pintura: 'fosca', cor: 'azul'}
// {nome: 'Gol', qtdPortas: 4, estilo: {…}}estilo: {pintura: 'brilhante', cor: 'vermelho'}
// {nome: 'Ferrari', qtdPortas: 2, estilo: {…}}estilo: {pintura: 'fosca', cor: 'vermelho'}
// {nome: 'Porsche', qtdPortas: 4, estilo: {…}}estilo: {pintura: 'fosca', cor: 'amarelo'}

carros.forEach(function (elemento) {
  console.log(elemento.nome)
})
// Fusca
// Gol
// Ferrari
// Porsche

for (let indice = 0; indice < carros.length; indice = indice + 2 ) { // passando de dois em dois
  console.log(carros[indice])
}
// {nome: 'Fusca', qtdPortas: 2, estilo: {…}}estilo: {pintura: 'fosca', cor: 'azul'}
// {nome: 'Ferrari', qtdPortas: 2, estilo: {…}}

function montarTexto (elemento) {
  console.log(`O carro ${elemento.nome} tem ${elemento.qtdPortas} portas`)
}
carros.map(montarTexto) // map pega um array e faz o que vc passar de função e devolve um novo array, mas para isso a sua função precisa ter um retorno caso contrário o map retorna um array de undefineds

// O carro Fusca tem 2 portas
// O carro Gol tem 4 portas
// O carro Ferrari tem 2 portas
// O carro Porsche tem 4 portas
// retorno do map -> [undefined, undefined, undefined, undefined]

function montarTexto2 (elemento) {
  return `O carro ${elemento.nome} tem ${elemento.qtdPortas} portas`
}
carros.map(montarTexto2)
// retorno -> ['O carro Fusca tem 2 portas', 'O carro Gol tem 4 portas', 'O carro Ferrari tem 2 portas', 'O carro Porsche tem 4 portas']

let textos = carros.map(montarTexto2)
textos
// ['O carro Fusca tem 2 portas', 'O carro Gol tem 4 portas', 'O carro Ferrari tem 2 portas', 'O carro Porsche tem 4 portas']

function carrosDuasPortas (elemento) {
  return elemento.qtdPortas === 2
}
carros.filter(carrosDuasPortas)
// [{nome: "Fusca", qtdPortas: 2, estilo: {pintura: "fosca", cor: "azul"}}, {nome: "Ferrari", qtdPortas: 2,estilo: {pintura: "fosca", cor: "vermelho"}}]
let carrosDuasPortas = carros.filter(carrosDuasPortas)
duasPortas
// [{nome: "Fusca", qtdPortas: 2, estilo: {pintura: "fosca", cor: "azul"}}, {nome: "Ferrari", qtdPortas: 2,estilo: {pintura: "fosca", cor: "vermelho"}}]

function carrosQuatroPortas (elemento) {
  return elemento.qtdPortas === 4
}
carros.filter(carrosQuatroPortas)
// {nome: "Gol", qtdPortas: 4, estilo: { pintura: "brilhante", cor: "vermelho"}}, {nome: "Porsche", qtdPortas: 4, estilo: {pintura: "fosca", cor: "amarelo"}}]

function carrosAmarelos (elemento) {
  return elemento.estilo.cor === "amarelo"
}
carros.filter(carrosAmarelos)

//[{nome: "Porsche", qtdPortas: 4, estilo: {pintura: "fosca", cor: "amarelo"}}]

function carrosVermelhosDuasPortas (elemento) {
  return elemento.estilo.cor === "vermelho" && elemento.qtdPortas === 2
}

carros.filter(carrosVermelhosDuasPortas)
// [{nome: "Ferrari", qtdPortas: 2,estilo: {pintura: "fosca", cor: "vermelho"}}]

typeof ("oi tudo bem?") 
'string'
typeof(carros)
'object'
typeof(100)
'number'
typeof(100)
'number'
typeof("100")
'string'
