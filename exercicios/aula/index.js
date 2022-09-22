function aplicarDesconto(valorProduto, descontoPercentual) {
  let valorComDesconto = valorProduto * ((100 - descontoPercentual) / 100)
  return valorComDesconto;
}

function aplicarDesconto2(valorProduto, descontoPercentual) {
  let valorDesconto = valorProduto * (descontoPercentual / 100)
  let produtoComDesconto = valorProduto - valorDesconto;
  return produtoComDesconto;
}

let produto = prompt("Digite o valor do produto")
let desconto = prompt("Digite o valor do desconto")
produto = Number(produto)
desconto = Number(desconto)

console.log(aplicarDesconto(produto, desconto))
console.log(aplicarDesconto2(produto, desconto))
