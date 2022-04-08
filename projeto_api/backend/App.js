const express = require('express');
const cors = require('cors');
const Routes = require('./Routes');

//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
//const swaggerUi = require('swagger-ui-express')
//const swaggerFile = require('./swagger_output.json')

const App = express();

//Recebe o express json na aplicação APP
App.use(express.json());
App.use(cors());

//Swagger
//App.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// Adiciona as rotas na aplicação
App.use(Routes);

// Roda o servidor e atribui a porta em que será usada
App.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})