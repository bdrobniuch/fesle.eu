function navResponsive() {
  var nav = document.getElementById("idnavbar");
  if (!nav) {
    return;
  }

  var toggle = nav.querySelector(".nav-toggle");
  var isClosed = nav.classList.contains("navresponsive");

  if (isClosed) {
    nav.classList.remove("navresponsive");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
    }
  } else {
    nav.classList.add("navresponsive");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
  }
}

function closeNav() {
  var nav = document.getElementById("idnavbar");
  if (!nav || nav.classList.contains("navresponsive")) {
    return;
  }
  nav.classList.add("navresponsive");
  var toggle = nav.querySelector(".nav-toggle");
  if (toggle) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeNav();
  }
});
