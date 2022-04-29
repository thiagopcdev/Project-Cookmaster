const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/images', express.static(path.resolve(__dirname, '../uploads')));

app.use(require('./controller'));

app.use(require('./middleware/error'));

module.exports = app;
