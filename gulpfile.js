var gulp = require('gulp')
var svgSprite = require('gulp-svg-sprite')

var paths = {
  src: {
    icons: './static/svg/*.svg'
  },
  dist: {
    icons: './static/svg/'
  }
}

gulp.task('icons', function() {
  gulp.src(paths.src.icons)
    .pipe(svgSprite({
      mode: {
        symbol: {
          render: true,
          dest: '',
          sprite: 'sprites.svg'
        }
      }
    }))
    .pipe(gulp.dest(paths.dist.icons))
})
