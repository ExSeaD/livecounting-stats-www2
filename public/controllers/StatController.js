angular.module('livecounting-stats-www2')
.controller('StatController', ['$scope', function($scope) {
  $scope.kgets = [
    { author: 'rschaosid', value: '1000', permalink: 'https://duckduckgo.com/' }
  ];
  $scope.contributors = [
    { username: 'rschaosid', contribution_count: 1984 }
  ];
}]);
