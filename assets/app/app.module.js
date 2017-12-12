'use strict';

angular.element(document).ready(function(){
    angular.bootstrap(document, ['app'], {
        strictDi: true
    });
});

angular.module('app', [
    'ui.router'
]);
	