const controller = require("../controller/filmesController")
//chama o controller
//chama o express - um facilitador para fazer um servidor
const express = require("express")
const { getByTitle } = require("../controller/filmesController")
//função já pronta que tem no express para rotas
const router = express.Router()

router.get("/todos", controller.getAll)
//rota que traz todos os filmes

//router.get("/:year/pesquisar", controller.getByYear)
//router.get("/") - quando usado no controller query
router.get("/year", controller.getByYear)

router.get("/title", controller.getByTitle)

router.get("/genre", controller.getByGenre)

router.get("/actor", controller.getByActors)

router.get("/:id", controller.getById)
//rota que traz os filmes por ID




module.exports = router