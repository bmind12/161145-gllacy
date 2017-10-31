const config = require('../config');
const gulp = require('gulp');
const runSequence = require('run-sequence');

const sequence = [
    'clean',
    'sass',
    'tpl-compile'
];

gulp.task('prepare', () => runSequence(...sequence));
