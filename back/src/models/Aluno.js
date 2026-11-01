const mongoose = require('mongoose');

function cpfValido(cpf) {
  if (!cpf) return true; // campo opcional
  if (!/^\d{11}$/.test(cpf)) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false; 

  const calcularDigito = (base) => {
    let soma = 0;
    for (let i = 0; i < base.length; i++) {
      soma += Number(base[i]) * (base.length + 1 - i);
    }
    const resto = (soma * 10) % 11;
    return resto === 10 ? 0 : resto;
  };

  return (
    calcularDigito(cpf.slice(0, 9)) === Number(cpf[9]) &&
    calcularDigito(cpf.slice(0, 10)) === Number(cpf[10])
  );
}

const alunoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, 'O nome é obrigatório'],
      trim: true,
    },
    dataNascimento: {
      type: Date,
      required: [true, 'A data de nascimento é obrigatória'],
    },
    whatsapp: {
      type: String,
      required: [true, 'O WhatsApp é obrigatório'],
      set: (v) => (v ? v.replace(/\D/g, '') : v), // guarda só os números
      match: [/^\d{10,11}$/, 'WhatsApp inválido (use DDD + número)'],
    },
    genero: {
      type: String,
      required: [true, 'O gênero é obrigatório'],
      enum: {
        values: ['masculino', 'feminino', 'outro'],
        message: 'Gênero inválido',
      },
    },
    dataInicio: {
      type: Date,
      required: [true, 'A data de início é obrigatória'],
    },
    status: {
      type: String,
      required: [true, 'O status é obrigatório'],
      enum: {
        values: ['ativo', 'inativo', 'trancado'],
        message: 'Status inválido',
      },
      default: 'ativo',
    },
    modalidades: {
      type: [
        {
          type: String,
          enum: {
            values: ['Muay Thai', 'Karate', 'Kobudo', 'Crossfit'],
            message: 'Modalidade inválida',
          },
        },
      ],
      required: [true, 'Informe ao menos uma modalidade'],
      validate: {
        validator: (arr) => Array.isArray(arr) && arr.length > 0,
        message: 'Informe ao menos uma modalidade',
      },
    },

    // Não obrigatórios
        rg: {
      type: String,
      trim: true,
      set: (v) => {
        const limpo = v ? v.replace(/[^0-9xX]/g, '').toUpperCase() : '';
        return limpo || undefined;
      },
      match: [/^[0-9X]{5,14}$/, 'RG inválido'],
    },
    cpf: {
      type: String,
      set: (v) => {
        const limpo = v ? v.replace(/\D/g, '') : '';
        return limpo || undefined;
      },
      validate: {
        validator: cpfValido,
        message: 'CPF inválido',
      },
      unique: true,
      sparse: true, // permite vários alunos sem CPF
    },
    nomeResponsavel: {
      type: String,
      trim: true,
    },
    whatsappResponsavel: {
      type: String,
      set: (v) => (v ? v.replace(/\D/g, '') : v),
      validate: {
        validator: (v) => !v || /^\d{10,11}$/.test(v),
        message: 'WhatsApp do responsável inválido (use DDD + número)',
      },
    },
    problemasSaude: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true } 
);

module.exports = mongoose.model('Aluno', alunoSchema);