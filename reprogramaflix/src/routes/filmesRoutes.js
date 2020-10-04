// estamos trabalhando a rota
// .. sair da pasta 
const controller = require("../controller/filmesController")


// express a gente baixou e tem varias funçoes prontas dentro dela
const express =  require("express")
const router = express.Router()
//Router é uma função dentro do express 

// todos = endpont 
router.get("/todos", controller.getAll)
router.get("/title", controller.getByTitle)
router.get("/genre", controller.getByGenre)
router.get("/:id", controller.getById) 

module.exports = router 