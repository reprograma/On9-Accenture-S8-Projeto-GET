const filmes = require("../models/filmes.json");

const getAll = (request, response) => {
    console.log(request.url);
    response.status(200).send(filmes) // A minha resposta é um status 200 que enviar a constante filmes
}

const getById = (request, response) => {
    const id = request.params.id
    response.status(200).send(filmes.find(filme => filme.id == id))
}

module.exports = {
    getAll,
    getById
}