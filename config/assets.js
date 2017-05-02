'use strict';

atlom.config.set({
   assets: {
        css: [
            //bowser components
            'public/libs/uikit/css/uikit.min.css',
            
            //application
            'application/*/client/**/*.css',
            'public/pages/**/*.css'
        ],
        js: [
            //bower componentes
            'public/bower_components/angular/angular.min.js',
            'public/bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'public/bower_components/angular-socket-io/socket.min.js',
            'public/bower_components/jquery/dist/jquery.min.js',
            'public/libs/uikit/js/uikit.min.js',

            //application
            'application/*/client/**/module.js', // modules first
            'public/pages/**/module.js', // modules first
            'application/*/client/**/*.js',
            'public/pages/**/*.js',
        ]
    }
});