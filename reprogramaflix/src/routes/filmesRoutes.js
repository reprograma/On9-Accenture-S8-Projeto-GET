const controller = require ("../controller/filmesController") //navegando na pasta até chegar no arq filmes.controller

const express = require ("express") //chamando o express que baixanmos
const router = express.Router()  //função pronta que tem dentro do express pra fazer rotas

router.get("/todos", controller.getAll) //chamei a função router e o GET, depois colocamos o endpoint que vai trazer e o controller.getAll que estava no controle > a rota
router.get("/title", controller.getByTitle)
router.get("/genre", controller.getByGenre)
router.get("/:id", controller.getById)

module.exports = router //exportando tudo que é router

