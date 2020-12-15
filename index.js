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
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("I am connected to the db");
});
 // .catch(e => console.error('Could not start server', e.message));