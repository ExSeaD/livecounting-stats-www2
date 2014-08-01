var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');

var scripts = ['*.js', 'lib/**/*.js', 'public/**/*.js'];

gulp.task('lint', function() {
  gulp.src(scripts)
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStylish))
    .pipe(jshint.reporter('fail'));
});

gulp.task('lint-nonfail', function() {
  gulp.src(scripts)
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStylish));
});

gulp.task('watch-lint', ['lint-nonfail'], function() {
  gulp.watch(scripts, ['lint-nonfail']);
});

gulp.task('default', ['watch-lint']);
