const filmes = require('../models/filmes.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(filmes);
}

const getById = (req, res) => {
    const id = req.params.id;
    res.status(200).send(filmes.find(filme => filme.id == id ))
}

const getByYear = (req, res) => {
    const year = req.params.Year;
    res.status(200).send(filmes.find(filme => filme.Year == year ))
}

module.exports = {
    getAll,
    getById,
    getByYear
}
