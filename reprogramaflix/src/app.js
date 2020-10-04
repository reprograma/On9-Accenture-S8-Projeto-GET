const express = require("express")
const app = express()

const filmes = require("./routes/filmesRouts")
const series = require("./routes/seriesRouts")

app.use("/filmes", filmes)
app.use("/series", series)

module.exports = app