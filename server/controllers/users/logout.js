const logout = (req, res) => {
  console.log('before2222222222');
  res.clearCookie('token');
  console.log('after33333333333');
  res.json({ message: ' Good bye :)' });
};

module.exports = logout;
