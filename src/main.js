$(function() {
  var slides = ['home', 'cinefile', 'polytone', 'css-studies'];

  function loadSlide(anchor) {
    var selection = '.' + anchor;
    $(selection).addClass('show');

    if (anchor !== 'home') {
      $('.view-project')
        .addClass('show')
        .attr('href', 'src/' + anchor + '.html');
    }
  }

  function leaveSlide(index, nextIndex) {
    if (nextIndex === 1) {
      // remove arrow hint
      $('.gray-arrow').css({
        display: 'none'
      });

      $('.view-project').removeClass('show');
    }

    // clear titles
    $.each(slides, function(index, value) {
      var selection = '.' + value;
      $(selection).removeClass('show');
    });
  }

  $('#fullpage').fullpage({
    anchors: slides,
    afterLoad: loadSlide,
    onLeave: leaveSlide,
    lockAnchors: true,
    continuousVertical: true,
    verticalCentered: false
  });
});
