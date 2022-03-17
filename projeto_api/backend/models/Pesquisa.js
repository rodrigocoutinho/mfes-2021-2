const Sequelize = require('sequelize');
const db = require('./db');
const User = require('./User');

//Define a tabela de pesquisa e suas colunas, conforme documentação do sequelize
const Pesquisa = db.define('pesquisas', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tcle: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
    },
    status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0
    }
});
Pesquisa.belongsTo(User);

//Cria tabela, conforme definido acima
Pesquisa.sync();

module.exports = Pesquisa;