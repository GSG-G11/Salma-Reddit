const notFoundError = require('./errorHandle/notFound');
const serverError = require('./errorHandle/serverError');
const login = require('./users/login');
const logout = require('./users/logout');
const signup = require('./users/signup');

module.exports = {
  serverError, notFoundError, login, signup, logout,
};
