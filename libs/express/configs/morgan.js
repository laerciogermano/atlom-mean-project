'use strict';

const config = atlom.config;
const morgan = require('morgan');

atlom.module('express').config(function(app){
    if(config.debug){
        app.use(morgan('dev'));
    }
});

	