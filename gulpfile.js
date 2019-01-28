/**
 * Load NPM dependencies
*/
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var browserSync  = require('browser-sync').create();
var uglify       = require('gulp-uglifyjs');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano      = require('cssnano');

var processors = [
  autoprefixer,
  cssnano
];

gulp.task('sass', function () {
  return gulp.src(['src/scss/*.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss(processors))
  .pipe(gulp.dest("src/css"))
  .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: "./src"
  });
  gulp.watch(['src/scss/*/*.scss'], ['sass']);
  gulp.watch(['src/js/src/*.js'], ['js']);
  gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('js', function() {
  return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'src/js/src/*.js'])
  .pipe(uglify('self.min.js', {
    outSourceMap: false
  }))
  .pipe(gulp.dest("src/js/min"))
  .pipe(browserSync.stream());
});

gulp.task('default', ['js','serve']);