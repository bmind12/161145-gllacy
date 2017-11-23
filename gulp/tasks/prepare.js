const config = require('../config');
const gulp = require('gulp');
const runSequence = require('run-sequence');

const sequence = [
    'clean',
    ['sass', 'gfx'],
    'tpl-compile',
    'webpack'
];

gulp.task('prepare', () => runSequence(...sequence));
