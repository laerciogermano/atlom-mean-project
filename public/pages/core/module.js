'use strict';

(function(){
	
	angular.element(document).ready(function(){
		angular.bootstrap(document, ['app']);
	});

	angular.module('app', [
		'ui.router',
		'btford.socket-io'
	]);
	
})();

	