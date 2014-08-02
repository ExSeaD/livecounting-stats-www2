var provide = require('sonya').Provide;

provide.factory('cfg', function() {
  return {
    httpPort: process.env.HTTP_PORT,
    staticDir: 'public',
    dbUrl: process.env.DATABASE
  };
});
