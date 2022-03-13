const jwt = require('jsonwebtoken');
require('env2')('.env');

const jwtSign = (payload) => new Promise((resolve, reject) => {
  jwt.sign(payload, process.env.PRIVATE_KEY, (jwtError, token) => {
    if (!jwtError) {
      resolve(token);
    } else {
      reject(jwtError);
    }
  });
});

module.exports = { jwtSign };
