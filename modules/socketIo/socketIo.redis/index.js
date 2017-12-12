'use strict';

const redis  = require('socket.io-redis');
const config = atlom.config;

atlom
    .module('socketIo')
    .config(SocketIo);

function SocketIo(io){
	// share pub/sub redis
	io.adapter(redis(config.redis));
};