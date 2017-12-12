'use strict';

const config = atlom.config;
const globby = require('globby');

atlom.module('express').config(function(app){
    app.locals.assets = {};

    if(process.env.NODE_ENV != 'production'){
        for(let key in config.assets){
            app.locals.assets[key] = globby.sync(config.assets[key]);
        }
    }
        
});


	