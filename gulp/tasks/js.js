const config = require('../config');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const path = require('path');
const named = require('vinyl-named');
const webpackStream = require('webpack-stream');
const webpack = webpackStream.webpack;

const { JS_MAIN_FILE, JS_DEST } = config;

gulp.task('webpack', () => {

    let options = {
        output: {
            publicPath: '/app/'
        },
        watch: true,
        module: {
            loaders: [{
                test: /\.js$/,
                include: path.join(__dirname, "app"),
                loader: 'babel?presets[]=es2015'
            }]
        },
        plugins: [
            new webpack.NoEmitOnErrorsPlugin()
        ]
    }

    return gulp.src(JS_MAIN_FILE)
        .pipe(named())
        .pipe(plumber())
        .pipe(webpackStream(options))
        .pipe(gulp.dest(JS_DEST));
})
