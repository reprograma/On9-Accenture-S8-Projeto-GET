const controller = require('../controller/seriesCrontroller');

const express = require('express');
const router = express.Router();

router.get('/todos', controller.getAll);
router.get('/title', controller.getByTitle);
router.get('/actors', controller.getByActors);
router.get('/:id', controller.getById);

module.exports = router;