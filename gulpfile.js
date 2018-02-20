var
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


// my tasks
gulp.task('default', ['sass', 'js']);

// compiled and compressed css files
gulp.task('sass', function () {
    return gulp.src('assets/src/sass/**/*.scss')
        .pipe(concat ('style.min.css'))
        .pipe(sass ({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe( gulp.dest('assets/css'));
});

gulp.task('js', function () {
    return gulp.src('assets/src/js/**/*.js')
    .pipe(concat ('app.min.js'))
        .pipe(uglify())
        .pipe( gulp.dest('assets/js'));
});