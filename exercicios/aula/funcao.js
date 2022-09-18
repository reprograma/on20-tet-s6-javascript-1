console.log("Log")
// Log

alert("Alerta")

let lista = [1, 2, 3]

lista.pop()
// 3 -> retorno da função
lista.push(3 , 4)
// 4 -> retorno da função

function somar (x, y) {
    return x + y
}

somar(5, 10) // chamando uma funcao
15
somar(10, 10)
20

console.log("oi")
// oi
console.log("tudo bem?")
// tudo bem?

somar(20, 5)
// 25

function subtrair (x, y) {
    return x - y;
    console.log("subtraiu") // ignorado por estar depois do return
}

subtrair(10, 5)
// 5

const mensagem = function () {
    console.log("Esta mensagem é exibida depois de 3 segundos")
}

setTimeout(mensagem, 3000)
1
// Esta mensagem é exibida depois de 3 segundos

const mensagem = function () {
    console.log("Esta mensagem é exibida depois de 10 segundos")
}

setTimeout(mensagem, 10000)
// Esta mensagem é exibida depois de 10 segundos
