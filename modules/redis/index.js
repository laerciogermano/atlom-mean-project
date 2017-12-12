'use strict';

// Inicializa arquivos de configuração
atlom.require('./config/*');

// Dependências
const config   = atlom.config;
const redis    = require('redis');
const Promise  = require('bluebird');

// Seta bluebird como  Promise Redis 
Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

// Inicializa módulo redis
atlom.module('redis', []);

// Inicializa extensões do redis
atlom.require('./redis.*');
	




