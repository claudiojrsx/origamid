const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })

  gulp.watch('./index.html').on('change', browserSync.reload);
});
