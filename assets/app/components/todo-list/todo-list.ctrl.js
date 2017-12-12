(function(){
    'use strict';

    angular
        .module('app')
        .controller('TodoListCtrl', TodoListCtrl);

    TodoListCtrl.$inject = ['$scope', 'todoService'];

    function TodoListCtrl($scope, todoService){
        
        $scope.todos = [];
        $scope.create = create;
        $scope.remove = remove;
        $scope.update = update;

        getAll();

        function getAll(){
            todoService.getAll().then(res => {
                $scope.todos = res.data;
            });
        }

        function create(todo){
            todoService.create(todo).then(getAll)
        }

        function remove(_id){
            todoService.remove(_id).then(getAll);
        }

        function update(_id, updates){
            todoService.update(_id, updates).then(getAll);
        }

    }   
})();