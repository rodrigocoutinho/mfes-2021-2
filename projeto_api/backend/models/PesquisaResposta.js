const Sequelize = require('sequelize');
const db = require('./db');
const PesquisaQuestao = require("./PesquisaQuestao");
const User = require('./User');

//Define a tabela de pesquisa e suas colunas, conforme documentação do sequelize
const PesquisaResposta = db.define('pesquisa_respostas', {
    resposta: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
PesquisaResposta.belongsTo(User);
PesquisaResposta.belongsTo(PesquisaQuestao);
PesquisaQuestao.hasMany(PesquisaResposta ,{as: 'respostas', foreignKey: 'pesquisaQuestoId'});

//Cria tabela, conforme definido acima
PesquisaResposta.sync();


module.exports = PesquisaResposta; 