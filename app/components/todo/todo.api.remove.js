'use strict';

const app = atlom.module('app');

app.run(function(app, TodoModel){
    app.post('/api/todo/remove', (req, res) => {
        const _id = req.body._id;

        removeTodo(_id)
            .then(sendResponse)
            .catch(sendResponseErr);

        function removeTodo(_id){
            return TodoModel.remove({_id});
        }

        function sendResponse(todo){
            return res.json(todo);
        }

        function sendResponseErr(err){
            return res.status(400).json({message: err.message});
        }
    });
});