const config = require('../config');
const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');

const { BUILD_BASE, DEV_BASE, TPL_FILES } = config;

gulp.task('tpl-compile', () =>
    gulp.src(TPL_FILES)
        .pipe(plumber())
        .pipe(nunjucks.compile())
        .pipe(rename((path) => {
            path.extname = '.html'
        }))
        .pipe(gulp.dest(BUILD_BASE))
);

gulp.task('tpl', ['tpl-compile'], () => {
    browserSync.reload();
});
