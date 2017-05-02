'use strict';

(function(){

	angular
		.module('app')
		.controller('CoreController', CoreController);

	CoreController.$inject = ['socketIo'];

	function CoreController(socketIo){};

})();

