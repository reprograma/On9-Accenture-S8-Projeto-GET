const controller = require("../controller/filmesController");

const express = require("express");
const { getByTitle } = require("../controller/seriesController");
const router = express.Router();

router.get("/todos", controller.getAll);
router.get("/title", controller.getByTitle);
router.get("/year", controller.getByYear);
router.get("/genre", controller.getByGenre);
router.get("/language", controller.getByLanguage);
router.get("/:id", controller.getById);

module.exports = router