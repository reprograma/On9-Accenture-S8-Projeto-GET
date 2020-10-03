const series = require("../models/series.json")

const getAll = (request,response) => {
    console.log (request.url)
    response.status(200).send(series)
}

const getById = (request, response) => {
    const id = request.params.id
    response.status(200).send(series.find(serie => serie.id == id))
}

const getByTitle = (request, response) => {
    const title = request.query.title
    response.status(200).send(series.find(serie => serie.title == title))
}

const getByActors = (request, response) => {
    const actor = request.query.actor;
    let serie;
    let novaListaActor = [];

    for (let index = 0; index < series.length; index++) {

        serie = series[index];
        if (serie.actors.includes(actor)) {
            novaListaActor.push(serie)
        }
    }
   
    response.status(200).send(novaListaActor)
}


const getByGenre = (request, response) => {
    const genre = request.query.genre;
    let serie;
    let novaListaGenre = [];

    for (let index = 0; index < series.length; index++) {

        serie = series[index];
        if (serie.genre.includes(genre)) {
            novaListaGenre.push(serie)
        }
    }
    //console.log(newList)
    response.status(200).send(novaListaGenre)
}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByActors,
    getByGenre
}