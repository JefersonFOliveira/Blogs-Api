const express = require('express');
const bodyParser = require('body-parser');
const userControllers = require('./controllers/userControllers');
const { validateCreateUser, validateLogin, validateJWT } = require('./utils/userValidate');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', validateCreateUser, userControllers.create);
app.post('/login', validateLogin, userControllers.login);
app.get('/user', validateJWT, userControllers.getAll);
app.get('/user/:id', validateJWT, userControllers.getById);
