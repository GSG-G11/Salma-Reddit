const notFoundError = require('./errorHandle/notFound');
const serverError = require('./errorHandle/serverError');
const addPost = require('./post/addPost');
const getPost = require('./post/getPost');
const login = require('./users/login');
const logout = require('./users/logout');
const signup = require('./users/signup');

module.exports = {
  serverError, notFoundError, login, signup, logout, addPost, getPost,
};
