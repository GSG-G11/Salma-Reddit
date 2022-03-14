const bycrpt = require('bcryptjs');

const hashPassword = (password) => {
  const salt = bycrpt.genSaltSync(10);
  return bycrpt.hash(password, salt)
    .then((hashedPassword) => hashedPassword)
    .catch((err) => err);
};
module.exports = hashPassword;
