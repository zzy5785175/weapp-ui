const gulp = require('gulp');

const path = require('path');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const cssmin = require('gulp-clean-css');
const src = path.join(__dirname, '/packages');

const env = process.env.NODE_ENV;

const extname = ['js', 'scss', 'wxml', 'json'];

function copy(ext) {
    return gulp.src([src + '/**/*.' + ext]).pipe(gulp.dest(path.join(__dirname, 'examples/dist')));
}

gulp.task('compile-scss', () => {
    return gulp
    .src([src + '/**/*.scss', `!${src}/**/_*.scss`])
    .pipe(sass())
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(
        rename(path => {
            path.extname = '.wxss';
        })
    )
    .pipe(gulp.dest(path.join(__dirname, 'examples/dist')))
});
gulp.task('compile-js', () => copy('js'));
gulp.task('compile-json', () => copy('json'));
gulp.task('compile-wxml', () => copy('wxml'));

if (env !== 'production') {
    extname.forEach((name) => {
        gulp.watch(src + `/**/*.${name}`, gulp.series(`compile-${name}`));
    });
}
gulp.task('default', gulp.parallel('compile-scss', 'compile-js', 'compile-json', 'compile-wxml'));