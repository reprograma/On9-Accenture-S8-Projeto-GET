const express = require("express")
const app = express()

const filmes = require("./routes/filmesRoutes")
const series = require("./routes/seriesRoutes")

app.use("/filmes", filmes)
app.use("/series", series)

module.exports = app