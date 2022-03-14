const express = require('express');
const { signup, login, logout } = require('../controllers');

const routerAPI = express.Router();
routerAPI.post('/signup', signup);
routerAPI.post('/login', login);
routerAPI.post('/logout', logout);
module.exports = routerAPI;
