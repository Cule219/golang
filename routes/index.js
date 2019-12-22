const app = require('express')();
const path = require('path');
const mongoose = require('mongoose');

const MyModel = mongoose.model('Test', new mongoose.Schema({ data: String }));

app.get('/', (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.post('/', (req, res) => {
  console.log(req.body);
  MyModel.create({ data: req.body }).then((response) => console.log(response));
});

module.exports = app;
