const filmes = require("../models/filmes.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(filmes)
}

const getById = (request,response) => {
    const id = request.params.id
    response.status(200).send(filmes.find(filme => filme.id == id ))
}

module.exports = {
    getAll,
    getById 
}