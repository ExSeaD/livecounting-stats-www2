angular.module('livecounting-stats-www2')
.filter('interval', ['dateFilter', function(dateFilter) {
  return function(interval) {
    var ret = [];
    if (interval.days) {
      ret.push(interval.days + ' days');
    }
    ret.push(dateFilter(new Date(0,0,1,interval.hours||0,interval.minutes||0,interval.seconds||0), 'HH:mm:ss'));
    return ret.join(' ');
  };
}]);
