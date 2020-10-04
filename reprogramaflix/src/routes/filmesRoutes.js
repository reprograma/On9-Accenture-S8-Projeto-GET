const controller = require("../controller/filmesController"); //chamar o filmesController

//chamar o express
const express = require("express");

//função pronta p fazer rotas que já tem pronta no express
const router = express.Router();

//chamar a função router
//pode ser usada com todos os elementos do CRUD

router.get("/todos", controller.getAll); //vai pegar a função que esta no controller para retornar todos os elementos do filmes.json
router.get("/title", controller.getByTitle);
router.get("/genre", controller.getByGenre);
//definindo o endpoint 
router.get("/:id", controller.getById); //vai pegar a função getById



//exportar tudo q é router
module.exports = router


