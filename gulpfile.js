const config = require('./gulp/config');

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp/tasks');

/* API */
gulp.task('default', ['build']);
// gulp.task('build', ['prepare']);
// gulp.task('css', ['less']);
