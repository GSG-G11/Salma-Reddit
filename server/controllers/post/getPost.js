const { getPostsDB } = require('../../database/queries');

const getPost = (req, res) => {
  getPostsDB()
    .then((data) => {
      const { rowCount, rows } = data;
      res.status(200).json({ success: true, rowCount, rows });
    })
    .catch(() => res.status(500).json({ success: false }));
};

module.exports = getPost;
