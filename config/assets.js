'use strict';

atlom.config.set({
    assets: {
        css: [
            'assets/app/**/*.css'
        ],
        js: [
            'assets/bower_components/angular/angular.min.js',
            'assets/bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'assets/bower_components/angular-socket-io/socket.min.js',
            'assets/app/**/app.module.js',
            'assets/app/**/*.js'
        ]
    }
});