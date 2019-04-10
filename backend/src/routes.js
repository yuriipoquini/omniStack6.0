const express = require('express');

const routes = express.Router();

routes.get('/home', (req, res) =>{
    res.send('Hello Brasil');
});

module.exports = routes;