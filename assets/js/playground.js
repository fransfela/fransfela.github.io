// Small perception demos. Everything runs in the browser with synthetic signals.
// Nothing is stored or sent anywhere.
(function () {
  "use strict";

  var audioCtx = null;
  function ctx() {
    if (!audioCtx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AC();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  }

  function dbToGain(db) {
    return Math.pow(10, db / 20);
  }

  function $(id) {
    return document.getElementById(id);
  }

  // Output chain with a fixed ceiling so a slider can never get loud.
  function outputChain(c) {
    var master = c.createGain();
    master.gain.value = 0.25;
    var comp = c.createDynamicsCompressor();
    master.connect(comp);
    comp.connect(c.destination);
    return master;
  }

  // ---------- Demo 1: tone in noise ----------
  function initMasking() {
    var btn = $("mask-play");
    if (!btn) return;
    var toneSlider = $("mask-tone");
    var noiseSlider = $("mask-noise");
    var readout = $("mask-readout");
    var nodes = null;

    function update() {
      var t = Number(toneSlider.value);
      var n = Number(noiseSlider.value);
      readout.textContent = readout
        .getAttribute("data-template")
        .replace("{tone}", t)
        .replace("{noise}", n)
        .replace("{snr}", t - n);
      if (nodes) {
        nodes.toneGain.gain.value = dbToGain(t);
        nodes.noiseGain.gain.value = dbToGain(n);
      }
    }

    function start() {
      var c = ctx();
      var master = outputChain(c);
      var osc = c.createOscillator();
      osc.frequency.value = 1000;
      var toneGain = c.createGain();
      osc.connect(toneGain);
      toneGain.connect(master);

      var len = c.sampleRate * 2;
      var buf = c.createBuffer(1, len, c.sampleRate);
      var data = buf.getChannelData(0);
      for (var i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
      var noise = c.createBufferSource();
      noise.buffer = buf;
      noise.loop = true;
      var noiseGain = c.createGain();
      noise.connect(noiseGain);
      noiseGain.connect(master);

      nodes = { osc: osc, noise: noise, toneGain: toneGain, noiseGain: noiseGain, master: master };
      update();
      osc.start();
      noise.start();
      btn.textContent = btn.getAttribute("data-stop");
    }

    function stop() {
      nodes.osc.stop();
      nodes.noise.stop();
      nodes.master.disconnect();
      nodes = null;
      btn.textContent = btn.getAttribute("data-play");
    }

    btn.addEventListener("click", function () {
      if (nodes) stop();
      else start();
    });
    toneSlider.addEventListener("input", update);
    noiseSlider.addEventListener("input", update);
    update();
  }

  // ---------- Demo 2: ABX with a band-limited signal ----------
  function initAbx() {
    var root = $("abx");
    if (!root) return;
    var cutoffSel = $("abx-cutoff");
    var status = $("abx-status");
    var result = $("abx-result");
    var buffers = null;
    var playing = null;
    var trials = 10;
    var done = 0;
    var correct = 0;
    var xIsA = Math.random() < 0.5;

    function synth(c, maxHz) {
      var sr = c.sampleRate;
      var len = Math.floor(sr * 1.2);
      var buf = c.createBuffer(1, len, sr);
      var d = buf.getChannelData(0);
      var f0 = 200;
      for (var k = 1; k * f0 < maxHz && k * f0 < sr / 2; k++) {
        var amp = 1 / k;
        var w = (2 * Math.PI * k * f0) / sr;
        for (var i = 0; i < len; i++) d[i] += amp * Math.sin(w * i);
      }
      var peak = 0;
      for (var j = 0; j < len; j++) peak = Math.max(peak, Math.abs(d[j]));
      var fade = Math.floor(sr * 0.03);
      for (var m = 0; m < len; m++) {
        var env = Math.min(1, m / fade, (len - m) / fade);
        d[m] = (d[m] / peak) * 0.5 * env;
      }
      return buf;
    }

    function build() {
      var c = ctx();
      buffers = {
        full: synth(c, 20000),
        low: synth(c, Number(cutoffSel.value)),
      };
    }

    function play(which) {
      var c = ctx();
      if (!buffers) build();
      if (playing) {
        try {
          playing.stop();
        } catch (e) {}
      }
      var src = c.createBufferSource();
      var useFull = which === "A" || (which === "X" && xIsA);
      src.buffer = useFull ? buffers.full : buffers.low;
      src.connect(outputChain(c));
      src.start();
      playing = src;
    }

    function binomialP(k, n) {
      var sum = 0;
      for (var i = k; i <= n; i++) {
        var c = 1;
        for (var j = 1; j <= i; j++) c = (c * (n - j + 1)) / j;
        sum += c / Math.pow(2, n);
      }
      return sum;
    }

    function render() {
      status.textContent = status.getAttribute("data-template").replace("{done}", done).replace("{total}", trials);
    }

    function reset() {
      done = 0;
      correct = 0;
      xIsA = Math.random() < 0.5;
      buffers = null;
      result.textContent = "";
      render();
    }

    function answer(guessA) {
      if (done >= trials) return;
      if (guessA === xIsA) correct++;
      done++;
      xIsA = Math.random() < 0.5;
      render();
      if (done === trials) {
        result.textContent = result
          .getAttribute("data-template")
          .replace("{correct}", correct)
          .replace("{total}", trials)
          .replace("{p}", binomialP(correct, trials).toFixed(3));
      }
    }

    $("abx-a").addEventListener("click", function () {
      play("A");
    });
    $("abx-b").addEventListener("click", function () {
      play("B");
    });
    $("abx-x").addEventListener("click", function () {
      play("X");
    });
    $("abx-ans-a").addEventListener("click", function () {
      answer(true);
    });
    $("abx-ans-b").addEventListener("click", function () {
      answer(false);
    });
    $("abx-reset").addEventListener("click", reset);
    cutoffSel.addEventListener("change", reset);
    render();
  }

  // ---------- Demo 3: same PSNR, different look ----------
  function initImage() {
    var view = $("img-view");
    if (!view) return;
    var typeSel = $("img-type");
    var amount = $("img-amount");
    var readout = $("img-readout");
    var holdBtn = $("img-hold");
    var W = view.width;
    var H = view.height;

    function rng(seed) {
      return function () {
        seed |= 0;
        seed = (seed + 0x6d2b79f5) | 0;
        var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }

    var orig = document.createElement("canvas");
    orig.width = W;
    orig.height = H;
    (function drawScene() {
      var g = orig.getContext("2d");
      var grad = g.createLinearGradient(0, 0, W, H);
      grad.addColorStop(0, "#2b4c7e");
      grad.addColorStop(1, "#f2b880");
      g.fillStyle = grad;
      g.fillRect(0, 0, W, H);
      var r = rng(7);
      for (var i = 0; i < 14; i++) {
        g.beginPath();
        g.fillStyle = "hsl(" + Math.floor(r() * 360) + ",60%,55%)";
        g.arc(r() * W, r() * H, 10 + r() * 40, 0, 2 * Math.PI);
        g.fill();
      }
      g.strokeStyle = "#fff";
      g.lineWidth = 1;
      for (var x = 0; x < W; x += 6) {
        g.beginPath();
        g.moveTo(x, H - 70);
        g.lineTo(x + 40, H);
        g.stroke();
      }
      g.fillStyle = "#fff";
      g.font = "11px sans-serif";
      g.fillText("The quick brown fox jumps over the lazy dog 0123456789", 12, 22);
      g.font = "bold 28px sans-serif";
      g.fillText("Quality", 12, 60);
    })();

    var hasFilter = "filter" in orig.getContext("2d");
    if (!hasFilter) {
      var opt = typeSel.querySelector('option[value="blur"]');
      if (opt) opt.remove();
    }

    var origData = orig.getContext("2d").getImageData(0, 0, W, H).data;
    var vctx = view.getContext("2d");
    var holding = false;
    var token = 0;

    function psnr(a, b) {
      var s = 0;
      var n = 0;
      for (var i = 0; i < a.length; i += 4) {
        for (var c = 0; c < 3; c++) {
          var d = a[i + c] - b[i + c];
          s += d * d;
          n++;
        }
      }
      var mse = s / n;
      return mse === 0 ? Infinity : 10 * Math.log10((255 * 255) / mse);
    }

    function show(canvasLike) {
      vctx.clearRect(0, 0, W, H);
      vctx.drawImage(canvasLike, 0, 0);
    }

    function finish(canvasLike) {
      var tmp = document.createElement("canvas");
      tmp.width = W;
      tmp.height = H;
      var t = tmp.getContext("2d");
      t.drawImage(canvasLike, 0, 0);
      var d = t.getImageData(0, 0, W, H).data;
      var p = psnr(origData, d);
      readout.textContent = readout.getAttribute("data-template").replace("{psnr}", isFinite(p) ? p.toFixed(1) : "99");
      if (!holding) show(tmp);
      return tmp;
    }

    var lastDegraded = null;

    function update() {
      var type = typeSel.value;
      var v = Number(amount.value);
      var my = ++token;
      if (type === "jpeg") {
        var q = Math.max(0.02, (101 - v) / 100);
        var img = new Image();
        img.onload = function () {
          if (my !== token) return;
          lastDegraded = finish(img);
        };
        img.src = orig.toDataURL("image/jpeg", q);
      } else if (type === "blur") {
        var c = document.createElement("canvas");
        c.width = W;
        c.height = H;
        var g = c.getContext("2d");
        g.filter = "blur(" + (v / 12).toFixed(2) + "px)";
        g.drawImage(orig, 0, 0);
        lastDegraded = finish(c);
      } else {
        var c2 = document.createElement("canvas");
        c2.width = W;
        c2.height = H;
        var g2 = c2.getContext("2d");
        g2.drawImage(orig, 0, 0);
        var im = g2.getImageData(0, 0, W, H);
        var r = rng(99);
        var sigma = v * 0.6;
        for (var i = 0; i < im.data.length; i += 4) {
          var n = (r() + r() + r() - 1.5) * 2 * sigma;
          im.data[i] = Math.max(0, Math.min(255, im.data[i] + n));
          im.data[i + 1] = Math.max(0, Math.min(255, im.data[i + 1] + n));
          im.data[i + 2] = Math.max(0, Math.min(255, im.data[i + 2] + n));
        }
        g2.putImageData(im, 0, 0);
        lastDegraded = finish(c2);
      }
    }

    function hold(on) {
      holding = on;
      if (on) show(orig);
      else if (lastDegraded) show(lastDegraded);
    }

    ["mousedown", "touchstart"].forEach(function (e) {
      holdBtn.addEventListener(e, function (ev) {
        ev.preventDefault();
        hold(true);
      });
    });
    ["mouseup", "mouseleave", "touchend", "touchcancel"].forEach(function (e) {
      holdBtn.addEventListener(e, function () {
        hold(false);
      });
    });
    typeSel.addEventListener("change", update);
    amount.addEventListener("input", update);
    update();
  }

  // ---------- Demo 4: live spectrogram of synthetic sounds ----------
  function initSpectrogram() {
    var canvas = $("spec-view");
    if (!canvas) return;
    var g = canvas.getContext("2d");
    var W = canvas.width;
    var H = canvas.height;
    var maxHz = 8000;
    var active = null;
    var raf = null;
    var buttons = document.querySelectorAll("[data-spec]");
    var stopBtn = $("spec-stop");

    g.fillStyle = "#000";
    g.fillRect(0, 0, W, H);

    function noiseBuffer(c) {
      var buf = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
      var d = buf.getChannelData(0);
      for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      return buf;
    }

    function formants(c, source, freqs) {
      var sum = c.createGain();
      freqs.forEach(function (f) {
        var bp = c.createBiquadFilter();
        bp.type = "bandpass";
        bp.frequency.value = f;
        bp.Q.value = 8;
        source.connect(bp);
        bp.connect(sum);
      });
      return sum;
    }

    function build(kind, c, out) {
      var stops = [];
      var saw;
      if (kind === "sweep") {
        var osc = c.createOscillator();
        osc.connect(out);
        osc.start();
        var schedule = function () {
          var t = c.currentTime;
          osc.frequency.cancelScheduledValues(t);
          osc.frequency.setValueAtTime(200, t);
          osc.frequency.exponentialRampToValueAtTime(7000, t + 4);
        };
        schedule();
        var timer = setInterval(schedule, 4000);
        stops.push(function () {
          clearInterval(timer);
          osc.stop();
        });
      } else if (kind === "harmonics") {
        saw = c.createOscillator();
        saw.type = "sawtooth";
        saw.frequency.value = 220;
        var lfo = c.createOscillator();
        lfo.frequency.value = 5;
        var depth = c.createGain();
        depth.gain.value = 6;
        lfo.connect(depth);
        depth.connect(saw.frequency);
        saw.connect(out);
        saw.start();
        lfo.start();
        stops.push(function () {
          saw.stop();
          lfo.stop();
        });
      } else if (kind === "noise") {
        var n = c.createBufferSource();
        n.buffer = noiseBuffer(c);
        n.loop = true;
        n.connect(out);
        n.start();
        stops.push(function () {
          n.stop();
        });
      } else {
        saw = c.createOscillator();
        saw.type = "sawtooth";
        saw.frequency.value = 120;
        var f = kind === "ah" ? [700, 1200, 2600] : [270, 2300, 3000];
        var mix = formants(c, saw, f);
        var boost = c.createGain();
        boost.gain.value = 4;
        mix.connect(boost);
        boost.connect(out);
        saw.start();
        stops.push(function () {
          saw.stop();
        });
      }
      return stops;
    }

    function draw(analyser, data) {
      analyser.getByteFrequencyData(data);
      g.drawImage(canvas, -2, 0);
      var bins = Math.floor((maxHz / (audioCtx.sampleRate / 2)) * data.length);
      for (var y = 0; y < H; y++) {
        var bin = Math.floor(((H - 1 - y) / H) * bins);
        var v = data[bin] / 255;
        g.fillStyle = "hsl(" + Math.round(260 - v * 260) + ",90%," + Math.round(v * 55) + "%)";
        g.fillRect(W - 2, y, 2, 1);
      }
      raf = requestAnimationFrame(function () {
        draw(analyser, data);
      });
    }

    function stop() {
      if (!active) return;
      cancelAnimationFrame(raf);
      active.stops.forEach(function (s) {
        s();
      });
      active.master.disconnect();
      active = null;
      buttons.forEach(function (b) {
        b.classList.remove("active");
      });
    }

    function start(kind, btn) {
      stop();
      var c = ctx();
      var master = outputChain(c);
      var analyser = c.createAnalyser();
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0.2;
      var level = c.createGain();
      level.gain.value = 0.4;
      level.connect(analyser);
      analyser.connect(master);
      var stops = build(kind, c, level);
      active = { stops: stops, master: master };
      btn.classList.add("active");
      g.fillStyle = "#000";
      g.fillRect(0, 0, W, H);
      draw(analyser, new Uint8Array(analyser.frequencyBinCount));
    }

    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        start(b.getAttribute("data-spec"), b);
      });
    });
    stopBtn.addEventListener("click", stop);
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMasking();
    initAbx();
    initImage();
    initSpectrogram();
  });
})();
