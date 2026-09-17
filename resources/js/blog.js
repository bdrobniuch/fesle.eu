(function () {
  var posts = window.FESLE_POSTS || [];

  var hash = (location.hash || "").replace("#", "");
  if (hash) {
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].oldHash === hash) {
        location.replace(posts[i].file);
        return;
      }
    }
  }

  var filters = document.querySelectorAll("[data-filter]");
  var cards = document.querySelectorAll(".blog-card[data-tags]");

  function applyFilter(tag) {
    for (var c = 0; c < cards.length; c++) {
      var tags = cards[c].getAttribute("data-tags") || "";
      var show = tag === "all" || tags.indexOf(tag) !== -1;
      cards[c].hidden = !show;
    }
    for (var f = 0; f < filters.length; f++) {
      filters[f].setAttribute(
        "aria-pressed",
        filters[f].getAttribute("data-filter") === tag ? "true" : "false"
      );
    }
  }

  for (var f = 0; f < filters.length; f++) {
    filters[f].addEventListener("click", function (event) {
      applyFilter(event.currentTarget.getAttribute("data-filter"));
    });
  }
})();
