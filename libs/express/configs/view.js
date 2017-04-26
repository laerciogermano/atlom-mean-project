'use strict';

const view = atlom.config.view;
const swig = require('swig');

atlom.module('express').config(function(app){
    swig.setDefaults(view.options);

    app.set('view cache', view.options.cache);
    app.set('views', view.folder);
    app.set('view engine', view.viewEngine);
    app.engine('html', swig.renderFile);    
});