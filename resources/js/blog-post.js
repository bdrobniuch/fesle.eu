(function () {
  var bar = document.querySelector(".post-progress");
  if (bar) {
    function update() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var value = max > 0 ? (window.scrollY / max) * 100 : 0;
      bar.style.width = value + "%";
    }
    document.addEventListener("scroll", update, { passive: true });
    update();
  }

  var copyBtn = document.querySelector("[data-copy-link]");
  if (copyBtn && navigator.clipboard) {
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(window.location.href).then(function () {
        copyBtn.textContent = "Link copied";
        window.setTimeout(function () {
          copyBtn.textContent = "Copy link";
        }, 2000);
      });
    });
  }
})();
