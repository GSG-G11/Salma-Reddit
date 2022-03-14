const bcrypt = require('bcryptjs');

const comparePassword = (password, hash) => bcrypt.compare(password, hash)
  .then((success) => success)
  .catch((error) => error);

module.exports = comparePassword;
