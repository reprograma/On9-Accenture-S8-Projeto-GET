const controller = require("../controller/seriesController");

const express = require("express");
const router = express.Router();

router.get("/todos", controller.getAll);
router.get("/", controller.getByTitle);
router.get("/genre", controller.getBygenre);
router.get("/:id", controller.getById);

module.exports = router;
