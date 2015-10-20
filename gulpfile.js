var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var cp = require('child_process');

gulp.task('styles', function(){
  gulp.src('src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({ stream: true }));
});

gulp.task('images', function(){
  gulp.src('src/img/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img'));
});
 
gulp.task('scripts', function(){
  gulp.src('src/**/*.js')
    .pipe(concat('application.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

/**
 * Remove this if you don't want to use Jekyll.
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify('Jekyll running...');
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Remove this if you don't want to use Jekyll.
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Remove jekyll-build from the array below if you don't want to use Jekyll.
 */
gulp.task('serve', ['jekyll-build', 'styles', 'images', 'scripts'], function(){
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });

/**
 * Remove this next line below if you don't want to use Jekyll.
 */
  gulp.watch(['src/*.md', 'src/_layouts/*.html', 'src/_posts/*'], ['jekyll-rebuild']);

  gulp.watch('src/scss/**/*.scss', ['styles']);

  gulp.watch('src/img/**/*', ['images']);

  gulp.watch('src/js/**/*', ['scripts']);

  gulp.watch(['*.html', 'img/**/*', 'css/**/*.css', 'js/**/*.js'], {cwd: 'dist'}, reload);
});

gulp.task('default', ['serve']);
