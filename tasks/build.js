'use strict';

const config = atlom.config;

const path   = require('path');
const gulp   = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const copy   = require('gulp-copy');
const globby = require('globby');

gulp.task('build', ['minify', 'cssmin']);

gulp.task('minify', function(){

    let files = globby.sync(config.assets.js);

    files = files.map(file => path.resolve(file));

    return gulp
    .src(files)
    .pipe(concat("aggregateds/aggregated.min.js"))
    .pipe(uglify({
        mangle: false
    }))
    .pipe(gulp.dest("./public"))

});

gulp.task('cssmin', function(){

    let files = globby.sync(config.assets.css);

    files = files.map(file => path.resolve(file));

    return gulp.src(files)
    .pipe(cssmin())
    .pipe(concat("aggregateds/aggregated.min.css"))
    .pipe(gulp.dest("./public"))
});