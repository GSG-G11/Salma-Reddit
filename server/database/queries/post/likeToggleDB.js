const connection = require('../../config/connection');

const likeToggleDB = (userID, postID) => connection.query({
  text: 'SELECT * FROM likes WHERE user_id = $1 AND post_id =$2',
  values: [userID, postID],
}).then((result) => {
  if (result.rows.length) {
    return connection.query({
      text: 'DELETE FROM likes WHERE user_id = $1 AND post_id =$2',
      values: [userID, postID],
    });
  }
  return connection.query({
    text: 'INSERT INTO LIKES (user_id, post_id) values($1, $2)',
    values: [userID, postID],
  });
});
module.exports = likeToggleDB;
