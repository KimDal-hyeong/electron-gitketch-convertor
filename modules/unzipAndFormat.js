var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var unzip = require('gulp-unzip');
var jsonFormat = require('gulp-json-format');
var clean = require('gulp-clean');

function unzipAndFormat(sketchPath, outputPath, callback) {

  gulp.src(sketchPath)
    .pipe(unzip())
    .pipe(gulp.dest(outputPath))
    .on('end', function () {
      gulp.src(outputPath + '/**/*.json')
        .pipe(jsonFormat(2))
        .pipe(gulp.dest(outputPath))
        .on('end', function () {
          gulp.src(sketchPath, {read: false})
            .pipe(clean({force: true}));
          if(callback) {
            callback();
          }
        })
    })

}

exports.unzipAndFormat = unzipAndFormat;