const controller = require ("../controller/seriesController");

const express = require ("express");
const router = express.Router();

router.get("/todos", controller.getAll);
router.get("/genres", controller.getByGenre);
router.get("/titulo", controller.getByTitle);
router.get("/:id", controller.getById);

module.exports = router;