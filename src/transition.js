(function() {
  TweenLite.defaultEase = Power3.easeOut;

  var internalLink = document.querySelectorAll('.internal');
  internalLink.forEach(function(link) {
    link.addEventListener('click', handleInternalLink);
  });

  function handleInternalLink(e) {
    e.preventDefault();
    var link = e.target.href;

    setTimeout(go, 400);

    function go() {
      TweenLite.fromTo(
        '.blackbox',
        0.8,
        { y: '-100%', alpha: 1 },
        { y: '0%' }
      ).eventCallback('onComplete', function() {
        window.location.href = link;
      });
    }
  }
})();
