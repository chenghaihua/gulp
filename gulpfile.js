var gulp=require('gulp');
var spritesmith=require('gulp.spritesmith');
var concat=require("gulp-concat");
var uglify=require('gulp-uglify');
var pump=require('pump');


/*合并图片*/
gulp.task('sprite',function(){
   var spriteData=gulp.src('images/*.png').pipe(spritesmith({
       imgName:'sprite.png',
       cssName:'sprite.css'
   }));
    return spriteData.pipe(gulp.dest('path/to/output'));
});

/*压缩合并js*/
gulp.task("concat",function(){
   return gulp.src('js/*.js')
            .pipe(uglify())
            .pipe(concat('all.min.js'))
            .pipe(gulp.dest('./dist/'));
});

gulp.task('default',['concat','sprite']);

