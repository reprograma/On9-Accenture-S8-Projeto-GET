const controller =  require("../controller/seriesController")

const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/title", controller.getByTitle) // Ex: http://localhost:8080/series/title?title=The Boys
router.get("/genre", controller.getByGenre) //http://localhost:8080/series/genre?genre=Drama
//router.get("/actors", controller.getByActors)
router.get("/:id", controller.getById)

module.exports = router
