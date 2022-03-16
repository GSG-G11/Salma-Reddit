const logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: ' Good bye :)' });
};

module.exports = logout;
