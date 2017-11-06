const config = require('../config');
const gulp = require('gulp');
const browserSync = require('browser-sync');
const gwatch = require('gulp-watch');
const runSequence = require('run-sequence');

const { BUILD_BASE, STYLES_FILES_ALL, TPL_FILES_ALL } = config;

gulp.task('serve', ['prepare'], () => {
    browserSync.init({
        server: {
            baseDir: `./${BUILD_BASE}`
        }
    })

    const watch = (glob, tasks) => gwatch(glob, () => runSequence(...tasks));

    watch(STYLES_FILES_ALL, ['sass']);
    watch(TPL_FILES_ALL, ['tpl']);
});
