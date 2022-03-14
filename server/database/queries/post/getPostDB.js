const connection = require('../../config/connection');

const getPostsDB = () => connection.query('SELECT * FROM posts');

module.exports = getPostsDB;
