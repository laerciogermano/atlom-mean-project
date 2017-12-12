'use strict';

atlom.require('./config/*');

const config = atlom.config;
const http = require('http');

atlom.module('express').config(function(app, $provide){
    const server = http.createServer(app);

    // Inicia servidor HTTP
    server.listen(config.http, function(){
        console.log(`App is started. <${process.env.NODE_ENV}> - ${config.http.hostname}:${config.http.port}`);
    });

    $provide.constant('server', server);
});

    