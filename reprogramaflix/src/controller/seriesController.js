const series = require("../models/series.json")

const getAll =  (request, response) =>{
    console.log(request.url)
    response.status(200).send(series)
}

const getById = (request,response) => {
    const id = request.query.id
    response.status(200).send(series.find(serie => serie.id == id ))
}

const getByTitle = (request,response) => {
    const title = request.query.title //coloquei query no lugar do params
    response.status(200).send(series.find(serie => serie.title == title ))
}

const getByGenre = (request,response) => {
    const genre = request.query.genre
    let novaLista = []

    series.forEach(serie => {
        if(serie.genre.includes(genre)){
            novaLista.push(serie)
        }
    })

    response.status(200).send(novaLista)
}

/*const getByActors = (request,response) => {
    const actor = request.query.actor
    let novaLista = []

    series.forEach(serie => {
        if(serie.actors.includes(actor)){
            novaLista.push(serie)
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
}