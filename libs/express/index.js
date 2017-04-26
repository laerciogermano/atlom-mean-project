'use strict';

const config  = atlom.config;

const path    = require('path');
const globby  = require('globby');

const http    = require('http');
const express = require('express');
const app     = express();
const server  = http.createServer(app);
	
atlom
	.module('express', ['mongo'])
	.constant('app', app)
	.constant('server', server);

// init configs
globby.sync(path.resolve(__dirname, './configs/**/*.js')).forEach(file => require(file));

