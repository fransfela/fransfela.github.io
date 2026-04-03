---
layout: page
title: QUALIA Platform
description: Browser-based perceptual screener and assessor qualification platform for the GN Perceptual Evaluation Team.
img: assets/img/qualia-thumb.png
importance: 1
category: work
related_publications: false
---
<style>
  :root {
    --teal: #1D9E75;
    --teal-light: #9FE1CB;
    --teal-dim: #085041;
    --amber: #BA7517;
    --amber-light: #FAC775;
    --amber-dim: #633806;
    --card-border: var(--color-border-tertiary);
    --radius: var(--border-radius-lg);
  }
  .qp-wrap { padding: 0.5rem 0 2rem; font-family: var(--font-sans); }
  .qp-subtitle { font-size:13px; font-weight:400; color:var(--color-text-secondary); margin:0 0 0.4rem; letter-spacing:0.04em; text-transform:uppercase; }
  .qp-title { font-size:22px; font-weight:500; color:var(--color-text-primary); margin:0 0 0.8rem; }
  .qp-desc { font-size:15px; line-height:1.75; color:var(--color-text-secondary); margin:0 0 1rem; }
  .qp-badges { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:1.8rem; }
  .badge { font-size:11px; padding:3px 9px; border-radius:20px; border:1px solid var(--card-border); color:var(--color-text-secondary); background:var(--color-background-secondary); }
  .badge.teal { border-color:var(--teal); color:var(--teal-dim); background:#E1F5EE; }
  .badge.amber { border-color:var(--amber); color:var(--amber-dim); background:#FAEEDA; }
  @media (prefers-color-scheme:dark){
    .badge.teal { color:var(--teal-light); background:#04342C; border-color:#0F6E56; }
    .badge.amber { color:var(--amber-light); background:#412402; border-color:#854F0B; }
  }

  /* Ecosystem - centered */
  .qp-ecosystem { background:var(--color-background-secondary); border:1px solid var(--card-border); border-radius:var(--radius); padding:1.4rem 1.4rem 1.2rem; margin-bottom:2rem; text-align:center; }
  .qp-ecosystem-title { font-size:11px; font-weight:500; color:var(--color-text-tertiary); text-transform:uppercase; letter-spacing:0.07em; margin:0 0 1rem; }
  .qp-pipeline { display:flex; align-items:center; justify-content:center; gap:0; flex-wrap:wrap; }
  .pipe-node { display:flex; flex-direction:column; padding:10px 18px; border-radius:8px; border:1px solid var(--card-border); background:var(--color-background-primary); min-width:110px; text-align:center; }
  .pipe-node.active { border-color:var(--teal); background:#E1F5EE; }
  @media (prefers-color-scheme:dark){ .pipe-node.active { background:#04342C; border-color:#0F6E56; } }
  .pipe-label { font-size:13px; font-weight:500; color:var(--color-text-primary); }
  .pipe-label.active { color:var(--teal-dim); }
  @media (prefers-color-scheme:dark){ .pipe-label.active { color:var(--teal-light); } }
  .pipe-sub { font-size:11px; color:var(--color-text-tertiary); margin-top:3px; }
  .pipe-arrow { font-size:16px; color:var(--color-text-tertiary); padding:0 10px; }

  .qp-section-title { font-size:18px; font-weight:500; color:var(--color-text-primary); margin:0 0 1rem; padding-bottom:0.5rem; border-bottom:1px solid var(--card-border); }
  .tools-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:1rem; margin-bottom:2rem; }
  .tool-card { border:1px solid var(--card-border); border-radius:var(--radius); background:var(--color-background-secondary); padding:1.2rem; display:flex; flex-direction:column; gap:0.8rem; transition:border-color 0.15s; }
  .tool-card:hover { border-color:var(--color-border-secondary); }
  .tool-header { display:flex; align-items:center; gap:0.8rem; }
  .tool-icon { width:40px; height:40px; flex-shrink:0; border-radius:8px; overflow:hidden; }
  .tool-name { font-size:15px; font-weight:500; color:var(--color-text-primary); margin:0; }
  .tool-tag { font-size:10px; color:var(--color-text-tertiary); margin:1px 0 0; letter-spacing:0.04em; }
  .tool-desc { font-size:13px; line-height:1.65; color:var(--color-text-secondary); margin:0; }
  .tool-pills { display:flex; flex-wrap:wrap; gap:4px; }
  .pill { font-size:10px; padding:2px 7px; border-radius:20px; border:1px solid var(--card-border); color:var(--color-text-tertiary); background:var(--color-background-primary); font-family:var(--font-mono); }

  /* Ending section */
  .qp-end { margin-top:0.5rem; }
  .qp-end-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:0.8rem; margin:1.2rem 0 1.6rem; }
  .end-card { border:1px solid var(--card-border); border-radius:var(--border-radius-md); background:var(--color-background-secondary); padding:1rem 1.1rem; }
  .end-card-label { font-size:11px; font-weight:500; color:var(--color-text-tertiary); text-transform:uppercase; letter-spacing:0.06em; margin:0 0 0.4rem; }
  .end-card-text { font-size:13px; line-height:1.6; color:var(--color-text-secondary); margin:0; }
  .qp-closing { font-size:13px; line-height:1.75; color:var(--color-text-tertiary); border-top:1px solid var(--card-border); padding-top:1rem; margin-top:0.5rem; }
  .qp-closing span { color:var(--teal); font-weight:500; }
</style>

<div class="qp-wrap">

  <p class="qp-subtitle">GN &middot; Jabra &middot; Internal Research Tool</p>
  <h1 class="qp-title">QUALIA Platform</h1>
  <p class="qp-desc">
    QUALIA is a browser-based platform for screening and qualifying human assessors before they join perceptual listening or viewing panels at GN. It runs entirely in the browser with no installation and no backend server. All test logic, stimulus generation, and response collection execute client-side via the Web Audio API and standard browser rendering.
  </p>
  <div class="qp-badges">
    <span class="badge teal">Zero install</span>
    <span class="badge teal">In-browser</span>
    <span class="badge teal">Web Audio API</span>
    <span class="badge amber">Adaptive staircase</span>
    <span class="badge amber">2AFC / Triangle</span>
    <span class="badge">Quarto R</span>
    <span class="badge">SVG stimuli</span>
  </div>

  <!-- Ecosystem - centered -->
  <div class="qp-ecosystem">
    <p class="qp-ecosystem-title">Three-layer ecosystem</p>
    <div class="qp-pipeline">
      <div class="pipe-node">
        <span class="pipe-label">Power Platform</span>
        <span class="pipe-sub">Admin &amp; enrollment</span>
      </div>
      <span class="pipe-arrow">&#8594;</span>
      <div class="pipe-node active">
        <span class="pipe-label active">QUALIA</span>
        <span class="pipe-sub">Screen &amp; qualify</span>
      </div>
      <span class="pipe-arrow">&#8594;</span>
      <div class="pipe-node">
        <span class="pipe-label">DOTTY</span>
        <span class="pipe-sub">Run perceptual studies</span>
      </div>
    </div>
  </div>

  <!-- Tools -->
  <h2 class="qp-section-title">Tools</h2>
  <div class="tools-grid">

    <div class="tool-card">
      <div class="tool-header">
        <div class="tool-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#085041"/>
            <line x1="6"  y1="33" x2="6"  y2="30" stroke="#1D9E75" stroke-width="0.8" opacity="0.5"/>
            <line x1="12" y1="33" x2="12" y2="30" stroke="#1D9E75" stroke-width="0.8" opacity="0.5"/>
            <line x1="18" y1="33" x2="18" y2="30" stroke="#1D9E75" stroke-width="0.8" opacity="0.5"/>
            <line x1="24" y1="33" x2="24" y2="30" stroke="#1D9E75" stroke-width="0.8" opacity="0.5"/>
            <line x1="30" y1="33" x2="30" y2="30" stroke="#1D9E75" stroke-width="0.8" opacity="0.5"/>
            <line x1="34" y1="33" x2="34" y2="30" stroke="#1D9E75" stroke-width="0.8" opacity="0.5"/>
            <line x1="5" y1="8" x2="5" y2="33" stroke="#9FE1CB" stroke-width="1" opacity="0.6"/>
            <line x1="5" y1="33" x2="36" y2="33" stroke="#9FE1CB" stroke-width="1" opacity="0.6"/>
            <polyline points="6,14 12,16 18,20 24,22 30,18 34,22" fill="none" stroke="#1D9E75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="6"  cy="14" r="1.5" fill="none" stroke="#1D9E75" stroke-width="1.2"/>
            <circle cx="12" cy="16" r="1.5" fill="none" stroke="#1D9E75" stroke-width="1.2"/>
            <circle cx="18" cy="20" r="1.5" fill="none" stroke="#1D9E75" stroke-width="1.2"/>
            <circle cx="24" cy="22" r="1.5" fill="none" stroke="#1D9E75" stroke-width="1.2"/>
            <circle cx="30" cy="18" r="1.5" fill="none" stroke="#1D9E75" stroke-width="1.2"/>
            <circle cx="34" cy="22" r="1.5" fill="none" stroke="#1D9E75" stroke-width="1.2"/>
            <polyline points="6,17 12,19 18,24 24,27 30,23 34,26" fill="none" stroke="#EF9F27" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 1.5"/>
            <text x="6" y="10" font-size="5" fill="#9FE1CB" font-family="monospace" opacity="0.8">dB HL</text>
          </svg>
        </div>
        <div><p class="tool-name">AudiMap</p><p class="tool-tag">Pure-tone audiometry</p></div>
      </div>
      <p class="tool-desc">Estimates bilateral hearing thresholds using the Hughson-Westlake adaptive staircase. Tone generation is handled client-side via the Web Audio API. Results export as structured audiogram data for downstream panel reporting.</p>
      <div class="tool-pills"><span class="pill">Hughson-Westlake</span><span class="pill">Web Audio API</span><span class="pill">250Hz–8kHz</span></div>
    </div>

    <div class="tool-card">
      <div class="tool-header">
        <div class="tool-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#0C447C"/>
            <text x="20" y="12" text-anchor="middle" font-size="8" fill="#B5D4F4" font-family="monospace" font-weight="bold">E</text>
            <text x="14" y="19" text-anchor="middle" font-size="6" fill="#85B7EB" font-family="monospace" font-weight="bold">&#x018E;</text>
            <text x="26" y="19" text-anchor="middle" font-size="6" fill="#85B7EB" font-family="monospace" font-weight="bold">E</text>
            <text x="10" y="25" text-anchor="middle" font-size="5" fill="#378ADD" font-family="monospace" font-weight="bold">E</text>
            <text x="20" y="25" text-anchor="middle" font-size="5" fill="#378ADD" font-family="monospace" font-weight="bold">&#x018E;</text>
            <text x="30" y="25" text-anchor="middle" font-size="5" fill="#378ADD" font-family="monospace" font-weight="bold">E</text>
            <text x="8"  y="30" text-anchor="middle" font-size="3.5" fill="#185FA5" font-family="monospace" font-weight="bold">&#x018E;</text>
            <text x="15" y="30" text-anchor="middle" font-size="3.5" fill="#185FA5" font-family="monospace" font-weight="bold">E</text>
            <text x="22" y="30" text-anchor="middle" font-size="3.5" fill="#185FA5" font-family="monospace" font-weight="bold">&#x018E;</text>
            <text x="29" y="30" text-anchor="middle" font-size="3.5" fill="#185FA5" font-family="monospace" font-weight="bold">E</text>
            <text x="34" y="34" font-size="3" fill="#B5D4F4" font-family="monospace" opacity="0.7">logMAR</text>
          </svg>
        </div>
        <div><p class="tool-name">AcuiScreen</p><p class="tool-tag">Visual acuity screening</p></div>
      </div>
      <p class="tool-desc">A launcher wrapper around FrACT10, the established psychophysical acuity test battery. Supports logMAR estimation, tumbling-E optotypes, and Landolt-C rings. Handles configuration, session flow, and result capture inside the QUALIA interface.</p>
      <div class="tool-pills"><span class="pill">FrACT10</span><span class="pill">logMAR</span><span class="pill">tumbling-E</span><span class="pill">Landolt-C</span></div>
    </div>

    <div class="tool-card">
      <div class="tool-header">
        <div class="tool-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#1a1a2e"/>
            <circle cx="20" cy="20" r="16" fill="#2a2a3e"/>
            <circle cx="11" cy="14" r="2.2" fill="#888" opacity="0.6"/>
            <circle cx="16" cy="11" r="1.8" fill="#999" opacity="0.5"/>
            <circle cx="22" cy="10" r="2.5" fill="#777" opacity="0.6"/>
            <circle cx="28" cy="13" r="2"   fill="#888" opacity="0.5"/>
            <circle cx="31" cy="19" r="2.2" fill="#999" opacity="0.6"/>
            <circle cx="29" cy="25" r="1.8" fill="#777" opacity="0.5"/>
            <circle cx="23" cy="29" r="2.3" fill="#888" opacity="0.6"/>
            <circle cx="16" cy="29" r="2"   fill="#999" opacity="0.5"/>
            <circle cx="11" cy="25" r="2.2" fill="#777" opacity="0.6"/>
            <circle cx="9"  cy="19" r="1.8" fill="#888" opacity="0.5"/>
            <circle cx="20" cy="13" r="2.2" fill="#1D9E75" opacity="0.9"/>
            <circle cx="24" cy="15" r="2"   fill="#5DCAA5" opacity="0.85"/>
            <circle cx="25" cy="20" r="2.3" fill="#1D9E75" opacity="0.9"/>
            <circle cx="22" cy="24" r="2"   fill="#5DCAA5" opacity="0.85"/>
            <circle cx="17" cy="24" r="2.2" fill="#1D9E75" opacity="0.9"/>
            <circle cx="15" cy="20" r="2"   fill="#5DCAA5" opacity="0.85"/>
            <circle cx="16" cy="16" r="2.3" fill="#1D9E75" opacity="0.9"/>
            <circle cx="20" cy="20" r="2"   fill="#5DCAA5" opacity="0.8"/>
          </svg>
        </div>
        <div><p class="tool-name">ColorScreen</p><p class="tool-tag">Color vision screening</p></div>
      </div>
      <p class="tool-desc">A color vision screener built around Ishihara-style plates generated as SVGs natively in the browser. Avoiding raster image assets ensures reproducible stimulus presentation across display types and resolutions.</p>
      <div class="tool-pills"><span class="pill">SVG plates</span><span class="pill">Ishihara-style</span><span class="pill">Client-side</span></div>
    </div>

    <div class="tool-card">
      <div class="tool-header">
        <div class="tool-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#04342C"/>
            <rect x="4" y="6" width="14" height="14" rx="2" fill="#0F6E56" stroke="#1D9E75" stroke-width="0.5"/>
            <rect x="22" y="6" width="14" height="14" rx="2" fill="#0F6E56" stroke="#1D9E75" stroke-width="0.5"/>
            <polyline points="5,13 7,10 9,13 11,10 13,13 15,10 17,13" fill="none" stroke="#9FE1CB" stroke-width="0.8"/>
            <polyline points="23,13 25,9 27,14 29,10 31,12 33,9 35,13" fill="none" stroke="#EF9F27" stroke-width="0.8"/>
            <text x="11" y="24" text-anchor="middle" font-size="4" fill="#9FE1CB" font-family="monospace">A</text>
            <text x="29" y="24" text-anchor="middle" font-size="4" fill="#EF9F27" font-family="monospace">B</text>
            <polyline points="4,37 8,34 12,37 16,34 20,35 24,33 28,34 32,33 36,33" fill="none" stroke="#1D9E75" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="4" y1="33" x2="36" y2="33" stroke="#1D9E75" stroke-width="0.5" stroke-dasharray="1.5 1.5" opacity="0.5"/>
          </svg>
        </div>
        <div><p class="tool-name">AuQAS</p><p class="tool-tag">Audio quality adaptive screening</p></div>
      </div>
      <p class="tool-desc">Estimates a candidate's sensitivity to audio degradation using 2AFC and Triangle test paradigms. The staircase procedure is configurable in step size, reversal count, and starting level. Results yield a per-assessor quality sensitivity threshold prior to panel admission.</p>
      <div class="tool-pills"><span class="pill">2AFC</span><span class="pill">Triangle test</span><span class="pill">Adaptive staircase</span></div>
    </div>

    <div class="tool-card">
      <div class="tool-header">
        <div class="tool-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#412402"/>
            <rect x="3" y="6" width="15" height="12" rx="2" fill="#633806" stroke="#BA7517" stroke-width="0.5"/>
            <rect x="22" y="6" width="15" height="12" rx="2" fill="#633806" stroke="#854F0B" stroke-width="0.5"/>
            <line x1="5" y1="12" x2="16" y2="12" stroke="#FAC775" stroke-width="0.6" opacity="0.7"/>
            <line x1="5" y1="10" x2="12" y2="10" stroke="#FAC775" stroke-width="0.6" opacity="0.5"/>
            <rect x="8" y="8" width="4" height="3" rx="0.5" fill="#EF9F27" opacity="0.6"/>
            <rect x="23" y="7" width="3"  height="3" fill="#BA7517" opacity="0.4"/>
            <rect x="26" y="7" width="3"  height="3" fill="#633806" opacity="0.8"/>
            <rect x="29" y="7" width="3"  height="3" fill="#BA7517" opacity="0.3"/>
            <rect x="23" y="10" width="3" height="3" fill="#633806" opacity="0.9"/>
            <rect x="26" y="10" width="3" height="3" fill="#BA7517" opacity="0.5"/>
            <rect x="29" y="10" width="3" height="3" fill="#633806" opacity="0.7"/>
            <rect x="32" y="7" width="4"  height="6" fill="#BA7517" opacity="0.4"/>
            <text x="3" y="25" font-size="3.5" fill="#FAC775" font-family="monospace" opacity="0.7">CRF</text>
            <polyline points="8,35 10,30 14,35 18,30 22,32 26,28 30,29 34,28" fill="none" stroke="#EF9F27" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="8" y1="28" x2="35" y2="28" stroke="#EF9F27" stroke-width="0.5" stroke-dasharray="1.5 1.5" opacity="0.5"/>
          </svg>
        </div>
        <div><p class="tool-name">ViQAS</p><p class="tool-tag">Video compression threshold screening</p></div>
      </div>
      <p class="tool-desc">A 2AFC descending staircase over H.264 Constant Rate Factor levels. Candidates compare compressed and reference video clips to identify the degraded stimulus. The procedure converges on a per-assessor compression visibility threshold.</p>
      <div class="tool-pills"><span class="pill">2AFC</span><span class="pill">H.264 CRF</span><span class="pill">Descending staircase</span></div>
    </div>

    <div class="tool-card">
      <div class="tool-header">
        <div class="tool-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#f5f5f0"/>
            <rect x="5" y="5" width="30" height="28" rx="2" fill="white" stroke="#ccc" stroke-width="0.5"/>
            <line x1="5" y1="13" x2="35" y2="13" stroke="#eee" stroke-width="0.5"/>
            <line x1="5" y1="21" x2="35" y2="21" stroke="#eee" stroke-width="0.5"/>
            <line x1="9" y1="5" x2="9" y2="33" stroke="#bbb" stroke-width="0.7"/>
            <line x1="9" y1="33" x2="35" y2="33" stroke="#bbb" stroke-width="0.7"/>
            <polyline points="9,9  15,13 21,19 27,24 33,27" fill="none" stroke="#1D9E75" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="9,11 15,15 21,21 27,25 33,27" fill="none" stroke="#5DCAA5" stroke-width="1"   stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
            <polyline points="9,8  15,12 21,18 27,23 33,26" fill="none" stroke="#EF9F27" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="9,13 15,17 21,22 27,26 33,27" fill="none" stroke="#FAC775" stroke-width="1"   stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
            <line x1="9" y1="27" x2="35" y2="27" stroke="#888" stroke-width="0.6" stroke-dasharray="2 1.5"/>
            <text x="34" y="38" text-anchor="end" font-size="4" fill="#888" font-family="monospace">Quarto/R</text>
          </svg>
        </div>
        <div><p class="tool-name">Analysis</p><p class="tool-tag">Quarto R panel reporting</p></div>
      </div>
      <p class="tool-desc">A Quarto R report template for panel-level qualification reporting. Generates audiogram overlays, threshold distribution plots, and pass/fail summaries across assessors. Reports render to HTML and PNG for archival and review by the evaluation team.</p>
      <div class="tool-pills"><span class="pill">Quarto</span><span class="pill">ggplot2</span><span class="pill">Audiogram overlay</span><span class="pill">PNG export</span></div>
    </div>

  </div>

  <!-- Ending -->
  <div class="qp-end">
    <h2 class="qp-section-title">Design rationale</h2>
    <div class="qp-end-grid">
      <div class="end-card">
        <p class="end-card-label">Zero deployment</p>
        <p class="end-card-text">No server provisioning, no software installation on assessor machines. The full screening session runs in any modern browser, which makes remote and distributed qualification practical without IT coordination.</p>
      </div>
      <div class="end-card">
        <p class="end-card-label">Reproducible stimuli</p>
        <p class="end-card-text">SVG-based visual plates and Web Audio API tone synthesis produce identical stimuli across sessions independent of display hardware, audio drivers, or operating system. No raster assets, no playback variability.</p>
      </div>
      <div class="end-card">
        <p class="end-card-label">Adaptive efficiency</p>
        <p class="end-card-text">Staircase procedures throughout converge on individual perceptual thresholds without requiring fixed, exhaustive stimulus sets. Qualification sessions stay short while producing statistically grounded threshold estimates per assessor.</p>
      </div>
      <div class="end-card">
        <p class="end-card-label">Ecosystem fit</p>
        <p class="end-card-text">QUALIA sits deliberately between Power Platform (enrollment) and DOTTY (study execution). Qualification records flow downstream without manual handoff, keeping the panel lifecycle traceable from admission to test completion.</p>
      </div>
    </div>
    <p class="qp-closing">
      QUALIA is not intended for external use or commercial deployment.
      It is qualification infrastructure for the <span>GN Perceptual Evaluation Team</span>,
      supporting the panel lifecycle across listening and viewing research at Jabra.
    </p>
  </div>

</div>
