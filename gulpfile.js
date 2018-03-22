'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imageOptim = require('gulp-imageoptim');
var uglify = require('gulp-uglify');

gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('images', function() {
  return gulp.src('./src/images/**/*')
    .pipe(imageOptim.optimize())
    .pipe(gulp.dest('./images'));
});

gulp.task('scripts', function(){
  return gulp.src('./src/js/**/*')
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

gulp.task('default', function(){
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['js']);
});
