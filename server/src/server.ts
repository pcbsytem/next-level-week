import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem usuarios');

  response.json([
    'Patrick',
    'Mario',
    'Maria'
  ]);
});

app.listen(3333);