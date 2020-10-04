const controller = require("../controller/filmesController");

//aqui a gente chama o express que a gente instalou
const express = require("express");
const { getByTitle } = require("../controller/filmesController");
const { getByGenre } = require("../controller/filmesController");
const router = express.Router();

router.get("/todos", controller.getAll);
router.get("/title", controller.getByTitle);
router.get("/genre", controller.getByGenre);
router.get("/:year/pesquisar", controller.getByYear);
router.get("/:id", controller.getById);

//aqui a gente exporta tudo que é router
module.exports = router;
