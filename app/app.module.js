'use strict';

// módulo app e suas dependências
const app = atlom.module('app', [
    'mongo', 
    'express', 
    'redis',
    'socketIo'
]);