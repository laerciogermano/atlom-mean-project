'use strict';

const morgan = require('morgan');

atlom.module('express').config(function(app){
    app.use(morgan('dev'));
});

	