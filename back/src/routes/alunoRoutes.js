const express = require('express');
const alunoController = require('../controllers/alunoController');

const router = express.Router();

router.post('/', alunoController.cadastrar);
router.get('/', alunoController.listar);
router.get('/aniversarios', alunoController.aniversarios);
router.get('/:id', alunoController.buscarPorId);
router.put('/:id', alunoController.atualizar);
router.delete('/:id', alunoController.remover);

module.exports = router;