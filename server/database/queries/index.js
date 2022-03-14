const addPostDB = require('./post/addPost');
const getPostsDB = require('./post/getPostDB');
const getPostByID = require('./post/getPostByID');
const addUser = require('./users/addUser');
const getUser = require('./users/getUser');
const deletePostDB = require('./post/deletePostDB');

module.exports = {
  addUser, getUser, addPostDB, getPostsDB, getPostByID, deletePostDB,
};
