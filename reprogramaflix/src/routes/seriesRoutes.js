const controller = require("../controller/seriesController")

const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/title", controller.getByTitle)
router.get("/totalSeasons", controller.getByTotalSeasons)
//router.get("/genre", controller.getByGenre)
router.get("/:id", controller.getById) //deixar esse sempre por último
module.exports = router