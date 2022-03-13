const { join } = require('path');

const notFoundError = (req, res) => {
  const file = join(__dirname, '..', '..', '..', 'public', 'static', 'html', '404.html');
  res.status('404').sendFile(file);
};

module.exports = notFoundError;
