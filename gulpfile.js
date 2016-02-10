var gulp = require('gulp');


//JS圧縮
var uglify = require('gulp-uglify');
gulp.task('uglify', function() {
    // 圧縮元ファイル名
 gulp.src(['src/**'])
    // JavaScriptファイルの圧縮
    .pipe(uglify())
    // 圧縮後の書き出し先
    .pipe(gulp.dest('bin'));
});

/*
var imagemin = require("gulp-imagemin");
gulp.task("watchTask", function() {
    gulp.watch("images/**", function() {   // imagesフォルダー以下のファイルを監視
        gulp.src("images/*.png")
            .pipe(imagemin())
            .pipe(gulp.dest("minified_images"));
    });
});
*/
var browserSync = require('browser-sync');
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: "src" // ルートとなるディレクトリを指定
        }
    });

    // srcフォルダ以下のファイルを監視
    gulp.watch('src/**', function() {
        browserSync.reload();   // ファイルに変更があれば同期しているブラウザをリロード
    });
});




// gulpのデフォルトタスクとして'task-name'のタスクを登録する
gulp.task('default', ['browser-sync']);
