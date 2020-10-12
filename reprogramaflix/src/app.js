const express = require("express");
const app = express(); //vamos chamar a execução do express de app

const filmes = require("./routes/filmesRoutes"); //um ponto só (.) para entrar na pasta routes
const series = require("./routes/seriesRoutes");

app.use("/filmes", filmes);
app.use("/series", series);


module.exports = app; 