'use strict';

const express = require('express');
const app = express();

atlom
    .module('express', ['mongo'])
    .constant('app', app);

atlom.require('./express.*');
