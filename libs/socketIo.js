'use strict';

const sharedsession  = require('express-socket.io-session');

atlom
	.module('socketIo', ['express'])
	.config(SocketIo);

SocketIo.$inject = ['$provide', 'server', 'session'];

function SocketIo($provide, server, session){
	let io = require('socket.io')(server);

	io.use(sharedsession(session, {
		autoSave:true
	})); 
	
	$provide.constant('io', io);
};