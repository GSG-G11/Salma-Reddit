const { getPostByUserId, findUserById } = require('../../database/queries');

const getUserProfile = (req, res) => {
  const { userID } = req.params;
  findUserById(userID)
    .then((user) => {
      if (!user.rows.length) {
        res.status(400).json({ success: false, message: 'NO profile Found!' });
      } else {
        getPostByUserId(userID)
          .then((post) => {
            res
              .status(200)
              .json({ success: true, posts: post.rows, user: user.rows[0] });
          })
          .catch(() => res.status(500).json({ success: false }));
      }
    })
    .catch(() => res.status(500).json({ success: false }));
};

module.exports = getUserProfile;
