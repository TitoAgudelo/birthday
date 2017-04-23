'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
    gulp.src('./scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./**/*.scss', ['sass']);
});

gulp.task('default', [ 'sass' ]);