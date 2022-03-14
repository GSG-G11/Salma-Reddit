const { addPostDB } = require('../../database/queries');

require('env2', '.env');

const addPost = (req, res) => {
  const { userID } = req;
  const { title, description, img } = req.body;
  if (title && description) {
    addPostDB(title, description, userID, img)
      .then(() => res.status(200).json({ success: true }))
      .catch(() => res.status(500).json({ success: false }));
  } else {
    res.status(400).json({ success: false, message: 'Post title or description cannot be empty !' });
  }
};

module.exports = addPost;
