'use strict';

angular
	.module('app')
	.factory('socketIo', ['$rootScope', 'socketFactory', function SocketFactory($rootScope, socketFactory) {
		
		var socket = socketFactory({
			ioSocket: io.connect(window.location.origin)
		});

		return socket;
	}]);

