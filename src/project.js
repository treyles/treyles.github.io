// hide header on scroll
var didScroll;
var lastScrollTop = 0;

window.onscroll = function() {
  didScroll = true;
}

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250)

function hasScrolled() {
  var header = document.querySelector('.project-header');
  var scrollTop = Math.max(window.pageYOffset, 
    document.documentElement.scrollTop, document.body.scrollTop)
  var winHeight = window.innerHeight;
  var docHeight = document.body.clientHeight;

  if (scrollTop > lastScrollTop) {
    header.style.opacity = '0';
  } else if (scrollTop + winHeight < docHeight) {
    header.style.opacity = '1';
  }
  
  lastScrollTop = scrollTop;
}

// animate elements when in view
(function checkInView() {
  var animateElements = document.querySelectorAll('.animate-up');
  var scrollTop = Math.max(window.pageYOffset, 
    document.documentElement.scrollTop, document.body.scrollTop);
  var winHeight = window.outerHeight;
  var winBottom = scrollTop + winHeight;

  animateElements.forEach(function(el) {
    var elHeight = el.offsetHeight;
    var elTop = el.getBoundingClientRect().top + scrollTop;
    var elBottom = elTop + elHeight;

    if ((elBottom >= (scrollTop - 200)) && (elTop <= (winBottom))) {
      el.classList.add('in-view');
    } else {
      el.classList.remove('in-view');
    }
  })

  window.requestAnimationFrame(checkInView);
})();

var nextProject = document.querySelector('.next-project');
nextProject.addEventListener('mouseenter', handleNextProjectHover)
nextProject.addEventListener('mouseleave', handleNextProjectHover)

function handleNextProjectHover() {
  nextProject.classList.toggle('hovering')
}

var titleEase = CustomEase.create("custom", "M0,0 C0.12,0.664 0.456,0.401 0.614,0.55 0.772,0.726 0.602,0.942 1,1");
var introProject = new TimelineLite()
  .to('.project-title', 2.5, {y: '-100%', delay: .5, ease: titleEase})
  .to('.blackbox', .8, {y: '-100%'}, '-=.6')
  .set('.blackbox', {alpha: 0})
  .to('h2', 1.6, {alpha: 1, y: '0'}, '-=.6')
  .to('.hashtags', .4, {alpha: 1, ease: Power0.easeNone}, '-=.8');