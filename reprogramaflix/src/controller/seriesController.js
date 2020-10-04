const series = require("../models/series.json");
const { request, response } = require("express");

const getAll = (request, response) =>{
    console.log(request.url);
    response.status(200).send(series);
}

const getById = (request, response) =>{
    const id = request.params.id //vai pegar a requisão, o parametro que vai receber o id 
    response.status(200).send(series.find(serie => serie.id == id)) //usar o find para encontrar o id solicitado ((o find so mostra o primeiro item encontrado))
}

const getByTitle = (request, response) =>{
    const title = request.query.title
    response.status(200).send(series.find(serie => serie.title == title))
    //response.send
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

module.exports ={
    //esse module.exports exporta uma função ou arquivo. Assim, sabe-se que utilizaremos o elemento fora desse arquivo
    getAll,
    getById,
    getByTitle,
    getActor
}
