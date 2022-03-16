const addPostDB = require('./post/addPost');
const getPostsDB = require('./post/getPostDB');
const getPostByID = require('./post/getPostByID');
const addUser = require('./users/addUser');
const getUser = require('./users/getUser');
const deletePostDB = require('./post/deletePostDB');
const getPostByUserId = require('./post/getPostByUserId');
const findUserById = require('./users/findUserById');

module.exports = {
  addUser, getUser, addPostDB, getPostsDB, getPostByID, deletePostDB, getPostByUserId, findUserById,
};
