const config = require('../config');
const gulp = require('gulp');
const stylelint = require('gulp-stylelint');

const { STYLES_FILES_ALL } = config;

gulp.task('stylelint', () =>
    gulp.src(STYLES_FILES_ALL)
    .pipe(stylelint({
        failAfterError: false,
        reporters: [{
            formatter: 'string',
            console: true
        }]
    }))
);
