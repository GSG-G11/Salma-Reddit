const connection = require('../../config/connection');

const getPostByUserId = (userID) => connection.query({
  text: 'SELECT * FROM posts WHERE user_id = $1 ORDER BY created_at DESC',
  values: [userID],
});

module.exports = getPostByUserId;
