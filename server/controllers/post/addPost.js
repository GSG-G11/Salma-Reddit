const { addPostDB } = require('../../database/queries');
const { jwtVerify } = require('../../utils');

require('env2', '.env');

const addPost = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwtVerify(token).then((data) => {
      const { id: userID } = data;
      const { title, description, img } = req.body;
      if (title && description) {
        addPostDB(title, description, userID, img)
          .then(() => res.status(200).json({ success: true }))
          .catch(() => res.status(500).json({ success: false }));
      } else {
        res.status(400).json({ success: false, message: 'Post title or description cannot be empty !' });
      }
    }).catch(() => {
      res.status(401).json({ success: false, message: 'Unauthorized !' });
    });
  } else {
    res.status(401).json({ success: false, message: 'Unauthorized !' });
  }
};

module.exports = addPost;
