const filmes = require("../models/filmes.json")
//requere tudo que tem no json
//função pega tudo, que tem uma pergunta e uma resposta
const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(filmes)
}
//logica para pegar todos os filmes

//logica para pegar os filmes por ID
const getById = (request, response) =>{
    const id = request.params.id
    response.status(200).send(filmes.find(filme => filme.id == id))

}

const getByYear = (request, response) => {
    const year = request.query.year
    response.status(200).send(filmes.find(filme => filme.Year == year))
}

const getByTitle = (request, response) => {
    const title = request.query.title
    response.status(200).send(filmes.find(filme => filme.Title == title))
}

const getByGenre = (request, response) => {
    const genre = request.query.genre
    let novaLista =[]

    filmes.forEach(filme =>{
        let generoList = filme.Genre.split(",");
        console.log(generoList)
        for (item of generoList) {
            if (item.includes(genre) && filme.Genre.includes(item)){
            console.log(filme)
            novaLista.push(filme);
        }
    }
    
})

response.status(200).send(novaLista)

}

const getByActors = (request, response) => {
    const actor = request.query.actor
    let novaListaActor =[]

    filmes.forEach(filme =>{
        let actorList = filme.Actors.split(",");
        console.log(actorList)
        for (item of actorList) {
            if (item.includes(actor) && filme.Actors.includes(item)){
            console.log(filme)
            novaListaActor.push(filme);
        }
    }
    
})

response.status(200).send(novaListaActor)

}


 //modulo para exportar uma função(que já está pronta), para ser usada em outro arquivo.
module.exports = {
    getAll,
    getById,
    getByYear,
    getByTitle,
    getByGenre,
    getByActors
   
}