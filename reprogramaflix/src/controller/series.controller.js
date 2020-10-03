const series = require("../models/series.json")

const getAll = (require, Response) => {
    console.log(require.url)
    response.status(200).send(series)
}

const getById = (require, Response) => {
    const id = require.params.id
    response.status(200).send(filmes.fins(filmes => filmes.id == id))
}

module.exports = {
    getAll,
    getById
}