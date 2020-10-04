const controller = require("../controller/seriesController")

const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAll);
router.get("/:id", controller.getId);
router.get("/genero/:genre", controller.getGenre);
router.get("/:title", controller.getByTitle);
router.get("/seasons/:season", controller.getByTotalSeasons);
router.get("/actors/:actors", controller.getActor);

module.exports = router;