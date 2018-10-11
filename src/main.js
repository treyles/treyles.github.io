(function() {
  var heroText = document.querySelectorAll('#focus-section h1');
  var headingLinks = document.querySelectorAll('.section a');
  var description = document.querySelector('.description');

  fullpage.initialize('#fullpage', {
    anchors: ['focus', 'projects', 'github', 'about'],
    css3: true,
    scrollingSpeed: 1000,
    easingcss3: 'cubic-bezier(0.86, 0, 0.07, 1)',
    keyboardScrolling: true,
    onLeave: handleSectionLeave,
    afterLoad: handleSectionLoad
  });

  function handleSectionLeave(index, nextIndex, direction) {
    var footer = document.querySelector('.fullpage-footer');
    // fullpage.js indexes start at 1
    var active = nextIndex - 1;
    var previous = index - 1;

    footer.children[previous].classList.remove('underline');
    footer.children[active].classList.add('underline');

    description.style.opacity = 0;
  }

  function handleSectionLoad(anchorLink, index) {
    var content;

    switch (anchorLink) {
      case 'focus':
        content = 'Los Angeles, USA';
        break;
      case 'projects':
        content = 'Selected Projects';
        break;
      case 'github':
        content = 'See More Projects';
        break;
      case 'about':
        playAboutAnimation();
        content = 'Currently Available For Hire';
        break;
      default:
        content = 'Los Angeles, USA';
    }

    description.textContent = content;
    description.style.opacity = 0.4;
  }

  function playAboutAnimation() {
    var aboutElements = document.querySelectorAll('.animate-about');

    aboutElements.forEach(function(el) {
      el.classList.add('play');
    });
  }

  headingLinks.forEach(function(el) {
    el.addEventListener('mouseenter', handleLinkHover);
    el.addEventListener('mouseleave', handleLinkHover);
  });

  function handleLinkHover() {
    document.body.classList.toggle('hovering');

    var headings = document.querySelectorAll('.section h1');
    headings.forEach(function(el) {
      el.classList.toggle('hovering');
    });
  }

  new TimelineLite()
    .set('.blackbox', { alpha: 0, y: '-100%' })
    .add('hero', 1)
    .to(heroText[0], 1.3, { y: '0%' }, 'hero')
    .to(heroText[1], 1.3, { y: '0%' }, 'hero')
    .to(heroText[2], 1.3, { y: '0%' }, 'hero')
    .to('.fullpage-footer', 1.3, { y: '0%' }, '-=.8')
    .fromTo('.description', 0.4, { alpha: 0 }, { alpha: 0.4 }, '-=.4')
    .to('.scroll-hint', 0.4, { y: '0%', alpha: 1 });
})();
