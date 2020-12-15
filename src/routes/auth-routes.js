'use strict';
const bcrypt = require('bcrypt');
const base64 = require('base-64');

const express = require('express');
const router = express.Router();
const Users = require('../models/auth-schema');
const authMiddleware = require('../middleware/auth-middleware');
const signupMiddleware = require('../middleware/signup-middleware');



router.post('/signup', signupMiddleware, async (req, res) => {
  res.status(201).json(record);
});
// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup usernmae=john password=foo





// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
router.post('/signin', authMiddleware, async (req, res) => {
  
});

module.exports = router;