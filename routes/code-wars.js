const app = require('express')();
const axios = require('axios');

app.get('/users/:id', (req, res) => {
  // api-key: xJvHj4FaonPzg8s7a7tf
  axios.get(`https://www.codewars.com/api/v1/users/${req.params.id}`).then((response) => res.json(response.data));
});

app.get('/:id', (req, res) => {
  console.log('>>>>>>', req.params.id);
  axios.get(`https://www.codewars.com/api/v1/code-challenges/${req.params.id}`).then((response) => {
    console.log(response.data);
    res.json(response.data);
  });
});

module.exports = app;
