const notFoundError = require('./errorHandle/notFound');
const serverError = require('./errorHandle/serverError');
const login = require('./users/login');
const signup = require('./users/signup');

module.exports = {
  serverError, notFoundError, login, signup,
};
