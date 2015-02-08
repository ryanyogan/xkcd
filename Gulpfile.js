var gulp       = require('gulp');
var browserify = require('gulp-browserify');

// We need to compile all of our source down into on nice file
// we are using brwoserify, however reactify is going to take care
// of our JSX transpiling
gulp.task('scripts', function() {
  gulp.src(['app/main.js'])
    .pipe(browserify({
      debug: true,
      transform: ['reactify']
    }))
    .pipe(gulp.dest('./public'));
});

// The default task $ gulp, will fire off scripts
gulp.task('default', ['scripts']);
