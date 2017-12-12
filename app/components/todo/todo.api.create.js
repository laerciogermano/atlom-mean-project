'use strict';

const app = atlom.module('app');

app.run(function(app, TodoModel){
    app.post('/api/todo/create', (req, res) => {
        const params = req.body;

        createTodo(params)
            .then(sendResponse)
            .catch(sendResponseErr);

        function createTodo(data){
            return new TodoModel(data).save();
        }

        function sendResponse(todo){
            return res.json(todo);
        }

        function sendResponseErr(err){
            return res.status(400).json({
                message: err.message
            });
        }
    });
});