// // anime overwrites initial css transform
// // values so we need to set them here
// anime({ targets: '.pull-bg', scaleY: [0, 0]})
// anime({ targets: '.underline', scaleX: [0, 0]})
// anime({ targets: '.blackbox-in', translateY: '-100%'})
// // anime({ targets: '.load-cinefile', translateY: '100%'})

// var projectBlackboxOut = anime({
//   targets: '.project-blackbox-out',
//   translateY: [0, '-100%'],
//   duration: 800,
//   easing: 'easeInOutQuint',
//   autoplay: false
// })

// var blackboxIn = anime({
//   targets: '.blackbox-in',
//   translateY: ['-100%', 0],
//   duration: 800,
//   easing: 'easeInOutQuint',
//   delay: 400,
//   autoplay: false
// })

// // intro animation
// anime.timeline()
//   .add({
//     targets: '.home-blackbox-out',
//     translateY: [0, '-100%'],
//     duration: 800,
//     easing: 'easeInOutQuint',
//     delay: 500,
//   })
//   .add({
//     targets: '.content',
//     translateY: [490, 0],
//     duration: 1500,
//     easing: 'easeOutQuint',
//     offset: '-=400'
//   })
//   .add({
//     targets: 'h4',
//     opacity: [0, 1],
//     duration: 800,
//     easing: 'linear',
//     offset: '-=1200'
//   })

// var projectLoad = anime.timeline({
//   targets: '.load-project'
// })
// projectLoad
//   .add({
//     bottom: 0,
//     easing: 'easeInOutQuint',
//     duration: 2000,
//   })
//   .add({
//     bottom: '100%',
//     easing: 'easeInOutQuint',
//     duration: 500,
//     delay: 500,
//     complete: function() {
//       projectBlackboxOut.play();
//     }
//   })


// var sections = document.querySelectorAll('.home')
// var internalLink = document.querySelectorAll('.internal')

// sections.forEach(function(section) {
//   section.addEventListener('mouseenter', enterButton);
//   section.addEventListener('mouseleave', leaveButton);
// })

// internalLink.forEach(function(link) {
//   link.addEventListener('click', handleInternalLink)
// })


// function handleInternalLink(e) {
//   e.preventDefault();
//   var link = e.target.href;

//   blackboxIn.restart();

//   setTimeout(function() {
//     window.location.href = link;
//   }, 1200);
// }

// var hoverDelay;
// function enterButton(e) {
//   hoverDelay = setTimeout(function() {
//     pullBackground({
//       target: e.target,
//       bgScale: [0, 1],
//       textColor: '#fff',
//       ulScale: [0, 1]
//     });
//   }, 400)
// };

// function leaveButton(e) {
//   clearTimeout(hoverDelay);

//   pullBackground({
//     target: e.target,
//     bgScale: 0,
//     textColor: '#000',
//     ulScale: 0
//   });
// };


// function pullBackground(o) {
//   // TODO: rename blackbox (already taken)
//   var blackbox = o.target.querySelector('.pull-bg');
//   var textColor = o.target.querySelectorAll('.heading');
//   var underline = o.target.querySelector('.underline');

//   anime({
//     targets: blackbox,
//     scaleY: {
//       value: o.bgScale,
//       duration: 500,
//       easing: 'easeInOutQuint'
//     }
//   })
//   anime({
//     targets: textColor,
//     color: o.textColor,
//     duration: 300,
//     easing: 'easeInOutQuint',
//     delay: 50
//   })
//   anime({
//     targets: underline,
//     scaleX: o.ulScale,
//     duration: 375,
//     easing: 'easeInOutQuint',
//     delay: 150
//   })
// }









window.onload = introAnimations;
TweenLite.defaultEase = Power3.easeOut;

function introAnimations() {
  var page = document.body.getAttribute('data-home');
  
  if (page) {
    introHome.play();
  } else {
    introProject.play();
  }
}

var introHome = new TimelineLite({paused: true})
  .to('.blackbox', .8, {y: '-100%', delay: 1})
  .set('.blackbox', {alpha: 0})
  .to('.content', 1.5, {y: 0}, '-=.6')
  .to('h4', .8, {opacity: 1, ease: Power0.easeNone}, '-=.4')
  .eventCallback('onComplete', enableHover);


var introProject = new TimelineLite({paused: true})
  .to('.load-project', 1.5, {bottom: 0, delay: .5})
  .to('.load-project', 1, {bottom: '100%', delay: 1})
  .to('.blackbox', .8, {y: '-100%'}, '-=.6')
  .set('.blackbox', {alpha: 0})

var hoverSections = document.querySelectorAll('.home')
hoverSections.forEach(function(section) {
  section.addEventListener('mouseenter', enterButton);
  section.addEventListener('mouseleave', leaveButton);
})

var internalLink = document.querySelectorAll('.internal')
internalLink.forEach(function(link) {
  link.addEventListener('click', handleInternalLink)
})

function enableHover() {
  hoverSections.forEach(function(el) {
    el.style.pointerEvents = 'auto';
  });
}

var hoverDelay;
function enterButton(e) {
  hoverDelay = setTimeout(function() {
    pullBackground({
      target: e.target,
      bgScale: 1,
      textColor: '#fff',
      ulScale: 1
    });
  }, 400)
};

function leaveButton(e) {
  clearTimeout(hoverDelay);

  pullBackground({
    target: e.target,
    bgScale: 0,
    textColor: '#000',
    ulScale: 0
  });
};

function pullBackground(o) {
  // TODO: rename blackbox (already taken)
  var blackbox = o.target.querySelector('.pull-bg');
  var textColor = o.target.querySelectorAll('.heading');
  var underline = o.target.querySelector('.underline');

  // TODO: needs delays
  TweenLite.to(blackbox, .5, {scaleY: o.bgScale});
  TweenLite.to(textColor, .3, {color: o.textColor});
  TweenLite.to(underline, .4, {scaleX: o.ulScale});
}

function handleInternalLink(e) {
  e.preventDefault();
  var link = e.target.href;

 TweenLite.fromTo('.blackbox', .8, {y: '-100%', alpha: 1}, {y: '0%'})
  .eventCallback('onComplete', function() {
    window.location.href = link;
  });
}