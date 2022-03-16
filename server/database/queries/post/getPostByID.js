const connection = require('../../config/connection');

const getPostByID = (postID) => connection.query({
  text: 'SELECT * WHERE id = $1 ORDER BY created_at DESC',
  values: [postID],
});
module.exports = getPostByID;
