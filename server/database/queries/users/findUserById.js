const connection = require('../../config/connection');

const findUserById = (userId) => connection.query({
  text: ' SELECT name,id FROM users WHERE id = $1',
  values: [userId],
});

module.exports = findUserById;
