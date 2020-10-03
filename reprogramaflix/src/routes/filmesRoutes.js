const controller = require("../controller/filmesController")

const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/:Title", controller.getByTitle)
router.get("/:Director", controller.getByDirector)
router.get("/:Country", controller.getByCountry)
router.get("/Genre", controller.getByGenre)
router.get("/:id", controller.getById) //deixar sempre por último

module.exports = router