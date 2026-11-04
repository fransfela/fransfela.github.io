---
page_id: playground
layout: page
title: Playground
permalink: /playground/
description: Berjalan di soundscape nyata, selamatkan ucapan dari noise, dan temukan kapan mata kamu tidak sepakat dengan metrik.
nav: true
nav_order: 2
---

<div id="pg" data-lang="id" data-base="{{ '/assets/playground/' | relative_url }}">

<p>Tiga mainan tentang cara manusia mendengar dan melihat. Semuanya berjalan di browser kamu dan tidak ada yang direkam atau dikirim ke mana pun. Yang pertama jauh lebih seru dengan headphone.</p>
<p class="pg-warn"><strong>Kecilkan volume sebelum menekan play.</strong></p>
<nav class="pg-jump"><a href="#soundscapes">Soundscape</a><a href="#speech">Ucapan</a><a href="#images">Gambar</a></nav>

<h2 id="soundscapes">Berjalan di dalam soundscape</h2>
<p>Ini rekaman lapangan sungguhan yang ditempatkan di sekeliling kamu dalam 3D. Geser suara apa pun, atau geser diri kamu (kepala putih) dan berjalanlah. Banyak hal terjadi sendiri: anjing, sirene, trem yang lewat. Tidak ada dua menit yang terdengar sama.</p>

<section id="sc">
  <div class="sc-themes"></div>
  <div class="sc-stage">
    <canvas id="sc-canvas" tabindex="0" aria-label="Berjalan di dalam soundscape"></canvas>
    <button id="sc-start" type="button" class="btn btn-primary" disabled>…</button>
  </div>
  <p class="pg-small">Gulir di atas adegan untuk menoleh. Saat adegan aktif, tombol panah untuk berjalan, Q dan E untuk berputar.</p>
  <div class="sc-controls">
    <button id="sc-stop" type="button" class="btn btn-sm btn-outline-primary sc-on-only">Berhenti</button>
    <button id="sc-walk" type="button" class="btn btn-sm btn-outline-primary">Jalan-jalan</button>
    <button id="sc-surprise" type="button" class="btn btn-sm btn-outline-primary">Kejutkan saya</button>
    <label class="sc-anc"><input id="sc-anc" type="checkbox"> Headphone peredam bising</label>
  </div>
  <h3 class="pg-h">Bikin sesuatu terjadi</h3>
  <div class="sc-events"></div>
  <div class="sc-grid">
    <div>
      <h3 class="pg-h">Di adegan ini</h3>
      <div class="sc-row sc-bed-row"><span class="sc-dot"></span><label for="sc-bed">Latar</label><input id="sc-bed" type="range" min="0" max="1.4" step="0.01" value="1"></div>
      <div class="sc-list"></div>
      <h3 class="pg-h">Tambah suara dari tempat lain</h3>
      <div class="sc-tray"></div>
    </div>
    <div>
      <h3 class="pg-h">Rasanya bagaimana</h3>
      <canvas id="sc-compass" aria-hidden="true"></canvas>
      <p class="sc-goal"></p>
      <p class="pg-small">Perkiraan main-main dari isi racikan kamu, memakai sumbu ISO 12913-3. Ini bukan pengukuran.</p>
    </div>
  </div>
  <p><button id="sc-copy" type="button" class="btn btn-sm btn-link p-0">Salin tautan racikan saya</button></p>
  <details class="pg-small"><summary>Kredit rekaman</summary><div class="sc-credits"></div></details>
</section>

<h2 id="speech">Tangkap kalimatnya</h2>
<p>Seseorang berbicara di tempat bising. Bisakah kamu menangkap ucapannya? Lalu nyalakan peningkatan dan lihat apa yang didengar mesin. Kejutannya datang dari makalah EMNLP 2026 saya: ucapan yang terdengar lebih baik belum tentu lebih dimengerti.</p>

<section id="sp">
  <div class="sp-head"></div>
  <div class="sp-view">
    <img id="sp-base" alt="">
    <img id="sp-over" alt="">
    <div class="sp-playhead"></div>
  </div>
  <div class="sp-bar">
    <button id="sp-play" type="button" class="btn btn-primary btn-sm"></button>
    <label class="pg-switch"><input id="sp-switch" type="checkbox"><span class="pg-slider"></span><span class="sp-switch-label"></span></label>
    <div class="sp-pills"></div>
  </div>
  <div class="sp-ask"></div>
  <div class="sp-result" hidden></div>
  <p class="pg-small">Peningkatan dijalankan secara offline dengan DeepFilterNet dan MetricGAN+. Transkrip berasal dari Whisper small.en, PESQ dan STOI diukur terhadap ucapan bersih. Ucapan berasal dari LibriSpeech (CC BY 4.0). <a href="https://arxiv.org/html/2608.30348v1">Baca makalahnya</a> · <a href="{{ '/projects/se-llm-odr-benchmark/' | relative_url }}">Tentang proyek ini</a></p>
</section>

<h2 id="images">Kamu lawan metrik</h2>
<p>Nyalakan dan matikan peningkatan, lalu simpan perbaikan yang kamu suka. Setelah memilih, barulah kamu melihat apa pilihan angka, dan seperti apa foto aslinya.</p>

<section id="im">
  <div class="im-head"></div>
  <div class="im-view">
    <img id="im-base" alt="" width="960" height="640">
    <img id="im-over" alt="" width="960" height="640">
    <div class="im-line"></div>
    <div class="im-lens"></div>
  </div>
  <input id="im-range" class="sr-only" type="range" min="0" max="100" value="0" aria-label="Kamu lawan metrik">
  <p class="pg-small im-hint"></p>
  <div class="sp-bar">
    <label class="pg-switch"><input id="im-switch" type="checkbox"><span class="pg-slider"></span><span class="im-switch-label"></span></label>
    <div class="im-pills"></div>
  </div>
  <div class="im-ask"></div>
  <div class="im-result" hidden></div>
  <p class="pg-small">Perbaikan dibuat secara offline dengan Real-ESRGAN, SCUNet, dan FBCNN. Skor diukur terhadap gambar asli. <a href="{{ '/blog/2025/image-video-quality-metrics-reference/' | relative_url }}">Lebih lanjut tentang metrik kualitas gambar</a></p>
  <details class="pg-small"><summary>Kredit foto</summary><div class="im-credits sc-credits"></div></details>
</section>

</div>

## Hal lain untuk diklik

- [Akustik & Kiblat](/viz/mosque-acoustics/): ke mana arah suara? Karya interaktif dalam bahasa Indonesia.
- [Fisika suara di dalam ruang masjid](/viz/akustik-ruang-masjid/): simulasi fisika suara di dalam masjid.
- [Loudspeaker di masjid](/viz/mosque-loudspeaker/): tiga konfigurasi loudspeaker dan satu trade-off.
- [Silsilah](/projects/silsilah/): aplikasi pohon keluarga yang mengutamakan privasi.
- [Shelfmate](/projects/shelfmate/): klub buku khusus undangan.

<link rel="stylesheet" href="{{ '/assets/playground/playground.css' | relative_url }}">
<script src="{{ '/assets/js/playground/common.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/playground/soundscape.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/playground/speech-enhancement.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/playground/image-enhancement.js' | relative_url }}" defer></script>
