const controller = require('../controller/seriesCrontroller');

const express = require('express');
const router = express.Router();

router.get('/todos', controller.getAll);
router.get('/:id', controller.getAll);
router.get('/title', controller.getAll);

module.exports = router;