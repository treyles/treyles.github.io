$(function() {
  var slides = ['home', 'cinefile', 'polytone', 'css-studies'];

  balanceText($('.hero h1'), {watch: true})

  // mouse
  $(document).mousemove(function(e){
    $(".bluedot").css({
      left:e.pageX - 25, 
      top:e.pageY -25
    });
  });

  // $('.moveup').each(function () {
  //   this.classList.addClass('animate')
  // })


  $('.blackbox').slideUp(1000, 'easeInOutQuint', function() {
    $('.title').addClass('fadeInUp')
  });

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
      $('.scroll-hint').fadeIn();
    } else {
      $('.scroll-hint').fadeOut();
    }
    $('.titles').removeClass('show');
    $('h5').fadeOut();
    // $('.work-title').slideUp();
    // $.each(slides, function(index, value) {
    //   var selector = '.' + value;
    //   $(selector).removeClass('show');
    // });
  }
});
