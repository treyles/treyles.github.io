var hoverDelay;

$(document).mousemove(function(e){
  var mouseX = e.pageX;
  var mouseY = e.pageY;

  $(".bluedot").css({
    left:mouseX - 25, 
    top:mouseY -25
  });
});

var sections = document.querySelectorAll('.home')

sections.forEach(function(el) {
  el.addEventListener('mouseenter', enterButton.bind(this));
  el.addEventListener('mouseleave', leaveButton.bind(this));
})


// because anime overwrites initial
// css transforms we need to set them here
anime({
  targets: ['.pull-bg', '.underline'],
  scaleY: [0, 0],
  scaleX: [0, 0]
})


var box = anime({
  targets: '.blackbox',
  translateY: '-100%',
  duration: 800,
  easing: 'easeInOutQuint',
  delay: 1500,
})
// var eye = anime({
//   targets: '.eye',
//   rotateX: {
//     value: '70deg',
//     duration: 80,
//     easing: 'easeInOutQuint'
//   },
//   direction: 'alternate',
//   autoplay: false
// }) 

function enterButton(e) {
  hoverDelay = setTimeout(function() {
    pullBackground(e.target, [0, 1], true, [0, 1]);
  }, 500)
};

function leaveButton(e) {
  clearTimeout(hoverDelay);
  pullBackground(e.target, 0, false, 0);
};


function pullBackground(target, bg, text, ul) {
  var section = '.' + target.className.split(' ').join('.');

  // clear elements to stop
  // previous animations
  // anime.remove(section + '.pull-bg');
  // anime.remove(section + '.heading');
  // anime.remove(section + '.underline');

  anime({
    targets: section + ' .pull-bg',
    scaleY: {
      value: bg,
      duration: 500,
      easing: 'easeInOutQuint'
    }
  })

  anime({
    targets: section + ' .heading',
    color: text ? '#fff' : '#000',
    duration: 300,
    easing: 'easeInOutQuint',
    delay: 50
  })

  anime({
    targets: section + ' .underline',
    scaleX: ul,
    duration: 375,
    easing: 'easeInOutQuint',
    delay: 150
  })
}
