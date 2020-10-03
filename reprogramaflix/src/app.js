const express = require("express");
const app = express();

const filmes = require("./routes/filmesRoutes"); //chamando a rota raiz
const series = require("./routes/seriesRoutes"); // chamando a rota raiz

app.use("/filmes", filmes); // usando a rota raiz
app.use("/series", series); // usando a rota raiz


module.exports = app; // exportando o app