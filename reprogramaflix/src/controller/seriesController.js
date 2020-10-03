const series = require("../models/series.json");

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(series)
}

const getById = (request, response) => {
    const id = request.params.id
    response.status(200).series.find(serie => serie.id == id)
}

const getByTitle = (request, response) => {
    const title = request.query.title
    response.status(200).series.find(serie => serie.title == title)
}
const getByGenre = (request, response) => {
    const genero = request.query.genero;
    let novaLista = series.filter(serie => serie.genre.includes(genero));
    
    response.status(200).send(novaLista);
}

const getByActors = (request, response) => {
    const ator = request.query.ator;
    let novaLista = series.filter(serie => serie.actors.includes(ator));

    response.status(200).send(novaLista);
}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    getByActors
}