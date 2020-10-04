const express = require("express")
const app = express()

// um ponto . para entrar
const filmes = require("./routes/filmesRoutes")
const series = require("./routes/seriesRoutes")


// o que tiver dentro do () vao receber todas as rotas padroes
app.use("/filmes", filmes)
app.use("/series", series)

module.exports = app  