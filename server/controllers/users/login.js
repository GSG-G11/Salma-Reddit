const { getUser } = require('../../database/queries');
const { loginValidation, jwtSign } = require('../../utils');
const comparePassword = require('../../utils/comparePassword');

const login = (req, res) => {
  const { email, password } = req.body;
  loginValidation(req, (validationResult) => {
    if (!validationResult.success) {
      res.status(500).json({ success: false, message: validationResult.message });
    } else {
      getUser(email)
        .then((data) => {
          if (data.rows.length === 0) {
            res.status(401).json({ success: false, message: 'Wrong email or password !' });
          } else {
            const {
              password: hashPass, id, name,
            } = data.rows[0];
            comparePassword(password, hashPass, ({ success, error }) => {
              if (!error) {
                if (success) {
                  const payload = { id, email, name };
                  jwtSign(payload).then((token) => {
                    res.status(200).cookie('token', token);
                    res.json({ success: true });
                  }).catch(() => {
                    res.status(500).json({ success: false, message: 'Server error' });
                  });
                } else {
                  res.status(401).json({ success: false, message: 'Wrong email or password !' });
                }
              } else {
                res.status(500).json({ success: false, message: 'Server error' });
              }
            });
          }
        });
    }
  });
};

module.exports = login;
