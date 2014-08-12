angular.module('livecounting-stats-www2')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/gets');
  
  $stateProvider.state('kgets', {
    url: '/gets',
    templateUrl: 'templates/kgets-page.html'
  });
  
  $stateProvider.state('kgetters', {
    url: '/getters',
    templateUrl: 'templates/kgetters-page.html'
  });
  
  $stateProvider.state('participants', {
    url: '/participants',
    templateUrl: 'templates/participants-page.html'
  });
  
  $stateProvider.state('punchcard', {
    url: '/activity',
    templateUrl: 'templates/punchcard-page.html'
  });
  
}]);
