const { request } = require("express");
const filmes = require("../models/filmes.json");

// Retorna todos os filmes
const getAll = (request, response) => {
    console.log(request.url);
    response.status(200).send(filmes);
};

// Retorna o filme pelo ID indicado
const getById = (request, response) => {
    const id = request.params.id;
    response.status(200).send(filmes.find(filme => filme.id == id));
};

// Retorna o filme pelo título indicado
const getByTitle = (request, response) => {
    const title = request.query.Title;
    // console.log(request.query);
    // console.log(request.query.Title);
    response.status(200).send(filmes.find(filme => filme.Title == title));
};

// Retorna o filme pelo ano indicado
const getByYear = (request, response) => {
    const year = request.query.Year;
    response.status(200).send(filmes.find(filme => filme.Year == year));
};

// Retorna o filme pelo gênero indicado
const getByGenre = (request, response) => {
    const genero = request.query.Genre;
    let novaLista = []; // Nova lista para guardar os filmes retornados no if, pois o response por si só não retorna

    // O forEach vai executar a função abaixo em cada elemento do array
    filmes.forEach(filme => {
        let generoList = filme.Genre.split(","); // Para transformar a strigona do Genre em array
        // console.log(generoList);
        // O for...of vai percorrer a variável iteravel chamando a função com instruções a serem executadas
        for(item of generoList) {
            // console.log(item);
            if(item.includes(genero) && filme.Genre.includes(item)) {
                // console.log(filme);
                novaLista.push(filme); // Para adicionar o filme encontrado na nova lista
                // response.status(200).send(filme); // O response só vai retornar o primeiro item encontrado, se houver mais ele não vai mostrar
            };
        };
    });

    response.status(200).send(novaLista);
};

const getByLanguage = (request, response) => {
    const language = request.query.Language;
    let newList = [];

    filmes.forEach(filme => {
        let languageList = filme.Language.split(",");
        for(item of languageList) {
            if(item.includes(language) && filme.Language.includes(item)) {
                newList.push(filme);
            };
        };
    });

    response.status(200).send(newList);
};



// Exportando todas as funções para serem usadas no routes
module.exports = {
    getAll,
    getById,
    getByTitle,
    getByYear,
    getByGenre,
    getByLanguage
}