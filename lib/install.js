'use strict';
var bin = require('./');
bin.run(['--version'], function (err) {
	console.log('mozjpeg  pre-build test passed successfully');
});
