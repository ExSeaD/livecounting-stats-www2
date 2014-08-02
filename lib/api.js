module.exports = function(app) {
  return function() {
    app.get('/kgets.json', function(req, res) {
      res.json([{ author: 'rschaosid', value: '1000', permalink: 'https://duckduckgo.com/' }]);
    });
    app.get('/contributors.json', function(req, res) {
      res.json([{ username: 'rschaosid', contribution_count: 1984 }]);
    });
  };
};
