const connection = require('../../config/connection');

const getPostsDB = () => connection.query('SELECT posts.*, users.name as username from posts INNER JOIN users on posts.user_id = users.id ORDER BY created_at DESC');

module.exports = getPostsDB;
