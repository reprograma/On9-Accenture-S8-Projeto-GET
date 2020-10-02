const controller = require('../controller/filmesController');

const express = require('express');
const router = express.Router();

router.get('/todos', controller.getAll);
router.get('/:id', controller.getAll);
router.get('/year', controller.getAll);


module.exports = router;