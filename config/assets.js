'use strict';

atlom.config.set({
   assets: {
        css: [
            //bowser components
            'public/bower_components/material-design-lite/material.min.css',
            //application
            'application/*/client/**/*.css',
            'public/pages/**/*.css'
        ],
        js: [
            //bower componentes
            'public/bower_components/angular/angular.min.js',
            'public/bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'public/bower_components/angular-socket-io/socket.min.js',
            'public/bower_components/material-design-lite/material.min.js',
            //application
            'application/*/client/**/module.js',
            'public/pages/**/module.js',
            'application/*/client/**/*.js',
            'public/pages/**/*.js',
        ]
    }
});