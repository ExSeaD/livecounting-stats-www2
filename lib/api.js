var provide = require('sonya').Provide;

provide.factory('api', function(db) {
  var api = {};
  api.get = {};
  
  api.get.kgets = function(req, res) {
    res.json([{ author: 'rschaosid', value: '1000', permalink: 'https://duckduckgo.com/' }]);
  };
  
  api.get.contributors = function(req, res) {
    res.json([{ username: 'rschaosid', contribution_count: 1984 }]);
  };
  
  return api;
});
