const controller = require("../controller/seriesController")

const express = require("express")
const router = express.Router()

router.get("/todas", controller.getAll)
router.get("/temp", controller.getBySeasons)
router.get("/", controller.getByGen)
router.get("/actors", controller.getByAct)
router.get("/:id", controller.getById)

module.exports = router

