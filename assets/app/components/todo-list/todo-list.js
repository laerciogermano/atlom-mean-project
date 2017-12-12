'use strict';

angular
    .module('app')
    .component('todoList', {
        controller: 'TodoListCtrl',
        template: `
           <div class="todo-item" ng-repeat="todo in todos track by $index">
                <input type="text" placeholder="title" ng-model="todo.title" />
                <input type="text" placeholder="description" ng-model="todo.description" />
                <button ng-click="update(todo._id, todo)">update</button>
                <button ng-click="remove(todo._id)">remove</button>
            </div>
            <form class="todo-form" ng-submit="create(forms.create)">
                <input class="field" type="text" placeholder="Título" ng-model="forms.create.title" />
                <input class="field" type="text" placeholder="Descrição" ng-model="forms.create.description" />
                <button type="submit">Salvar</button>
            </form>
        `    
    });