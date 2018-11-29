var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');


//--compiler--//
gulp.task('sass', function () {

	return gulp.src('app/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix({
			browsers:['last 6 versions']
		}))
		.pipe(gulp.dest('app/css'));
});

gulp.task('watch', function () {
	gulp.watch('app/sass/*.scss', ['sass']);
});

gulp.task('default', ['browser-sync','watch']);

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "./"
		},
		notify: false
	});

});