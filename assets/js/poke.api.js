
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url) // fetch é uma função que faz uma requisição para a url(HTTP) passada como argumento
        .then((response) => response.json()) // response.json() é uma função que converte a resposta da requisição em um objeto JSON
        .then(convertPokeApiDetailToPokemon) // convertPokeApiDetailToPokemon é uma função que converte o detalhe do pokemon em um objeto Pokemon
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        // then é uma função que recebe uma função como argumento e retorna uma Promise
        // then() = "Quando a requisição terminar, faça isso"
        // response é o objeto que representa a resposta da requisição
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}
