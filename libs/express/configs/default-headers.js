'use strict';

atlom.module('express').config(function(app){
	app.use(function (req, res, next) {
        res.removeHeader('X-Content-Type-Options');
        res.removeHeader('X-Powered-By');
        next();
    });
});

	