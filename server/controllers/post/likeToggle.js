const { likeToggleDB } = require('../../database/queries');

const likeToggle = (req, res) => {
  const { userID } = req;
  const { postID } = req.params;
  likeToggleDB(userID, postID)
    .then((data) => res.status(200).json({ success: true, message: data.command }))
    .catch(() => res.status(500).json({ success: false, message: 'SERVER ERROR' }));
};

module.exports = likeToggle;
