const express = require('express');
const signup = require('../controllers/users/signup');

const routerAPI = express.Router();
routerAPI.post('/signup', signup);

module.exports = routerAPI;
