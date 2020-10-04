const series = require("../models/series.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(series)
}

const getById = (request, response) =>{
    const id = request.params.id
    response.status(200).send(series.filter(serie => serie.id == id))
}

const getByGenre = (request, response) =>{
    const genre = request.params.genre
    response.status(200).send(genre.filter(genre => serie.genre == genre ))
}
module.exports = {
    getAll,
    getById,
    getByGenre
}