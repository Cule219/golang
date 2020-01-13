/* eslint-disable no-console */
const app = require('express')();
const axios = require('axios');


// Checking each individual user?
app.get('/users/:id', async (req, res) => {
  // api-key: xJvHj4FaonPzg8s7a7tf
  try {
    const response = await axios.get(`https://www.codewars.com/api/v1/users/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.json(err);
  }
});


// This is where we add a Kata
app.get('/:id', async (req, res) => {
  try {
    const response = await axios.get(`https://www.codewars.com/api/v1/code-challenges/${req.params.id}`);
    console.log(response.data, 'kata data');
    res.json(response.data);
  } catch (err) {
    res.json(err);
  }
});

module.exports = app;
