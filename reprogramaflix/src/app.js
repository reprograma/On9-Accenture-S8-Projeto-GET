const express = require("express")
const app = express()
//execução do express vai ser chamada de app

const filmes = require("./routes/filmesRoutes")
const series = require("./routes/seriesRoutes")

app.use("/filmes", filmes)
app.use("/series", series)

module.exports = app