'use strict';

atlom.config.set({
    requires: [
        'modules/*',
        'app/**/*.js',
        '!**/*.spec.js',
        '!**/*.task.js'
    ]
});