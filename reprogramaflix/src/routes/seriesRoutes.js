const controller = require("../controller/seriesController")

const express = require("express")
const router = express.Router()

router.get("/todos", controller.getAll)

module.exports = router