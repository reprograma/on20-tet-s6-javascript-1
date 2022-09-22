function calculaDesconto(produto, desconto) {
    return produto - ((produto * desconto) / 100) 
}

let produto = prompt("Digite o preço do produto");
let desconto = prompt("Digite o percentual de desconto");

produto = Number(produto);
desconto = Number(desconto);

let produtoDesconto = calculaDesconto(produto, desconto);

document.write("Valor do produto com desconto: R$ " + produtoDesconto);
console.log("Valor do produto com desconto: R$ " + produtoDesconto);