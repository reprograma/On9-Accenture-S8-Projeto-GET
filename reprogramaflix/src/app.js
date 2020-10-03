const express = require("express")
const app = express()

const filmes = require("./routes/filmesRoutes")
const series = require("./routes/seriesRoutes")

app.use("/filmes", filmes) //chamei a nossa rota raiz e só pedi pra ser usada
app.use("/series", series) //chamei a nossa rota raiz e só pedi pra ser usada

module.exports = app