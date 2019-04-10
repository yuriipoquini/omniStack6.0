const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));// permite que envie arquivos nas requisições

app.use(require('./routes'));

app.listen('3030');