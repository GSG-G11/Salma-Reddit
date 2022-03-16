const connection = require('../../config/connection');

const getPostByUserId = (userID) => connection.query({
  text: 'SELECT posts.*, COUNT(likes.id) FROM posts LEFT JOIN Likes ON likes.post_id = posts.id WHERE posts.user_id = $1 GROUP BY posts.id ORDER BY created_at DESC',
  values: [userID],
});

module.exports = getPostByUserId;
