'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const Users = require('../models/auth-schema');



async function signingUp(req, res) {
  console.log('youre hitting me');
  try {
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    console.log('1', req.body.password)
    const user = new Users(req.body);
    console.log('2', user);
    const record = await user.save(req.body);
    console.log('3', record)
    res.status(201).json(record);
  } catch (e) { console.log(e); res.status(403).send("Error Creating User"); }
}

module.exports = signingUp;