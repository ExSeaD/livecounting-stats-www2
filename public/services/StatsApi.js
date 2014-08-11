angular.module('livecounting-stats-www2')
.factory('StatsApi', ['$http', function($http) {
  var ret = {
    fetch: fetch
  };
  
  function fetch() {
    $http.get('api/kgets.json')
    .then(function(response) { ret.kgets = response.data; });
    $http.get('api/contributors.json')
    .then(function(response) { ret.contributors = response.data; });
    $http.get('api/punchcard.json')
    .then(function(response) { ret.punchcard = response.data; });
  }
  
  return ret;
}]);
