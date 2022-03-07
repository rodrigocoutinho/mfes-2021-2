const express = require('express');

const cors = require('cors');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('./models/User');

const App = express();

//Recebe o express json na aplicação APP
App.use(express.json());

//middleware que permite o acesso a api
App.use((req, res, next) => {
    console.log("Acesso permitido!");
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST, DELETE')
    App.use(cors());
    next();
});

//Metodo get da api, onde será retornado as informações da api
App.get("/api/users", async (req, res) => {
    const users = await User.findAll({

    });
    res.send(users);
});

//Metodo post para gravação dos dados enviados da requisição para o banco.
App.post("/api/register", async (req, res) => {
    //console.log(req.body); imprime o que foi recebido no body da requisição.
    const { name, fone, tipo, email, password } = req.body;

    // valida para não deixar passar com dados em branco
    if (!name) {
        return res.status(422).json({ mensagem: "O nome é obrigatório!" });
    }

    if (!fone) {
        return res.status(422).json({ mensagem: "O telefone é obrigatório!" });
    }

    if (!tipo) {
        return res.status(422).json({ mensagem: "O Tipo de usuário é obrigatório!" });
    }

    if (!email) {
        return res.status(422).json({ mensagem: "O email é obrigatório!" });
    }

    if (!password) {
        return res.status(422).json({ mensagem: "A senha é obrigatória!" });
    }


    const verifica = await User.findAll({
        where: {
            email: email
        }
    });

    if (verifica == 0) {
        bcrypt.hash(password, saltRounds, async function (err, hash) {
            if (err) {
                console.log(err)
            }
            await User.create({
                name: name,
                fone: fone,
                tipo: tipo,
                email: email,
                password: hash
            }
            ).then(() => {
                return res.status(200).json({
                    erro: false,
                    mensagem: "Usuário cadastrado com sucesso"
                })
            });
        })


    } else {
        res.status(401).json({
            erro: true,
            mensagem: "Usuário já é cadastrado."
        })
    }


});

App.post("/api/login", async (req, res) => {
    const email = req.body.email
    const senha = req.body.password;

    const verifica = await User.findAll({
        where: {
            email: email,
        }
    });
    if (verifica.length > 0) {
        bcrypt.compare(senha, verifica[0].password, function (error, response) {
            if (error) {
                res.send(error)
            }
            if (response) {
                res.send({ mensagem: "Usuario Logado" })
            } else {
                res.send({ mensagem: "Usuário ou senha incorreta" })
            }
        });
    } else {
        res.send({ mensagem: "Não registrado" })
    }
});

// Roda o servidor e atribui a porta em que será usada
App.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})