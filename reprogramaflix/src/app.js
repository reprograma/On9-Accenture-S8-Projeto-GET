const express = require("express");
const app = express();

const filmes = require("./routes/filmesRoutes")
const series = require("./routes/seriesRoutes")

app.use("/filmes", filmes)
app.use("/series", series)
app.use("/genres", filmes)
app.use("/genres", series)
app.use("/title", filmes)
app.use("/title", series)
app.use("/actors", filmes)
app.use("/actors", series)


module.exports = app //pega tudo que app e vai  mandar