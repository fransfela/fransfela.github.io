// Shared helpers for the Playground demos: one AudioContext, a decoded-audio cache,
// "only one demo plays at a time", and the string table for both languages.
(function () {
  'use strict';

  var page = document.getElementById('pg');
  var lang = page && page.dataset.lang === 'id' ? 'id' : 'en';
  var base = page ? page.dataset.base : '/assets/playground/';
  var ctx = null;
  var cache = {};
  var owner = null;

  function audio() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      ctx = new AC({ latencyHint: 'playback' });
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  // Decodes once per URL, so switching back to a place is instant.
  function load(path) {
    if (!cache[path]) {
      cache[path] = fetch(base + path)
        .then(function (r) {
          if (!r.ok) throw new Error('Could not load ' + path);
          return r.arrayBuffer();
        })
        .then(function (b) {
          return new Promise(function (ok, no) {
            audio().decodeAudioData(b, ok, no);
          });
        });
    }
    return cache[path];
  }

  function json(path) {
    return fetch(base + path).then(function (r) {
      return r.json();
    });
  }

  // Starting one demo silences whichever other demo is playing.
  function claim(id, stop) {
    if (owner && owner.id !== id) owner.stop();
    owner = { id: id, stop: stop };
  }

  function release(id) {
    if (owner && owner.id === id) owner = null;
  }

  function pick(o) {
    return o && typeof o === 'object' ? o[lang] || o.en : o;
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  function fitCanvas(c, ratio) {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = c.clientWidth || 600;
    var h = Math.round(w * ratio);
    c.width = Math.round(w * dpr);
    c.height = Math.round(h * dpr);
    c.style.height = h + 'px';
    var g = c.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { g: g, w: w, h: h };
  }

  window.PG = {
    lang: lang,
    base: base,
    audio: audio,
    load: load,
    json: json,
    claim: claim,
    release: release,
    pick: pick,
    el: el,
    fitCanvas: fitCanvas,
    still: window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    rnd: function (a, b) {
      return a + Math.random() * (b - a);
    },
    any: function (a) {
      return a[Math.floor(Math.random() * a.length)];
    },
    clamp: function (v, a, b) {
      return Math.max(a, Math.min(b, v));
    },
  };
})();
