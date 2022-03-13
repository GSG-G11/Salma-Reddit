const bycrpt = require('bcryptjs');

const hashPassword = (password, callback) => {
  bycrpt.genSalt(10, (error, salt) => {
    bycrpt.hash(password, salt)
      .then((hashedPassword) => callback({ success: true, hash: hashedPassword }))
      .catch((err) => callback({ success: false, error: err }));
  });
};

module.exports = hashPassword;
