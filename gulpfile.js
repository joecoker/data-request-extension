const gulp = require('gulp');
const exec = require('gulp-exec').exec;

gulp.task('push', function() {
  exec('clasp push');
})

gulp.task('watch', function() {
  gulp.watch([
    '**/*.gs',
    '**/*.html'
  ], ['push'])
});

gulp.task('default', ['watch']);
