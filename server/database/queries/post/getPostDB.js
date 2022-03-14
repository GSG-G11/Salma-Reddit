const connection = require('../../config/connection');

const getPostDB = () => connection.query('SELECT * FROM posts');

module.exports = getPostDB;
