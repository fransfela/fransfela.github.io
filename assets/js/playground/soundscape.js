// Soundscape composer: real recordings placed around a listener in a top-down scene.
// Sources run through HRTF panners, so dragging one (or walking) moves it around your head.
(function () {
  'use strict';

  var root = document.getElementById('sc');
  if (!root || !window.PG) return;
  var PG = window.PG;
  var el = PG.el;
  var T = {
    en: {
      enter: 'Step inside', loading: 'Loading the place…', stop: 'Stop', walk: 'Take a walk', stopWalk: 'Stop walking',
      anc: 'Noise-cancelling headphones', surprise: 'Surprise me', copy: 'Copy link to my mix', copied: 'Link copied',
      inScene: 'In this scene', add: 'Add a sound from anywhere', bed: 'Background', remove: 'Remove', you: 'you',
      happen: 'Make something happen', q: ['Vibrant', 'Calm', 'Monotonous', 'Chaotic'],
      axes: ['Pleasant', 'Annoying', 'Eventful', 'Uneventful'], challenge: 'Challenge', next: 'Next challenge', done: 'Done. Nice ear.',
      goal: 'Make this place feel', hold: 'Hold the dot there for three seconds.', error: 'Could not load this place. Try again.',
    },
    id: {
      enter: 'Masuk ke sini', loading: 'Memuat tempat…', stop: 'Berhenti', walk: 'Jalan-jalan', stopWalk: 'Berhenti jalan',
      anc: 'Headphone peredam bising', surprise: 'Kejutkan saya', copy: 'Salin tautan racikan saya', copied: 'Tautan disalin',
      inScene: 'Di adegan ini', add: 'Tambah suara dari tempat lain', bed: 'Latar', remove: 'Hapus', you: 'kamu',
      happen: 'Bikin sesuatu terjadi', q: ['Hidup', 'Tenang', 'Monoton', 'Kacau'],
      axes: ['Menyenangkan', 'Mengganggu', 'Ramai', 'Sepi'], challenge: 'Tantangan', next: 'Tantangan berikutnya', done: 'Berhasil. Telinga yang bagus.',
      goal: 'Buat tempat ini terasa', hold: 'Tahan titiknya di sana selama tiga detik.', error: 'Gagal memuat tempat ini. Coba lagi.',
    },
  }[PG.lang];

  var W = 12, H = 7; // half-size of the scene in metres
  var data = null, theme = null;
  var ctx = null, mix, ancLow, ancHigh, out, revIn, rev, scene = null;
  var tokens = [], active = [], ripples = [];
  var me = { x: 0, y: 0, h: 0 };
  var playing = false, walking = false, walkT = 0, selected = null, drag = null, raf = 0, last = 0;
  var mood = { p: 0, e: 0 }, goal = null, heldFor = 0, won = false;

  var ui = {
    themes: root.querySelector('.sc-themes'),
    stage: root.querySelector('.sc-stage'),
    canvas: root.querySelector('#sc-canvas'),
    start: root.querySelector('#sc-start'),
    list: root.querySelector('.sc-list'),
    tray: root.querySelector('.sc-tray'),
    events: root.querySelector('.sc-events'),
    compass: root.querySelector('#sc-compass'),
    goal: root.querySelector('.sc-goal'),
    anc: root.querySelector('#sc-anc'),
    walk: root.querySelector('#sc-walk'),
    surprise: root.querySelector('#sc-surprise'),
    copy: root.querySelector('#sc-copy'),
    stopBtn: root.querySelector('#sc-stop'),
    bed: root.querySelector('#sc-bed'),
    credits: root.querySelector('.sc-credits'),
  };
  var view = null;

  // ---------- audio graph

  function impulse(seconds, decay) {
    var sr = ctx.sampleRate, n = Math.max(1, Math.floor(sr * seconds));
    var b = ctx.createBuffer(2, n, sr);
    for (var c = 0; c < 2; c++) {
      var d = b.getChannelData(c), lp = 0;
      for (var i = 0; i < n; i++) {
        var w = (Math.random() * 2 - 1) * Math.pow(1 - i / n, decay);
        lp += (w - lp) * 0.35; // darker tail, like air and soft surfaces
        d[i] = lp;
      }
    }
    return b;
  }

  function build() {
    if (ctx) return;
    ctx = PG.audio();
    mix = ctx.createGain();
    ancLow = ctx.createBiquadFilter();
    ancLow.type = 'lowshelf';
    ancLow.frequency.value = 900;
    ancHigh = ctx.createBiquadFilter();
    ancHigh.type = 'highshelf';
    ancHigh.frequency.value = 2500;
    out = ctx.createGain();
    out.gain.value = 0;
    var lim = ctx.createDynamicsCompressor();
    lim.threshold.value = -5;
    lim.knee.value = 6;
    lim.ratio.value = 12;
    lim.attack.value = 0.004;
    lim.release.value = 0.2;
    revIn = ctx.createGain();
    rev = ctx.createConvolver();
    var wet = ctx.createGain();
    wet.gain.value = 0.9;
    revIn.connect(rev);
    rev.connect(wet);
    wet.connect(mix);
    mix.connect(ancLow);
    ancLow.connect(ancHigh);
    ancHigh.connect(out);
    out.connect(lim);
    lim.connect(ctx.destination);
  }

  function setPos(p, x, y) {
    if (p.positionX) {
      var t = ctx.currentTime + 0.03;
      p.positionX.linearRampToValueAtTime(x, t);
      p.positionY.linearRampToValueAtTime(0, t);
      p.positionZ.linearRampToValueAtTime(y, t);
    } else {
      p.setPosition(x, 0, y);
    }
  }

  function setListener() {
    if (!ctx) return;
    var l = ctx.listener, fx = Math.sin(me.h), fz = -Math.cos(me.h);
    if (l.positionX) {
      var t = ctx.currentTime + 0.03;
      l.positionX.linearRampToValueAtTime(me.x, t);
      l.positionZ.linearRampToValueAtTime(me.y, t);
      l.forwardX.linearRampToValueAtTime(fx, t);
      l.forwardZ.linearRampToValueAtTime(fz, t);
      l.upY.value = 1;
    } else {
      l.setPosition(me.x, 0, me.y);
      l.setOrientation(fx, 0, fz, 0, 1, 0);
    }
  }

  function panner() {
    var p = ctx.createPanner();
    p.panningModel = 'HRTF';
    p.distanceModel = 'inverse';
    p.refDistance = 2.5;
    p.rolloffFactor = 1.15;
    p.maxDistance = 60;
    return p;
  }

  function distance(k) {
    return Math.hypot(k.x - me.x, k.y - me.y);
  }

  // Far sources lose their top end and sit further into the reverb, as they do outdoors.
  function shape(k) {
    if (!k.node) return;
    var d = distance(k), t = ctx.currentTime;
    k.node.air.frequency.setTargetAtTime(PG.clamp(19000 / (1 + d * 0.16), 2500, 19000), t, 0.08);
    k.node.send.gain.setTargetAtTime(PG.clamp(0.04 + d * 0.022, 0.04, 0.4) * (theme.wet || 1), t, 0.08);
    setPos(k.node.pan, k.x, k.y);
  }

  // Files hold 0.25 s of wrapped audio at each end, so the loop is exact whatever the codec adds.
  function loopOf(buffer, length) {
    var src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    src.loopStart = 0.25;
    src.loopEnd = 0.25 + length;
    return src;
  }

  function voice(k, buffer) {
    var src = loopOf(buffer, data.sounds[k.id].l);
    var drift = ctx.createGain();
    var level = ctx.createGain();
    level.gain.value = 0;
    var air = ctx.createBiquadFilter();
    air.type = 'lowpass';
    air.Q.value = 0.4;
    var pan = panner();
    var send = ctx.createGain();
    var meter = ctx.createAnalyser();
    meter.fftSize = 256;
    var groupIn = scene.gain;
    src.connect(drift);
    drift.connect(level);
    level.connect(air);
    air.connect(pan);
    pan.connect(groupIn);
    pan.connect(send);
    send.connect(revIn);
    level.connect(meter);
    src.start(0, PG.rnd(0.25, src.loopEnd));
    k.node = { src: src, drift: drift, level: level, air: air, pan: pan, send: send, meter: meter, buf: new Uint8Array(128) };
    level.gain.setTargetAtTime(k.level * k.trim, ctx.currentTime, 0.5);
    shape(k);
    wander(k);
  }

  // Slow random level changes stop a loop from sounding like a loop.
  function wander(k) {
    if (!k.node) return;
    var dB = PG.rnd(-2.5, 1.5);
    k.node.drift.gain.setTargetAtTime(Math.pow(10, dB / 20), ctx.currentTime, PG.rnd(2, 5));
    k.wt = setTimeout(function () { wander(k); }, PG.rnd(3000, 9000));
  }

  function silence(k) {
    if (!k.node) return;
    clearTimeout(k.wt);
    var n = k.node;
    k.node = null;
    n.level.gain.setTargetAtTime(0, ctx.currentTime, 0.12);
    setTimeout(function () {
      try { n.src.stop(); n.pan.disconnect(); n.send.disconnect(); } catch (e) { /* already stopped */ }
    }, 700);
  }

  function startBed(buffer, gain, length) {
    var src = loopOf(buffer, length);
    var g = ctx.createGain();
    g.gain.value = gain;
    src.connect(g);
    g.connect(scene.bed);
    src.start(0, PG.rnd(0.25, src.loopEnd));
    scene.beds.push(src);
  }

  // ---------- random events (a dog, a horn, thunder): they never repeat the same way twice

  function fire(ev, byHand) {
    var id = PG.any(ev.s), sound = data.sounds[id];
    PG.load(sound.f).then(function (buffer) {
      if (!playing || !scene) return;
      var a = ev.area || [-W, -H, W, H];
      var pass = ev.path === 'pass';
      var dir = Math.random() < 0.5 ? 1 : -1;
      var y = PG.rnd(a[1], a[3]);
      var e = {
        x: pass ? -dir * (W + 3) : PG.rnd(a[0], a[2]),
        y: y, x1: dir * (W + 3), t: 0, dur: buffer.duration, pass: pass,
        label: PG.pick(sound.n), glyph: sound.c || '#fff',
      };
      var src = ctx.createBufferSource();
      src.buffer = buffer;
      var g = ctx.createGain();
      g.gain.value = (ev.g || 0.7) * (sound.t || 1) * (byHand ? 1.15 : PG.rnd(0.7, 1));
      var air = ctx.createBiquadFilter();
      air.type = 'lowpass';
      air.frequency.value = PG.clamp(19000 / (1 + Math.hypot(e.x - me.x, e.y - me.y) * 0.16), 3000, 19000);
      var p = panner();
      var send = ctx.createGain();
      send.gain.value = 0.25 * (theme.wet || 1);
      setPos(p, e.x, e.y);
      src.connect(g);
      g.connect(air);
      air.connect(p);
      p.connect(scene.gain);
      p.connect(send);
      send.connect(revIn);
      src.start();
      e.pan = p;
      e.air = air;
      src.onended = function () {
        try { p.disconnect(); send.disconnect(); } catch (x) { /* gone */ }
      };
      active.push(e);
      ripples.push({ x: e.x, y: e.y, t: 0, c: e.glyph });
    });
  }

  function schedule(ev) {
    var wait = PG.rnd(ev.every[0], ev.every[1]) * 1000;
    ev.timer = setTimeout(function () {
      if (!playing) return;
      fire(ev);
      schedule(ev);
    }, wait);
  }

  // ---------- scene and token state

  function tokenFor(id, x, y, level) {
    var s = data.sounds[id];
    return { id: id, x: x, y: y, level: level, name: PG.pick(s.n), p: s.p, e: s.e, c: s.c || '#fff', trim: s.t || 1, node: null };
  }

  function themeById(id) {
    return data.themes.filter(function (t) { return t.id === id; })[0];
  }

  function setTheme(id, mixState) {
    theme = themeById(id);
    Array.prototype.forEach.call(ui.themes.children, function (b) {
      b.classList.toggle('active', b.dataset.id === id);
      b.setAttribute('aria-pressed', b.dataset.id === id);
    });
    tokens = mixState || theme.src.map(function (s) { return tokenFor(s.s, s.x, s.y, s.l); });
    me.x = 0; me.y = 0; me.h = 0;
    selected = null;
    active = [];
    if (playing) enter();
    renderList();
    renderTray();
    renderEvents();
    newGoal();
    draw();
    saveHash();
  }

  function clearScene(fade) {
    if (!scene) return;
    var old = scene, t = ctx.currentTime;
    scene = null;
    tokens.concat(old.tokens || []).forEach(function (k) { clearTimeout(k.wt); });
    (old.events || []).forEach(function (e) { clearTimeout(e.timer); });
    old.gain.gain.setTargetAtTime(0, t, fade / 3);
    old.bed.gain.setTargetAtTime(0, t, fade / 3);
    setTimeout(function () {
      old.beds.forEach(function (s) { try { s.stop(); } catch (e) { /* stopped */ } });
      old.voices.forEach(function (n) { try { n.src.stop(); } catch (e) { /* stopped */ } });
      old.gain.disconnect();
      old.bed.disconnect();
    }, fade * 1000 + 400);
  }

  function enter() {
    var my = theme;
    root.classList.add('is-loading');
    ui.start.textContent = T.loading;
    var old = scene;
    if (old) {
      old.voices = tokens.concat(old.tokens).filter(function (k) { return k.node; }).map(function (k) { return k.node; });
      old.tokens.forEach(function (k) { k.node = null; });
      clearScene(1);
    }
    var ids = my.bed.map(function (b) { return b.s; }).concat(tokens.map(function (k) { return k.id; }));
    return Promise.all(ids.map(function (id) { return PG.load(data.sounds[id].f); }))
      .then(function (bufs) {
        if (theme !== my || !playing) return;
        rev.buffer = impulse(my.rt || 0.9, 3);
        scene = { gain: ctx.createGain(), bed: ctx.createGain(), beds: [], voices: [], tokens: tokens, events: my.ev.map(function (e) { return Object.assign({}, e); }) };
        scene.gain.gain.value = 0;
        scene.bed.gain.value = 0;
        scene.gain.connect(mix);
        scene.bed.connect(mix);
        my.bed.forEach(function (b, i) { startBed(bufs[i], b.g, data.sounds[b.s].l); });
        tokens.forEach(function (k, i) { voice(k, bufs[my.bed.length + i]); });
        out.gain.setTargetAtTime(0.85 * (my.v || 1), ctx.currentTime, 0.33);
        scene.gain.gain.setTargetAtTime(1, ctx.currentTime, 0.33);
        scene.bed.gain.setTargetAtTime(+ui.bed.value, ctx.currentTime, 0.33);
        scene.events.forEach(schedule);
        setListener();
        root.classList.remove('is-loading');
        root.classList.add('is-on');
      })
      .catch(function () {
        root.classList.remove('is-loading');
        ui.start.textContent = T.error;
      });
  }

  function play() {
    build();
    PG.claim('sc', halt);
    playing = true;
    applyAnc();
    enter();
    loop();
  }

  function halt() {
    if (!playing) return;
    playing = false;
    walking = false;
    ui.walk.textContent = T.walk;
    PG.release('sc');
    out.gain.setTargetAtTime(0, ctx.currentTime, 0.15);
    if (scene) {
      scene.voices = tokens.filter(function (k) { return k.node; }).map(function (k) { return k.node; });
      tokens.forEach(function (k) { k.node = null; });
      scene.tokens = [];
      clearScene(0.3);
    }
    active = [];
    root.classList.remove('is-on');
    ui.start.textContent = T.enter;
    cancelAnimationFrame(raf);
    draw();
  }

  function applyAnc() {
    if (!ctx) return;
    var on = ui.anc.checked, t = ctx.currentTime;
    // Active cancellation works best on low steady sound; ear cups mostly handle the highs.
    ancLow.gain.setTargetAtTime(on ? -26 : 0, t, 0.12);
    ancHigh.gain.setTargetAtTime(on ? -11 : 0, t, 0.12);
    if (on) { var hint = ui.anc.closest('label'); if (hint) hint.classList.add('on'); }
    else { var off = ui.anc.closest('label'); if (off) off.classList.remove('on'); }
  }

  // ---------- mood compass (ISO 12913-3 style axes)

  function readMood() {
    var sw = 0, sp = 0, se = 0;
    var add = function (p, e, w) { sw += w; sp += p * w; se += e * w; };
    theme.bed.forEach(function (b) {
      var s = data.sounds[b.s];
      add(s.p, s.e, b.g * +ui.bed.value * 0.6);
    });
    tokens.forEach(function (k) {
      add(k.p, k.e, k.level / (1 + distance(k) / 5));
    });
    active.forEach(function (e) { add(-0.1, 0.9, 0.25); });
    var loud = PG.clamp(sw / 2, 0, 1);
    var p = sw ? sp / sw : 0, e = sw ? se / sw : -1;
    if (ui.anc.checked) { p += 0.25; e -= 0.45; }
    e = e * 0.8 + (loud - 0.5) * 0.5; // a louder mix also feels more eventful
    return { p: PG.clamp(p, -1, 1), e: PG.clamp(e, -1, 1) };
  }

  function quadrant(p, e) {
    return p >= 0 ? (e >= 0 ? 0 : 1) : (e >= 0 ? 3 : 2);
  }

  function newGoal() {
    var cur = quadrant(readMood().p, readMood().e), opts = [0, 1, 2, 3].filter(function (q) { return q !== cur; });
    goal = PG.any(opts);
    heldFor = 0;
    won = false;
    showGoal();
  }

  function showGoal() {
    ui.goal.textContent = '';
    ui.goal.appendChild(el('strong', '', T.challenge + ': '));
    ui.goal.appendChild(document.createTextNode(won ? T.done + ' ' : T.goal + ' '));
    if (!won) ui.goal.appendChild(el('em', '', T.q[goal].toLowerCase() + '. '));
    if (!won) ui.goal.appendChild(el('span', 'sc-hint', T.hold));
    if (won) {
      var n = el('button', 'btn btn-sm btn-link p-0', T.next);
      n.type = 'button';
      n.addEventListener('click', newGoal);
      ui.goal.appendChild(n);
    }
  }

  function drawCompass() {
    var v = compassView || (compassView = PG.fitCanvas(ui.compass, 1));
    var g = v.g, s = v.w, c = s / 2, r = s / 2 - 16;
    var css = getComputedStyle(root);
    var ink = css.getPropertyValue('--global-text-color').trim() || '#333';
    var soft = css.getPropertyValue('--global-text-color-light').trim() || '#888';
    var accent = css.getPropertyValue('--global-theme-color').trim() || '#2698ba';
    g.clearRect(0, 0, s, s);
    if (goal !== null && !won) {
      g.fillStyle = accent;
      g.globalAlpha = 0.16;
      var qx = goal === 0 || goal === 1 ? c : c - r, qy = goal === 0 || goal === 3 ? c - r : c;
      g.fillRect(qx, qy, r, r);
      g.globalAlpha = 1;
    }
    g.strokeStyle = soft;
    g.lineWidth = 1;
    g.beginPath();
    g.moveTo(c - r, c); g.lineTo(c + r, c);
    g.moveTo(c, c - r); g.lineTo(c, c + r);
    g.stroke();
    g.fillStyle = soft;
    g.font = '10px system-ui, sans-serif';
    g.textAlign = 'center';
    g.fillText(T.axes[2], c, 10);
    g.fillText(T.axes[3], c, s - 3);
    g.textAlign = 'right';
    g.fillText(T.axes[0], s - 1, c - 4);
    g.textAlign = 'left';
    g.fillText(T.axes[1], 1, c - 4);
    g.fillStyle = ink;
    g.font = '11px system-ui, sans-serif';
    g.textAlign = 'center';
    g.fillText(T.q[0], c + r / 2, c - r / 2);
    g.fillText(T.q[1], c + r / 2, c + r / 2);
    g.fillText(T.q[2], c - r / 2, c + r / 2);
    g.fillText(T.q[3], c - r / 2, c - r / 2);
    g.fillStyle = accent;
    g.beginPath();
    g.arc(c + mood.p * r, c - mood.e * r, 7, 0, 7);
    g.fill();
    g.strokeStyle = '#fff';
    g.lineWidth = 2;
    g.stroke();
  }
  var compassView = null;

  // ---------- drawing the place

  function X(x) { return (x + W) / (2 * W) * view.w; }
  function Y(y) { return (y + H) / (2 * H) * view.h; }
  function S(m) { return m / (2 * W) * view.w; }

  function tree(g, x, y, r, c) {
    g.fillStyle = 'rgba(0,0,0,.22)';
    g.beginPath(); g.arc(X(x) + 3, Y(y) + 4, S(r), 0, 7); g.fill();
    g.fillStyle = c;
    g.beginPath(); g.arc(X(x), Y(y), S(r), 0, 7); g.fill();
    g.fillStyle = 'rgba(255,255,255,.08)';
    g.beginPath(); g.arc(X(x) - S(r) * 0.3, Y(y) - S(r) * 0.3, S(r) * 0.5, 0, 7); g.fill();
  }

  var seeded = {};
  function dots(key, n) {
    if (!seeded[key]) {
      var s = 1, a = [];
      for (var i = 0; i < key.length; i++) s += key.charCodeAt(i) * 31;
      for (var j = 0; j < n; j++) {
        s = (s * 16807) % 2147483647; var u = s / 2147483647;
        s = (s * 16807) % 2147483647; var v = s / 2147483647;
        s = (s * 16807) % 2147483647; var w = s / 2147483647;
        a.push([u, v, w]);
      }
      seeded[key] = a;
    }
    return seeded[key];
  }

  var PAINT = {
    forest: function (g, t) {
      g.fillStyle = '#20392a'; g.fillRect(0, 0, view.w, view.h);
      g.strokeStyle = '#4a8fa8'; g.lineWidth = S(1.3); g.lineCap = 'round';
      g.beginPath(); g.moveTo(X(8), Y(-H - 1));
      g.bezierCurveTo(X(4), Y(-3), X(10), Y(1), X(6.5), Y(H + 1)); g.stroke();
      dots('forest', 26).forEach(function (d) {
        var x = -W + d[0] * 2 * W, y = -H + d[1] * 2 * H;
        if (Math.hypot(x, y) < 3.2) return;
        tree(g, x, y, 0.8 + d[2] * 1.1, d[2] > 0.5 ? '#2f5a3d' : '#3a6b47');
      });
    },
    park: function (g) {
      g.fillStyle = '#4c7f4f'; g.fillRect(0, 0, view.w, view.h);
      g.strokeStyle = '#c9b892'; g.lineWidth = S(1.1);
      g.beginPath(); g.moveTo(X(-W), Y(3)); g.bezierCurveTo(X(-3), Y(-3), X(3), Y(5), X(W), Y(-2)); g.stroke();
      g.fillStyle = '#6aa9c4'; g.beginPath(); g.ellipse(X(6), Y(-3.8), S(2.6), S(1.7), 0, 0, 7); g.fill();
      g.fillStyle = '#b9925e'; g.fillRect(X(-9.5), Y(1.8), S(4.2), S(3));
      dots('park', 11).forEach(function (d) {
        var x = -W + d[0] * 2 * W, y = -H + d[1] * 2 * H;
        if (Math.hypot(x, y) < 3 || Math.hypot(x - 6, y + 3.8) < 3.4) return;
        tree(g, x, y, 0.9 + d[2], '#356b42');
      });
    },
    street: function (g) {
      g.fillStyle = '#b6aea1'; g.fillRect(0, 0, view.w, view.h);
      g.strokeStyle = 'rgba(0,0,0,.09)'; g.lineWidth = 1;
      for (var x = -W; x < W; x += 1.2) { g.beginPath(); g.moveTo(X(x), Y(-H)); g.lineTo(X(x), Y(H)); g.stroke(); }
      for (var y = -H; y < H; y += 1.2) { g.beginPath(); g.moveTo(X(-W), Y(y)); g.lineTo(X(W), Y(y)); g.stroke(); }
      var fronts = ['#a65d4e', '#c79a4b', '#5d7f8c', '#8a6d9a', '#6f8f62', '#b4745a'];
      for (var i = 0; i < 6; i++) {
        g.fillStyle = fronts[i]; g.fillRect(X(-W + i * 4), Y(-H), S(3.8), S(2.1));
        g.fillStyle = fronts[(i + 3) % 6]; g.fillRect(X(-W + i * 4), Y(H - 2.1), S(3.8), S(2.1));
      }
    },
    city: function (g) {
      g.fillStyle = '#6f7378'; g.fillRect(0, 0, view.w, view.h);
      g.fillStyle = '#3c4046'; g.fillRect(0, Y(-3.8), view.w, S(7.6));
      g.strokeStyle = '#e8e2c8'; g.lineWidth = 2; g.setLineDash([S(1.4), S(1.2)]);
      g.beginPath(); g.moveTo(0, Y(0)); g.lineTo(view.w, Y(0)); g.stroke(); g.setLineDash([]);
      g.fillStyle = '#4b4f58';
      for (var i = 0; i < 6; i++) {
        g.fillRect(X(-W + i * 4 + 0.2), Y(-H), S(3.6), S(2.2));
        g.fillRect(X(-W + i * 4 + 0.2), Y(H - 2.2), S(3.6), S(2.2));
      }
    },
    beach: function (g, t) {
      g.fillStyle = '#e4cf9f'; g.fillRect(0, 0, view.w, view.h);
      var edge = -1.5 + Math.sin(t / 2600) * 0.7;
      g.fillStyle = '#3d8fb0'; g.fillRect(0, 0, view.w, Y(edge));
      g.fillStyle = 'rgba(255,255,255,.55)'; g.fillRect(0, Y(edge) - 2, view.w, 4);
      g.fillStyle = 'rgba(255,255,255,.18)'; g.fillRect(0, Y(edge - 2.4 + Math.sin(t / 1900)), view.w, 3);
    },
    rain: function (g, t) {
      g.fillStyle = '#39424c'; g.fillRect(0, 0, view.w, view.h);
      dots('rainroofs', 8).forEach(function (d, i) {
        g.fillStyle = i % 2 ? '#454f5a' : '#4e5965';
        g.fillRect(X(-W + i * 3), Y(-H + d[1] * 3), S(2.8), S(3 + d[2] * 3));
      });
      if (!PG.still) {
        g.strokeStyle = 'rgba(200,220,240,.32)'; g.lineWidth = 1;
        dots('rain', 70).forEach(function (d) {
          var x = d[0] * view.w, y = (d[1] * view.h + t * (0.3 + d[2] * 0.25)) % view.h;
          g.beginPath(); g.moveTo(x, y); g.lineTo(x - 1, y + 9); g.stroke();
        });
      }
    },
    cafe: function (g) {
      g.fillStyle = '#6b4f3d'; g.fillRect(0, 0, view.w, view.h);
      g.strokeStyle = 'rgba(0,0,0,.14)'; g.lineWidth = 1;
      for (var y = -H; y < H; y += 1.4) { g.beginPath(); g.moveTo(0, Y(y)); g.lineTo(view.w, Y(y)); g.stroke(); }
      g.fillStyle = '#3e2c21'; g.fillRect(0, 0, view.w, S(1.6));
      dots('cafe', 9).forEach(function (d, i) {
        var x = -9 + (i % 3) * 9, y = -3.5 + Math.floor(i / 3) * 4;
        if (Math.hypot(x, y) < 2.5) return;
        g.fillStyle = '#c8a97e'; g.beginPath(); g.arc(X(x), Y(y), S(1.1), 0, 7); g.fill();
      });
    },
  };

  function draw(time) {
    if (!view) return;
    var g = view.g, t = time || 0;
    (PAINT[theme.paint] || PAINT.park)(g, t);

    ripples.forEach(function (r) {
      g.strokeStyle = r.c;
      g.globalAlpha = Math.max(0, 1 - r.t / 1.2);
      g.lineWidth = 2;
      g.beginPath();
      g.arc(X(r.x), Y(r.y), 8 + r.t * 44, 0, 7);
      g.stroke();
      g.globalAlpha = 1;
    });

    g.font = '11px system-ui, sans-serif';
    g.textAlign = 'center';
    tokens.forEach(function (k) {
      var px = X(k.x), py = Y(k.y), size = 9 + k.level * 9, lv = 0;
      if (k.node) {
        k.node.meter.getByteTimeDomainData(k.node.buf);
        for (var i = 0; i < 128; i += 4) lv = Math.max(lv, Math.abs(k.node.buf[i] - 128));
        lv = lv / 128;
      }
      k.glow = (k.glow || 0) * 0.82 + lv * 0.18;
      g.strokeStyle = k.c;
      g.globalAlpha = 0.65;
      g.lineWidth = 2;
      g.beginPath();
      g.arc(px, py, size + 3 + k.glow * 46, 0, 7);
      g.stroke();
      g.globalAlpha = 1;
      g.fillStyle = k.c;
      g.beginPath();
      g.arc(px, py, size, 0, 7);
      g.fill();
      g.lineWidth = k === selected ? 3 : 1.5;
      g.strokeStyle = k === selected ? '#fff' : 'rgba(0,0,0,.4)';
      g.stroke();
      label(g, k.name, px, py + size + 13);
    });

    active.forEach(function (e) {
      g.fillStyle = e.glyph;
      g.beginPath();
      g.arc(X(e.x), Y(e.y), 7, 0, 7);
      g.fill();
      label(g, e.label, X(e.x), Y(e.y) - 12);
    });

    // the listener: a head with a nose, so left and right make sense
    var hx = X(me.x), hy = Y(me.y);
    g.save();
    g.translate(hx, hy);
    g.rotate(me.h);
    g.fillStyle = 'rgba(255,255,255,.14)';
    g.beginPath();
    g.moveTo(0, 0);
    g.arc(0, 0, 44, -Math.PI / 2 - 0.6, -Math.PI / 2 + 0.6);
    g.closePath();
    g.fill();
    g.fillStyle = '#fff';
    g.strokeStyle = '#222';
    g.lineWidth = 2;
    g.beginPath(); g.moveTo(-5, -11); g.lineTo(0, -19); g.lineTo(5, -11); g.closePath(); g.fill(); g.stroke();
    g.beginPath(); g.arc(0, 0, 12, 0, 7); g.fill(); g.stroke();
    g.fillStyle = '#222';
    g.fillRect(-15, -4, 4, 8);
    g.fillRect(11, -4, 4, 8);
    g.restore();
    label(g, T.you, hx, hy + 27);

    drawCompass();
  }

  function label(g, text, x, y) {
    var w = g.measureText(text).width + 8;
    g.fillStyle = 'rgba(0,0,0,.55)';
    g.fillRect(x - w / 2, y - 10, w, 14);
    g.fillStyle = '#fff';
    g.fillText(text, x, y + 1);
  }

  function loop(time) {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(loop);
    var now = time || 0, dt = Math.min(0.1, (now - last) / 1000 || 0);
    last = now;

    if (walking && !drag) {
      walkT += dt * 0.11;
      var nx = Math.sin(walkT) * 8.5, ny = Math.sin(walkT * 2.1) * 4.2;
      me.h = Math.atan2(nx - me.x, -(ny - me.y));
      me.x = nx;
      me.y = ny;
      setListener();
      tokens.forEach(shape);
    }

    active = active.filter(function (e) {
      e.t += dt;
      if (e.pass) {
        e.x += (e.x1 - (-e.x1)) * dt / e.dur;
        setPos(e.pan, e.x, e.y);
        e.air.frequency.setTargetAtTime(PG.clamp(19000 / (1 + Math.hypot(e.x - me.x, e.y - me.y) * 0.16), 3000, 19000), ctx.currentTime, 0.1);
      }
      return e.t < e.dur;
    });
    ripples = ripples.filter(function (r) { r.t += dt; return r.t < 1.2; });

    var m = readMood();
    mood.p += (m.p - mood.p) * 0.05;
    mood.e += (m.e - mood.e) * 0.05;
    if (!won && goal !== null) {
      heldFor = quadrant(mood.p, mood.e) === goal ? heldFor + dt : 0;
      if (heldFor >= 3) { won = true; showGoal(); ripples.push({ x: me.x, y: me.y, t: 0, c: '#fff' }); }
    }
    draw(now);
  }

  // ---------- interaction

  function hit(px, py) {
    var best = null, bd = 30;
    if (Math.hypot(px - X(me.x), py - Y(me.y)) < 24) return me;
    tokens.forEach(function (k) {
      var d = Math.hypot(px - X(k.x), py - Y(k.y));
      if (d < bd) { bd = d; best = k; }
    });
    return best;
  }

  function point(e) {
    var r = ui.canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  function move(obj, px, py) {
    obj.x = PG.clamp(px / view.w * 2 * W - W, -W + 0.4, W - 0.4);
    obj.y = PG.clamp(py / view.h * 2 * H - H, -H + 0.4, H - 0.4);
    if (obj === me) {
      setListener();
      tokens.forEach(shape);
    } else {
      shape(obj);
    }
    if (!playing) draw();
  }

  ui.canvas.addEventListener('pointerdown', function (e) {
    var p = point(e), h = hit(p.x, p.y);
    if (!h) return;
    drag = h;
    e.preventDefault();
    ui.canvas.setPointerCapture(e.pointerId);
    if (h !== me) { selected = h; markRow(); }
    if (!playing) draw();
  });
  ui.canvas.addEventListener('pointermove', function (e) {
    if (!drag) return;
    var p = point(e);
    move(drag, p.x, p.y);
  });
  function drop() {
    if (drag) { drag = null; saveHash(); }
  }
  ui.canvas.addEventListener('pointerup', drop);
  ui.canvas.addEventListener('pointercancel', drop);
  ui.canvas.addEventListener('keydown', function (e) {
    var step = 0.7, k = e.key;
    if (k === 'ArrowLeft') me.x -= step;
    else if (k === 'ArrowRight') me.x += step;
    else if (k === 'ArrowUp') me.y -= step;
    else if (k === 'ArrowDown') me.y += step;
    else if (k === 'q' || k === 'Q') me.h -= 0.3;
    else if (k === 'e' || k === 'E') me.h += 0.3;
    else return;
    e.preventDefault();
    me.x = PG.clamp(me.x, -W + 0.4, W - 0.4);
    me.y = PG.clamp(me.y, -H + 0.4, H - 0.4);
    setListener();
    tokens.forEach(shape);
    if (!playing) draw();
  });
  ui.canvas.addEventListener('wheel', function (e) {
    if (!playing) return;
    e.preventDefault();
    me.h += e.deltaY * 0.004;
    setListener();
  }, { passive: false });

  function markRow() {
    Array.prototype.forEach.call(ui.list.children, function (r, i) {
      r.classList.toggle('active', tokens[i] === selected);
    });
  }

  function renderList() {
    ui.list.textContent = '';
    tokens.forEach(function (k) {
      var row = el('div', 'sc-row');
      var dot = el('span', 'sc-dot');
      dot.style.background = k.c;
      var name = el('label', '', k.name);
      var r = el('input');
      r.type = 'range'; r.min = 0; r.max = 1; r.step = 0.01; r.value = k.level;
      r.setAttribute('aria-label', k.name);
      r.addEventListener('input', function () {
        k.level = +r.value;
        if (k.node) k.node.level.gain.setTargetAtTime(k.level * k.trim, ctx.currentTime, 0.05);
        if (!playing) draw();
      });
      r.addEventListener('change', saveHash);
      var x = el('button', 'sc-x', '×');
      x.type = 'button';
      x.title = T.remove;
      x.setAttribute('aria-label', T.remove + ' ' + k.name);
      x.addEventListener('click', function () {
        silence(k);
        tokens.splice(tokens.indexOf(k), 1);
        if (selected === k) selected = null;
        renderList();
        renderTray();
        saveHash();
        if (!playing) draw();
      });
      row.appendChild(dot); row.appendChild(name); row.appendChild(r); row.appendChild(x);
      ui.list.appendChild(row);
    });
    markRow();
  }

  function renderTray() {
    ui.tray.textContent = '';
    Object.keys(data.sounds).forEach(function (id) {
      var s = data.sounds[id];
      if (s.bed || s.shot) return;
      if (tokens.some(function (k) { return k.id === id; })) return;
      var b = el('button', 'sc-chip', '+ ' + PG.pick(s.n));
      b.type = 'button';
      b.addEventListener('click', function () { addSound(id); });
      ui.tray.appendChild(b);
    });
  }

  function addSound(id, x, y, level) {
    var a = PG.rnd(0, 6.28), k = tokenFor(id, x === undefined ? PG.clamp(me.x + Math.cos(a) * 4.5, -W + 1, W - 1) : x, y === undefined ? PG.clamp(me.y + Math.sin(a) * 3.5, -H + 1, H - 1) : y, level === undefined ? 0.6 : level);
    tokens.push(k);
    selected = k;
    renderList();
    renderTray();
    saveHash();
    if (playing && scene) {
      return PG.load(data.sounds[id].f).then(function (b) { if (playing && scene && tokens.indexOf(k) >= 0) voice(k, b); });
    }
    draw();
  }

  function renderEvents() {
    ui.events.textContent = '';
    theme.ev.forEach(function (ev) {
      var s = data.sounds[ev.s[0]];
      var b = el('button', 'btn btn-sm btn-outline-primary', PG.pick(ev.n || s.n));
      b.type = 'button';
      b.addEventListener('click', function () {
        if (!playing) { play(); setTimeout(function () { fire(ev, true); }, 900); return; }
        fire(ev, true);
      });
      ui.events.appendChild(b);
    });
  }

  function surprise() {
    var pool = Object.keys(data.sounds).filter(function (id) {
      var s = data.sounds[id];
      return !s.bed && !s.shot && !tokens.some(function (k) { return k.id === id; });
    });
    tokens.forEach(function (k) {
      k.x = PG.rnd(-W + 2, W - 2);
      k.y = PG.rnd(-H + 1.5, H - 1.5);
      k.level = PG.rnd(0.25, 0.9);
      if (k.node) k.node.level.gain.setTargetAtTime(k.level * k.trim, ctx.currentTime, 0.3);
      shape(k);
    });
    renderList();
    if (pool.length) addSound(PG.any(pool), PG.rnd(-W + 2, W - 2), PG.rnd(-H + 1.5, H - 1.5), PG.rnd(0.4, 0.8));
    if (!playing) draw();
  }

  // ---------- sharing a mix through the URL

  function saveHash() {
    var parts = tokens.map(function (k) {
      return [k.id, Math.round(k.x * 10), Math.round(k.y * 10), Math.round(k.level * 100)].join(',');
    });
    try {
      history.replaceState(null, '', '#mix=' + theme.id + ';' + parts.join(';'));
    } catch (e) { /* some embedded browsers refuse */ }
  }

  function loadHash() {
    var m = /^#mix=([a-z]+);?(.*)$/.exec(location.hash);
    if (!m || !themeById(m[1])) return false;
    var list = m[2].split(';').filter(Boolean).map(function (p) {
      var a = p.split(',');
      return data.sounds[a[0]] ? tokenFor(a[0], PG.clamp(a[1] / 10, -W, W), PG.clamp(a[2] / 10, -H, H), PG.clamp(a[3] / 100, 0, 1)) : null;
    }).filter(Boolean);
    setTheme(m[1], list);
    return true;
  }

  // ---------- start up

  function credits() {
    var ul = el('ul');
    data.credits.forEach(function (c) {
      var li = el('li');
      var a = el('a', '', c.title);
      a.href = c.url;
      a.rel = 'noopener';
      li.appendChild(a);
      li.appendChild(document.createTextNode(' by ' + c.by + ', ' + c.lic));
      ul.appendChild(li);
    });
    ui.credits.appendChild(ul);
  }

  PG.json('soundscape.json').then(function (d) {
    data = d;
    view = PG.fitCanvas(ui.canvas, H / W);
    data.themes.forEach(function (t) {
      var b = el('button', 'sc-theme', PG.pick(t.n));
      b.type = 'button';
      b.dataset.id = t.id;
      b.addEventListener('click', function () { setTheme(t.id); });
      ui.themes.appendChild(b);
    });
    credits();
    if (!loadHash()) setTheme(data.themes[0].id);
    ui.start.textContent = T.enter;
    ui.start.disabled = false;
  });

  ui.start.addEventListener('click', play);
  ui.stopBtn.addEventListener('click', halt);
  ui.anc.addEventListener('change', applyAnc);
  ui.bed.addEventListener('input', function () {
    if (scene) scene.bed.gain.setTargetAtTime(+ui.bed.value, ctx.currentTime, 0.05);
  });
  ui.walk.addEventListener('click', function () {
    if (!playing) play();
    walking = !walking;
    ui.walk.textContent = walking ? T.stopWalk : T.walk;
  });
  ui.surprise.addEventListener('click', surprise);
  ui.copy.addEventListener('click', function () {
    saveHash();
    var done = function () {
      ui.copy.textContent = T.copied;
      setTimeout(function () { ui.copy.textContent = T.copy; }, 1500);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(done, done);
    else done();
  });
  window.addEventListener('resize', function () {
    if (!data) return;
    view = PG.fitCanvas(ui.canvas, H / W);
    compassView = null;
    draw();
  });
})();
