var elements = document.getElementsByClassName("fadeUp");

document.addEventListener("scroll", animate, { passive: true });
document.addEventListener("DOMContentLoaded", animate);

function inView(element) {
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  var scrollPosition = scrollY + windowHeight;
  var elementPosition =
    element.getBoundingClientRect().top + scrollY + element.clientHeight / 3;

  if (scrollPosition > elementPosition) {
    element.classList.add("animate");
  }
}

function animate() {
  for (var i = 0; i < elements.length; i++) {
    inView(elements[i]);
  }
}
