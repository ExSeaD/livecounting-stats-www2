angular.module('livecounting-stats-www2')
.factory('StatsApi', ['$http', function($http) {
  return {
    getKgets: function() {
      return $http.get('api/kgets.json')
      .then(function(response) { return response.data; });
    },
    getContributors: function() {
      return $http.get('api/contributors.json')
      .then(function(response) { return response.data; });
    },
    getPunchcard: function() {
      return $http.get('api/punchcard.json')
      .then(function(response) { return response.data; });
    }
  };
}]);
