const User = require('../models/User');
const Pesquisa = require('../models/Pesquisa');
const PesquisaQuestao = require('../models/PesquisaQuestao');
const PesquisaResposta = require('../models/PesquisaResposta');

class PesquisaDisponivelController {
  async index(req, res) {
    const pesquisas = await Pesquisa.findAll({
      include: [{
        model: PesquisaQuestao, as: "questoes"
      }],
      where: {
        status: 0
      }
    });

    const usuario_id = req.userId;

    const disponiveis = [];

    for (let i = 0; i < pesquisas.length; i += 1) {
      const respostas = await PesquisaResposta.findAll({
        include: [{
          model: PesquisaQuestao,
          where: {
            pesquisaId: pesquisas[i].id,
          }
        },{
          model: User,
          where: {
            id: usuario_id,
          }
        }]
      });

      if (respostas.length === 0) {
        disponiveis.push(pesquisas[i])
      }
    }

    res.send(disponiveis);
  }

  // Método para gravar as respostas enviadas pelo usuário
  async store(req, res) {
    const body = req.body;
    const { id } = req.params;
    const usuario_id = req.userId;

    const pesquisa = await Pesquisa.findByPk(id, {
      include: [{
        model: PesquisaQuestao, as: "questoes"
      }],
    });

    if (!pesquisa) {
      return res.status(400).json({ error: 'Pesquisa não encontrada' });
    }

    const respostas = body.respostas;

    for (let i = 0; i < respostas.length; i += 1) {
      const respostaData = respostas[i];
      await PesquisaResposta.create({ pesquisaQuestoId: respostaData.questao_id, userId: usuario_id, resposta: respostaData.resposta });
    }

    res.send("Respostas cadastradas com sucesso!");
  }
}

module.exports = new PesquisaDisponivelController()