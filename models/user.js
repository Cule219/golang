const mongoose = require('mongoose');

const user = mongoose.model('Test', new mongoose.Schema({ data: String }));

module.exports = user;
