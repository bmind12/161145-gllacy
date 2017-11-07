const config = require('../config');
const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks-render');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');

const { BUILD_BASE, DEV_BASE, TPL_FILES, TPL_BASE } = config;

gulp.task('tpl-compile', () =>
    gulp.src(TPL_FILES)
        .pipe(plumber({
            errorHandler: e => gutil.log(gutil.colors.red(`${e.name} in ${e.plugin}: ${e.message}`))
        }))
        .pipe(nunjucks({
          path: [`${TPL_BASE}/`]
        }))
        .pipe(gulp.dest(BUILD_BASE))
);

gulp.task('tpl', ['tpl-compile'], () => {
    browserSync.reload();
});
