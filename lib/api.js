var provide = require('sonya').Provide;

var join = function() {
  return Array.prototype.join.call(arguments, ' ');
};

provide.factory('api', function(db) {
  var api = {};
  api.get = {};
  
  function error(res) {
    return function(err) {
      res.status(500).json({ error: err });
    };
  }
  
  api.get.kgets = function(req, res) {
    db.query('SELECT author, value, running_time FROM (SELECT author, value, to_timestamp(created_utc) - to_timestamp(lead(created_utc) OVER (ORDER BY serial DESC)) AS running_time FROM count_comments WHERE value%1000<2) AS t0 WHERE value%1000=0 ORDER BY value DESC').then(function(result) {
      res.status(200).json(result.rows);
    }, error(res)).done();
  };
  
  api.get.kgetters = function(req, res) {
    db.query('SELECT COUNT(*) AS kget_count, author FROM count_comments WHERE value%1000=0 GROUP BY author ORDER BY kget_count DESC').then(function(result) {
      res.status(200).json(result.rows);
    }, error(res)).done();
  };
  
  api.get.participants = function(req, res) {
    db.query('SELECT author, contribution_count FROM contributors ORDER BY contribution_count DESC, author ASC').then(function(result) {
      res.status(200).json(result.rows);
    }, error(res)).done();
  };
  
  api.get.punchcard = function(req, res) {
    var q = join(
      'SELECT',
        'author,',
        'array_agg(coalesce(contribution_count, 0)::integer ORDER BY hour) AS hour_contribution_counts,',
        'sum(contribution_count) AS total_contribution_count',
      'FROM (SELECT',
          'author,',
          'to_timestamp(created_utc/43200*43200) AS hour,',
          'COUNT(*) AS contribution_count',
        'FROM count_comments',
        'GROUP BY author, hour) AS t0',
      'RIGHT OUTER JOIN ((SELECT author FROM contributors ORDER BY contribution_count DESC LIMIT 7) AS t1',
        'CROSS JOIN generate_series(',
          'to_timestamp(date_part(\'epoch\', (SELECT to_timestamp(created_utc) FROM count_comments ORDER BY created_utc ASC LIMIT 1))::integer/43200*43200),',
          'to_timestamp(date_part(\'epoch\', CURRENT_TIMESTAMP)::integer/43200*43200),',
          'interval \'43200 seconds\') AS t2 (hour))',
      'USING (author, hour)',
      'GROUP BY author',
      'ORDER BY total_contribution_count DESC'
    );
    
    db.query(q).then(function(result) {
      res.status(200).json(result.rows);
    }, error(res)).done();
  };
  
  return api;
});
