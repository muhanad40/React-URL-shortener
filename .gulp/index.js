let gulp    = require('gulp'),
    webpack = require('webpack-stream'),
    config  = require('./config'),
    sass    = require('gulp-sass')

gulp.task('scss', () => {
    return gulp.src(config.input.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.output.css));
})

gulp.task('scss:watch', () => {
    gulp.watch(config.input.scss, ['scss']);
})