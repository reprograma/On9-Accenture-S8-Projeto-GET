const controller = require("../controller/seriesController")

const express = require("express")
const router = require("./filmesRoutes")
const route = express.Router() 

router.get("/todos", controller.getAll)

module.exports = router
