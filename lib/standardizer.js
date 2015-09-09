var transform = require('uber-standard-format').transform,
  fs = require('fs'),
  path = require('path'),
  q = require('q');

module.exports = function standardizer(file) {
  var deferred = q.defer(),
    ext = path.extname(file).replace(/\W/, '');

  if (ext !== 'js') {
    deferred.reject(new Error('Invalid file type'));
    return deferred.promise;
  }

  fs.readFile(file, 'utf8', function(err, data) {
    if (err) {
      return deferred.reject(err);
    }
    data = transform(data, 2);
    fs.writeFile(file, data, 'utf8', deferred.makeNodeResolver());
  });
  return deferred.promise;
};