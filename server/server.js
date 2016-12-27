const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Test App'  
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Caique',
    age: 23
  }, {
    name: 'Andrew',
    age: 25
  }, {
    name: 'Thomas',
    age: 18
  }]);
});

const server = app.listen(3000);

module.exports = {
  server,
  app
};