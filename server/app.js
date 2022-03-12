const express = require('express');
const cookieParser = require('cookie-parser');
const { join } = require('path');

const app = express();

app.set('port', process.env.PORT || 8000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(join(__dirname, '..', 'public')));

module.exports = app;
