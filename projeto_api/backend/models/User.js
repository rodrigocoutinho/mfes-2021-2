const Sequelize = require('sequelize');
const db = require('./db');

//Define a tabela de usuarios e suas colunas, conforme documentação do sequelize
const User = db.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }

});

// Cria tabela
User.sync();

//Verifica se há alguma diferença na tabela, atualiza conforme model.
//User.sync({ alter: true })

module.exports = User;