const filmes = require("../models/filmes.json");

//Aqui ele pega tudo do json e ele pergunta e responde
const getAll = (request, response) => {
  //aqui só olha qual o endpoint que ele está chamando
  console.log(request.url);
  //aqui vai responder o status(200). Vai enviar resposta para acessar o filmes
  response.status(200).send(filmes);
};

const getByYear = (request, response) => {
  const year = request.params.year;
  console.log(year);
  response.status(200).send(filmes.filter((filme) => filme.Year == year));
};

const getById = (request, response) => {
  const id = request.params.id;
  response.status(200).send(filmes.find((filme) => filme.id == id));
};

const getByTitle = (request, response) => {
  const titulo = request.query.titulo;
  response.status(200).send(filmes.find((filme) => filme.Title == titulo));
};

const getByGenre = (request, response) => {
  const genero = request.query.genero;
  let novaLista = [];

  filmes.forEach((filme) => {
    let generoList = filme.Genre.split(",");
    for (item of generoList) {
      if (item.includes(genero) && filme.Genre.includes(item)) {
        console.log(filme);
        novaLista.push(filme);
      }
    }
  });
  response.status(200).send(novaLista);
};

module.exports = {
  getAll,
  getById,
  getByYear,
  getByTitle,
  getByGenre,
};
