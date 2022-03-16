const express = require('express');
const { profilePage } = require('../controllers');

const routerPages = express.Router();
routerPages.get('/profile/:id', profilePage);

module.exports = routerPages;
