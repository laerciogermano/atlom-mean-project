'use strict';

const app = atlom.module('app');

app.run(function(io){
    io.on('connection', function(socket){
        console.log(socket.id);
    });
});