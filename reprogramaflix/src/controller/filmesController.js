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
    const title = req.query.Title;
    res.status(200).send(filmes.find(filme => filme.Title == title));
}

const getByYear = (req, res) => {
    const year = req.query.Year;
    res.status(200).send(filmes.find(filme => filme.Year == year));
}

const getByGenre = (req, res) => {
    const genero = req.query.Genre;

    let novaLista = [] // Precisa dessa nova lista para armazenar os filmes retornados no if, pois o response não retorna 
    filmes.forEach(filme => {
        let generoList = filme.Genre.split(",");
        for (item of generoList) {
            if (item.includes(genero) && filme.Genre.includes(item)) {
                novaLista.push(filme);
                //res.status(200).send(filme); // não funciona como esperado pq o response retorna apenas o primeiro item achado, se houver mais de um ele n retornará, apenas o primeiro encontrado
            }
        }
    })

    res.status(200).send(novaLista);
}



module.exports = { getAll, getById, getByTitle, getByYear, getByGenre };