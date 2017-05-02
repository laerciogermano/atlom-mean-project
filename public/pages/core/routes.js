'use strict';

(function(){
	
	angular
		.module('app')
		.config(Config);

	Config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function Config($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('core', {
			url: '/',
			controller: 'CoreController',
			templateUrl: '/public/pages/core/views/index.html',
		});
	}

})();

