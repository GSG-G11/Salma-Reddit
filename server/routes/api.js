const express = require('express');
const {
  signup, login, logout, addPost, getPost, deletePost, getUserProfile,
} = require('../controllers');
const checkAuth = require('../middleware/checkAuth');

const routerAPI = express.Router();
routerAPI.post('/signup', signup);
routerAPI.post('/login', login);
routerAPI.post('/logout', logout);
routerAPI.get('/posts', getPost);
routerAPI.post('/posts', checkAuth, addPost);
routerAPI.delete('/posts/:postID', checkAuth, deletePost);
routerAPI.get('/profile/:userID', checkAuth, getUserProfile);

module.exports = routerAPI;
