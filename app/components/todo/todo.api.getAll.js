'use strict';

const app = atlom.module('app');

app.run(function(app, TodoModel){
    app.get('/api/todo/all', (req, res) => {
        
        const _id = req.body._id;

        readTodos()
            .then(sendResponse)
            .catch(sendResponseErr);

        function readTodos(){
            return TodoModel.find({});
        }

        function sendResponse(todos){
            return res.json(todos);
        }

        function sendResponseErr(err){
            return res.status(400).json({message: err.message});
        }
    });
});