const Sequelize = require('sequelize');


//Conexão com o banco de dados, Configurações
const conexao = new Sequelize("plataforma", "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
});

//Verifica se a conexão foi estabelecida
conexao.authenticate().then(function () {
    console.log("Conexão com o banco realizada com sucesso!")
}).catch(function () {
    console.log("Ação não realizada!")
});

module.exports = conexao;