'use strict';

const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const _ = require('lodash');

atlom.module('express').config(function(app){
	app.use(expressValidator({
		customValidators: {
			isHex: isHex,
		    isObjectId: mongoose.Types.ObjectId.isValid,
		    isArray: _.isArray,
		    isObject: isObject,
		    isString: _.isString
		 }
	}));
});

function isObject(value){
	return Object.prototype.toString.call(value) === '[object Object]';
};

function isHex(value){
	var re = /[0-9A-Fa-f]{6}/g;
	var inputString = 'AABBCC';
	return re.test(inputString);
}




	