const { request, response } = require("express")
const filmes = require("../models/filmes.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(filmes)
}

const getById = (request,response) => {
    const id = request.query.id
    response.status(200).send(filmes.find(filme => filme.id == id ))
}

const getByTitle = (request,response) => {
    const title = request.query.title //coloquei query no lugar do params
    response.status(200).send(filmes.find(filme => filme.Title == title ))
}

const getByYear = (request,response) => {
    const ano = request.query.ano 
    response.status(200).send(filmes.find(filme => filme.Year == ano ))
}

const getByGenre = (request,response) => {
    const genre = request.query.genre
    let novaLista = []

    filmes.forEach(filme => {
        let genreList = filme.Genre.split(",")
        for(item of genreList){
            if(item.includes(genre) && filme.Genre.includes(item)){
                novaLista.push(filme)
            }
        }
    })

    response.status(200).send(novaLista)
}

/*const getByLanguage = (request,response) => {
    const idioma = request.query.idioma
    let lista = []

    filmes.forEach(filme => {
        let idiomaLista = filme.Language.split(",")
        for(item of idiomaLista){
            if(item.includes(idioma) && filme.Language.includes(item)){
                lista.push(filme)
            }
        }
    })

    response.status(200).send(lista)
}

const getByActors = (request,response) => {
    const actor = request.query.actor
    let novaLista = []

    filmes.forEach(filme => {
        let actorList = filme.Actors.split(",")
        for(item of actorList){
            if(item.includes(actor) && filme.Actors.includes(item)){
                novaLista.push(filme)
            }
        }
    })

    response.status(200).send(novaLista)
}*/

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    //getByActors
    //getByLanguage
    getByYear
}