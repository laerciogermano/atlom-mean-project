'use strict';

atlom.require('./config.js');

const config = atlom.config;
const swig = require('swig');

atlom.module('express').config(function(app){
    app.set('view cache', config.view.cache);
    app.set('views', config.view.folder);
    app.set('view engine', 'html');
    app.engine('html', swig.renderFile);    
});