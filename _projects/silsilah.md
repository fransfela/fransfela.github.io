---
layout: page
title: Silsilah
description: A privacy-first family tree web app. No account, no server, no data leaving your device. Single HTML file.
img: assets/img/silsilah-thumb.png
importance: 1
category: fun
related_publications: false
og_image: assets/img/silsilah-thumb.png
---

**Silsilah** (Arabic/Indonesian: *سِلْسِلَة* - lineage, chain) is a browser-based family tree builder that runs entirely as a single HTML file. No installation, no backend, no account required. Your family data never leaves your device.

<div class="row justify-content-center mt-3">
  <div class="col-sm-12 col-md-10">
    <a href="/projects/silsilah/app/" class="btn btn-primary w-100" style="font-size:1.1rem;padding:12px;">
      🌿 Open Silsilah
    </a>
  </div>
</div>

---

### Features

- **Visual family tree canvas**: drag, pan, zoom, double-click to edit
- **Four relationship types**: spouse, former spouse (divorced), parent→child, step-parent
- **Drag-to-link**: hover any card, drag from edge dots to connect people
- **Auto-layout**: one-click generational arrangement
- **Real-time collaboration**: share a room code (e.g. `FELA-2024`) with family members
- **High-res export**: choose paper size (A4, A3, Letter), background, and resolution up to 4×
- **Save / load JSON**: fully portable, version-controllable data format
- **Works offline**: after first load, no internet required

### Design principles

The app is intentionally built as a zero-dependency single HTML file. This means:

- **Longevity**: no npm packages to break, no API keys to expire
- **Privacy**: family data stays in the browser; collaboration uses `window.storage` shared keys, not a central server
- **Portability**: send the file itself via WhatsApp, email, or USB drive

### Tech
&nbsp;
| Layer | Choice |
|---|---|
| UI | Vanilla JS + CSS custom properties |
| Rendering | DOM + inline SVG |
| Storage | `window.storage` (persistent artifacts API) |
| Export | HTML5 Canvas (`toBlob`) |
| Fonts | Cormorant Garamond + Crimson Pro (Google Fonts) |
----
### Source

The app is a single self-contained file. You can download it, inspect it, modify it, or self-host it anywhere.

<div class="row mt-3">
  <div class="col-sm-6">
    <a href="/projects/silsilah/app/" class="btn btn-outline-primary w-100">Open App →</a>
  </div>
  <div class="col-sm-6">
    <a href="https://github.com/fransfela/fransfela.github.io/blob/main/projects/silsilah/app/index.html" class="btn btn-outline-secondary w-100">View Source →</a>
  </div>
</div>
