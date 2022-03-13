const connection = require('../../config/connection');

const addUser = (name, email, hash) => connection.query({
  text: 'INSERT INTO users (name, email, password) VALUES ($1,$2,$3) RETURNING *',
  values: [name, email, hash],
});

module.exports = addUser;
