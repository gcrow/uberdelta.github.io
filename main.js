var elementsToAnimate = document.getElementsByClassName("shouldAnimate");

function scrollHandler() {
  if (elementsToAnimate.length === 0) {
    window.onscroll = null;
    return;
  }

  for (var i = 0; i < elementsToAnimate.length; i++) {
    var elem = elementsToAnimate[i];
    if (window.scrollY + window.innerHeight * 0.8 > elem.offsetTop) {
      elem.classList.add("animated");
      if (
        elem.classList.contains("rgx-iframe") ||
        elem.classList.contains("rgx-screenshot")
      ) {
        elem.classList.add("fadeIn");
      } else {
        elem.classList.add("fadeInUp");
      }

      elem.classList.remove("shouldAnimate");
      i--;
    }
  }
}

scrollHandler();

window.onscroll = scrollHandler;
