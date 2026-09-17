(function () {
  var root = document.querySelector(".workshop-carousel");
  if (!root) {
    return;
  }

  var track = root.querySelector(".workshop-carousel-track");
  var slides = root.querySelectorAll(".workshop-carousel-slide");
  var prev = root.querySelector(".workshop-carousel-prev");
  var next = root.querySelector(".workshop-carousel-next");
  var dotsWrap = root.querySelector(".workshop-carousel-dots");
  var toggle = root.querySelector(".workshop-carousel-toggle");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var index = 0;
  var timer = null;
  var intervalMs = 6000;

  function slideWidth() {
    return track.clientWidth;
  }

  function goTo(i, instant) {
    index = (i + slides.length) % slides.length;
    track.scrollTo({
      left: index * slideWidth(),
      behavior: instant || reducedMotion ? "auto" : "smooth",
    });
    updateDots();
  }

  function updateDots() {
    var buttons = dotsWrap.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      if (i === index) {
        buttons[i].setAttribute("aria-current", "true");
      } else {
        buttons[i].removeAttribute("aria-current");
      }
    }
  }

  function currentFromScroll() {
    var width = slideWidth();
    if (!width) {
      return 0;
    }
    return Math.round(track.scrollLeft / width);
  }

  function startAutoplay() {
    stopAutoplay();
    if (reducedMotion) {
      return;
    }
    timer = window.setInterval(function () {
      goTo(index + 1);
    }, intervalMs);
    if (toggle) {
      toggle.setAttribute("aria-pressed", "false");
      toggle.textContent = "Pause slideshow";
    }
  }

  function stopAutoplay() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
    if (toggle) {
      toggle.setAttribute("aria-pressed", "true");
      toggle.textContent = "Play slideshow";
    }
  }

  for (var i = 0; i < slides.length; i++) {
    (function (slideIndex) {
      var button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", "Photo " + (slideIndex + 1));
      button.addEventListener("click", function () {
        goTo(slideIndex);
        stopAutoplay();
      });
      dotsWrap.appendChild(button);
    })(i);
  }
  updateDots();

  if (prev) {
    prev.addEventListener("click", function () {
      goTo(index - 1);
      stopAutoplay();
    });
  }
  if (next) {
    next.addEventListener("click", function () {
      goTo(index + 1);
      stopAutoplay();
    });
  }

  track.addEventListener("scroll", function () {
    index = currentFromScroll();
    updateDots();
  }, { passive: true });

  track.addEventListener("pointerdown", stopAutoplay);

  root.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      goTo(index - 1);
      stopAutoplay();
    } else if (event.key === "ArrowRight") {
      goTo(index + 1);
      stopAutoplay();
    }
  });

  if (toggle) {
    toggle.addEventListener("click", function () {
      if (timer) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });
  }

  root.addEventListener("mouseenter", stopAutoplay);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stopAutoplay();
    }
  });

  window.addEventListener("resize", function () {
    goTo(index, true);
  });

  if (!reducedMotion) {
    startAutoplay();
  } else if (toggle) {
    toggle.hidden = true;
  }
})();
