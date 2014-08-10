var sonya = require('sonya');
var inject = sonya.Injector.invoke.bind(sonya.Injector);

var http = require('http');
var express = require('express');

// provides app.namespace
require('express-namespace');

// DI modules
require('./lib/static.js');
require('./lib/api.js');
require('./lib/db.js');
require('./lib/cfg.js');

// main
inject(function(static, api, cfg) {
  var app = express();
  
  app.use(static);
  app.namespace('/api', function() {
    app.get('/kgets.json', api.get.kgets);
    app.get('/contributors.json', api.get.contributors);
    app.get('/punchcard.json', api.get.punchcard);
  });
  
  http.createServer(app).listen(cfg.httpPort);
});
