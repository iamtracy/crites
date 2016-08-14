  var gulp = require('gulp'),
     serve = require('gulp-live-server'),
     concat = require('gulp-concat-util');

  gulp.task('serve', function() {
    //2. serve at custom port 
    var server = serve.static('app', 3000);
    server.start();
    //use gulp.watch to trigger server actions(notify, start or stop) 
    gulp.watch(['app/**/*.css', 'app/*.html', 'app/**/*.js'], function (file) {
      server.notify.apply(server, [file]);
    });
  });//end serve
  gulp.task('default', function() {
    //other stuff
  });

  // gulp.task('concat:dist', function() {
  // gulp.src('scripts/{,*/}*.js')
  //   .pipe(concat(pkg.name + '.js', {process: function(src, filePath) { 
  //     // if you need the filename, example `myFileJs.js`, path.basename( filePath, '.js' ) 
  //     return (src.trim() + '\n').replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1'); 
  //   }}))
  //   .pipe(concat.header('(function(window, document, undefined) {\n\'use strict\';\n'))
  //   .pipe(concat.footer('\n})(window, document);\n'))
  //   .pipe(gulp.dest('dist'));
  // });
