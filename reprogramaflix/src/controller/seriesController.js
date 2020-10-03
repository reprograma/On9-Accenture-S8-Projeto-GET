const express = require("express");
const series = require("../models/series.json");

const getAll = (request, response) => {
    console.log(request.url);
    response.status(200).send(series)
}

const getById = (request, response) => {
    const id = request.params.id;
    response.status(200).send(series.find(serie => serie.id == id))
}

const getByGenre = (request, response) => {

    const genero = request.query.genre;
    let serie;
    let newList = [];

    for (let index = 0; index < series.length; index++) {

        serie = series[index];
        if (serie.genre.includes(genero)) {
            newList.push(serie)
        }
    }
    //console.log(newList)
    response.status(200).send(newList)
}

const getByTitle = (request, response) => {
    const titulo = request.query.title;
    response.status(200).send(series.find(serie => serie.title == titulo))
}

const getByTotalSeasons = (request, response) => {
    const totalOfSeasons = request.query.totalSeasons;
    response.status(200).send(series.find(serie => serie.totalSeasons == totalOfSeasons))
}

module.exports = {
    getAll,
    getById,
    getByTitle,
    getByGenre,
    getByTotalSeasons
}