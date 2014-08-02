var provide = require('sonya').Provide;
var anyDB = require('any-db-promise');

provide.factory('db', function(cfg) {
  return anyDB.createPool(cfg.dbUrl);
});
