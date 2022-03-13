const { join } = require('path');

const serverError = (err, req, res, next) => {
  // res.status(500).json({ err, status: 500 });
  const file = join(__dirname, '..', '..', '..', 'public', 'html', '500.html');
  res.status('500').sendFile(file);
};

module.exports = serverError;
