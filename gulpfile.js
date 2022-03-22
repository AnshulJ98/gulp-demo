var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
gulp.task('sass',async function(){
    return gulp.src('app/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});

gulp.task('task2',async function(){
    console.log("GRGRGRGR");
});
gulp.task('watch', async function(){
    console.log("WATCH");
    gulp.watch('app/scss/*.scss', gulp.series('sass'));
});
gulp.task('default', gulp.series('sass','task2','watch'));