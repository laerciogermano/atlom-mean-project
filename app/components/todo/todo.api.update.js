'use strict';

const app = atlom.module('app');

app.run(function(app, TodoModel){
    app.post('/api/todo/update', (req, res) => {
        const {_id, updates} = req.body;

        findTodo(_id)
            .then(updateTodo)
            .then(sendResponse)
            .catch(sendResponseErr);

        function findTodo(_id){
            return TodoModel.findById(_id).then(todo => {
                if(!todo) 
                    throw new Error('Todo not found');
                else return todo
            });
        }

        function updateTodo(todo){
            todo.set(updates);
            return todo.save();
        }

        function sendResponse(todo){
            return res.json(todo);
        }

        function sendResponseErr(err){
            console.log(err);
            return res.status(400).json({message: err.message});
        }
    });
});