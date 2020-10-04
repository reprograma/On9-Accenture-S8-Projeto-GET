const { request, response } = require("express");
const { getMaxListeners } = require("../app");
const series = require ("../models/series.json");

const getAll = (request, response) =>{
    console.log(request.url);
    response.status(200).send(series)
};

const getId = (request, response) => {
    const id = request.params.id;
    response.status(200).send(series.find(serie => serie.id == id));
} 

const getGenre = (request, response) => {
    const genre = request.params.genre;
    response
    .status(200)
    .send(series.filter((serie)=>
    serie.genre.map((genre) => genre.toLowerCase()).includes(genre.toLowerCase())));


}

const getActor = (request, response) =>{
    const actor = request.query.actors
    let novaLista = []

    series.forEach(actor =>{
        let actorList = actor.actors.split(",")
            for(item of actorList){
            if(item.includes(actor) && series.actors.includes(item)){
                console.log(actor)
                novaLista.push(actor)

            }
        }
    })

    response.status(200).send(novaLista)
}


const getByTitle = (request, response) => {
    const title = request.query.title
    response.status(200).send(series.find(serie => serie.title == title))
}

const getByTotalSeasons = (request, response) => {
    const totalOfSeasons = request.query.totalSeasons;
    response.status(200).send(series.find(serie => serie.totalSeasons == totalOfSeasons))
}

module.exports = {
    getAll,
    getId,
    getGenre,
    getByTitle,
    getByTotalSeasons,
    getActor
};