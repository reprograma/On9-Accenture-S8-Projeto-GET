const controller = require("../controller/seriesController")

const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/:id", controller.getById)
router.get("/genre", controller.getByGenre)

module.exports = router