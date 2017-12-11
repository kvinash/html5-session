var gulp = require('gulp'),
webserver = require('gulp-webserver');

gulp.task('webserver', function () {
gulp.src('app')
    .pipe(webserver({
        fallback: 'index.html',
        livereload: true,
        open: true
    }));
});