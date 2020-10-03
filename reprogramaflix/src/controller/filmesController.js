//lógica das coisas
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
    const title = request.params.Title
    response.status(200).send(filmes.find(filme => filme.Title == title))
}

const getByDirector = (request, response) =>{
    const director = request.params.Director
    response.status(200).send(filmes.find(filme => filme.Director == director))
}

const getByCountry = (request, response) =>{
    const country = request.params.Country
    response.status(200).send(filmes.find(filme => filme.Country == country))
}

const getByGenre = (request, response) =>{
    const genero = request.query.genero
    let novaLista = []

    filmes.forEach(filme =>{
        let generoList = filme.Genre.split(",")
            for(item of generoList){
            if(item.includes(genero) && filme.Genre.includes(item)){
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
    getByDirector,
    getByCountry,
    getByGenre
}
