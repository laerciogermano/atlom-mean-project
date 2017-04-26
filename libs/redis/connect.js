'use strict';

const config   = atlom.config;
const redis    = require('redis');
const deasync  = require('deasync');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

module.exports = deasync(connect)();

function connect(callback){
	var client = redis.createClient(config.redis);

	client.select(config.redis.database, function (err) {
	    callback(err, client);
	});
};
