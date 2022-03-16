const connection = require('../../config/connection');

const likedPost = (userID) => connection.query({
  text: 'SELECT post_id FROM likes WHERE user_id = $1',
  values: [userID],
});

module.exports = likedPost;
