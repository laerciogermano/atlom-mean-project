'use strict';

const config   = atlom.config;
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const deasync  = require('deasync'); 

mongoose.Promise = bluebird;

atlom
	.module('mongo')
	.constant('db', deasync(connect)());

function connect(callback){
	const conn = mongoose.connection;
	
	config.mongo.options.debug = config.debug;

	const db = mongoose.connect(config.mongo.uri, config.mongo.options, function(err){
		callback(err, db);
	});
}
