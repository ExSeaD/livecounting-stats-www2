angular.module('livecounting-stats-www2')
.controller('StatController', ['$scope', 'StatsApi', function($scope, StatsApi) {
  $scope.$watch(function() { return StatsApi.kgets; }, function(kgets) {
    $scope.kgets = kgets;
  });
  $scope.$watch(function() { return StatsApi.kgetters; }, function(kgetters) {
    $scope.kgetters = kgetters;
  });
  $scope.$watch(function() { return StatsApi.participants; }, function(participants) {
    $scope.participants = participants;
  });
  $scope.$watch(function() { return StatsApi.punchcard; }, function(punchcard) {
    $scope.punchcard = punchcard;
  });
  
  StatsApi.fetch();
}]);
