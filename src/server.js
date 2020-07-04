const express = require('express');
const bodyParser = require('body-parser');
const { buildPdf } = require('./controllers/render-pdf');

const app = express();

app.use(bodyParser.json({ extended: false }));

app.post('/template/render', async (request, response) => {
  const { body } = request;

  await buildPdf(body);

  response.sendStatus(200);
});

module.exports = {
  app,
};
