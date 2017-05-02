'use strict';

const config = atlom.config;
const shared = require('express-socket.io-session');
const redis  = require('socket.io-redis');

atlom
	.module('socketIo', ['express'])
	.config(SocketIo);

SocketIo.$inject = ['$provide', 'server', 'session'];

function SocketIo($provide, server, session){
	let io = require('socket.io')(server);

	// share pub/sub redis
	io.adapter(redis(config.redis));

	// share session express
	io.use(shared(session, {
		autoSave:true
	})); 
	
	$provide.constant('io', io);
};