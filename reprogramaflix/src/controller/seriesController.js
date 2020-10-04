const series = require("../models/series.json");

const getAll = (request, response) => {
    console.log(request.url);
    response.status(200).send(series);
}

const getById = (request, response) => {
    const id = request.params.id;
    response.status(200).send(series.find(serie => serie.id == id ))
}

const getByGenre = (request, response) => {
        const genero = request.query.genre;
        let novaLista = series.filter(serie => serie.genre.includes(genero));
        response.status(200).send(novaLista);
    }

const getByTitle = (request,response) => {
    const title = request.query.title;
    response.status(200).send(series.find(serie => serie.title == title ))
}

module.exports = {
    getAll,
    getById,
    getByGenre,
    getByTitle
}