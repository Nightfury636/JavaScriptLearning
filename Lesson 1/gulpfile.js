'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./diste/styles'));
};

exports.buildStyles = buildStyles;
exports.build = function () {
    gulp.series(['buildStyles']);
};

exports.watch = function () {
    return gulp.watch('./src/styles/**/*.scss', gulp.series(['buildStyles']));
};

