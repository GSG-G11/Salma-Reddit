const connection = require('../../config/connection');

const getPostsDB = () => connection.query('SELECT posts.*, users.name as username, COUNT(likes.id) from posts INNER JOIN users on posts.user_id = users.id LEFT JOIN likes on posts.id = likes.post_id GROUP BY posts.id,users.id ORDER BY created_at DESC');

module.exports = getPostsDB;
