(function(){
    'use strict';

    angular
        .module('app')
        .service('todoService', TodoService);

    TodoService.$inject = ['$http'];

    function TodoService($http){
        return {create, getAll, update, remove};

        function create(todo){
            return $http.post('/api/todo/create', todo);
        };

        function getAll(){
            return $http.get('/api/todo/all');
        };

        function update(_id, updates){
            return $http.post('/api/todo/update', {_id, updates});
        };

        function remove(_id){
            return $http.post('/api/todo/remove', {_id});
        };

    };
})();

    