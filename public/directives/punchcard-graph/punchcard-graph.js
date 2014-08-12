angular.module('livecounting-stats-www2')
.directive('punchcardGraph', [function() {
  var SVGNS = 'http://www.w3.org/2000/svg';
  var slice = Function.prototype.call.bind(Array.prototype.slice);
  
  function link(scope, element, attrs) {
    var el_svg = element[0].getElementsByTagName('svg')[0];
    scope.$watch(attrs.data, function(data) {
      if (!data) {
        data = []; }
      scope.labels = slice(data).reverse().map(function(e) { return { author: e.author }; });
      slice(el_svg.querySelectorAll('polygon.graph-line')).forEach(HTMLElement.prototype.removeChild.bind(el_svg));
      var crest = null;
      var xstep = 20, ystep = .25;
      var width = xstep*(data[0] ? data[0].hour_contribution_counts.length-1 : 0);
      function addCrest(e, i) {
        return e+crest[i];
      }
      function toSvgPoint(e, i) {
        return [xstep*i,-ystep*e].join(',');
      }
      for (var i=0;i<data.length;i++) {
        var el_line = document.createElementNS(SVGNS, 'polygon');
        el_line.classList.add('graph-line');
        crest = (crest ? data[i].hour_contribution_counts.map(addCrest) : data[i].hour_contribution_counts);
        el_line.setAttribute('points', crest.map(toSvgPoint).concat([[width,0].join(','),[0,0].join(',')]).join(' '));
        el_svg.insertBefore(el_line, el_svg.firstChild);
      }
      var height = ystep*Math.max.apply(undefined, crest || [0]);
      el_svg.setAttribute('viewBox', [0, -height, width, height].join(' '));
      el_svg.setAttribute('width', width);
      el_svg.setAttribute('height', height);
    });
  }
  
  return {
    restrict: 'E',
    scope: true,
    link: link,
    templateUrl: 'directives/punchcard-graph/punchcard-graph.html'
  };
}]);
