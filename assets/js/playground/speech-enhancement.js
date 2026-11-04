// "Catch the sentence": guess what was said in noise, then flip enhancement on and see what a
// speech recogniser heard. Clips and scores come from _scripts/playground/build_speech.py.
(function () {
  'use strict';

  var root = document.getElementById('sp');
  if (!root || !window.PG) return;
  var PG = window.PG;
  var el = PG.el;
  var T = {
    en: {
      round: 'Round', of: 'of', play: 'Play', stop: 'Stop', loading: 'Loading…', enh: 'Enhancement', off: 'Off', on: 'On',
      ask: 'What did they say?', skip: 'Skip the game and just play with the switch', right: 'You caught it.', wrong: 'Not quite.',
      said: 'They said', heard: 'What the machine heard', noisy: 'In the noise', clean: 'Clean speech', next: 'Next sentence', again: 'Play again',
      you: 'You', machine: 'Machine', lessonHelp: 'One enhancer rescued most of the sentence for the machine. Now look at what the other one did.',
      lessonHurt: 'Here is the twist. The enhanced clip scores better and sounds cleaner, and the machine understood it worse.',
      snr: 'speech is', louder: 'dB louder than the noise', quieter: 'dB quieter than the noise', equal: 'speech and noise are equally loud',
      end: 'Final score', metric: 'PESQ and STOI estimate how good speech sounds and how intelligible it is. They do not check whether the words are still the same words.',
      overall: "These rounds were picked because they are fun, so here is the honest average. Over all {n} mixes I tested, MetricGAN+ raised PESQ from {p0} to {p1} while Whisper's word error rate went from {w0}% to {w1}%. DeepFilterNet landed at {w2}%. Same conclusion as the paper, from a different dataset and a different recogniser.",
    },
    id: {
      round: 'Ronde', of: 'dari', play: 'Putar', stop: 'Berhenti', loading: 'Memuat…', enh: 'Peningkatan', off: 'Mati', on: 'Nyala',
      ask: 'Apa yang dia katakan?', skip: 'Lewati permainan, langsung main sakelar', right: 'Kamu berhasil menangkapnya.', wrong: 'Belum tepat.',
      said: 'Yang diucapkan', heard: 'Yang didengar mesin', noisy: 'Dalam noise', clean: 'Ucapan bersih', next: 'Kalimat berikutnya', again: 'Main lagi',
      you: 'Kamu', machine: 'Mesin', lessonHelp: 'Satu peningkat menyelamatkan sebagian besar kalimat ini bagi mesin. Sekarang lihat apa yang dilakukan yang satunya.',
      lessonHurt: 'Ini kejutannya. Klip yang ditingkatkan mendapat skor lebih baik dan terdengar lebih bersih, tetapi mesin justru lebih salah memahaminya.',
      snr: 'ucapan', louder: 'dB lebih keras dari noise', quieter: 'dB lebih pelan dari noise', equal: 'ucapan dan noise sama kerasnya',
      end: 'Skor akhir', metric: 'PESQ dan STOI memperkirakan seberapa baik ucapan terdengar dan seberapa jelas dimengerti. Keduanya tidak memeriksa apakah kata-katanya masih sama.',
      overall: 'Ronde-ronde ini dipilih karena seru, jadi inilah rata-rata jujurnya. Dari semua {n} campuran yang saya uji, MetricGAN+ menaikkan PESQ dari {p0} ke {p1}, sementara word error rate Whisper naik dari {w0}% ke {w1}%. DeepFilterNet berada di {w2}%. Kesimpulannya sama dengan makalah, dari dataset dan pengenal ucapan yang berbeda.',
    },
  }[PG.lang];

  var ENH = { dfn: 'DeepFilterNet', mgan: 'MetricGAN+' };
  var ui = {
    head: root.querySelector('.sp-head'),
    base: root.querySelector('#sp-base'),
    over: root.querySelector('#sp-over'),
    head2: root.querySelector('.sp-playhead'),
    play: root.querySelector('#sp-play'),
    sw: root.querySelector('#sp-switch'),
    swLabel: root.querySelector('.sp-switch-label'),
    pills: root.querySelector('.sp-pills'),
    ask: root.querySelector('.sp-ask'),
    result: root.querySelector('.sp-result'),
  };

  var rounds = [], summary = null, i = 0, r = null, bufs = {}, enhancer = 'dfn', unlocked = false, showClean = false;
  var ctx = null, voices = null, t0 = 0, dur = 1, raf = 0, you = 0, machine = 0, ready = null;

  function file(tag, ext) {
    return 'speech/' + r.id + '-' + tag + '.' + ext;
  }

  function current() {
    if (showClean) return 'clean';
    return ui.sw.checked ? enhancer : 'noisy';
  }

  // Every version plays at once from the same instant. The switch only moves gains, so you
  // hear the same moment of the sentence before and after.
  function route() {
    var tag = current();
    ui.over.src = PG.base + file(tag, 'webp');
    ui.over.style.opacity = tag === 'noisy' ? 0 : 1;
    ui.swLabel.textContent = T.enh + ': ' + (ui.sw.checked ? T.on : T.off);
    if (!voices) return;
    var t = ctx.currentTime;
    Object.keys(voices).forEach(function (k) {
      voices[k].g.gain.cancelScheduledValues(t);
      voices[k].g.gain.setTargetAtTime(k === tag ? 1 : 0, t, 0.01);
    });
  }

  function halt() {
    if (!voices) return;
    var v = voices;
    voices = null;
    Object.keys(v).forEach(function (k) {
      v[k].g.gain.setTargetAtTime(0, ctx.currentTime, 0.02);
      try { v[k].s.stop(ctx.currentTime + 0.1); } catch (e) { /* stopped */ }
    });
    PG.release('sp');
    cancelAnimationFrame(raf);
    ui.head2.style.opacity = 0;
    ui.play.textContent = T.play;
  }

  function tick() {
    if (!voices) return;
    var p = ((ctx.currentTime - t0) % dur) / dur;
    ui.head2.style.left = p * 100 + '%';
    raf = requestAnimationFrame(tick);
  }

  function start() {
    ctx = PG.audio();
    PG.claim('sp', halt);
    voices = {};
    t0 = ctx.currentTime + 0.08;
    var out = ctx.createGain();
    out.gain.value = 0.9;
    out.connect(ctx.destination);
    Object.keys(bufs).forEach(function (k) {
      var s = ctx.createBufferSource(), g = ctx.createGain();
      s.buffer = bufs[k];
      s.loop = true;
      s.loopEnd = dur;
      g.gain.value = 0;
      s.connect(g);
      g.connect(out);
      s.start(t0);
      voices[k] = { s: s, g: g };
    });
    route();
    ui.play.textContent = T.stop;
    ui.head2.style.opacity = 1;
    tick();
  }

  function pill(label, on, click, locked) {
    var b = el('button', 'sp-pill' + (on ? ' active' : ''), label);
    b.type = 'button';
    b.disabled = !!locked;
    b.setAttribute('aria-pressed', !!on);
    b.addEventListener('click', click);
    return b;
  }

  function renderPills() {
    ui.pills.textContent = '';
    Object.keys(ENH).forEach(function (k) {
      ui.pills.appendChild(pill(ENH[k], enhancer === k && !showClean, function () {
        enhancer = k;
        showClean = false;
        ui.sw.checked = true;
        renderPills();
        route();
      }, !unlocked));
    });
    ui.pills.appendChild(pill(T.clean, showClean, function () {
      showClean = !showClean;
      renderPills();
      route();
    }, !unlocked));
  }

  function unlock() {
    unlocked = true;
    ui.sw.disabled = false;
    renderPills();
  }

  function snrText(s) {
    if (s === 0) return T.equal;
    return T.snr + ' ' + Math.abs(s) + ' ' + (s > 0 ? T.louder : T.quieter);
  }

  function show() {
    halt();
    r = rounds[i];
    unlocked = false;
    showClean = false;
    ui.sw.checked = false;
    ui.sw.disabled = true;
    ui.head.textContent = '';
    var score = el('span', 'sp-score', T.you + ' ' + you + ' · ' + T.machine + ' ' + machine);
    ui.head.appendChild(score);
    ui.head.appendChild(el('span', 'pg-count', T.round + ' ' + (i + 1) + ' ' + T.of + ' ' + rounds.length));
    ui.head.appendChild(el('strong', '', PG.pick(r.noise) + ', ' + snrText(r.snr)));
    ui.base.src = PG.base + file('noisy', 'webp');
    ui.over.src = PG.base + file('noisy', 'webp');
    ui.over.style.opacity = 0;
    renderPills();
    route();
    ui.result.hidden = true;
    ui.result.textContent = '';
    ui.ask.hidden = false;
    ui.ask.textContent = '';
    ui.ask.appendChild(el('span', 'sp-ask-q', T.ask));
    r.choices.slice().sort(function () { return Math.random() - 0.5; }).forEach(function (c) {
      var b = el('button', 'btn btn-sm btn-outline-primary', c);
      b.type = 'button';
      b.addEventListener('click', function () { guess(c); });
      ui.ask.appendChild(b);
    });
    var skip = el('button', 'btn btn-sm btn-link p-0 sp-skip', T.skip);
    skip.type = 'button';
    skip.addEventListener('click', function () { guess(null); });
    ui.ask.appendChild(skip);
    bufs = {};
    ui.play.disabled = true;
    ui.play.textContent = T.loading;
    var mine = r;
    ready = Promise.all(['noisy', 'dfn', 'mgan', 'clean'].map(function (t) {
      return PG.load(file(t, 'mp3')).then(function (b) { return [t, b]; });
    })).then(function (list) {
      if (mine !== r) return;
      list.forEach(function (x) { bufs[x[0]] = x[1]; });
      dur = Math.min.apply(null, list.map(function (x) { return x[1].duration; }));
      ui.play.disabled = false;
      ui.play.textContent = T.play;
    });
  }

  // Marks the words a transcript got wrong, using the longest common run of words.
  function marked(text) {
    var a = r.truth.toLowerCase().split(' '), b = text.toLowerCase().split(' ');
    var m = [];
    for (var x = 0; x <= a.length; x++) { m.push(new Array(b.length + 1).fill(0)); }
    for (var p = a.length - 1; p >= 0; p--) {
      for (var q = b.length - 1; q >= 0; q--) {
        m[p][q] = a[p] === b[q] ? m[p + 1][q + 1] + 1 : Math.max(m[p + 1][q], m[p][q + 1]);
      }
    }
    var keep = {}, u = 0, w = 0;
    while (u < a.length && w < b.length) {
      if (a[u] === b[w]) { keep[w] = 1; u++; w++; } else if (m[u + 1][w] >= m[u][w + 1]) { u++; } else { w++; }
    }
    var dd = el('dd');
    b.forEach(function (word, n) {
      dd.appendChild(keep[n] ? document.createTextNode(word) : el('span', 'sp-wrong', word));
      dd.appendChild(document.createTextNode(' '));
    });
    return dd;
  }

  function line(dl, name, text) {
    dl.appendChild(el('dt', '', name));
    dl.appendChild(marked(text));
  }

  function stat(name, tag) {
    var row = el('div', 'im-score');
    row.appendChild(el('span', 'im-score-name', name));
    row.appendChild(el('span', '', 'PESQ ' + r.pesq[tag]));
    row.appendChild(el('span', '', 'STOI ' + r.stoi[tag]));
    row.appendChild(el('span', '', 'WER ' + Math.round(r.wer[tag] * 100) + '%'));
    return row;
  }

  function overall() {
    var a = summary.all;
    return T.overall
      .replace('{n}', summary.n)
      .replace('{p0}', a.noisy.pesq).replace('{p1}', a.mgan.pesq)
      .replace('{w0}', Math.round(a.noisy.wer * 100)).replace('{w1}', Math.round(a.mgan.wer * 100))
      .replace('{w2}', Math.round(a.dfn.wer * 100));
  }

  function guess(c) {
    if (c !== null) {
      if (c === r.truth) you += 1;
      if (r.wer.noisy === 0) machine += 1;
    }
    unlock();
    ui.ask.hidden = true;
    ui.result.hidden = false;
    ui.result.textContent = '';
    if (c !== null) ui.result.appendChild(el('p', 'im-verdict', c === r.truth ? T.right : T.wrong));
    var said = el('p');
    said.appendChild(el('strong', '', T.said + ': '));
    said.appendChild(document.createTextNode(r.truth));
    ui.result.appendChild(said);
    ui.result.appendChild(el('p', 'sc-hint', T.heard));
    var dl = el('dl', 'sp-heard');
    line(dl, T.noisy, r.asr.noisy);
    line(dl, ENH.dfn, r.asr.dfn);
    line(dl, ENH.mgan, r.asr.mgan);
    ui.result.appendChild(dl);
    ui.result.appendChild(stat(T.noisy, 'noisy'));
    ui.result.appendChild(stat(ENH.dfn, 'dfn'));
    ui.result.appendChild(stat(ENH.mgan, 'mgan'));
    ui.result.appendChild(el('p', 'im-lesson', r.kind === 'hurt' ? T.lessonHurt : T.lessonHelp));
    var last = i === rounds.length - 1;
    if (last) {
      ui.result.appendChild(el('p', 'im-lesson', T.end + ': ' + T.you + ' ' + you + ', ' + T.machine + ' ' + machine + '. ' + T.metric));
      ui.result.appendChild(el('p', 'im-lesson', overall()));
    }
    var n = el('button', 'btn btn-sm btn-primary', last ? T.again : T.next);
    n.type = 'button';
    n.addEventListener('click', function () {
      if (last) { i = 0; you = 0; machine = 0; } else { i += 1; }
      show();
    });
    ui.result.appendChild(n);
  }

  ui.play.addEventListener('click', function () {
    if (voices) { halt(); return; }
    ready.then(start);
  });
  ui.sw.addEventListener('change', function () {
    showClean = false;
    renderPills();
    route();
  });

  PG.json('speech/rounds.json').then(function (d) {
    rounds = d.rounds;
    summary = d;
    show();
  });
})();
