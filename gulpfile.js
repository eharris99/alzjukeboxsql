var gulp = require('gulp')

// functions ----------------------



gulp.task('compile', function() {
    // return gulp.src('./less/*.less')
    // .pipe(less())
    // .pipe(gulp.dest('./css'));
})

gulp.task('default', ['compile']);