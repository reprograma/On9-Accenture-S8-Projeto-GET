const controller = require("../controller/seriesController");

const express = require("express");
const { getById } = require("../controller/seriesController");
const router = express.Router();

router.get("/todos", controller.getAll);
// router.get("/:id", controller.getById); // Usando com o params. Se usar ele, daí coloca a rota por último (abaixo de todas as outras)
router.get("/", controller.getById); // Usando com o query params. Pode deixar onde está.
router.get("/titulo", controller.getByTitle);
router.get("/temporada", controller.getBySeasons);
router.get("/genero", controller.getByGenre);

module.exports = router;