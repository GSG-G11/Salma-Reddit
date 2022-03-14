const logout = (req, res) => {
  res.clearcookies('token');
  res.json({ message: ' Good bye :)' });
};

module.exports = logout;
