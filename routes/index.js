/* eslint-disable no-unused-vars */
const app = require('express')();
const path = require('path');
const axios = require('axios');
const webhook = require('../models/webhook');

app.get('/', (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, '../index.html'));
});

const listOfUsers = [
  'Cule219',
];
// Once you get the post querry all the users
app.post('/', (req, res) => {
  console.log(req.body);
  webhook.create({ data: req.body }).then((response) => {
    console.log(response);
    listOfUsers.forEach((user) => {
      axios.get(`https://www.codewars.com/api/v1/users/${user}/code-challenges/completed`).then((response) => {
        console.log(response.data);
      });
    });
  });
});

module.exports = app;
