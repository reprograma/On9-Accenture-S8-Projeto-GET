const { request } = require("express")
//controller: toda a lógica da API

const filmes = require("../models/filmes.json")

const getAll = (request, response) => {
    //mostra o que o usuário requisitou
    console.log(request.url)
    //responde o status e também envia o que tem no json
    response.status(200).send(filmes)
}

const getById = (request, response) =>{
    const id = request.params.id
    response.status(200).send(filmes.find(filme => filme.id == id ))
}

const getByTitle = (request,response)=>{
    const titulo = request.query.titulo
    
    response.status(200).send(filmes.find(filme => filme.Title == titulo))
    
}

const getByGenre = (request,response)=>{
    const genero = request.query.genero
    let newList = []

    filmes.forEach(filme=>{
        let listaGenero = filme.Genre.split(",")
        for(unidade of listaGenero){
            if(unidade.includes(genero) && filme.Genre.includes(unidade)){
                newList.push(filme)
            }

            }
        
        })
            response.status(200).send(newList)
    }
        

    



module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
}