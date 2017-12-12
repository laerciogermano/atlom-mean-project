(function(){
    'use strict';

    angular
        .module('app')
        .controller('AppRootCtrl', AppRootCtrl);

    AppRootCtrl.$inject = ['$scope', '$interval'];

    function AppRootCtrl($scope, $interval){}
})();