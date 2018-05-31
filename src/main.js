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



// hide on scroll jquery script modified from:
// http://jsfiddle.net/mariusc23/s6mLJ/31/
var didScroll;
var lastScrollTop = 0;

window.onscroll = function(event) {
  didScroll = true;
}

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250)

function hasScrolled() {
  var header = document.querySelector('header');
  var winHeight = window.innerHeight;
  var docHeight = document.body.clientHeight;
  var scrollTop = Math.max(window.pageYOffset, 
    document.documentElement.scrollTop, document.body.scrollTop)

  console.log(winHeight)
  console.log(docHeight)
  console.log(scrollTop)

  if (scrollTop > lastScrollTop) {
    header.style.opacity = '0';
  } else if (scrollTop + winHeight < docHeight) {
    header.style.opacity = '1';
  }
  
  lastScrollTop = scrollTop;
}








window.onload = introAnimations;

TweenLite.defaultEase = Power3.easeOut;
// TweenLite.defaultEase = CustomEase.create("custom", "M0,0 C0.11,0.494 0.187,0.694 0.29,0.79 0.4,0.892 0.504,1 1,1");
var titleEase = CustomEase.create("custom", "M0,0 C0.12,0.664 0.456,0.401 0.614,0.55 0.772,0.726 0.602,0.942 1,1");

var introHome = new TimelineLite({paused: true});
var introProject = new TimelineLite({paused: true})

introHome
  .to('.blackbox', .8, {y: '-100%', delay: 1})
  .set('.blackbox', {alpha: 0})
  .to('.content', 1.5, {y: 0}, '-=.6')
  .to('h4', .8, {opacity: 1, ease: Power0.easeNone}, '-=.4')
  .eventCallback('onComplete', enableHover);


introProject
  .to('.load-project', 2.5, {bottom: '100%', delay: .5, ease: titleEase})
  .to('.blackbox', .8, {y: '-100%'}, '-=.6')
  .set('.blackbox', {alpha: 0})
  .fromTo('h2', 1.6, {alpha: 0, y: '110'}, {alpha: 1, y: '0'}, '-=.6')
  .fromTo('.hashtags', 1, {alpha: 0}, {alpha: 1}, '-=.6');

function introAnimations() {
  var page = document.body.getAttribute('data-home');
  
  if (page) {
    introHome.play();
  } else {
    introProject.play();
  }
}

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

  setTimeout(go, 400);

  function go() {
    TweenLite.fromTo('.blackbox', .8, {y: '-100%', alpha: 1}, {y: '0%'})
    .eventCallback('onComplete', function() {
      window.location.href = link;
    });
  }
}