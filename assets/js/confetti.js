/* Confetti: one button, one burst. No dependencies, no ambient loop. */
(function () {
  "use strict";

  var button = document.querySelector("[data-confetti]");
  if (!button) return;

  var status = document.querySelector("[data-confetti-status]");
  var canvas = null;
  var ctx = null;
  var particles = [];
  var frame = 0;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  var COLORS = ["#FFC24D", "#FFE571", "#F09C17", "#E05A00", "#89002F", "#201136"];

  function makeCanvas() {
    if (canvas) return;
    canvas = document.createElement("canvas");
    canvas.className = "confetti-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    resize();
    window.addEventListener("resize", resize);
  }

  function resize() {
    if (!canvas) return;
    var ratio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function spawn(originX, originY) {
    var count = 130;
    for (var i = 0; i < count; i++) {
      particles.push({
        x: originX + (Math.random() - 0.5) * 60,
        y: originY + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 11,
        vy: -6 - Math.random() * 8,
        size: 6 + Math.random() * 7,
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.34,
        wobble: Math.random() * Math.PI * 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: 0,
        maxLife: 110 + Math.random() * 70
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    var alive = 0;

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.life++;
      p.vy += 0.28;
      p.wobble += 0.14;
      p.x += p.vx + Math.sin(p.wobble) * 1.4;
      p.y += p.vy;
      p.rotation += p.spin;

      var fade = p.maxLife - p.life;
      if (fade < 30) p.alpha = Math.max(0, fade / 30);
      else p.alpha = 1;

      if (p.y < window.innerHeight + 40 && p.alpha > 0) {
        alive++;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66);
        ctx.restore();
      }
    }

    if (alive > 0) {
      frame = window.requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles = [];
      frame = 0;
    }
  }

  function announce(message) {
    if (!status) return;
    status.textContent = "";
    window.setTimeout(function () {
      status.textContent = message;
    }, 30);
  }

  function celebrate() {
    var box = button.getBoundingClientRect();
    var originX = box.left + box.width / 2;
    var originY = box.top + box.height / 2;

    makeCanvas();
    spawn(originX, originY);
    if (!frame) frame = window.requestAnimationFrame(draw);
  }

  function pulse() {
    button.classList.add("is-celebrating");
    window.setTimeout(function () {
      button.classList.remove("is-celebrating");
    }, 700);
  }

  button.addEventListener("click", function () {
    if (reduceMotion.matches) {
      pulse();
      announce("Feestje! Beweging staat uit in je systeem.");
      return;
    }
    celebrate();
    pulse();
    announce("Confetti!");
  });
})();
