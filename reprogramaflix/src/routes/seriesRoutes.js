const controller = require("../controller/seriesController")

const express = require("express")
const { getById } = require("../controller/seriesController")
const router = express.Router()

router.get("/todos", controller.getAll)
router.get("/", getById)


module.exports = router 