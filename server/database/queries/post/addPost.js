const connection = require('../../config/connection');

const addPostDB = (title, description, userID, img) => connection.query({
  text: 'INSERT INTO POSTS (title,description,user_id,img, votes) VALUES ($1,$2,$3,$4,0) RETURNING *',
  values: [title, description, userID, img],
});

module.exports = addPostDB;
