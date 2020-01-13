/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const app = require('express')();
const path = require('path');
const axios = require('axios');
const webhook = require('../models/webhook');

app.get('/', (req, res) => {
  console.log(req.body);
  // res.sendFile(path.join(__dirname, '../index.html'));
  res.json({ bla: 'Bla' });
});

// this is a list of users used for testing -> later on we should be getting this dynamicly
const listOfUsers = [
  'Cule219',
];

// Once you get the post querry all the users
app.post('/', async (req, res) => {
  const data = await webhook.create({ data: req.body });
  console.log(data);
  // Here we check all the users, we should specifically check last Kata
  listOfUsers.forEach(async (user) => {
    console.log('dsasda');
    const response = await axios.get(`https://www.codewars.com/api/v1/users/${user}/code-challenges/completed`);
    console.log('[][][][]', response.data[0]);
  });
});

module.exports = app;
