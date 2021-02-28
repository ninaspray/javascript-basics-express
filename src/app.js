const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('/Users/ninaspray/Desktop/Projects/javascript-basics-express/lib/strings');

const app = express();
app.use(express.json());

app.get('/strings/hello/:string', (request, response) => {
  response.status(200).send({ result: sayHello(request.params.string) });
});

app.get('/strings/hello/:string', (request, response) => {
  response.status(200).send({ result: sayHello(request.params.string) });
});

app.get('/strings/upper/:string', (request, response) => {
  response.status(200).send({ result: uppercase(request.params.string) });
});

app.get('/strings/lower/:string', (request, response) => {
  response.status(200).send({ result: lowercase(request.params.string) });
});

app.get('/strings/first-characters/:string', (request, response) => {
  response.status(200).send({ result: firstCharacter(request.params.string) });
});

app.get('/strings/first-characters/:string', (request, response) => {
  response
    .status(200)
    .send({ result: firstCharacters(request.params.string, request.query.length) });
});

module.exports = app;
