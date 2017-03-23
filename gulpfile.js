/**
 * Created by Administrator on 2017/3/23.
 */
var gulp=require("gulp");
var concat=require("gulp-concat");   //合并代码
var uglify=require("gulp-uglify");   //压缩js代码
var rename=require("gulp-rename");   //文件重命名
var minifyCss=require("gulp-minify-css");  //压缩css
var imagemin=require("gulp-imagemin");    //压缩图片
var spritesmith=require("gulp.spritesmith");  //合并背景图片
var jshint=require("gulp-jshint");      //检测js代码



var name="app";   //保存css,js文件的名字


//合并压缩重命名js
gulp.task("compressJS",function(){
    return gulp.src("unpressdist/js/*.js")
            .pipe(concat(name+".js"))
            .pipe(gulp.dest("dist/js"))
            .pipe(uglify())
            .pipe(jshint())
            .pipe(jshint.reporter())
            .pipe(rename(name+".min.js"))
            .pipe(gulp.dest("dist/js"));
});

//合并压缩重命名css
gulp.task("compressCss",function(){
    return gulp.src("unpressdist/css/*.css")
            .pipe(concat(name+".css"))
            .pipe(gulp.dest("dist/css"))
            .pipe(minifyCss())
            .pipe(rename(name+".min.css"))
            .pipe(gulp.dest("dist/css"));
});

//压缩jpg,png图片
gulp.task("compressPic",function(){
    return gulp.src("unpressdist/pic/*.{jpg,png}")
            .pipe(imagemin())
            .pipe(gulp.dest("dist/pic"));
});

//合并雪碧图
gulp.task("sprites",function(){
    return gulp.src("unpressdist/sprite/*.{jpg,png}")
            .pipe(spritesmith({
                imgName:'sprite.png',
                cssName:'sprite.css'
            }))
            .pipe(gulp.dest("dist/sprite"));
});

gulp.task('default',['compressJS','compressCss','compressPic','sprites']);   //执行

/*
 如果需要实时监控取消该注释
gulp.watch('js/!*.js',['compressJS','compressCss','compressPic','sprites']);
*
*
*  */

