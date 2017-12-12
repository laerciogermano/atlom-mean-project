'use strict';

const atlom  = require('atlom');
const config = atlom.config;
const path   = require('path');
const gulp   = require('gulp');
const uglify = require('gulp-uglify');
const babel  = require('gulp-babel');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const globby = require('globby');

gulp.task('atl-express:build', ['atl-express:minify', 'atl-express:cssmin']);

gulp.task('atl-express:minify', function(){
    let files = globby.sync(config.assets.js).map(file => path.resolve(file));

    return gulp
    .src(files)
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify({ mangle: false }))
    .pipe(concat(`build/aggregated.min.js`))
    .pipe(gulp.dest("./assets"))

});

gulp.task('atl-express:cssmin', function(){
    let files = globby.sync(config.assets.css);

    files = files.map(file => path.resolve(file));

    return gulp.src(files)
    .pipe(cssmin())
    .pipe(concat(`build/aggregated.min.css`))
    .pipe(gulp.dest("./assets"))
});