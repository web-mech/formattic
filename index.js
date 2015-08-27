var finder = require('./lib/finder'),
  beautifier = require('./lib/beautifier'),
  standardizer = require('./lib/standardizer'),
  q = require('q');

function formatFiles(path, pattern) {
  return finder(path, pattern).then(function(files) {
    return q.allSettled(files.map(beautifier));
  });
}

function standardizeFiles(path) {
  return finder(path, '*.js').then(function(files) {
    return q.allSettled(files.map(standardizer));
  });
}
module.exports = function(path, pattern) {
  pattern = pattern.split('|');
  return q.allSettled(pattern.map(function(pattern) {
    return formatFiles(path, pattern);
  })).then(function() {
    return standardizeFiles(path);
  });
};