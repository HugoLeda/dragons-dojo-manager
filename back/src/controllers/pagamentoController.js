const mongoose = require('mongoose');
const Pagamento = require('../models/Pagamento');
const Aluno = require('../models/Aluno');

function tratarErro(err, res, mensagemPadrao) {
  if (err.name === 'ValidationError') {
    const erros = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ erros });
  }
  if (err.name === 'CastError') {
    return res.status(400).json({ erro: 'Valor inválido informado' });
  }
  console.error(err);
  return res.status(500).json({ erro: mensagemPadrao });
}

// POST /api/pagamentos
exports.cadastrar = async (req, res) => {
  try {
    const { aluno } = req.body;

    if (!aluno) {
      return res.status(400).json({ erros: ['O aluno é obrigatório'] });
    }
    if (!mongoose.isValidObjectId(aluno)) {
      return res.status(400).json({ erro: 'ID do aluno inválido' });
    }

    const alunoExiste = await Aluno.exists({ _id: aluno });
    if (!alunoExiste) {
      return res.status(404).json({ erro: 'Aluno não encontrado' });
    }

    const pagamento = await Pagamento.create(req.body);
    await pagamento.populate('aluno', 'nome');

    return res.status(201).json(pagamento);
  } catch (err) {
    return tratarErro(err, res, 'Erro interno ao cadastrar pagamento');
  }
};