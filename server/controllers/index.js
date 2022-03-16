const notFoundError = require('./errorHandle/notFound');
const serverError = require('./errorHandle/serverError');
const profilePage = require('./pages/profilePage');
const addPost = require('./post/addPost');
const deletePost = require('./post/deletePost');
const getPost = require('./post/getPost');
const getUserProfile = require('./users/getUserProfile');
const login = require('./users/login');
const logout = require('./users/logout');
const signup = require('./users/signup');

module.exports = {
  serverError,
  notFoundError,
  login,
  signup,
  logout,
  addPost,
  getPost,
  deletePost,
  profilePage,
  getUserProfile,
};
