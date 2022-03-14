const { getUser } = require('../../database/queries');
const { loginValidation, jwtSign } = require('../../utils');
const comparePassword = require('../../utils/comparePassword');

const login = (req, res) => {
  const { email, password } = req.body;
  loginValidation(req)
    .then(() => {
      getUser(email).then((data) => {
        if (data.rows.length === 0) {
          res
            .status(401)
            .json({ success: false, message: 'Wrong email or password !' });
        } else {
          const { password: hashPass, id, name } = data.rows[0];
          comparePassword(password, hashPass)
            .then((success) => {
              if (success) {
                const payload = { id, email, name };
                jwtSign(payload).then((token) => {
                  res.status(200).cookie('token', token);
                  res.json({ success: true });
                });
              } else {
                res.status(400).json({ success: false, message: 'Wrong email or password !' });
              }
            })
            .catch(() => {
              res.status(500).json({ success: false, message: 'Server error' });
            });
        }
      }).catch((error) => {
        res
          .status(500)
          .json({ success: false, message: error.message });
      });
    });
};

module.exports = login;
