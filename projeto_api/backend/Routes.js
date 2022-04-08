const { Router } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Yup = require('yup');

const User = require('./models/User');
const PesquisaQuestao = require('./models/PesquisaQuestao');
const PesquisaResposta = require('./models/PesquisaResposta');
const Pesquisa = require('./models/Pesquisa');
const authMiddleware = require('./middlewares/auth');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const PesquisaDisponivelController = require("./controllers/PesquisaDisponivelController");

const AppRouter = new Router();

//Metodo post para gravação dos dados enviados da requisição para o banco.
AppRouter.post("/api/register", async (req, res) => {
  //console.log(req.body); imprime o que foi recebido no body da requisição.
  const { name, fone, tipo, email, password } = req.body;

  // valida para não deixar passar com dados em branco
  if (!name) {
    return res.status(422).json({ mensagem: "O nome é obrigatório!" });
  }

  if (!fone) {
    return res.status(422).json({ mensagem: "O telefone é obrigatório!" });
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
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      if (err) {
        console.log(err)
      }
      await User.create({
        name: req.body.name,
        fone: req.body.fone,
        tipo: req.body.tipo,
        email: req.body.email,
        password: hash
      }
      ).then(() => {
        return res.status(200).json({
          erro: false,
          mensagem: "Usuário cadastrado com sucesso"
        })
      });
    });
  } else {
    res.status(401).json({
      erro: true,
      mensagem: "Usuário já é cadastrado."
    })
  }
});

AppRouter.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ mensagem: "O email é obrigatório!" });
  }

  if (!password) {
    return res.status(400).json({ mensagem: "A senha é obrigatória!" });
  }

  const verifica = await User.findAll({
    where: {
      email: email,
    }
  });
  if (verifica.length > 0) {
    bcrypt.compare(password, verifica[0].password, function (error, response) {
      if (error) {
        res.status(400).send(error)
      }
      if (response) {
        const privateKey = 'private-key';
        const token = jwt.sign({ id: verifica[0].id }, privateKey, { expiresIn: '12h' });
        res.status(200).send({ erro: false, mensagem: "Usuario Logado", token: token })
      }else{
        res.status(400).send({erro: true, mensagem: "Usuário ou senha incorreta"})
      }
    });
  } else {
    res.status(400).send({ mensagem: "Usuário ou senha incorreta" })
  }
});

AppRouter.use(authMiddleware);

AppRouter.use('/api-docs', swaggerUi.serve);
AppRouter.get('/api-docs', swaggerUi.setup(swaggerDocument));

AppRouter.get("/api/pesquisas/disponiveis", PesquisaDisponivelController.index);
AppRouter.post("/api/pesquisas/disponiveis/:id", PesquisaDisponivelController.store);


//Metodo get da api, onde será retornado as informações da api
AppRouter.get("/api/users", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

//Metodo get da api, onde será retornado a lista de pesquisas cadastradas no banco
AppRouter.get("/api/pesquisas", async (req, res) => {
  const pesquisas = await Pesquisa.findAll({
    include: [{
      model: PesquisaQuestao, as: "questoes",
      include: [{
        model: PesquisaResposta, as: "respostas"
      }],
    }],
  });
  res.send(pesquisas);
});

AppRouter.post("/api/pesquisas", async (req, res) => {
  const body = req.body;
  const schema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    descricao: Yup.string().required('Campo obrigatório'),
    tcle: Yup.string().required('Campo obrigatório'),
    status: Yup.number().required('Campo obrigatório'),
  });

  if (!(await schema.isValid(body))) {
    return res.status(400).json({ error: 'Erro na validação dos campos.' });
  }

  const pesquisa = await Pesquisa.create({ ...body, userId: req.userId });

  res.send(pesquisa);
});

AppRouter.get("/api/pesquisas/:id", async (req, res) => {
  const { id } = req.params;
  const pesquisa = await Pesquisa.findByPk(id, {
    include: [{
      model: PesquisaQuestao, as: "questoes"
    }],
  });

  if (!pesquisa) {
    return res.status(400).json({ error: 'Pesquisa não encontrada' });
  }

  res.send(pesquisa);
});

AppRouter.post("/api/pesquisas/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const pesquisa = await Pesquisa.findByPk(id, {
    include: [{
      model: PesquisaQuestao, as: "questoes"
    }],
  });

  if (!pesquisa) {
    return res.status(400).json({ error: 'Pesquisa não encontrada' });
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    descricao: Yup.string().required('Campo obrigatório'),
    tcle: Yup.string().required('Campo obrigatório'),
    status: Yup.number().required('Campo obrigatório'),
  });

  if (!(await schema.isValid(body))) {
    return res.status(400).json({ error: 'Erro na validação dos campos.' });
  }

  await pesquisa.update({ ...body, userId: req.userId });

  res.send(pesquisa);
});


AppRouter.post("/api/pesquisas/:id/perguntas", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const pesquisa = await Pesquisa.findByPk(id, {
    include: [{
      model: PesquisaQuestao, as: "questoes"
    }],
  });

  if (!pesquisa) {
    return res.status(400).json({ error: 'Pesquisa não encontrada' });
  }

  const questaoId = body.id;
  const perguntaRecebida = body.pergunta;

  let pergunta = null;

  if (!questaoId) {
    pergunta = await PesquisaQuestao.create({ pesquisaId: pesquisa.id, pergunta: perguntaRecebida });

  } else {
    pergunta = await PesquisaQuestao.findByPk(questaoId);

    if (!pergunta) {
      return res.status(400).json({ error: 'Pergunta não encontrada' });
    }

    await pergunta.update({ pergunta: perguntaRecebida });
  }

  res.send(pergunta);
});

AppRouter.get("/api/pesquisas/:id", async (req, res) => {
  const { id } = req.params;
  const pesquisa = await Pesquisa.findByPk(id, {
    include: [{
      model: PesquisaQuestao, as: "questoes"
    }],
  });

  if (!pesquisa) {
    return res.status(400).json({ error: 'Pesquisa não encontrada' });
  }

  res.send(pesquisa);
});



module.exports = AppRouter;