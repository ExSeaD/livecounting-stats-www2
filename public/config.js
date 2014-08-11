angular.module('livecounting-stats-www2')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/ks');
  
  $stateProvider.state('kgets', {
    url: '/ks',
    templateUrl: 'templates/kgets-page.html'
  });
  
  $stateProvider.state('contributors', {
    url: '/contributors',
    templateUrl: 'templates/contributors-page.html'
  });
  
  $stateProvider.state('punchcard', {
    url: '/recent',
    templateUrl: 'templates/punchcard-page.html'
  });
  
}])
