const series = require("../models/series.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(series)
}

const getById = (request, response) =>{
    const id = request.params.id
    response.status(200).send(series.find(serie => serie.id == id))
}

const getGenre = (request, response) => {
    const genre = request.params.genre
    response.status(200).send(series.find(serie => serie.genre == genre))
}

const getTitle = (request, response) => {
    const title = request.params.title
    response.status(200).send(series.find(serie => serie.title == title))
}

const getActors = (request, responde) => {
    const actors = request.params.actors
    response.status(200).send(series.find(serie => serie.actors == actors))
}


module.exports = {
    getAll,
    getById,
    getGenre,
    getTitle,
    getActors
    
}