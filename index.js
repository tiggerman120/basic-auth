'use strict';
require('dotenv').config

const server = require('./src/server');
const PORT = process.env.PORT;
const mongoose = require('mongoose');

//stays in index
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.start(3000)
  })
  .catch(e => console.error('Could not start server', e.message));