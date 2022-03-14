const addPostDB = require('./post/addPost');
const getPostDB = require('./post/getPostDB');
const addUser = require('./users/addUser');
const getUser = require('./users/getUser');

module.exports = {
  addUser, getUser, addPostDB, getPostDB,
};
