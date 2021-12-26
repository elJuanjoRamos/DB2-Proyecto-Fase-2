var express = require('express')
var usuario = express.Router();
var controller = require('../controllers/usuario.controller');

usuario.get('/usuario/get_all', controller.default.getInstance().get_all);
usuario.get('/usuario/get_one/:id', controller.default.getInstance().get_one);
usuario.post('/usuario/auth', controller.default.getInstance().auth);
module.exports = usuario;