// Momentarily stop transition when window is resized
(function () {
  const classes = document.body.classList;
  let timer = null;
  window.addEventListener("resize", () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    } else {
      classes.add("stop-transition");
    }
    timer = setTimeout(() => {
      classes.remove("stop-transition");
      timer = null;
    }, 100);
  });
})();

$(document).ready(function () {
  // Collapse menu on link click
  $(".nav-link").click(function (e) {
    e.stopPropagation();
    $(".menu-btn").click();
  });

  // Close the menu on window/document click
  const $document = $(document);
  $document.click(function (e) {
    if (
      !$(".menu-btn").is(e.target) && // if the target of the click isn't the button...
      $(".menu-btn").is(":checked")
    ) {
      e.preventDefault();
      $(".menu-btn").click();
    }
  });
});
