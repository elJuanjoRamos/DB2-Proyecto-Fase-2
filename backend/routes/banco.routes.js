var express = require('express')
var banco = express.Router();
var controller = require('../controllers/banco.controller');

banco.get('/banco/get_primer_semestre', controller.default.getInstance().get_primer_semestre);
banco.get('/banco/get_segundo_semestre', controller.default.getInstance().get_segundo_semestre);

module.exports = banco;