'use strict';

const app = atlom.module('app');

app.run(function(app){
    app.get(/^\/(?!api).*/, function login(req, res){
        res.render('views/index.html');
    });
});