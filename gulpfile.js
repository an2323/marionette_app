var gulp = require('gulp'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify');

gulp.task('html', function() {
    return gulp.src('app/index.html')
        .pipe(gulp.dest('public'))
        .pipe(connect.reload())
});

gulp.task('css', function() {
    gulp.src(['bower_components/bootstrap/dist/css/bootstrap.min.css', 'app/**/*.css'])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('public/css/'))
        .pipe(connect.reload())
});

gulp.task('server', function() {
    connect.server({
        root: 'public',
        livereload: true
    });
});

gulp.task('js', function() {
    gulp.src('app/js/app.js')
        .pipe(browserify({
            transform: ['node-underscorify'],
        }))
        .on('error', function(err) {
           console.log(err.message);
           this.end();
        })
        // .pipe(uglify())
        .pipe(gulp.dest('public/js/'))
        .pipe(connect.reload())
});

gulp.task('watch', function() {
    gulp.watch('app/index.html', function(event) {
        gulp.start('html');
    });

    gulp.watch('app/**/*.tpl.html', function(event) {
        gulp.start('js');
    });

    gulp.watch('app/**/*.css', function(event) {
        gulp.start('css');
    });

    gulp.watch('app/js/**/*.js', function(event) {
        gulp.start('js');
    });
});

gulp.task('default', function() {
    gulp.start('css', 'html', 'js', 'server', 'watch');
});
