const Sequelize = require('sequelize');
const db = require('./db');
const Pesquisa = require("./Pesquisa");

//Define a tabela de pesquisa e suas colunas, conforme documentação do sequelize
const PesquisaQuestao = db.define('pesquisa_questoes', {
    pergunta: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
PesquisaQuestao.belongsTo(Pesquisa);
Pesquisa.hasMany(PesquisaQuestao ,{as: 'questoes', foreignKey: 'pesquisaId'});

//Cria tabela, conforme definido acima
PesquisaQuestao.sync();


module.exports = PesquisaQuestao;