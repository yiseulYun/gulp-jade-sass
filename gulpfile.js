var gulp = require('gulp'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass');
/*
Gulp Command
.task()
.src()
.watch()
.dest()
.start()
 */
var config = {
	'jade' : { 'pretty' : false }
};

gulp.task('default', ['jade','sass','watch']);

gulp.task('watch', function () {
	gulp.watch(['src/index.jade'],['jade'])
	gulp.watch(['src/sass/style.scss'],['jade'])
})

/* Fonft-End WOrkflow tasks*/

//Jade -> html
gulp.task('jade', function () {
	gulp.src('src/index.jade')
		.pipe(jade( config.jade))
		.pipe(gulp.dest('dist'));
});
gulp.task('sass', function () {
	gulp.src('src/sass/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/sass'));
});
 /*function () {
	console.log('Gulp "Default" Task is Start!!');
	gulp.start('eat:food');
	gulp.start('show:game');
});*/

/*gulp.task('eat:food', function () {
	console.log('show me the FOOD! :-)');
});
gulp.task('show:game', function () {
	console.log('play the Game! :-)');
});*/