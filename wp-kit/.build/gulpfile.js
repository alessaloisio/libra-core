"use strict";

const gulp = require("gulp");
const rename = require("gulp-rename");
const browserify = require("gulp-browserify");
const babelify = require("babelify");

const sass = require("gulp-sass");
sass.compiler = require("node-sass");

const dirsJs = {
  src: "../src/js/**/*.js",
  dest: "../assets/js/"
};

const dirsCss = {
  src: "../src/scss/**/*.scss",
  dest: "../assets/css/"
};

gulp.task("watch", function() {
  // JS BUNDLE
  gulp.watch(dirsJs.src).on("change", function(event) {
    gulp
      .src("../src/js/app.js")
      .pipe(
        browserify({
          transform: [babelify.configure({ presets: ["@babel/preset-env"] })]
        })
      )
      .pipe(rename("bundle.js"))
      .pipe(gulp.dest(dirsJs.dest));

    console.log(`File ${event} edited, bundle updated.`);
  });

  // SASS
  gulp.watch(dirsCss.src).on("change", function(event) {
    gulp
      .src(dirsCss.src)
      .pipe(sass.sync().on("error", sass.logError))
      .pipe(gulp.dest(dirsCss.dest));
    console.log(`File ${event} edited, style updated.`);
  });
});
