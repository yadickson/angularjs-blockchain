// generated on 2018-04-23 using generator-ajsweb 1.6.0

let addpaths = [
  'node_modules/bootstrap/**/bootstrap.js'
];

let addtestpaths = [
  'node_modules/angular-mocks/angular-mocks.js'
];

let excludepaths = [
  // '!node_modules/project/index.js'
];

let addcss = [
  // 'node_modules/project/file.css'
];

let addscss = [
  'node_modules/bootstrap-sass/assets/stylesheets/**/*.scss'
];

let addfonts = [

];

let notprocess = [
   'jquery'
];

let orderBy = [
  'jquery.js',
  'angular.js',
  'angular-*.js',
  'bootstrap.js',
  'bootstrap-*.js'
];

let options = {
  addpaths: addpaths,
  addtestpaths: addtestpaths,
  excludepaths: excludepaths,
  addcss: addcss,
  addscss: addscss,
  addfonts: addfonts,
  orderBy: orderBy,
  notprocess: notprocess,
  browser: 'firefox',
  port: 9100
};

let gulp = require("gulp-ajsweb")(require('gulp'), options);
gulp.task('default', ['help'], () => {});
