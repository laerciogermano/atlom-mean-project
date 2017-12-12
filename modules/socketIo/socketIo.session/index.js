'use strict';

const shared = require('express-socket.io-session');

atlom
    .module('socketIo')
    .config(SocketIo);

function SocketIo(io, session){
	// share session express
	io.use(shared(session, {
		autoSave:true
	}));
};