// Rotating line under the name. Plain script, no external requests.
(function () {
  var el = document.getElementById("typed-line");
  if (!el) return;

  var lines;
  try {
    lines = JSON.parse(el.getAttribute("data-lines"));
  } catch (e) {
    return;
  }
  if (!lines || lines.length < 2) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var target = el.querySelector(".typed-text");
  var line = 0;
  var pos = lines[0].length;
  var deleting = false;

  function tick() {
    var text = lines[line];
    if (!deleting && pos === text.length) {
      deleting = true;
      return setTimeout(tick, 2000);
    }
    if (deleting && pos === 0) {
      deleting = false;
      line = (line + 1) % lines.length;
      return setTimeout(tick, 400);
    }
    pos += deleting ? -1 : 1;
    target.textContent = lines[line].slice(0, pos);
    setTimeout(tick, deleting ? 30 : 55);
  }

  setTimeout(tick, 2000);
})();
