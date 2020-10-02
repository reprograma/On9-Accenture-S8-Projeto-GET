const series = require('../models/series.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(series);
}

const getById = (req, res) => {
    const id = req.params.id;
    res.status(200).send(series.find(serie => serie.id == id ))
}

const getByTitle = (req, res) => {
    const title = req.params.title;
    res.status(200).send(series.find(serie => serie.title == title))
}

module.exports = {
    getAll,
    getById,
    getByTitle
}