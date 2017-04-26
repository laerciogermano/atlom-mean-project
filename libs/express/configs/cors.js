'use strict';

const cors   = require('cors');
const config = atlom.config;

atlom.module('express').config(function(app){
	app.use(cors(config.cors));
});
