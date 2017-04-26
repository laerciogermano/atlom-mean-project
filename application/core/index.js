'use strict';

const app = atlom.module('app');

app.run(function(app){
    app.get('/', (req, res) => {
        res.render('core/views/index.html');
    });
});