const series = require("../models/series.json");

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(series);
}

const getById = (req, res) => {
    const id = req.params.id;
    res.status(200).send(series.find(serie => serie.id == id));

}

const getByTitle = (req, res) => {
    const titulo = req.query.title;
    res.status(200).send(series.find(serie => serie.title == titulo));
}

const getByTotalSeasons = (req, res) => {
    const temporadas = req.query.totalSeasons;
    res.status(200).send(series.find(serie => serie.totalSeasons == temporadas));
}

const getByGenre = (req, res) => {
    const genero = req.query.genre
    let listaGeneroSerie = [];
    series.forEach(serie => {
        for (item of serie.genre) {
            if (item.includes(genero) && serie.genre.includes(item)) {
                listaGeneroSerie.push(serie);
            }
        }
    });
    res.status(200).send(listaGeneroSerie);

}


module.exports = { getAll, getById, getByTitle, getByTotalSeasons, getByGenre }