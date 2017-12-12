'use strict';

// Inicializa as configurações mongo
atlom.require('./config/*');

// Inicializa o módulo mongoose do projeto
const mongoose = require('mongoose');
const Promise  = require('bluebird');

// Seta o bluebird responsável pela mongoose.Promise
mongoose.Promise = Promise;

// Inicializa o módulo mongo
atlom.module('mongo', []);

// Carrega as extensões do mongo
atlom.require('./mongo.*');





		