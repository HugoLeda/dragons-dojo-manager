const mongoose = require('mongoose');

const pagamentoSchema = new mongoose.Schema(
  {
    aluno: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Aluno',
      required: [true, 'O aluno é obrigatório'],
    },
    dataPagamento: {
      type: Date,
      required: [true, 'A data de pagamento é obrigatória'],
    },
    valor: {
      type: Number,
      required: [true, 'O valor é obrigatório'],
      min: [0.01, 'O valor deve ser maior que zero'],
      set: (v) => Math.round(Number(v) * 100) / 100, // 2 casas decimais
    },
    formaPagamento: {
      type: String,
      required: [true, 'A forma de pagamento é obrigatória'],
      enum: {
        values: ['Dinheiro', 'PIX', 'Outro'],
        message: 'Forma de pagamento inválida',
      },
    },
    tipo: {
      type: String,
      required: [true, 'O tipo de pagamento é obrigatório'],
      enum: {
        values: [
          'Mensalidade',
          'Graduação',
          'Venda de produto',
          'Aula avulsa',
          'Outros eventos',
        ],
        message: 'Tipo de pagamento inválido',
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Pagamento', pagamentoSchema);