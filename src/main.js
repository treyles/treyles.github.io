$(document).ready(function() {
  $('#fullpage').fullpage({
    // anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    // continuousVertical: true,
    // sectionsColor: ['#fff', '#D5D5D5', '#D5D5D5', '#D5D5D5'],
    scrollingSpeed: 400,
    navigation: true
    // onLeave: function(index, nextIndex, direction) {
    //   var leavingSection = $(this);

    //   if(index == 2 && direction == 'down') {
    //     document.querySelector('body').classList.add('gray')
    //   }
    // }
  });
});