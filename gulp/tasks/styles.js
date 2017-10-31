const config = require('../config');
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('cssnano');
const flexbugs = require('postcss-flexbugs-fixes');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const sassGlob = require('gulp-sass-glob');

const { STYLES_MAIN_FILE, STYLES_DEST } = config;
const plugins = [
    flexbugs(),
    autoprefixer(),
    cssnano()
];

gulp.task('sass', ['stylelint'], () => {
    return gulp.src(STYLES_MAIN_FILE)
        .pipe(sassGlob())
        .pipe(sourcemaps.init())
        .pipe(sass()).on('error', sass.logError)
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(STYLES_DEST))
        .pipe(browserSync.stream());
});
