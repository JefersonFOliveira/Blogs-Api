const express = require('express');
const bodyParser = require('body-parser');
const userControllers = require('./controllers/userControllers');
const categoryControllers = require('./controllers/categoryControllers');
const postControllers = require('./controllers/postControllers');
const { validateCreateUser, validateLogin, validateJWT } = require('./utils/userValidate');
const { validateCreateCategory } = require('./utils/categoryValidate');
const { validateCreatePost } = require('./utils/postValidate');

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

app.post('/categories', validateJWT, validateCreateCategory, categoryControllers.create);
app.get('/categories', validateJWT, categoryControllers.getAll);

app.post('/post', validateJWT, validateCreatePost, postControllers.create);
app.get('/post', validateJWT, postControllers.getAll);
