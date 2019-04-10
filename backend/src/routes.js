const express = require('express');

const routes = express.Router();//criando rotas "url"

const BoxController = require('./controler/BoxController');

routes.post('/boxes', BoxController.store)

module.exports = routes;