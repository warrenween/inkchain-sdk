/*
 Copyright 2016 IBM All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

	  http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc3');
var del = require('del');

gulp.task('clean', function(){
	return del('./docs/gen/**', {force:true});
});

gulp.task('doc', ['clean'], function () {
	gulp.src([
		'docs/index.md',
		'inkchain-client/index.js',
		'inkchain-client/lib/**/*.js',
		'!inkchain-client/lib/protos/**',
		'!inkchain-client/lib/hash.js',
		'!inkchain-client/lib/utils.js',
		'inkchain-ca-client/index.js',
<<<<<<< HEAD
		'inkchain-ca-client/lib/inkchainCAClientImpl.js'
=======
		'inkchain-ca-client/lib/InkchainCAClientImpl.js'
>>>>>>> 2a93d38... 改名inkchain
	], { read: false })
	.pipe(jsdoc({
		opts: {
			tutorials: './docs/tutorials',
			destination: './docs/gen'
		},
		templates: {
<<<<<<< HEAD
			systemName: 'Hyperledger inkchain SDK for node.js',
=======
			systemName: 'Hyperledger Inkchain SDK for node.js',
>>>>>>> 2a93d38... 改名inkchain
			theme: 'cosmo' //cerulean, cosmo, cyborg, flatly, journal, lumen, paper, readable, sandstone, simplex, slate, spacelab, superhero, united, yeti
		}
	}));
});
