let isScrolling = false;

window.addEventListener('scroll', function() {
  if (!isScrolling) {
    window.requestAnimationFrame(function() {
      updateLoadingBar();
      isScrolling = false;
    });

    isScrolling = true;
  }
});

function updateLoadingBar() {
  var loadingBar = document.getElementById('loading-bar');
  var windowHeight = window.innerHeight;
  var documentHeight = document.body.scrollHeight - windowHeight;
  var progress = (window.scrollY / documentHeight) * 100;

  loadingBar.style.width = progress + '%';

  if (window.scrollY + windowHeight >= document.body.scrollHeight) {
    loadingBar.style.width = '100%';
  } else if (window.scrollY === 0) {
    loadingBar.style.width = '0';
  }
}