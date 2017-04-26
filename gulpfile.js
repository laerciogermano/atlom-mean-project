'use strict';

process.env.NODE_ENV = 'task';

// start app tasks
require('./app.js');

// start files tasks
require('globby').sync('./tasks/*').forEach(file => require(file));


