let nome1 = "Claudia"
let nome2 = "Rocks"
let nome3 = "Andréa"

nome1
// 'Claudia'
nome2
// 'Rocks'
nome3
// 'Andréa'

let nomes = ["Claudia", "Rocks", "Andréa"]

nomes
// ['Claudia', 'Rocks', 'Andréa']

let idades = [10, 15, 5, 16, 30, 8]
idades
// [10, 15, 5, 16, 30, 8]

let pessoa = ["Ana", "Morita", 26, true]
pessoa
// ['Ana', 'Morita', 26, true]

nomes[1]
//'Rocks'
nomes[2]
//'Andréa'
nomes[0]
//'Claudia'
nomes[4]
// undefined -> posicao nao existe na lista

let contador = 0

for(contador; contador < 3; contador++) {
    console.log(nomes[contador])
}

// Claudia
// Rocks
// Andréa

contador = 0

for(contador; contador < 3; contador++) {
    console.log(nomes[contador])
}
// Claudia
// Rocks
// Andréa

nomes.length
// 3
idades.length
// 6
pessoa.length
// 4
contador = 0

for(contador; contador < nomes.length; contador++) {
    console.log(nomes[contador])
}
// Claudia
// Rocks
// Andréa

for(contador; contador < idades.length; contador++) {
    console.log(idades[contador])
}
// 16
// 30
// 8

contador = 0
for(contador; contador < idades.length; contador++) {
    console.log(idades[contador])
}
// 10
// 15
// 5
// 16
// 30
// 8

contador = 0
for(contador; contador < pessoa.length; contador++) {
    console.log(pessoa[contador])
}
// Ana
// Morita
// 26
// true

contador = 0
0
for(contador; contador < pessoa.length; contador++) {
    console.log(pessoa[contador])
}

contador = 0
for(contador; contador < idades.length; contador++) {
    console.log(idades[contador])
}

contador = 0
for(contador; contador < nomes.length; contador++) {
    console.log(nomes[contador])
}
// Ana
// Morita
// 26
// true
// 10
// 15
// 5
// 16
// 30
// 8
// Claudia
// Rocks
// Andréa


for(let contador = 0; contador < pessoa.length; contador++) {
    console.log(pessoa[contador])
}

for(let contador = 0; contador < idades.length; contador++) {
    console.log(idades[contador])
}

for(let contador = 0; contador < nomes.length; contador++) {
    console.log(nomes[contador])
}
// Ana
// Morita
// 26
// true
// 10
// 15
// 5
// 16
// 30
// 8
// Claudia
// Rocks
// Andréa

let listaDeCompras = [["pão", "queijo", "salame"], ["banana", "maçã", "abacaxi"]];

listaDeCompras[0][0]
// 'pão'
listaDeCompras[1][2]
// 'abacaxi'
listaDeCompras.length
// 2
listaDeCompras[0].length
// 3


listaDeCompras.push("manteiga")
// 4
listaDeCompras
// (4) ['pão', 'queijo', 'salame', 'manteiga']

listaDeCompras.push("leite", "ovos")
// 6
listaDeCompras
// (6) ['pão', 'queijo', 'salame', 'manteiga', 'leite', 'ovos']

listaDeCompras = ["pão", "queijo", "salame"]
// (3) ['pão', 'queijo', 'salame']

listaDeCompras = ['pão', 'queijo', 'salame', 'manteiga', 'leite', 'ovos']
    
// (6) ['pão', 'queijo', 'salame', 'manteiga', 'leite', 'ovos']

let auxiliar = listaDeCompras[1]
auxiliar
// 'queijo'
listaDeCompras[1] = listaDeCompras[2]
// 'salame'
listaDeCompras
// (6) ['pão', 'salame', 'salame', 'manteiga', 'leite', 'ovos']
listaDeCompras[2] = auxiliar
// 'queijo'
listaDeCompras
// (6) ['pão', 'salame', 'queijo', 'manteiga', 'leite', 'ovos']

listaDeCompras[3] = "requeijão"
// 'requeijão'
listaDeCompras
// (6) ['pão', 'salame', 'queijo', 'requeijão', 'leite', 'ovos']

let contador = 0;

contador = 5
// 5
listaDeCompras[contador]
// 'ovos'
listaDeCompras.pop()
// 'ovos'
listaDeCompras
// (5) ['pão', 'salame', 'queijo', 'requeijão', 'leite']
listaDeCompras.pop()
// 'leite'
listaDeCompras
// (4) ['pão', 'salame', 'queijo', 'requeijão']

listaDeCompras.unshift("leite")
// 5
listaDeCompras
// (5) ['leite', 'pão', 'salame', 'queijo', 'requeijão']
listaDeCompras.unshift("ovos", "achocolatado")
// 7
listaDeCompras
// (7) ['ovos', 'achocolatado', 'leite', 'pão', 'salame', 'queijo', 'requeijão']

listaDeCompras.shift()
// 'ovos'
listaDeCompras
// (6) ['achocolatado', 'leite', 'pão', 'salame', 'queijo', 'requeijão']