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

const jwtVerify = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, process.env.PRIVATE_KEY, (error, data) => {
    if (!error) {
      resolve(data);
    } else {
      reject(error);
    }
  });
});
module.exports = { jwtSign, jwtVerify };
