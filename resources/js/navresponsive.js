      function navResponsive() {
        var x = document.getElementById("idnavbar");
        if (x.className === "navbar") {
          x.className += " navresponsive";
        } else {
          x.className = "navbar";
        }
      }