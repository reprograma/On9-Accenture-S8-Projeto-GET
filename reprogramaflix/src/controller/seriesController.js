const series = require("../models/series.json")

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(series)

   }

   const getById = (request, response) => {
    const id = request.query.id
    console.log(request.query)
    response.status(200).send(series.find(serie => serie.id == id ))

   }

module.exports = {
    getAll,
    getById,
}