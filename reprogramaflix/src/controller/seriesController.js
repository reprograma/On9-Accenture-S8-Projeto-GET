const series = require("../models/series.json") //chamar a model, chamar o arquivo

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(series)
}

const getById = (request, response) =>{
    const id = request.query.id
    console.log(request.query)
    response.status(200).send(series.find(serie => serie.id == id))
}

const getByTitle = (request, response) =>{
    const title = request.query.title
    response.status(200).send(series.find(serie => serie.title == title))
}

const getByTotalSeasons = (request, response) =>{
    const totalSeasons = request.query.totalSeasons
    response.status(200).send(series.find(serie => serie.totalSeasons == totalSeasons))
}

/*const getByGenre = (request, response) =>{
    const genre = request.query.genre
    response.status(200).send(series.find(serie => serie.genre == genre))
}
*/


module.exports = {
    getAll,
    getById,
    getByTitle,
    getByTotalSeasons,
    //getByGenre
}

