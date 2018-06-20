var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");

gulp.task("css", function() {
  var plugins = [
    autoprefixer({ browsers: ["last 2 versions", "> 1%", "IE 10", "IE 9"] }),
    cssnano()
  ];
  gulp
    .src("./scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest("./css"));
});

gulp.task("css:watch", function() {
  gulp.watch("./scss/*.scss", ["css"]);
});
