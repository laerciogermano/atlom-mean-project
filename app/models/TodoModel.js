'use strict';

const app      = atlom.module('app');
const mongoose = require('mongoose');

const scheme = new mongoose.Schema({
	title        : { type: String },
    description  : { type: String }
}, {
    timestamps   : true
});

app.factory('TodoModel', function(){
    return mongoose.model('todo', scheme);
});