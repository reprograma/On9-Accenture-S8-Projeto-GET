
const series = require("../models/series.json")

const getAll = (request, response)=>{
    console.log(request.url)
    response.status(200).send(series)
}

module.exports = {
    getAll
}