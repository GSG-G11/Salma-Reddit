const bcrypt = require('bcryptjs');

const comparePassword = (password, hash, cb) => {
  bcrypt.compare(password, hash)
    .then((success) => cb({ success }))
    .catch((error) => cb({ error }));
};

module.exports = comparePassword;
