const offset = 0
const limit = 10

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
    .then((response) => response.json()) // response.json() é uma função que converte a resposta da requisição em um objeto JSON
    .then((json) => {
        console.log(json.results) // json.results é um array de objetos que contém os detalhes de cada pokemon
    })
    .then((pokemons) => {
        console.log(pokemons)
    })

    // ❌ Isso NÃO funciona com requisições HTTP
const resposta = fetch('https://api.com/dados') // Erro!
const dados = resposta.json() // Erro!
console.log(dados) // Erro!