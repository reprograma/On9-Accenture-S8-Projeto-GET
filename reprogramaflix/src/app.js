//rota raiz
const express = require("express")
const app = express()

const filmes = require("./routes/filmesRoutes")

app.use("/filmes", filmes)

module.exports = app
