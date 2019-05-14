const gulp = require('gulp');
const browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Live Server
gulp.task('default', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      directory: true
    },
    notify: false
  });
  gulp.watch("./*.html").on("change", reload);
  gulp.watch("./*/*.css").on("change", reload);
});