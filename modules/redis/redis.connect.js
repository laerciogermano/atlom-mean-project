'use strict';

const config   = atlom.config;
const redis    = require('redis');
const deasync  = require('deasync');
const client   = deasync(connect)();

atlom
	.module('redis')
	.constant('client', client);

function connect(callback){
	const client = redis.createClient(config.redis);

	client.select(config.redis.database, function (err) {
	    callback(err, client);
	});
};