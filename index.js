const express = require('express');
const path = require('path');
const fs = require('fs');
const pug = require('pug');
const controller = require('./controllers/conotroller');
const paths = require('./constants/paths');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
controller(app);

app.listen(4000, () => console.log('server is running'));
