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
    db.query('SELECT author, contribution_count FROM contributors ORDER BY contribution_count DESC, author ASC').then(function(result) {
      res.json(result.rows);
    }, error(res)).done();
  };
  
  api.get.punchcard = function(req, res) {
    db.query('SELECT author, array_agg(COALESCE(contribution_count,0) ORDER BY hour) AS contribution_count FROM (SELECT author, date_trunc(\'hour\',to_timestamp(created_utc)) AS hour, COUNT(*) AS contribution_count FROM count_comments GROUP BY author, hour) AS t0 RIGHT OUTER JOIN ((SELECT DISTINCT author FROM count_comments WHERE date_trunc(\'hour\',CURRENT_TIMESTAMP-interval \'1 day\') <= to_timestamp(created_utc)) AS t1 CROSS JOIN generate_series(date_trunc(\'hour\',CURRENT_TIMESTAMP-interval \'1 day\'),date_trunc(\'hour\',CURRENT_TIMESTAMP),interval \'1 hour\') AS t2 (hour)) USING (author, hour) GROUP BY author').then(function(result) {
      res.json(result.rows);
    }, error(res)).done();
  }
  
  return api;
});
