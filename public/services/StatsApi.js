angular.module('livecounting-stats-www2')
.factory('StatsApi', ['$http', function($http) {
  var ret = {
    fetch: fetch
  };
  
  function fetch() {
    $http.get('api/kgets.json')
    .then(function(response) { ret.kgets = response.data; });
    $http.get('api/kgetters.json')
    .then(function(response) { ret.kgetters = response.data; });
    $http.get('api/participants.json')
    .then(function(response) { ret.participants = response.data; });
    $http.get('api/punchcard.json')
    .then(function(response) { ret.punchcard = response.data; });
  }
  
  return ret;
}]);
