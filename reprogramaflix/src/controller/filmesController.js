const filmes = require("../models/filmes.json")

const getAll = (request, response)=> {
    console.log(request.url)
    response.status(200).send(filmes)
}

const getById = (request, response) =>{
    const id = request.params.id
    response.status(200).send(filmes.find(filme => filme.id == id))
}

const getGenre = (request, response) => {
    console.log = request.params.genre
    response.status(200).send(filmes.find(filme => filme.genre == genre))
}

const getTitle = (request, response) => {
    console.log = request.params.getTitle
    response.status(200).send(filmes.find(filme => filme.title == title))
}

const getActors = (request, response) => {
    console.log = request.params.getActors
    response.status(200).send(filmes.find(filme => filme.actors == actors))
}

module.exports = {
    getAll,
    getById,
    getGenre,
    getTitle,
    getActors
    
}