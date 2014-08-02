var http = require('http');
var express = require('express');
require('express-namespace');
var serveStatic = require('serve-static');

var api = require('./lib/api.js');

var app = express();

app.use(serveStatic('public'));

app.namespace('/api', api(app));

http.createServer(app).listen(process.env.HTTP_PORT);
