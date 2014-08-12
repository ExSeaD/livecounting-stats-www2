angular.module('livecounting-stats-www2')
.directive('redditUser', [function() {
  return {
    restrict: 'E',
    scope: {
      'username': '=username'
    },
    template: '<a href="https://www.reddit.com/u/{{username}}"><span class="username-prefix">/u/</span>{{username}}</a>'
  };
}]);
