'use strict';

const path   = require('path');
const globby = require('globby');

atlom
	.module('redis', [])
	.constant('client', require('./connect'));
	
