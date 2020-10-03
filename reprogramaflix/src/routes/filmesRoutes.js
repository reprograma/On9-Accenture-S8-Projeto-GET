const controller = require("../controller/filmesController")

const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/:id", controller.getById)
router.get("/:genre", controller.getGenre)
router.get("/title", controller.getTitle)
router.get("/actors", controller.getActors)




module.exports = router