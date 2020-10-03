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
    const year = req.params.ano;
    res.status(200).send(filmes.find(filme => filme.Year == ano ))
}

const getByTitle = (req, res) => {
    const title = req.query.titulo;
    res.send(200).send(filmes.find(filme => filme.Title == titulo))
}

const getByGenre = (req, res) => {
    const genero = req.query.genero;
    let novaLista = [];

    filmes.forEach(filme => {
        let generoList = filme.Genre.split(",")
        console.log(generoList);
        for(item of generoList){
            if(item.includes(genero) && filme.Genero.includes(item)){
                novaLista.push(filme);
            }
        };
    })

    res.status(200).send(novaLista);
}

module.exports = {
    getAll,
    getById,
    getByYear,
    getByTitle,
    getByGenre
}
