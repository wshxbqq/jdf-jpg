'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');
var url = 'https://raw.githubusercontent.com/wshxbqq/jdf-jpg/master/vendor/';

module.exports = new BinWrapper()
	.src(url + 'macos/cjpeg', 'darwin')
	.src(url + 'linux/cjpeg', 'linux')
	.src(url + 'win/cjpeg.exe', 'win32')
	.dest(path.join(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'cjpeg.exe' : 'cjpeg');
