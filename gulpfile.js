const { series, src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const notify = require('gulp-notify');
const concat = require('gulp-concat');

//css utilities

const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//js utilities
const terser = require('gulp-terser-js');
const rename = require('gulp-rename')

const paths = {
    imagenes: 'src/img/**/*',
    imagenesDest: './build/img',
    js: 'src/js/**/*.js',
}

function css() {
    return src('src/scss/app.scss')
    .pipe( sourcemaps.init())
    .pipe(sass())
    .pipe( postcss( [autoprefixer(), cssnano()] ))
    .pipe( sourcemaps.write('.'))
    .pipe(dest('./build/css'))
}

function imagenes() {
    return src(paths.imagenes)
    .pipe( imagemin() )
    .pipe( dest(paths.imagenesDest))
    .pipe( notify({message: 'Imagen Minificada'}))
}

function convertToWebp() {
    return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest(paths.imagenesDest))
    .pipe( notify({message: 'Image Converted To WEBP Succesfully'}) )
}

function javascript() {
    return src(paths.js)
    .pipe( sourcemaps.init() )
    .pipe( concat('bundle.js'))
    .pipe( terser() )
    .pipe( sourcemaps.write('.'))
    .pipe( rename({suffix: '.min'}))
    .pipe( dest('./build/js'))
}

function autoCompileSASSjs() {
    watch('src/scss/**/*.scss',css)
    watch(paths.js, javascript)
}

exports.css = css;
exports.autoCompileSASSjs = autoCompileSASSjs;
exports.imagenes = imagenes;
exports.convertToWebp = convertToWebp;
exports.default = series(css,javascript,imagenes,convertToWebp,autoCompileSASSjs);