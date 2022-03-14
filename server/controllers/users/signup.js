require('env2')('.env');
const { addUser } = require('../../database/queries');
const { signupValidation, hashPassword, jwtSign } = require('../../utils');

const signup = (req, res) => {
  const { password, name, email } = req.body;
  signupValidation(req)
    .then(() => {
      hashPassword(password)
        .then((hashedPassword) => {
          addUser(name, email, hashedPassword)
            .then((data) => {
              const { id } = data.rows[0];
              const payload = { name, email, id };
              jwtSign(payload).then((token) => {
                res.cookie('token', token).status(201).json({ success: true });
              }).catch((jwtError) => {
                res.status(500).json({ message: jwtError });
              });
            });
        });
    }).catch((error) => {
      res.status(500).json({ success: false, message: error.message });
    });
};

module.exports = signup;
