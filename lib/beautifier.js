var beautify = require('js-beautify'),
  _beautify = {
    css: beautify.css,
    html: beautify.html
  },
  fs = require('fs'),
  path = require('path'),
  q = require('q');

module.exports = function beautifier(file) {
  var deferred = q.defer(),
    ext = path.extname(file).replace(/\W/, '');

  fs.readFile(file, 'utf8', function(err, data) {

    if (err) {
      return deferred.reject(err);
    }

    if (_beautify.hasOwnProperty(ext)) {
      data = _beautify[ext].call(beautify, data);
    } else {
      data = beautify(data, {
        'indent_size': 2,
        'space_in_paren': true,
        'jslint_happy': true,
        'max_preserve_newlines': 2
      });
    }

    fs.writeFile(file, data, 'utf8', deferred.makeNodeResolver());

  });

  return deferred.promise;
};