'use strict';

const config   = atlom.config;

const mongoose = require('mongoose');
const deasync  = require('deasync'); 
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

const mongo = atlom.module('mongo', []);

mongo.config(function($provide){
	var db = deasync(connect)();

	$provide.constant('db', db);

	function connect(callback){
		let config = atlom.config;
		let conn   = mongoose.connection;
		
		config.mongo.options.debug = config.debug;

		let db = mongoose.connect(config.mongo.uri, config.mongo.options, function(err){
			callback(err, db);
		});
	}
});




		