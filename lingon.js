#!/usr/bin/env node

var lingon = require('lingon');
var autoprefixer = require('gulp-autoprefixer');

lingon.postProcessors.push('less', function() {
  return autoprefixer();
});