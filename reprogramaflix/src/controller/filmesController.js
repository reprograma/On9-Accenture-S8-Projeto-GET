const { request } = require("express")
const filmes = require("../models/filmes.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(filmes)

}
const getById = (request, response) =>{
    const id = request.params.id
    console.log("Passou no id")
    response.status(200).send(filmes.find(filme => filme.id == id))
}

const getByTitulo = (request, response) => {
   const titulos = request.query.titulos  // QUERY é o parametro que vem depois da "?"
   const genero = request.query.genero
   console.log(genero)
   console.log(titulos)
   response.status(200).send(filmes.find(filme => filme.Title == titulos))
}

const getByGenero = (request, response) => {
    const genero = request.query.genero;

    let novaLista = []
    filmes.forEach(filme => { //FOREACH é o for PARA CADA FILME DENTRO DE FILMES Exemplo: para cada filme dentro da lista de filmes
     let listaGenero = filme.Genre.split(",")
     console.log(listaGenero)
     console.log(genero)
     for(item of listaGenero){
         if(item.trim() == genero){ //o trim remove espaços a esquerda  e a direita do valor da variavel
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
    getByTitulo,
    getByGenero
}