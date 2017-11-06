const config = require('../config');
const gulp = require('gulp');
const browserSync = require('browser-sync');

const { BUILD_BASE, STYLES_FILES_ALL, TPL_FILES_ALL } = config;

gulp.task('serve', ['prepare'], () => {
    browserSync.init({
        server: {
            baseDir: `./${BUILD_BASE}`
        }
    })

    gulp.watch(STYLES_FILES_ALL, ['sass']);
    gulp.watch(TPL_FILES_ALL, ['tpl']);
});
