const express = require('express');
const pagamentoController = require('../controllers/pagamentoController');

const router = express.Router();

router.post('/', pagamentoController.cadastrar);

module.exports = router;