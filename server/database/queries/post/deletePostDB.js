const connection = require('../../config/connection');

const deletePostDB = (postID) => connection.query({
  text: 'DELETE FROM posts WHERE id=$1',
  values: [postID],
});

module.exports = deletePostDB;
