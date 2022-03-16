const { jwtVerify } = require('../utils');

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    jwtVerify(token).then((data) => {
      const { id: userID } = data;
      req.userID = userID;
      next();
    })
      .catch(() => {
        res.status(401).json({ success: false, message: 'Not Authorized!!' });
      });
  } else {
    res.status(401).json({ success: false, message: 'Not Authorized!' });
  }
};
module.exports = checkAuth;
