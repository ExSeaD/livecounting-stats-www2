angular.module('livecounting-stats-www2')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/overview');
  
  $stateProvider.state('overview', {
    url: '/overview',
    templateUrl: 'templates/overview.html'
  });
  
  $stateProvider.state('detail', {
    templateUrl: 'templates/detail.html'
  })
  
  $stateProvider.state('detail.kgets', {
    url: '/gets',
    templateUrl: 'templates/kgets-page.html'
  });
  
  $stateProvider.state('detail.kgetters', {
    url: '/getters',
    templateUrl: 'templates/kgetters-page.html'
  });
  
  $stateProvider.state('detail.participants', {
    url: '/participants',
    templateUrl: 'templates/participants-page.html'
  });
  
  $stateProvider.state('detail.punchcard', {
    url: '/activity',
    templateUrl: 'templates/punchcard-page.html'
  });
  
}]);
