const { request, response } = require("express");
const series = require("../models/series.json");

// Retorna todas as séries
const getAll = (request, response) => {
    console.log(request.url);
    response.status(200).send(series);
};

// Usando com o params
// const getById = (request, response) => {
//     const id = request.params.id;
//     response.status(200).send(series.find(serie => serie.id == id));
// };

// Usando com o query. Retorna pelo ID
const getById = (request, response) => {
    const id = request.query.id;
    console.log(request.query)
    response.status(200).send(series.find(serie => serie.id == id));
};

// Retorna pelo título
const getByTitle = (request, response) => {
    const title = request.query.title;
    response.status(200).send(series.find(serie => serie.title == title));
};

// Retorna pela temporada
const getBySeasons = (request, response) => {
    const season = request.query.totalSeasons;
    response.status(200).send(series.find(serie => serie.totalSeasons == season));
};

// Retorna pelo Gênero
const getByGenre = (request, response) => {
    const genre = request.query.genre;
    let novaLista = [];

    series.forEach(serie => {
        let generoLista = serie.genre;

        for(item of generoLista) {
            // console.log(item)
            if(item.includes(genre) && serie.genre.includes(item)) {
                // console.log(serie)
                novaLista.push(serie);
            };
        };
    });

    response.status(200).send(novaLista);

}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getBySeasons,
    getByGenre
}