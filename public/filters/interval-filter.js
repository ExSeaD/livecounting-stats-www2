angular.module('livecounting-stats-www2')
.filter('interval', [function() {
  return function(interval) {
    var ret = [];
    if (interval.days) {
      ret.push(interval.days + ' days');
    }
    if (interval.hours) {
      ret.push(interval.hours + ' hours');
    }
    if (interval.minutes) {
      ret.push(interval.minutes + ' minutes')
    }
    if (interval.seconds) {
      ret.push(interval.seconds + ' seconds');
    }
    return ret.join(' ');
  }
}]);
