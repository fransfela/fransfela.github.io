---
page_id: playground
layout: page
title: Playground
permalink: /playground/
description: Eksperimen kecil tentang persepsi suara dan gambar yang berjalan di browser kamu, ditambah beberapa visualisasi dan aplikasi buatan saya.
nav: true
nav_order: 6
---

Saya suka hal-hal yang bisa langsung dicoba. Demo ini berjalan di browser dengan sinyal buatan. Tidak ada yang direkam atau dikirim ke mana pun.

**Kecilkan volume sebelum menekan play.** Suaranya sengaja pelan, tapi headphone dekat sekali dengan telinga.

## Bisa dengar? Nada di dalam noise

Nada 1 kHz ada di dalam white noise. Turunkan nadanya sampai hilang, lalu naikkan noise-nya. Nadanya tidak berubah, tapi telinga kamu tetap kehilangan nada itu. Ini disebut masking, dan itu sebabnya ruangan bising membuat ucapan sulit diikuti.

<div class="mb-4">
  <button id="mask-play" class="btn btn-sm btn-outline-primary" data-play="Putar" data-stop="Berhenti">Putar</button>
  <div class="mt-3">
    <label for="mask-tone">Level nada</label>
    <input id="mask-tone" type="range" min="-80" max="-20" value="-45" step="1" class="form-control-range">
  </div>
  <div>
    <label for="mask-noise">Level noise</label>
    <input id="mask-noise" type="range" min="-80" max="-20" value="-50" step="1" class="form-control-range">
  </div>
  <p id="mask-readout" class="mt-2" data-template="Nada {tone} dB, noise {noise} dB, nada dikurangi noise {snr} dB."></p>
</div>

## ABX: mana yang bersih, X yang mana?

A adalah nada kompleks dengan lebar pita penuh. B adalah suara yang sama dengan semua frekuensi di atas batas tertentu dibuang. X diam-diam salah satu dari keduanya. Dengarkan, lalu tebak X itu A atau B. Sepuluh percobaan, lalu kamu dapat peluang mencetak skor sebaik itu hanya dengan menebak.

Coba 4 kHz dulu, lalu naik pelan-pelan. Di sekitar ujung atas rentang itu, kebanyakan orang dewasa tidak lagi mendengar bedanya.

<div id="abx" class="mb-4">
  <label for="abx-cutoff">Batas frekuensi untuk B</label>
  <select id="abx-cutoff" class="form-control form-control-sm" style="max-width: 12rem">
    <option value="4000">4 kHz</option>
    <option value="8000" selected>8 kHz</option>
    <option value="12000">12 kHz</option>
    <option value="16000">16 kHz</option>
  </select>
  <div class="mt-3">
    <button id="abx-a" class="btn btn-sm btn-outline-primary">Putar A</button>
    <button id="abx-b" class="btn btn-sm btn-outline-primary">Putar B</button>
    <button id="abx-x" class="btn btn-sm btn-outline-primary">Putar X</button>
  </div>
  <div class="mt-2">
    <button id="abx-ans-a" class="btn btn-sm btn-outline-secondary">X adalah A</button>
    <button id="abx-ans-b" class="btn btn-sm btn-outline-secondary">X adalah B</button>
    <button id="abx-reset" class="btn btn-sm btn-link">Mulai ulang</button>
  </div>
  <p id="abx-status" class="mt-2 mb-0" data-template="Percobaan {done} dari {total} sudah dijawab."></p>
  <p id="abx-result" data-template="Kamu benar {correct} dari {total}. Peluang mendapat skor sebaik ini atau lebih tinggi hanya dengan menebak: {p}."></p>
</div>

## Angka sama, gambar beda

PSNR adalah metrik kualitas gambar yang umum dipakai. Pilih satu distorsi, geser slider, dan catat PSNR-nya. Lalu ganti distorsi dan geser slider sampai PSNR-nya sama. Angkanya sama, gambarnya tidak. Tahan tombol untuk melihat gambar asli.

<div class="mb-4">
  <canvas id="img-view" width="480" height="320" style="max-width: 100%; height: auto"></canvas>
  <div class="mt-2">
    <label for="img-type">Distorsi</label>
    <select id="img-type" class="form-control form-control-sm" style="max-width: 12rem">
      <option value="jpeg">Kompresi JPEG</option>
      <option value="blur">Blur</option>
      <option value="noise">Noise</option>
    </select>
    <label for="img-amount" class="mt-2">Besarnya</label>
    <input id="img-amount" type="range" min="1" max="100" value="60" step="1" class="form-control-range">
    <button id="img-hold" class="btn btn-sm btn-outline-secondary mt-2">Tahan untuk melihat gambar asli</button>
    <p id="img-readout" class="mt-2" data-template="PSNR {psnr} dB."></p>
  </div>
</div>

## Lihat apa yang kamu dengar: spectrogram langsung

Waktu berjalan dari kiri ke kanan, frekuensi dari bawah ke atas, dan makin terang berarti makin keras. Coba sweep dulu, lalu harmonics: susunan garis itulah yang membuat sebuah nada terdengar seperti suara orang atau alat musik. "Ah" dan "ee" memakai sumber dengung yang sama, hanya filternya yang berbeda.

<div class="mb-4">
  <canvas id="spec-view" width="600" height="240" style="max-width: 100%; height: auto; background: #000"></canvas>
  <div class="mt-2">
    <button class="btn btn-sm btn-outline-primary" data-spec="sweep">Sweep</button>
    <button class="btn btn-sm btn-outline-primary" data-spec="harmonics">Harmonics</button>
    <button class="btn btn-sm btn-outline-primary" data-spec="noise">Noise</button>
    <button class="btn btn-sm btn-outline-primary" data-spec="ah">"Ah"</button>
    <button class="btn btn-sm btn-outline-primary" data-spec="ee">"Ee"</button>
    <button id="spec-stop" class="btn btn-sm btn-link">Berhenti</button>
  </div>
  <p class="mt-2">Sumbu vertikal mencakup 0 sampai 8 kHz.</p>
</div>

## Hal lain untuk dicoba

- [Akustik & Kiblat](/viz/mosque-acoustics/): ke mana suara menghadap? Karya interaktif dalam bahasa Indonesia.
- [Fisika suara di dalam ruang masjid](/viz/akustik-ruang-masjid/): simulasi fisika suara di dalam masjid.
- [Loudspeaker di masjid](/viz/mosque-loudspeaker/): tiga konfigurasi loudspeaker dan satu trade-off.
- [Silsilah](/projects/silsilah/): aplikasi pohon keluarga yang mengutamakan privasi. Tanpa akun, tanpa server, data tidak keluar dari perangkatmu.
- [Shelfmate](/projects/shelfmate/): klub buku khusus undangan untuk orang yang benar-benar membaca.

<script src="{{ '/assets/js/playground.js' | relative_url }}" defer></script>
