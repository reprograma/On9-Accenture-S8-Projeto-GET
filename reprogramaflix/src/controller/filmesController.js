const { request, response } = require("express")
const filmes = require("../models/filmes.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(filmes)
    }

const getById = (request, response) =>{
    const id = request.params.id
    response.status(200).send(filmes.find(filme => filme.id == id))
}


const getByTitle = (request, response) =>{
    const title = request.query.title
    response.status(200).send(filmes.filter(filme => filme.Title == title))
}

  const getByGenre = (request, response) =>{
    const genre = request.query.genre
    let novaLista = []
    filmes.forEach(filme =>{
        let generoList = filme.Genre.split(",")
        for(item of generoList){
            if(item.includes(genre) && filme.Genre.includes(item)){
                console.log(filme)
                novaLista.push(filme)
            }
        }
    })
    response.status(200).send(novaLista)
}

const getByActors = (request, response) =>{
    const actors = request.query.actors
    let novaLista = []
    filmes.forEach(filme =>{
        let actorsList = filme.Actors.split(",")
        for(item of actorsList){
            if(item.includes(actors) && filme.Actors.includes(item)){
                console.log(filme)
                novaLista.push(filme)
            }
        }
    })
    response.status(200).send(novaLista)
}


module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    getByActors
}