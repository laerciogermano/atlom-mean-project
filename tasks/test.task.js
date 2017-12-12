'use strict';

process.env.NODE_ENV = 'test';

const gulp  = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('test', function(){
	gulp.src(`./app/**/*.spec.js`)
	.pipe(mocha({
        reporter: 'spec',
        require: ['./app.js']
    }))
});
