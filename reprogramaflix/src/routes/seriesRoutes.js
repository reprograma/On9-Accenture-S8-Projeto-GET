const controller = require("../controller/seriesController");

const express = require("express");
const router = express.Router();

router.get('/todas', controller.getAll);
router.get("/title",controller.getByTitle);
router.get("/genre",controller.getByGenre);
router.get("/total",controller.getByTotalSeasons);
router.get('/:id',controller.getById);


module.exports = router; 