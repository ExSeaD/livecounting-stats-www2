var provide = require('sonya').Provide;

provide.factory('api', function(db) {
  var api = {};
  api.get = {};
  
  function error(res) {
    return function(err) {
      res.status(500).json({ error: err });
    };
  }
  
  api.get.kgets = function(req, res) {
    db.query('SELECT author, value FROM count_comments WHERE value%1000=0 ORDER BY value DESC').then(function(result) {
      res.status(200).json(result.rows);
    }, error(res)).done();
  };
  
  api.get.contributors = function(req, res) {
    db.query('SELECT author, contribution_count FROM contributors ORDER BY contribution_count DESC').then(function(result) {
      res.json(result.rows);
    }, error(res)).done();
  };
  
  return api;
});
