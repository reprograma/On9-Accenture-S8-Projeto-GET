const controller = require("../controller/filmesController")

const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/title", controller.getByTitle) // Ex: http://localhost:8080/filmes/title?title=The Truman Show
router.get("/year", controller.getByYear)
router.get("/genre", controller.getByGenre)
//router.get("/actor", controller.getByActors)// ??http://localhost:8080/filmes/actors?actor=Leonardo 
//router.get("/language", controller.getByLanguage)
router.get("/:id", controller.getById)


module.exports = router