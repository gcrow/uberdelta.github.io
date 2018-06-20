var elementsToAnimate = document.getElementsByClassName("shouldAnimate");
var scrollIndicatorHidden = false;

function scrollHandler(e, initialRun) {
  if (elementsToAnimate.length === 0) {
    window.onscroll = null;
    return;
  }

  if (!scrollIndicatorHidden && window.scrollY > window.innerHeight * 0.25) {
    var scrollIndicator = document.getElementsByClassName(
      "rgx-scroll-indicator"
    )[0];
    if (initialRun) {
      scrollIndicator.remove();
    } else {
      scrollIndicator.classList.add("fadeOutUp");
    }

    scrollIndicatorHidden = true;
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

scrollHandler(undefined, true);

window.onscroll = scrollHandler;
