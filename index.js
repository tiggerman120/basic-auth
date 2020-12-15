'use strict';
require('dotenv').config

const server = require('./src/server');
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const router = require('./src/routes/auth-routes');

router.get('/', (req, res) => {
  res.status(200).json('hello world');
})

server.start(PORT || 3000)
//stays in index
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true })

 // .catch(e => console.error('Could not start server', e.message));