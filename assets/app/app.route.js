 (function(){
    'use strict';

    angular
        .module('app')
        .config(AppRoute);

    AppRoute.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];

    function AppRoute($stateProvider, $urlRouterProvider, $locationProvider){

            $stateProvider
            .state('app', {
                url: '/',
                template: `<app-root></app-root>`
            })
            .state('pageNotFound', {
                template: `Página não encontrada`
            });

            $urlRouterProvider.otherwise(function($injector){
                $injector.get('$state').go('pageNotFound');
            });

            $urlRouterProvider.rule(function ($injector, $location) {
                var path       = $location.path();
                var normalized = path.toLowerCase();
                path != normalized &&  $location.replace().path(normalized);
            });
            
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
    }
})();