require('./config/config')

const express = require('express')
const mongoose = require('mongoose');

// Using ES6 imports
// import mongoose from 'mongoose';

const app = express()

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true },
    (err, res) => {

        if (err) throw err;

        console.log('Base de Datos ONLINE');

    });

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto', process.env.PORT);
})