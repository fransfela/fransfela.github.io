// "You vs the metric": turn image enhancement on and off, vote blind, then see what PSNR preferred.
// All repairs were made offline with real models; see _scripts/playground/build_images.py.
(function () {
  'use strict';

  var root = document.getElementById('im');
  if (!root || !window.PG) return;
  var PG = window.PG;
  var el = PG.el;
  var T = {
    en: {
      round: 'Round', of: 'of', off: 'Off', on: 'On', enh: 'Enhancement', a: 'Repair A', b: 'Repair B', original: 'Original',
      ask: 'Which repair would you keep?', keep: 'Keep', you: 'You kept', metric: 'PSNR preferred', next: 'Next picture', again: 'Play again',
      agree: 'You and PSNR agree.', differ: 'You and PSNR disagree.', tally: 'You agreed with PSNR on', sharp: 'sharpness',
      end: 'Numbers measure closeness to the original. They do not measure whether a picture looks right, or whether it is still telling the truth.',
      drag: 'Drag across the picture, or use the switch. Hover to magnify.', dmg: 'Damaged',
    },
    id: {
      round: 'Ronde', of: 'dari', off: 'Mati', on: 'Nyala', enh: 'Peningkatan', a: 'Perbaikan A', b: 'Perbaikan B', original: 'Asli',
      ask: 'Perbaikan mana yang kamu simpan?', keep: 'Simpan', you: 'Kamu menyimpan', metric: 'PSNR memilih', next: 'Gambar berikutnya', again: 'Main lagi',
      agree: 'Kamu dan PSNR sepakat.', differ: 'Kamu dan PSNR tidak sepakat.', tally: 'Kamu sepakat dengan PSNR pada', sharp: 'ketajaman',
      end: 'Angka mengukur kedekatan dengan aslinya. Angka tidak mengukur apakah gambar terlihat benar, atau apakah gambar itu masih jujur.',
      drag: 'Geser di atas gambar, atau pakai sakelar. Arahkan kursor untuk memperbesar.', dmg: 'Rusak',
    },
  }[PG.lang];

  var TEXT = {
    kingfisher: {
      title: { en: 'A kingfisher in heavy noise', id: 'Raja udang dalam noise berat' },
      lesson: {
        en: 'Your eye and the metric usually agree on noise. Magnify the feathers though: the neural repair is clean partly because some real detail left with the noise.',
        id: 'Mata dan metrik biasanya sepakat soal noise. Tapi perbesar bulunya: perbaikan neural bersih sebagian karena detail asli ikut hilang bersama noise.',
      },
    },
    nyhavn: {
      title: { en: 'Nyhavn, Copenhagen, at a quarter of the size', id: 'Nyhavn, Kopenhagen, seperempat ukuran' },
      lesson: {
        en: 'Nearly a tie for PSNR, yet the two pictures look nothing alike. Now magnify the people and the shop signs, and compare them with the original.',
        id: 'Nyaris seri menurut PSNR, padahal kedua gambar sama sekali berbeda. Sekarang perbesar orang dan papan tokonya, lalu bandingkan dengan aslinya.',
      },
    },
    warung: {
      title: { en: 'A warung sign, barely readable', id: 'Papan warung, nyaris tak terbaca' },
      lesson: {
        en: 'Read the second line. The real sign says "Kacang Begula". The neural version is crisp and confident, and the letters are no longer the right ones. The peanuts in the photo became squiggles. Perceptually better, semantically worse.',
        id: 'Baca baris kedua. Papan aslinya bertuliskan "Kacang Begula". Versi neural tampak tajam dan yakin, tetapi hurufnya sudah bukan huruf yang benar. Kacang di fotonya berubah jadi coretan. Secara persepsi lebih baik, secara makna lebih buruk.',
      },
    },
    einstein: {
      title: { en: 'A famous face, at a quarter of the size', id: 'Wajah terkenal, seperempat ukuran' },
      lesson: {
        en: 'The neural version looks like a clean photograph, and PSNR still prefers the blur. Check the original: the skin, the wrinkles and the look in the eyes have been invented.',
        id: 'Versi neural terlihat seperti foto yang bersih, dan PSNR tetap memilih yang buram. Lihat aslinya: kulit, kerutan, dan tatapan matanya adalah hasil karangan.',
      },
    },
    ameya: {
      title: { en: 'Tokyo neon, crushed by JPEG', id: 'Neon Tokyo, hancur oleh JPEG' },
      lesson: {
        en: 'A good day for everyone: blocks gone, neon letters intact, and the metric agrees. Enhancement is not the villain. It just needs checking against what matters.',
        id: 'Hari yang baik untuk semua: kotak-kotak hilang, huruf neon utuh, dan metrik setuju. Peningkatan bukan penjahatnya. Ia hanya perlu dicek terhadap hal yang penting.',
      },
    },
  };

  var ui = {
    head: root.querySelector('.im-head'),
    view: root.querySelector('.im-view'),
    base: root.querySelector('#im-base'),
    over: root.querySelector('#im-over'),
    line: root.querySelector('.im-line'),
    lens: root.querySelector('.im-lens'),
    range: root.querySelector('#im-range'),
    sw: root.querySelector('#im-switch'),
    swLabel: root.querySelector('.im-switch-label'),
    pills: root.querySelector('.im-pills'),
    ask: root.querySelector('.im-ask'),
    result: root.querySelector('.im-result'),
    hint: root.querySelector('.im-hint'),
  };

  var rounds = [], i = 0, r = null, a = 'neural', layer = a, voted = false, agreed = 0, played = 0, v = 0, anim = 0;

  function src(tag) {
    return PG.base + 'img/' + r.id + '-' + tag + '.webp';
  }

  function setWipe(x) {
    v = PG.clamp(x, 0, 100);
    ui.over.style.clipPath = 'inset(0 ' + (100 - v) + '% 0 0)';
    ui.line.style.left = v + '%';
    ui.line.style.opacity = v > 0.5 && v < 99.5 ? 1 : 0;
    ui.range.value = v;
    ui.sw.checked = v > 50;
    ui.swLabel.textContent = T.enh + ': ' + (v > 50 ? T.on : T.off);
  }

  function glide(to) {
    cancelAnimationFrame(anim);
    if (PG.still) { setWipe(to); return; }
    var from = v, t0 = performance.now();
    (function step(t) {
      var k = Math.min(1, (t - t0) / 420), e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      setWipe(from + (to - from) * e);
      if (k < 1) anim = requestAnimationFrame(step);
    })(t0);
  }

  function pill(label, tag, locked) {
    var b = el('button', 'im-pill' + (tag === layer ? ' active' : ''), label);
    b.type = 'button';
    b.disabled = !!locked;
    b.setAttribute('aria-pressed', tag === layer);
    b.addEventListener('click', function () {
      layer = tag;
      ui.over.src = src(tag);
      renderPills();
      if (v < 50) glide(100);
    });
    return b;
  }

  function renderPills() {
    ui.pills.textContent = '';
    var other = a === 'neural' ? 'plain' : 'neural';
    ui.pills.appendChild(pill(voted ? r[a + 'Name'] : T.a, a));
    ui.pills.appendChild(pill(voted ? r[other + 'Name'] : T.b, other));
    if (voted) ui.pills.appendChild(pill(T.original, 'original'));
  }

  function show() {
    r = rounds[i];
    voted = false;
    a = Math.random() < 0.5 ? 'neural' : 'plain';
    layer = a;
    ui.head.textContent = '';
    ui.head.appendChild(el('span', 'pg-count', T.round + ' ' + (i + 1) + ' ' + T.of + ' ' + rounds.length));
    ui.head.appendChild(el('strong', '', PG.pick(TEXT[r.id].title)));
    ui.base.src = src('broken');
    ui.over.src = src(layer);
    setWipe(0);
    renderPills();
    ui.result.textContent = '';
    ui.result.hidden = true;
    ui.ask.textContent = '';
    ui.ask.hidden = false;
    ui.ask.appendChild(el('span', 'im-ask-q', T.ask));
    [a, a === 'neural' ? 'plain' : 'neural'].forEach(function (tag, n) {
      var b = el('button', 'btn btn-sm btn-primary', T.keep + ' ' + (n ? 'B' : 'A'));
      b.type = 'button';
      b.addEventListener('click', function () { vote(tag); });
      ui.ask.appendChild(b);
    });
    var next = new Image();
    if (rounds[i + 1]) next.src = PG.base + 'img/' + rounds[i + 1].id + '-broken.webp';
  }

  function bar(name, s, best) {
    var row = el('div', 'im-score' + (best ? ' best' : ''));
    row.appendChild(el('span', 'im-score-name', name));
    row.appendChild(el('span', '', 'PSNR ' + s.psnr + ' dB'));
    row.appendChild(el('span', '', 'SSIM ' + s.ssim));
    row.appendChild(el('span', '', T.sharp + ' ' + s.sharp));
    return row;
  }

  function vote(tag) {
    voted = true;
    played += 1;
    var metric = r.neural.psnr >= r.plain.psnr ? 'neural' : 'plain';
    var same = metric === tag;
    if (same) agreed += 1;
    layer = tag;
    ui.over.src = src(tag);
    renderPills();
    ui.ask.hidden = true;
    ui.result.hidden = false;
    ui.result.textContent = '';
    ui.result.appendChild(el('p', 'im-verdict', (same ? T.agree : T.differ) + ' ' + T.you + ': ' + r[tag + 'Name'] + '. ' + T.metric + ': ' + r[metric + 'Name'] + '.'));
    ui.result.appendChild(bar(r.neuralName, r.neural, metric === 'neural'));
    ui.result.appendChild(bar(r.plainName, r.plain, metric === 'plain'));
    ui.result.appendChild(el('p', 'im-lesson', PG.pick(TEXT[r.id].lesson)));
    var last = i === rounds.length - 1;
    if (last) {
      ui.result.appendChild(el('p', 'im-lesson', T.tally + ' ' + agreed + ' ' + T.of + ' ' + played + '. ' + T.end));
    }
    var n = el('button', 'btn btn-sm btn-primary', last ? T.again : T.next);
    n.type = 'button';
    n.addEventListener('click', function () {
      if (last) { i = 0; agreed = 0; played = 0; } else { i += 1; }
      show();
    });
    ui.result.appendChild(n);
  }

  // ---------- divider and magnifier

  function pct(e) {
    var b = ui.view.getBoundingClientRect();
    return { x: (e.clientX - b.left) / b.width * 100, y: (e.clientY - b.top) / b.height * 100, b: b, px: e.clientX - b.left, py: e.clientY - b.top };
  }

  function lens(p) {
    var showing = p.x < v ? ui.over : ui.base, z = 3, s = ui.lens.offsetWidth || 150;
    ui.lens.style.display = 'block';
    ui.lens.style.left = p.px - s / 2 + 'px';
    ui.lens.style.top = p.py - s / 2 + 'px';
    ui.lens.style.backgroundImage = 'url("' + showing.src + '")';
    ui.lens.style.backgroundSize = p.b.width * z + 'px ' + p.b.height * z + 'px';
    ui.lens.style.backgroundPosition = -(p.px * z - s / 2) + 'px ' + -(p.py * z - s / 2) + 'px';
  }

  var dragging = false;
  ui.view.addEventListener('pointerdown', function (e) {
    dragging = true;
    ui.view.setPointerCapture(e.pointerId);
    cancelAnimationFrame(anim);
    setWipe(pct(e).x);
    ui.lens.style.display = 'none';
  });
  ui.view.addEventListener('pointermove', function (e) {
    var p = pct(e);
    if (dragging) setWipe(p.x);
    else if (e.pointerType === 'mouse') lens(p);
  });
  ['pointerup', 'pointercancel'].forEach(function (n) {
    ui.view.addEventListener(n, function () { dragging = false; });
  });
  ui.view.addEventListener('pointerleave', function () { ui.lens.style.display = 'none'; });
  ui.range.addEventListener('input', function () { cancelAnimationFrame(anim); setWipe(+ui.range.value); });
  ui.sw.addEventListener('change', function () { glide(ui.sw.checked ? 100 : 0); });

  ui.hint.textContent = T.drag;
  ui.base.alt = T.dmg;
  PG.json('img/rounds.json').then(function (d) {
    rounds = d;
    show();
  });
  PG.json('img/credits.json').then(function (list) {
    var ul = el('ul');
    list.forEach(function (c) {
      var li = el('li');
      var link = el('a', '', c.title);
      link.href = c.url;
      link.rel = 'noopener';
      li.appendChild(link);
      li.appendChild(document.createTextNode(' by ' + c.by + ', ' + c.lic));
      ul.appendChild(li);
    });
    root.querySelector('.im-credits').appendChild(ul);
  });
})();
