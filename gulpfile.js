'use strict';

// Inicializa o ambiente como task
process.env.NODE_ENV = 'task';

// Capura instância global atlom
const atlom = require('atlom');

// Inicializa arquivos das tasks
atlom.require('**/*.task.js');