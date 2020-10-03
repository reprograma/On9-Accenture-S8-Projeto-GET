const express = require('express');
const app  = express();
const porta = 3000;
const estudantes = require('./estudantes.json');

app.use(express.json());

//[GET] http://localhost:3000/estudantes
app.get('/estudantes', function(req, res) {
    res.json(estudantes);
});

app.listen(porta, function() {
    console.log("Servidor rodando")
});