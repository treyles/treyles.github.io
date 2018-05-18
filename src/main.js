$(function() {
  var slides = ['home', 'cinefile', 'polytone', 'css-studies'];

  // balanceText($('.hero h1'), {watch: true})

  
  $(document).mousemove(function(e){
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    $(".bluedot").css({
      left:mouseX - 25, 
      top:mouseY -25
    });
  });



$('.section').click(function() {
  console.log('sections')
})






var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 20;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px)';

  $('.plax').css({
    'transform': translate
  });

  // $('.hero').css({
  //   'transform': translate
  // });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (15 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();







  $('.blackbox').slideUp(1000, 'easeInOutQuint');

  $('.hero').click(function() {
    $('.blackbox').slideDown(1000, 'easeInOutQuint');
  });


  // $('.hero').slideDown({
  //   easing: 'easeInOutQuint',
  //   duration: 1000
  // });

  $('#fullpage').fullpage({
    anchors: slides,
    afterLoad: loadSlide,
    onLeave: leaveSlide,
    lockAnchors: true,
    continuousVertical: true,
    verticalCentered: false,
    // navigation: true,
    easingcss3: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)'
  });

  function loadSlide(slide, index) {
    $('.current').html('0' + (index - 1));

    $('.work-title').html(function() {
      if (slide === 'cinefile') return 'Cinefile';
      if (slide === 'polytone') return 'Polytone';
      if (slide === 'css-studies') return 'CSS Studies';
    });

    $('.active h5')
      // .delay(100)
      .slideDown({
        easing: 'easeOutCubic',
        duration: 600
      });
    
    if (slide === 'cinefile') {
      var vid = document.querySelector('.folio-iphone');
      // vid.play();
      // setTimeout(function() {
      //   vid.play();
      // }, 1000)
    }

    if (slide !== 'home') {
      $('.titles').addClass('show');
      
      $('.view-project')
        .addClass('show')
        .attr('href', 'src/' + slide + '.html');
      // $('#fp-nav').fadeIn();
    }
  }

  function leaveSlide(index, nextSlide) {
    if (nextSlide === 1) {
      $('.view-project').removeClass('show');
      // $('.titles').removeClass('show');
      // $('#fp-nav').fadeOut();
      $('header').css({ color: '#0041F8'})
      $('.scroll-hint').fadeIn();
    } else {
      $('.scroll-hint').fadeOut();
      $('header').css({ color: '#000'})
    }
    $('.titles').removeClass('show');
    $('h5').fadeOut();

    var vid = document.querySelector('.folio-iphone');
    vid.pause();
    vid.currentTime = 0;
    // $('.work-title').slideUp();
    // $.each(slides, function(index, value) {
    //   var selector = '.' + value;
    //   $(selector).removeClass('show');
    // });
  }
});
