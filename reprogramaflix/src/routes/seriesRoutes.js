const controller = require("../controller/seriesController");
const express = require("express");
const router = express.Router();

router.get("/todas", controller.getAll);
router.get("/genero", controller.getByGenre);
router.get("/titulo", controller.getByTitle);
router.get("/temporadas", controller.getByTotalSeasons);
router.get("/:id", controller.getById);

module.exports = router;