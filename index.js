const express = require('express');
const bodyParser = require('body-parser');
const userControllers = require('./controllers/userControllers');
// const {
//   // emailValidate,
//   // passwordValidate,
//   // // emailExistValidate,
// } = require('./utils/validates');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user',
// nameValidate,
// emailValidate,
// emailExistValidate,
// passwordValidate,
userControllers.create);
