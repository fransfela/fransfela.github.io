---
page_id: playground
layout: page
title: Playground
permalink: /playground/
description: Walk through real soundscapes, rescue speech from noise, and find out when your eyes disagree with the metric.
nav: true
nav_order: 2
---

<div id="pg" data-lang="en" data-base="{{ '/assets/playground/' | relative_url }}">

<p>Three toys about how people hear and see. Everything runs in your browser and nothing you do is recorded or sent anywhere. Headphones make the first one much better.</p>
<p class="pg-warn"><strong>Turn your volume down before you press play.</strong></p>
<nav class="pg-jump"><a href="#soundscapes">Soundscapes</a><a href="#speech">Speech</a><a href="#images">Images</a></nav>

<h2 id="soundscapes">Walk through a soundscape</h2>
<p>These are real field recordings placed around you in 3D. Drag any sound, or drag yourself (the white head) and walk. Things happen on their own: a dog, a siren, a passing tram. No two minutes sound alike.</p>

<section id="sc">
  <div class="sc-themes"></div>
  <div class="sc-stage">
    <canvas id="sc-canvas" tabindex="0" aria-label="Walk through a soundscape"></canvas>
    <button id="sc-start" type="button" class="btn btn-primary" disabled>…</button>
  </div>
  <p class="pg-small">Scroll over the scene to turn your head. With the scene focused, arrow keys walk and Q and E turn.</p>
  <div class="sc-controls">
    <button id="sc-stop" type="button" class="btn btn-sm btn-outline-primary sc-on-only">Stop</button>
    <button id="sc-walk" type="button" class="btn btn-sm btn-outline-primary">Take a walk</button>
    <button id="sc-surprise" type="button" class="btn btn-sm btn-outline-primary">Surprise me</button>
    <label class="sc-anc"><input id="sc-anc" type="checkbox"> Noise-cancelling headphones</label>
  </div>
  <h3 class="pg-h">Make something happen</h3>
  <div class="sc-events"></div>
  <div class="sc-grid">
    <div>
      <h3 class="pg-h">In this scene</h3>
      <div class="sc-row sc-bed-row"><span class="sc-dot"></span><label for="sc-bed">Background</label><input id="sc-bed" type="range" min="0" max="1.4" step="0.01" value="1"></div>
      <div class="sc-list"></div>
      <h3 class="pg-h">Add a sound from anywhere</h3>
      <div class="sc-tray"></div>
    </div>
    <div>
      <h3 class="pg-h">How it feels</h3>
      <canvas id="sc-compass" aria-hidden="true"></canvas>
      <p class="sc-goal"></p>
      <p class="pg-small">A playful estimate from what is in your mix, using the axes of ISO 12913-3. It is not a measurement.</p>
    </div>
  </div>
  <p><button id="sc-copy" type="button" class="btn btn-sm btn-link p-0">Copy link to my mix</button></p>
  <details class="pg-small"><summary>Credits for the recordings</summary><div class="sc-credits"></div></details>
</section>

<h2 id="speech">Catch the sentence</h2>
<p>Someone is talking in a noisy place. Can you catch what they said? Then switch on enhancement and find out what the machine heard. The twist comes from my EMNLP 2026 paper: speech that sounds better is not always speech that is understood better.</p>

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
  <p class="pg-small">Enhancement was run offline with DeepFilterNet and MetricGAN+. Transcripts are from Whisper small.en, PESQ and STOI are measured against the clean speech. Speech is from LibriSpeech (CC BY 4.0). <a href="https://arxiv.org/html/2608.30348v1">Read the paper</a> · <a href="{{ '/projects/se-llm-odr-benchmark/' | relative_url }}">About the project</a></p>
</section>

<h2 id="images">You vs the metric</h2>
<p>Flip enhancement on and off, then keep the repair you like. Only after you vote do you see what the numbers preferred, and what the photo really looked like.</p>

<section id="im">
  <div class="im-head"></div>
  <div class="im-view">
    <img id="im-base" alt="" width="960" height="640">
    <img id="im-over" alt="" width="960" height="640">
    <div class="im-line"></div>
    <div class="im-lens"></div>
  </div>
  <input id="im-range" class="sr-only" type="range" min="0" max="100" value="0" aria-label="You vs the metric">
  <p class="pg-small im-hint"></p>
  <div class="sp-bar">
    <label class="pg-switch"><input id="im-switch" type="checkbox"><span class="pg-slider"></span><span class="im-switch-label"></span></label>
    <div class="im-pills"></div>
  </div>
  <div class="im-ask"></div>
  <div class="im-result" hidden></div>
  <p class="pg-small">Repairs were made offline with Real-ESRGAN, SCUNet and FBCNN. Scores are measured against the original. <a href="{{ '/blog/2025/image-video-quality-metrics-reference/' | relative_url }}">More on image quality metrics</a></p>
  <details class="pg-small"><summary>Credits for the photos</summary><div class="im-credits sc-credits"></div></details>
</section>

</div>

## Other things to click

- [Akustik & Kiblat](/viz/mosque-acoustics/): where does sound face? An interactive piece in Indonesian.
- [Fisika suara di dalam ruang masjid](/viz/akustik-ruang-masjid/): a physics simulation of sound inside a mosque, in Indonesian.
- [Loudspeaker di masjid](/viz/mosque-loudspeaker/): three loudspeaker configurations and one trade-off, in Indonesian.
- [Silsilah](/projects/silsilah/): a privacy-first family tree app. No account, no server, no data leaves your device.
- [Shelfmate](/projects/shelfmate/): an invite-only book club for people who actually read.

<link rel="stylesheet" href="{{ '/assets/playground/playground.css' | relative_url }}">
<script src="{{ '/assets/js/playground/common.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/playground/soundscape.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/playground/speech-enhancement.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/playground/image-enhancement.js' | relative_url }}" defer></script>
