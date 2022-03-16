const express = require('express');
const {
  signup, login, logout, addPost, getPost, deletePost, getUserProfile, likeToggle,
} = require('../controllers');
const checkAuth = require('../middleware/checkAuth');

const routerAPI = express.Router();
routerAPI.post('/signup', signup);
routerAPI.post('/login', login);
routerAPI.post('/logout', logout);
routerAPI.get('/posts', getPost);
routerAPI.use(checkAuth);
routerAPI.post('/posts', addPost);
routerAPI.post('/posts/like/:postID', likeToggle);
routerAPI.delete('/posts/:postID', deletePost);
routerAPI.get('/profile/:userID', getUserProfile);

module.exports = routerAPI;
