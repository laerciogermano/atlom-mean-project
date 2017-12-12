'use strict';

atlom.require('./config.js');

const config     = atlom.config;
const express    = require('express');
const path       = require('path');
const globby     = require('globby');

atlom.module('express').config(function(app){
    for(let key in config.static){
        globby.sync(config.static[key]).forEach(dir => {
            app.use(key, express.static(path.resolve(dir)));
        });
    }
});
	