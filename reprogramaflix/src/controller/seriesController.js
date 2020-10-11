//const { request }
const series = require("../models/series.json");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(series);
};

const getById = (request, response) => {
  const id = request.query.id;
  console.log(request.query);
  response.status(200).send(series.find(serie => serie.id == id));
};

const getByGenre = (request, response) => {
    const genero = request.query.genero;
    let novaLista = [];
  
    series.forEach((serie) => {
      let generoList = serie.genre;
      for (item of generoList) {
        if (item.includes(genero) && serie.genre.includes(item)) {
          console.log(serie);
          novaLista.push(serie);
        }
      }
    });
    response.status(200).send(novaLista);
  };

module.exports = {
  getAll,
  getById,
  getByGenre
};
