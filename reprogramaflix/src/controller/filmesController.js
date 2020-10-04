const filmes = require("../models/filmes.json"); //o ".." volta pastas assim como no terminal

const getAll = (request, response) =>{
    console.log(request.url);
    response.status(200).send(filmes); //mostrar que está OK e enviar filmes q esta dentro do json

}

const getById = (request, response) =>{
    const id = request.params.id //vai pegar a requisão, o parametro que vai receber o id 
    response.status(200).send(filmes.find(filme => filme.id == id)) //usar o find para encontrar o id solicitado ((o find so mostra o primeiro item encontrado))
}

const getByTitle = (request, response) =>{
    const title = request.query.title
    response.status(200).send(filmes.find(filme => filme.title == title))
    //response.send
}

const getByGenre = (request, response) =>{
    const genero = request.query.genero

    filme.forEach(filme =>{
        let generoList = filme.Genre.split(",");
        for(item of generoList){
            if(item.includes(genero) && filme.Genre.includes(item)){
                console.log(filme);
                response.send(filme)
            }
        }
    })

}

module.exports ={
    //esse module.exports exporta uma função ou arquivo. Assim, sabe-se que utilizaremos o elemento fora desse arquivo
    getAll, 
    getById, //da mesma forma que exportei getAll, estou exportando getById
    getByTitle,
    getByGenre
}

 