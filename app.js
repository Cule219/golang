/* eslint-disable no-console */
require('dotenv').config();
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => {
  console.log('MongoDB Successfully connected!');
});

app.use(cors());

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    io.emit('chat message', 'user disconnected');
  });
});

const index = require('./routes/index');
const codewars = require('./routes/code-wars');

app.use('/', index);
app.use('/', codewars);


http.listen(process.env.PORT || 3000, () => {
  console.log(`listening on *:${process.env.PORT || 3000}`);
});
