const config = require('../config');
const gulp = require('gulp');

const { GFX_FILES_ALL, GFX_DEST } = config;

gulp.task('gfx', () => {
    return gulp.src(GFX_FILES_ALL)
        .pipe(gulp.dest(GFX_DEST))
});
