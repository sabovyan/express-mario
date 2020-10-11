const express = require('express');
const path = require('path');
const fs = require('fs');
const pug = require('pug');
const controller = require('./controllers/conotroller')
const paths = require('./constants/paths');

const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
controller(app)


app.delete('/', (req, res) => {});

app.put('/', (req, res) => {});

app.listen(4000, () => console.log('server is running'));
