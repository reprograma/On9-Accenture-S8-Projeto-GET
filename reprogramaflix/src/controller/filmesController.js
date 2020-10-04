const { response } = require("express")
const filmes = require("../models/filmes.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(filmes)
}

const getById = (request, response) => {
    const id = request.params.id
    response.status(200).send(filmes.find(filme => filme.id == id))
}

const getByTittle = (request, response) => {
    const titulo = request.query.titulo
    response.status(200).send(filmes.find(filme => filme.Title == titulo))
}

const getByGenre = (request, response) => {
    const genero = request.query.genero
    let novaLista = []

    filmes.forEach(filme =>{
        let generoList = filme.Genre.split(",")
        for(item of generoList){
            if(item.includes(genero) && filme.Genre.includes(item)) {
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