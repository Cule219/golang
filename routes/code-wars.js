const app = require('express')();
const axios = require('axios');

app.get('/:id', (req, res) => {
  // api-key: xJvHj4FaonPzg8s7a7tf
  axios.get(`https://www.codewars.com/api/v1/users/${req.params.id}`).then((response) => res.json(response.data));
});

module.exports = app;
