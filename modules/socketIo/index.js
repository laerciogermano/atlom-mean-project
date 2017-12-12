'use strict';

// Dependências
const config = atlom.config;
const socketIo = require('socket.io');

// Inicializa módulo socketIo
atlom
	.module('socketIo', ['express'])
	.config(SocketIo);

function SocketIo($provide, server){
	const io = socketIo(server);
	$provide.constant('io', io);
};

// Inicializa extensões
atlom.require('./socketIo.*');

