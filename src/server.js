'use strict';

require('dotenv').config
const express = require('express');
const router = require('./routes/auth-routes');
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());//lets you use raw json object

// Process FORM input and put the data on req.body
app.use(express.urlencoded({ extended: true }));//lets you do a form set of data

app.use(router)



module.exports = {
  server: app,
  start: PORT => {
    if(!PORT) { throw new Error('missing port');}
    app.listen(process.env.PORT || PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  },
};