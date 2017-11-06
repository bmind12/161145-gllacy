const config = require('./gulp/config');
const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');

requireDir('./gulp/tasks');

/* API */
gulp.task('default', ['serve']);
gulp.task('styles', ['stylelint']);
gulp.task('assets', () => runSequence('clean', 'gfx'));
