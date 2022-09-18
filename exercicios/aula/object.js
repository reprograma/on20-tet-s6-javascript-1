let pessoa = {
  nome: "Ana Beatriz",
  idade: 26,
  ehDev: true,
  animesFavoritos: ["CDZ", "Naruto", "Jujutsu Kaisen"]
};
  
pessoa
// {nome: 'Ana Beatriz', idade: 26, ehDev: true, animesFavoritos: Array(3)}
pessoa.nome
// 'Ana Beatriz'
pessoa.idade
// 26
pessoa.ehDev
// true

let chave = "animesFavoritos"
pessoa.chave
// undefined
pessoa[chave]
// (3) ['CDZ', 'Naruto', 'Jujutsu Kaisen']
pessoa.animesFavoritos[1]
// 'Naruto'
pessoa[chave][1]
// 'Naruto'
pessoa.sobrenome = "Morita"
// 'Morita'
pessoa
// { nome: 'Ana Beatriz', idade: 26, ehDev: true, animesFavoritos: ['CDZ', 'Naruto', 'Jujutsu Kaisen'], sobrenome: 'Morita' }

pessoa.nome = "Ana Beatriz Emiko"
// 'Ana Beatriz Emiko'
pessoa
// {nome: 'Ana Beatriz Emiko', idade: 26, ehDev: true, animesFavoritos: ['CDZ', 'Naruto', 'Jujutsu Kaisen'], sobrenome: 'Morita'}

delete pessoa.sobrenome
// true
pessoa
// {nome: 'Ana Beatriz Emiko', idade: 26, ehDev: true, animesFavoritos: ['CDZ', 'Naruto', 'Jujutsu Kaisen'])}
