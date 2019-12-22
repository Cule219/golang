const mongoose = require('mongoose');

const webhook = mongoose.model('Test', new mongoose.Schema({ data: String }));

module.exports = webhook;
