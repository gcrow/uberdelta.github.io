window.onscroll = function() {
  scrollHandler();
};

var header = document.getElementById("rgx-header");
if (window.pageYOffset < window.innerHeight / 4) {
  header.classList.add("animated");
  header.classList.add("fadeIn");
}

var elementsToAnimate = document.getElementsByClassName("animated");

function scrollHandler() {
  for (var i = 0; i < elementsToAnimate.length; i++) {}
}
