require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const radioData = require('./form');

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })

const formSchema = mongoose.Schema({
    response: Object
});
const Response = mongoose.model('Response', formSchema);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/file', express.static('static'))

app.get('/', (req, res) => {
    res.render('home');
});

app.route('/form')
    .get((req, res) => res.render('form', { controls: radioData }))
    .post((req, res) => {
        new Response({ response: req.body }).save();
        res.render('success', { email: req.body.email });
    });

app.route('/video')
    .get((req, res) => res.render('video'));

app.get('/data', (req, res) => {
    Response.find((err, docs) => {
        res.render('table', { data: docs });
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('started!')
});