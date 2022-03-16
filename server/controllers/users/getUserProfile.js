const { getPostByUserId, findUserById, likedPost } = require('../../database/queries');

const getUserProfile = (req, res) => {
  const { userID: currantId } = req;
  const { userID } = req.params;
  findUserById(userID)
    .then((user) => {
      if (!user.rows.length) {
        res.status(400).json({ success: false, message: 'NO profile Found!' });
      } else {
        getPostByUserId(userID)
          .then((post) => {
            likedPost(currantId)
              .then((likedPosts) => {
                res
                  .status(200)
                  .json({
                    success: true,
                    posts: post.rows,
                    user: user.rows[0],
                    likedPosts: likedPosts.rows,
                  });
              })
              .catch(() => res.status(500).json({ success: false }));
          });
      }
    })
    .catch(() => res.status(500).json({ success: false }));
};

module.exports = getUserProfile;
