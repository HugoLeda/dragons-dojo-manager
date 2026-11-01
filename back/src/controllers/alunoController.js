const mongoose = require('mongoose');
const Aluno = require('../models/Aluno');

function tratarErro(err, res, mensagemPadrao) {
  if (err.name === 'ValidationError') {
    const erros = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ erros });
  }
  if (err.name === 'CastError') {
    return res.status(400).json({ erro: 'Valor inválido informado' });
  }
  if (err.code === 11000) {
    const campo = Object.keys(err.keyPattern || {})[0] || 'dado';
    return res
      .status(409)
      .json({ erro: `Já existe um aluno cadastrado com este ${campo.toUpperCase()}` });
  }
  console.error(err);
  return res.status(500).json({ erro: mensagemPadrao });
}

function escaparRegex(texto) {
  return texto.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// POST /api/alunos
exports.cadastrar = async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);
    return res.status(201).json(aluno);
  } catch (err) {
    return tratarErro(err, res, 'Erro interno ao cadastrar aluno');
  }
};

// GET /api/alunos?status=ativo&modalidade=Karate&busca=nome
exports.listar = async (req, res) => {
  try {
    const { status, modalidade, busca } = req.query;
    const filtro = {};

    if (status) filtro.status = String(status);
    if (modalidade) filtro.modalidades = String(modalidade);
    if (busca) {
      filtro.nome = { $regex: escaparRegex(String(busca)), $options: 'i' };
    }

    const alunos = await Aluno.find(filtro).sort({ nome: 1 });
    return res.json(alunos);
  } catch (err) {
    return tratarErro(err, res, 'Erro interno ao listar alunos');
  }
};

// GET /api/alunos/:id
exports.buscarPorId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ erro: 'ID inválido' });
    }

    const aluno = await Aluno.findById(id);
    if (!aluno) {
      return res.status(404).json({ erro: 'Aluno não encontrado' });
    }

    return res.json(aluno);
  } catch (err) {
    return tratarErro(err, res, 'Erro interno ao buscar aluno');
  }
};

// PUT /api/alunos/:id
exports.atualizar = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ erro: 'ID inválido' });
    }

    const aluno = await Aluno.findByIdAndUpdate(id, req.body, {
      new: true, // devolve o aluno já atualizado
      runValidators: true, // aplica as validações do model na alteração
    });

    if (!aluno) {
      return res.status(404).json({ erro: 'Aluno não encontrado' });
    }

    return res.json(aluno);
  } catch (err) {
    return tratarErro(err, res, 'Erro interno ao atualizar aluno');
  }
};

// DELETE /api/alunos/:id
exports.remover = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ erro: 'ID inválido' });
    }

    const aluno = await Aluno.findByIdAndDelete(id);
    if (!aluno) {
      return res.status(404).json({ erro: 'Aluno não encontrado' });
    }

    return res.json({ mensagem: 'Aluno removido com sucesso' });
  } catch (err) {
    return tratarErro(err, res, 'Erro interno ao remover aluno');
  }
};