const { join } = require('path');

const profilePage = (req, res) => {
  const file = join(__dirname, '..', '..', '..', 'public/protected/profile.html');
  res.sendFile(file);
};
module.exports = profilePage;
