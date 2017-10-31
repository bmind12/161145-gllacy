const config = require('../config');
const gulp = require('gulp');
const clean = require('gulp-clean');

const { BUILD_BASE } = config;

gulp.task('clean', function () {
    return gulp.src(BUILD_BASE, {read: false})
        .pipe(clean());
});
