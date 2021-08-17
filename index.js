const express = require('express');
const pug = require('pug');
const routes = require('./routes/routes');
const path = require('path');

const app = express();

app.set('views engines', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);