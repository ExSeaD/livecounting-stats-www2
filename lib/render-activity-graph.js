var styleTag = '<style type="text/css">'+
'polygon:nth-child(7n+1) {'+
  'fill: #7CB854;'+
'}'+
'polygon:nth-child(7n+2) {'+
  'fill: #09A275;'+
'}'+
'polygon:nth-child(7n+3) {'+
  'fill: #3465AA;'+
'}'+
'polygon:nth-child(7n+4) {'+
  'fill: #7C378A;'+
'}'+
'polygon:nth-child(7n+5) {'+
  'fill: #DC0030;'+
'}'+
'polygon:nth-child(7n+6) {'+
  'fill: #E57D04;'+
'}'+
'polygon:nth-child(7n) {'+
  'fill: #F2B701;'+
'}'+
'</style>';

module.exports = function(data, width, height) {
  if (!data || !data.length || data[0].hour_contribution_counts.length < 2)
    { return '<svg><text>Cannot render graph D:</text></svg>'; }
  
  var xcount = data[0].hour_contribution_counts.length;
  var maxHeight = Math.max.apply(undefined, data[0].hour_contribution_counts.map(function(_, i) {
    return data.map(function(d) {
      return d.hour_contribution_counts[i];
    }).reduce(function(p, c) { return p+c; });
  }));
  
  var svg = [];
  
  var crest = null;
  var xstep = width/(xcount-1);
  var ystep = height/maxHeight;
  
  function addCrest(e, i) {
    return e+crest[i];
  }
  
  function toSvgPoint(e, i) {
    return [xstep*i,-ystep*e].join(',');
  }
  
  for (var i=0;i<data.length;i++) {
    crest = (crest ? data[i].hour_contribution_counts.map(addCrest) : data[i].hour_contribution_counts);
    var points = crest.map(toSvgPoint).concat([[width,0].join(','),[0,0].join(',')]).join(' ');
    svg.unshift('<polygon points="'+points+'"></polygon>');
  }
  
  return '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" width="'+width+'" height="'+height+'" viewBox="'+[0, -height, width, height].join(' ')+'">'+styleTag+'<g>'+svg.join('')+'</g></svg>';
};
