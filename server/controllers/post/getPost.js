const { getPostsDB, likedPost } = require('../../database/queries');
const { jwtVerify } = require('../../utils');

const getPost = (req, res) => {
  getPostsDB()
    .then((data) => {
      const { token } = req.cookies;
      if (token) {
        jwtVerify(token)
          .then((result) => {
            const { id: userID } = result;
            likedPost(userID)
              .then((likedPosts) => {
                const { rowCount, rows } = data;
                res.status(200)
                  .json({
                    success: true, rowCount, rows, likedPosts: likedPosts.rows,
                  });
              })
              .catch(() => {
                res.status(500).json({ success: false, message: 'SERVER ERROR!' });
              });
          })
          .catch(() => {
            res.status(500).json({ success: false, message: 'SERVER ERROR!' });
          });
      } else {
        const { rowCount, rows } = data;
        res.status(200)
          .json({ success: true, rowCount, rows });
      }
    })
    .catch(() => res.status(500).json({ success: false }));
};

module.exports = getPost;
