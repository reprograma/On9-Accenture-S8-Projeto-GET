const controller = require("../controller/series.controller")

const express = require("express")
const router = express.router()

router.get("/todos", controller.getAll)
router.get("/:id", controller.getById)

module.exports = router