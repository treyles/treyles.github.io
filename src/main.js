$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors:['home', 'cinefile', 'polytone', 'css-studies'],
    lockAnchors: true,
    continuousVertical: true,
    scrollingSpeed: 400,
    navigation: true,
    verticalCentered: false
  });
});