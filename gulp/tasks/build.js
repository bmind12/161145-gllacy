const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
 
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
}); 

gulp.task('build', ['clean'], () =>
    gulp.src('tpl/index.html')
        .pipe(nunjucks.compile())
        .pipe(rename((path) => {
            path.extname = '.html'
        }))
        .pipe(gulp.dest('dist'))
);