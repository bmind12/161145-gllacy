const config = require('../config');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const cached = require('gulp-cached');

const lint = (globs) => {
    return gulp.src(globs)
        .pipe(cached('eslint'))
        .pipe(eslint())
        .pipe(eslint.format())
};

gulp.task('eslint:app', () => lint(config.JS_FILES_ALL));

gulp.task('eslint', ['eslint:app']);
