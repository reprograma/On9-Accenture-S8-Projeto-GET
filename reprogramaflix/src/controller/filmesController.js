const filmes = require("../models/filmes.json");

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(filmes);
}

const getById = (req, res) => {
    const id = req.params.id;
    res.status(200).send(filmes.find(filme => filme.id == id));

}

const getByTitle = (req, res) => {
    /* const end = req.url;
    const usp = new URLSearchParams(end);
    const r = usp.getAll('Title'); */
    const { title } = req.query;
    const findTitle = filmes.find({ title });
    res.json(findTitle);

    console.log({ findTitle });

    //filmes.find(a => a.Title == title)

}

const getByYear = (req, res) => {
    const year = req.params.Year;
    res.status(200).send(fimes.find(fyear => fyear.Year == year));
}


module.exports = { getAll, getById, getByTitle, getByYear };