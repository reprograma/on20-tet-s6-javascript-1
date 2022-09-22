let contador = 0; // escopo global

let email = prompt("Digite seu email")

while (contador <= 10) {
  console.log(contador)
  let contador2 = 20; // escopo local
  console.log(contador2)
  contador++;

  if (condicao) {
    // contador2 ta visivel
    let teste = 2;
  } else {
    // contador2  ta visivel
  }

  // teste nao ta visivel
}

console.log(contador2) // erro de referencia -> a variavel contador2 só existe dentro do while

for (contador; contador <= 10; contador++) {
  console.log(contador);
}

for (let contador2 = 0; contador2 <= 10; contador2++) {
  console.log(contador2);
}

for (let contador2 = 0; contador2 <= 10; contador2++) {
  console.log(contador2);
}