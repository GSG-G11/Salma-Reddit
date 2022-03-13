const express = require('express');
const { signup, login } = require('../controllers');

const routerAPI = express.Router();
routerAPI.post('/signup', signup);
routerAPI.post('/login', login);
module.exports = routerAPI;
