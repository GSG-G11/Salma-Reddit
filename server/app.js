const express = require('express');
const cookieParser = require('cookie-parser');
const { join } = require('path');
const { routerAPI, routerPages } = require('./routes');
const { notFoundError, serverError } = require('./controllers');

const app = express();

app.set('port', process.env.PORT || 8000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(join(__dirname, '..', 'public', 'static')));

app.use(routerPages);
app.use('/api/v1', routerAPI);

app.use(notFoundError);
app.use(serverError);
module.exports = app;
