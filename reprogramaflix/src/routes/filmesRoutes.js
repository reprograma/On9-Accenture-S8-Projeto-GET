const controller = require("../controller/filmesController")

const express = require("express")
const router = express.Router()

router.get("/", controller.getAll)
router.get("/busca/:id", controller.getById)
router.get("/titulo", controller.getByTitulo)
router.get("/genero", controller.getByGenero)

module.exports = router