'use strict';

angular
    .module('app')
    .component('appRoot', {
        controller: 'AppRootCtrl',
        template: `
            Atlom.js is working!
            <todo-list></todo-list>
        `    
    });