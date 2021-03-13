const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('home');
});

app.route('/form')
.get((req,res)=> res.render('form'))
.post()

app.listen(3000 || process.env.PORT, ()=>{
    console.log('started!')
});