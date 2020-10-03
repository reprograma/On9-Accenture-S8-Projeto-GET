const controller = require("../controller/filmesController");
const express = require("express");
const { getAll } = require("../controller/filmesController");
const router = express.Router();

router.get("/todos", controller.getAll)
router.get("/:id", controller.getById)

module.exports = router;
