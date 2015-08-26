var finder = require('./lib/finder'),
  beautifier = require('./lib/beautifier'),
  q = require('q');

function formatFiles(path, pattern) {
  return finder(path, pattern).then(function(files) {
    return q.allSettled(files.map(beautifier));
  });
}
module.exports = function(path, pattern) {
  pattern = pattern.split('|');
  return q.allSettled(pattern.map(function(pattern) {
    return formatFiles(path, pattern);
  }));
};