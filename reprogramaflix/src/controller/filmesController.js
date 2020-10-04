const filmes = require("../models/filmes.json");

const getAll = (request, response) =>{
    console.log(request.url);
    response.status(200).send(filmes)

const getByTitle = (request, response) =>{
    const titulo = request.query.titulo
    response.send(200).send (filmes.find(filme => filme.Title == titulo))
}    
}
const getById = (request, response) =>{
    const id = request.params.id
    response.status(200).send(filme.find(filme => filme.id == id))
}
const getByYear = (request, response) =>{
    const year = request.query.year
    response.status(200).send(filmes.filter(filme => filme.Year == year))
}
const getByGenre = (request, response)=>{
    const genero = request.query.genero
    filmes.forEach(filme =>{
        let generoList = filme.Genre.split(",")
        console.log(generoList)
        for(item of generoList){
            if(item.includes(genero) && filme.Genre.includes(item)){
                console.log(filme)
                novaLista.push(filme);
            }        
        }
    })
    response.status(200).send(novaLista);
}
module.exports = {
    getAll,
    getByTitle,
    getByGenre,
    getByYear,
    getById
};
