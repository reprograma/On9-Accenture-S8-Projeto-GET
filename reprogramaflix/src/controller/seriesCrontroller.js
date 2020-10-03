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

const getByActors = (req, res) => {
    const atores = req.query.atores;
    let novaLista = [];

    series.forEach(serie => {
        let atoresList = serie.actors.split(",")
        console.log(atoresList);
        for(item of atoresList){
            if(item.includes(atores) && serie.Atores.includes(item)){
                novaLista.push(serie);
            }
        };
    })

    res.status(200).send(novaLista);
}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByActors
}