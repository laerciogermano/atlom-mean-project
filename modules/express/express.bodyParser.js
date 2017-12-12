'use strict';

const bodyParser = require('body-parser');

atlom.module('express').config(function(app){
	app.use(bodyParser.json({ extended: true, limit: '50mb'}));
	app.use(bodyParser.urlencoded({ extended: true, limit: '50mb'}));
});