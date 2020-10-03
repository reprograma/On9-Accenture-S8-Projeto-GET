const filmes = require("../models/filmes.json")

const getAll = (req, res) =>{
console.log(req.url)
res.status(200).send(filmes)
}

const getById = (req,res) =>{
const id = req.params.id
res.status(200).send(filmes.find(filme => filme.id == id))
}

module.exports = {
    getAll,
    getById
}