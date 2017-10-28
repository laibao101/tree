const gulp = require("gulp");

// 转译JavaScript
gulp.task("webpack", () => {
    const webpack = require("webpack-stream");
    const config = require("./webpack.config.js");
    return gulp
        .src("./ts/*.ts")
        .pipe(webpack(config, require("webpack")))
        .pipe(gulp.dest("../www/js"));
});

// 编译less -> css
gulp.task("less", () => {
    const less = require("gulp-less");
    return gulp
        .src("./less/*.less")
        .pipe(less())
        .pipe(gulp.dest("../www/css"));
});

// 默认任务
gulp.task("default", ["webpack", "less"]);

gulp.task("watch", () => {
    gulp.watch("less/**/*.less", ["less"]);
    gulp.watch("js/**/*.ts", ["webpack"]);
});