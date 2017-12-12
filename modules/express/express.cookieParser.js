'use strict';

const config         = atlom.config;
const cookieParser   = require('cookie-parser');

atlom.module('express').config(function(app){
	app.use(cookieParser());
});
	