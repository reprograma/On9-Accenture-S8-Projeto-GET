const series = require("../models/series.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(series)
}

const getById = (request, response) => {
    const id = request.query.id
    response.status(200).send(series.find(serie => serie.id == id))
}

const getByTittle = (request, response) => {
    const titulo = request.query.titulo
    response.status(200).send(series.find(serie => serie.Title == titulo))
}

const getByGenre = (request, response) => {
    const genero = request.query.genero
    let novaLista = []

    filmes.forEach(serie =>{
       // let generoList = serie.Genre.split(",")
        for(item of generoList){
            if(item.includes(genero) && serie.Genre.includes(item)) {
                novaLista.push(filme)
            }
        }
    })
    response.status(200).send(novaLista);
}


module.exports = {
    getAll,
    getById,
    getByTittle,
    getByGenre
}