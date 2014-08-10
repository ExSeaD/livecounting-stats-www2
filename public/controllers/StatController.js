angular.module('livecounting-stats-www2')
.controller('StatController', ['$scope', 'StatsApi', function($scope, StatsApi) {
  StatsApi.getKgets().then(function(kgets) { $scope.kgets = kgets; });
  StatsApi.getContributors().then(function(contributors) { $scope.contributors = contributors; });
  StatsApi.getPunchcard().then(function(punchcard) { $scope.punchcard = punchcard; });
}]);
