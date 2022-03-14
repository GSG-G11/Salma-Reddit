const express = require('express');
const {
  signup, login, logout, addPost, getPost,
} = require('../controllers');

const routerAPI = express.Router();
routerAPI.post('/signup', signup);
routerAPI.post('/login', login);
routerAPI.post('/logout', logout);
routerAPI.post('/posts', addPost);
routerAPI.get('/posts', getPost);
module.exports = routerAPI;
