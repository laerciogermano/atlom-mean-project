'use strict';

atlom.config.set({
    requires: [
        'libs/*',
        'application/**/module.js',
        'application/**/*.js',
        '!application/**/client/**/module.js'
    ]
});