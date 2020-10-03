const series = require("../models/series.json")

const getAll = (req,res) =>{
    console.log(req.url)
    res.status(200).send(series)
}

const getById = (req, res) => {
    const id = req.params.id
    res.status(200).sen(filmes.fins(filme => filme.id == id))
}


module.exports = {
    getAll,
    getById
}
