const { getPostByID, deletePostDB } = require('../../database/queries');

const deletePost = (req, res) => {
  const { userID } = req;
  const { postID } = req.params;
  getPostByID(postID)
    .then((data) => {
      const { rows } = data;
      if (rows.length) {
        const { user_id: postUserID } = rows[0];
        if (postUserID === userID) {
          deletePostDB(postID)
            .then(() => res.status(200).json({ success: true, message: 'DELETED' }))
            .catch(() => res.status(500).json({ success: false, message: 'SERVER ERROR' }));
        } else {
          res.status(401).json({ success: false, message: 'NOT AUTHARIZED!' });
        }
      } else {
        res.status(400).send({ success: false, message: 'NO DATA FOUND !' });
      }
    });
};
module.exports = deletePost;
