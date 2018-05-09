var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  var plugins = [
    autoprefixer({browsers: ['last 2 versions']})
  ]
  return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./style'))
    .pipe(browserSync.stream())
})

gulp.task('server', function() {
  browserSync.init({
    server: './'
  });
});

gulp.task('watch', function() {
  gulp.watch('./sass/main.scss', ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./src/*.js').on('change', browserSync.reload);
})

gulp.task('default', ['server', 'watch'])