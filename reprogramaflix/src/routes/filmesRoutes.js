const controller = require("../controller/filmesController")

const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/:id", controller.getById)
router.get("/genre", controller.getByGenre)
router.get ("/title", controller.getByTitle)

module.exports = router