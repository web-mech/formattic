var fs = require('fs'),
  util = require('util'),
  q = require('q');
module.exports = function(path, pattern) {
  var execFile = require('child_process').execFile,
    deferred = q.defer();

  execFile('find', [ path, '-name', pattern ], function(err, stdout, stderr) {
    var files = stdout.split('\n');

    files = files.filter(function(file) {
      return file && file;
    });
    
    deferred.resolve(files);
  });
  return deferred.promise;
};
