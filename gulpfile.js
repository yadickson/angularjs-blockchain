// generated on 2018-04-23 using generator-ajsweb 1.4.16

const gulp = require('gulp');

let addpaths = [
  'node_modules/angular/angular.js',
  'node_modules/angular-animate/angular-animate.js',
  'node_modules/angular-route/angular-route.js',
  'node_modules/angular-cookies/angular-cookies.js',
  'node_modules/bootstrap/**/bootstrap.js',
  'node_modules/web3/dist/web3.js',
  'node_modules/sweetalert/dist/sweetalert.min.js'
];

let addtestpaths = [
  'node_modules/angular-mocks/angular-mocks.js'
];

let excludepaths = [
  '!node_modules/angular/index.js',
  '!node_modules/angular-animate/index.js',
  '!node_modules/angular-cookies/index.js',
  '!node_modules/angular-route/index.js',
  '!node_modules/sweetalert/lib/sweetalert.js',
  '!node_modules/web3/index.js'
];

let addcss = [
  'node_modules/sweetalert/dist/sweetalert.css'
];

let addscss = [
  'node_modules/bootstrap-sass/assets/stylesheets/**/*.scss'
];

let addfonts = [

];

let orderBy = [
  '**/jquery.js',
  '**/angular.js',
  '**/angular-*.js',
  '**/bootstrap.js',
  '**/bootstrap-*.js',
  '*'
];

options = {
  addpaths: addpaths,
  addtestpaths: addtestpaths,
  excludepaths: excludepaths,
  addcss: addcss,
  addscss: addscss,
  addfonts: addfonts,
  orderBy: orderBy
};

const ajsweb = require("gulp-ajsweb")(gulp, options);

gulp.task('default', ['build'], () => {});
