---
page_id: playground
layout: page
title: Playground
permalink: /playground/
description: Small experiments in sound and image perception that run in your browser, plus a few visualizations and apps I built.
nav: true
nav_order: 6
---

I like things you can poke at. These demos run in your browser with made-up signals. Nothing is recorded or sent anywhere.

**Turn your volume down before you press play.** The sounds are quiet by design, but headphones are close to your ears.

## Can you hear it? Tone in noise

A 1 kHz tone sits inside white noise. Lower the tone until it disappears, then raise the noise instead. The tone has not changed, but your ears lose it anyway. That is masking, and it is why a noisy room makes speech harder to follow.

<div class="mb-4">
  <button id="mask-play" class="btn btn-sm btn-outline-primary" data-play="Play" data-stop="Stop">Play</button>
  <div class="mt-3">
    <label for="mask-tone">Tone level</label>
    <input id="mask-tone" type="range" min="-80" max="-20" value="-45" step="1" class="form-control-range">
  </div>
  <div>
    <label for="mask-noise">Noise level</label>
    <input id="mask-noise" type="range" min="-80" max="-20" value="-50" step="1" class="form-control-range">
  </div>
  <p id="mask-readout" class="mt-2" data-template="Tone {tone} dB, noise {noise} dB, tone minus noise {snr} dB."></p>
</div>

## ABX: is X the clean one?

A is a full-bandwidth tone complex. B is the same sound with everything above a cutoff removed. X is secretly one of them. Listen, then say which one X is. Ten trials, and you get the odds of scoring that well by guessing.

Try 4 kHz first, then work your way up. Somewhere around the top of the range, most adults stop hearing the difference.

<div id="abx" class="mb-4">
  <label for="abx-cutoff">Cutoff for B</label>
  <select id="abx-cutoff" class="form-control form-control-sm" style="max-width: 12rem">
    <option value="4000">4 kHz</option>
    <option value="8000" selected>8 kHz</option>
    <option value="12000">12 kHz</option>
    <option value="16000">16 kHz</option>
  </select>
  <div class="mt-3">
    <button id="abx-a" class="btn btn-sm btn-outline-primary">Play A</button>
    <button id="abx-b" class="btn btn-sm btn-outline-primary">Play B</button>
    <button id="abx-x" class="btn btn-sm btn-outline-primary">Play X</button>
  </div>
  <div class="mt-2">
    <button id="abx-ans-a" class="btn btn-sm btn-outline-secondary">X is A</button>
    <button id="abx-ans-b" class="btn btn-sm btn-outline-secondary">X is B</button>
    <button id="abx-reset" class="btn btn-sm btn-link">Start over</button>
  </div>
  <p id="abx-status" class="mt-2 mb-0" data-template="Trial {done} of {total} answered."></p>
  <p id="abx-result" data-template="You got {correct} of {total} right. Chance of doing this well or better by guessing: {p}."></p>
</div>

## Same number, different picture

PSNR is a common image quality metric. Pick a distortion, move the slider, and note the PSNR. Then switch distortion and move the slider until the PSNR matches. The numbers agree, the pictures do not. Hold the button to see the original.

<div class="mb-4">
  <canvas id="img-view" width="480" height="320" style="max-width: 100%; height: auto"></canvas>
  <div class="mt-2">
    <label for="img-type">Distortion</label>
    <select id="img-type" class="form-control form-control-sm" style="max-width: 12rem">
      <option value="jpeg">JPEG compression</option>
      <option value="blur">Blur</option>
      <option value="noise">Noise</option>
    </select>
    <label for="img-amount" class="mt-2">Amount</label>
    <input id="img-amount" type="range" min="1" max="100" value="60" step="1" class="form-control-range">
    <button id="img-hold" class="btn btn-sm btn-outline-secondary mt-2">Hold to see original</button>
    <p id="img-readout" class="mt-2" data-template="PSNR {psnr} dB."></p>
  </div>
</div>

## See what you hear: a live spectrogram

Time runs left to right, frequency runs bottom to top, and brighter means louder. Try the sweep first, then the harmonics: the stack of lines is what makes a note sound like a voice or an instrument. "Ah" and "ee" use the same buzzing source, and only the filtering changes.

<div class="mb-4">
  <canvas id="spec-view" width="600" height="240" style="max-width: 100%; height: auto; background: #000"></canvas>
  <div class="mt-2">
    <button class="btn btn-sm btn-outline-primary" data-spec="sweep">Sweep</button>
    <button class="btn btn-sm btn-outline-primary" data-spec="harmonics">Harmonics</button>
    <button class="btn btn-sm btn-outline-primary" data-spec="noise">Noise</button>
    <button class="btn btn-sm btn-outline-primary" data-spec="ah">"Ah"</button>
    <button class="btn btn-sm btn-outline-primary" data-spec="ee">"Ee"</button>
    <button id="spec-stop" class="btn btn-sm btn-link">Stop</button>
  </div>
  <p class="mt-2">The vertical axis covers 0 to 8 kHz.</p>
</div>

## Other things to click

- [Akustik & Kiblat](/viz/mosque-acoustics/): where does sound face? An interactive piece in Indonesian.
- [Fisika suara di dalam ruang masjid](/viz/akustik-ruang-masjid/): a physics simulation of sound inside a mosque, in Indonesian.
- [Loudspeaker di masjid](/viz/mosque-loudspeaker/): three loudspeaker configurations and one trade-off, in Indonesian.
- [Silsilah](/projects/silsilah/): a privacy-first family tree app. No account, no server, no data leaves your device.
- [Shelfmate](/projects/shelfmate/): an invite-only book club for people who actually read.

<script src="{{ '/assets/js/playground.js' | relative_url }}" defer></script>
