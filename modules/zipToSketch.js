var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var zip = require('gulp-zip');
var clean = require('gulp-clean');

function zipToSketch(dirPath, sketchPath, callback) {

  gulp.src(dirPath + '/**')
    .pipe(zip(path.basename(sketchPath)))
    .pipe(gulp.dest(path.dirname(sketchPath)))
    .on('end', function () {
      gulp.src(dirPath, {read: false})
        .pipe(clean({force: true}));
      callback();
    });

}

exports.zipToSketch = zipToSketch;