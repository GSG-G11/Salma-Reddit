const connection = require('../../config/connection');

const getPostByID = (postID) => connection.query({
  text: 'SELECT * FROM posts WHERE id = $1',
  values: [postID],
});
module.exports = getPostByID;
