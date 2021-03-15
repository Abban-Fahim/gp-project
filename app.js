const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/file', express.static('static'))

app.get('/', (req, res) => {
    res.render('home', { cache: true, __filename: 'home' });
});

app.route('/form')
    .get((req, res) => res.render('form'))
    .post();

app.route('/video')
    .get((req, res) => res.render('video'));


app.listen(3000, () => {
    console.log('started!')
});