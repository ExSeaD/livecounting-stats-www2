angular.module('livecounting-stats-www2')
.controller('StatController', ['$scope', 'StatsApi', function($scope, StatsApi) {
  $scope.$watch(function() { return StatsApi.kgets; }, function(kgets) {
    $scope.kgets = kgets;
  });
  $scope.$watch(function() { return StatsApi.contributors; }, function(contributors) {
    $scope.contributors = contributors;
  });
  $scope.$watch(function() { return StatsApi.punchcard; }, function(punchcard) {
    $scope.punchcard = punchcard;
  });
  
  StatsApi.fetch();
}]);
