const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:yurixd10@cluster0-xzuei.mongodb.net/omnistack?retryWrites=true', {
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));// permite que envie arquivos nas requisições

app.use(require('./routes'));

app.listen('3030');