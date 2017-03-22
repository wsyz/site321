'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const conf = require('./config.js');
const c_paths = conf.paths
const c_folders = conf.folders;
const server = require('./server');

function styles(){
	return gulp.src(c_paths.src +'/**/*.{scss, less, css}')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['> 1%', 'IE >= 7'],
			remove: false
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(c_paths.tmp))
		.pipe(server.reload({stream:true}))
}

module.exports = styles;