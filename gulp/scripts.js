'use strict';

const gulp = require('gulp');

const conf = require('./config.js');
const c_paths = conf.paths;
const c_folders = conf.folders;
const server = require('./server')

function scripts(){
	return gulp.src(c_paths.src +'/**/*.js')
		.pipe(gulp.dest(c_paths.tmp))
}

module.exports = scripts;