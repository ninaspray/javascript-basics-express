const express = require('express');

const app = express();

app.get('/strings/hello/world', (request, response) => {
  response.status(200).send({ result: 'Hello, world!' });
});

app.get('GET /upper/{string}', (request, response) => {
  response.status(200).send({ result: 'HELLO' });
});

module.exports = app;
