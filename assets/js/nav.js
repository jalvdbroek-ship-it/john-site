/* The nav gains a hairline once the page scrolls, like a product page header. */
(function () {
  "use strict";

  var nav = document.querySelector(".site-nav");
  if (!nav) return;

  var ticking = false;

  function update() {
    nav.classList.toggle("is-stuck", window.scrollY > 8);
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    },
    { passive: true }
  );

  update();
})();
