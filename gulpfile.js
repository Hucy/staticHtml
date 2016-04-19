'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var prettify = require('gulp-jsbeautifier');
var minifyCSS = require('gulp-minify-css');
var inlinesource = require('gulp-inline-source');
var browserSync = require('browser-sync').create();
var rev = require('gulp-rev');
var notify = require('gulp-notify'),
    plumber = require('gulp-plumber');
gulp.task('serve', ['less2css'], function() {

    browserSync.init({
        server: "./build"
    });

    gulp.watch('./build/*.less', ['less2css']);
    gulp.watch('./build/*.html').on('change', browserSync.reload);
});

gulp.task('less2css', function () {
    gulp.src('./build/*.less')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(less())
    .pipe(prettify({"selector_separator_newline":false,"newline_between_rules":false,"end_with_newline":false}))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
});
gulp.task('inline',function(){
        gulp.src('./build/*.html')
        .pipe(inlinesource())
        .pipe(rev())
        .pipe(gulp.dest('./out'));
})
gulp.task('default', ['serve']);
