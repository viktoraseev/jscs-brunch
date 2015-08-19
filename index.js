(function() {
  var Checker = require('jscs');
  var normalize = require('path').normalize;
  var checker;
  var jscsconfig;

  function JSCSChecker(config) {
    jscsconfig = config.plugins && config.plugins.JSCS;
    var options = jscsconfig && jscsconfig.config || {preset: 'google'};
    checker = new Checker();
    checker.registerDefaultRules();
    checker.configure(options);
  }

  JSCSChecker.prototype.brunchPlugin = true;
  JSCSChecker.prototype.type = 'javascript';
  JSCSChecker.prototype.extension = 'js';

  JSCSChecker.prototype.lint = function(data, path, callback) {
    if (!isMatch(path, jscsconfig.files)) {
      return callback(null);
    }
    var results = checker.checkString(data);
    var errors = results.getErrorList();
    var errorStr = '';
    errors.forEach(function(error) {
      var colorizeOutput = true;
      //console.log( + "\n");
      if (errorStr.length < 1000) {
        errorStr += '\n' + results.explainError(error, colorizeOutput) + '\n';
      }
    });
    // HACK reset checker status, otherwise it will not work
    checker._errorsFound = 0;
    checker._maxErrorsExceeded = false;
    if (errorStr.length > 0) {
      return callback(errorStr);
    } else {
      return callback(null);
    }
  };

  // use brunch style Checker
  function isMatch(path, test) {
    switch (toString.call(test)) {
      case '[object RegExp]':
        return path.match(test);
      case '[object Function]':
        return test(path);
      case '[object String]':
        return startsWith(normalize(path), normalize(test));
      case '[object Array]':
        return test.some((function(_this) {
          return function(subTest) {
            return _this.isIgnored(path, subTest);
          };
        })(this));
      default:
        return false;
    }
  };

  module.exports = JSCSChecker;
})();
