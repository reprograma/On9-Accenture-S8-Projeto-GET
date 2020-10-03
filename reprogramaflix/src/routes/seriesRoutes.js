const express = require("express");
const controller = require("../controller/seriesController");
const router = express.Router();

router.get("/todos", controller.getAll);
router.get("/?id", controller.getById);
router.get("/?title", controller.getByTitle);
router.get("/?genre", controller.getByGenre);
router.get("/?actors", controller.getByActors);

module.exports = router;
