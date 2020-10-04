const controller = require("../controller/seriesController")

const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/title", controller.getByTittle)
router.get("/genre", controller.getByGenre)
router.get("/:id", controller.getById)

module.exports = router
