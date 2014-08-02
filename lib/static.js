var provide = require('sonya').Provide;
var serveStatic = require('serve-static');

provide.factory('static', function(cfg) {
  return serveStatic(cfg.staticDir);
});
