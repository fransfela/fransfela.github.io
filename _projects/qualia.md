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
.qp { padding: 0.5rem 0 2rem; font-family: var(--font-sans); }
.qp-eye { font-size: 11px; font-weight: 500; color: var(--color-text-tertiary); text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.4rem; }
.qp-h1 { font-size: 22px; font-weight: 500; color: var(--color-text-primary); margin: 0 0 0.4rem; }
.qp-desc { font-size: 15px; line-height: 1.75; color: var(--color-text-secondary); margin: 0 0 1.2rem; }
.qp-badges { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 1.6rem; }
.bd { font-size: 11px; padding: 2px 8px; border-radius: 20px; border: 0.5px solid var(--color-border-secondary); color: var(--color-text-secondary); background: var(--color-background-secondary); font-family: var(--font-mono); }
.bd-teal { border-color: var(--color-border-success); color: var(--color-text-success); background: var(--color-background-success); }
.bd-amber { border-color: var(--color-border-warning); color: var(--color-text-warning); background: var(--color-background-warning); }
.eco { background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-lg); padding: 1.2rem 1.4rem; margin-bottom: 2rem; text-align: center; }
.eco-label { font-size: 11px; font-weight: 500; color: var(--color-text-tertiary); text-transform: uppercase; letter-spacing: 0.07em; margin: 0 0 1rem; }
.eco-pipe { display: flex; align-items: center; justify-content: center; gap: 0; flex-wrap: wrap; }
.pipe-node { display: flex; flex-direction: column; padding: 10px 18px; border-radius: 8px; border: 0.5px solid var(--color-border-secondary); background: var(--color-background-primary); min-width: 110px; text-align: center; }
.pipe-node-active { border-color: var(--color-border-success); background: var(--color-background-success); }
.pipe-label { font-size: 13px; font-weight: 500; color: var(--color-text-primary); }
.pipe-label-active { color: var(--color-text-success); }
.pipe-sub { font-size: 11px; color: var(--color-text-tertiary); margin-top: 3px; }
.pipe-sub-active { color: var(--color-text-success); opacity: 0.8; }
.pipe-arr { font-size: 16px; color: var(--color-text-tertiary); padding: 0 10px; }
.sec-title { font-size: 18px; font-weight: 500; color: var(--color-text-primary); margin: 0 0 1rem; padding-bottom: 0.5rem; border-bottom: 0.5px solid var(--color-border-tertiary); }
.tools-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
.tool-card { border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-lg); background: var(--color-background-secondary); padding: 1.2rem; display: flex; flex-direction: column; gap: 0.8rem; }
.tool-head { display: flex; align-items: center; gap: 0.8rem; }
.tool-icon { width: 40px; height: 40px; flex-shrink: 0; border-radius: 8px; border: 0.5px solid var(--color-border-tertiary); overflow: hidden; }
.tool-name { font-size: 15px; font-weight: 500; color: var(--color-text-primary); margin: 0; }
.tool-tag { font-size: 11px; color: var(--color-text-tertiary); margin: 2px 0 0; }
.tool-desc { font-size: 13px; line-height: 1.65; color: var(--color-text-secondary); margin: 0; }
.pills { display: flex; flex-wrap: wrap; gap: 4px; }
.pill { font-size: 10px; padding: 2px 7px; border-radius: 20px; border: 0.5px solid var(--color-border-tertiary); color: var(--color-text-tertiary); background: var(--color-background-primary); font-family: var(--font-mono); }
.end-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 0.8rem; margin: 1rem 0 1.4rem; }
.end-card { border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-md); background: var(--color-background-secondary); padding: 1rem 1.1rem; }
.end-label { font-size: 11px; font-weight: 500; color: var(--color-text-tertiary); text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 0.4rem; }
.end-text { font-size: 13px; line-height: 1.6; color: var(--color-text-secondary); margin: 0; }
.closing { border-top: 0.5px solid var(--color-border-tertiary); padding-top: 1rem; font-size: 13px; color: var(--color-text-tertiary); line-height: 1.6; }
.closing strong { color: var(--color-text-secondary); font-weight: 500; }
</style>

<div class="qp">
  <p class="qp-eye">GN &middot; Jabra &middot; Internal research tool</p>
  <h1 class="qp-h1">QUALIA Platform</h1>
  <p class="qp-desc">Browser-based platform for screening and qualifying human assessors before they join perceptual listening or viewing panels at GN. Runs entirely in-browser — no installation, no backend server. All test logic, stimulus generation, and response collection execute client-side.</p>
  <div class="qp-badges">
    <span class="bd bd-teal">Zero install</span>
    <span class="bd bd-teal">In-browser</span>
    <span class="bd bd-teal">Web Audio API</span>
    <span class="bd bd-amber">Adaptive staircase</span>
    <span class="bd bd-amber">2AFC / Triangle</span>
    <span class="bd">Quarto R</span>
    <span class="bd">SVG stimuli</span>
  </div>

  <div class="eco">
    <p class="eco-label">Three-layer ecosystem</p>
    <div class="eco-pipe">
      <div class="pipe-node">
        <span class="pipe-label">Power Platform</span>
        <span class="pipe-sub">Admin &amp; enrollment</span>
      </div>
      <span class="pipe-arr">&#8594;</span>
      <div class="pipe-node pipe-node-active">
        <span class="pipe-label pipe-label-active">QUALIA</span>
        <span class="pipe-sub pipe-sub-active">Screen &amp; qualify</span>
      </div>
      <span class="pipe-arr">&#8594;</span>
      <div class="pipe-node">
        <span class="pipe-label">DOTTY</span>
        <span class="pipe-sub">Run perceptual studies</span>
      </div>
    </div>
  </div>

  <h2 class="sec-title">Tools</h2>
  <div class="tools-grid">

    <div class="tool-card">
      <div class="tool-head">
        <div class="tool-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" fill="var(--color-background-success)"/>
            <line x1="5" y1="8" x2="5" y2="32" stroke="var(--color-border-success)" stroke-width="1"/>
            <line x1="5" y1="32" x2="36" y2="32" stroke="var(--color-border-success)" stroke-width="1"/>
            <line x1="6"  y1="32" x2="6"  y2="30" stroke="var(--color-text-success)" stroke-width="0.8" opacity="0.5"/>
            <line x1="12" y1="32" x2="12" y2="30" stroke="var(--color-text-success)" stroke-width="0.8" opacity="0.5"/>
            <line x1="18" y1="32" x2="18" y2="30" stroke="var(--color-text-success)" stroke-width="0.8" opacity="0.5"/>
            <line x1="24" y1="32" x2="24" y2="30" stroke="var(--color-text-success)" stroke-width="0.8" opacity="0.5"/>
            <line x1="30" y1="32" x2="30" y2="30" stroke="var(--color-text-success)" stroke-width="0.8" opacity="0.5"/>
            <line x1="34" y1="32" x2="34" y2="30" stroke="var(--color-text-success)" stroke-width="0.8" opacity="0.5"/>
            <polyline points="6,14 12,17 18,21 24,23 30,18 34,22" fill="none" stroke="var(--color-text-success)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="6"  cy="14" r="1.5" fill="none" stroke="var(--color-text-success)" stroke-width="1.2"/>
            <circle cx="12" cy="17" r="1.5" fill="none" stroke="var(--color-text-success)" stroke-width="1.2"/>
            <circle cx="18" cy="21" r="1.5" fill="none" stroke="var(--color-text-success)" stroke-width="1.2"/>
            <circle cx="24" cy="23" r="1.5" fill="none" stroke="var(--color-text-success)" stroke-width="1.2"/>
            <circle cx="30" cy="18" r="1.5" fill="none" stroke="var(--color-text-success)" stroke-width="1.2"/>
            <circle cx="34" cy="22" r="1.5" fill="none" stroke="var(--color-text-success)" stroke-width="1.2"/>
            <polyline points="6,18 12,20 18,25 24,27 30,23 34,26" fill="none" stroke="var(--color-text-warning)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 1.5"/>
            <text x="7" y="11" font-size="5" fill="var(--color-text-success)" font-family="monospace" opacity="0.9">dB HL</text>
          </svg>
        </div>
        <div>
          <p class="tool-name">AudiMap</p>
          <p class="tool-tag">Pure-tone audiometry</p>
        </div>
      </div>
      <p class="tool-desc">Estimates bilateral hearing thresholds using the Hughson-Westlake adaptive staircase. Tone generation is handled client-side via the Web Audio API. Results export as structured audiogram data for downstream panel reporting.</p>
      <div class="pills">
        <span class="pill">Hughson-Westlake</span>
        <span class="pill">Web Audio API</span>
        <span class="pill">250Hz–8kHz</span>
      </div>
    </div>

    <div class="tool-card">
      <div class="tool-head">
        <div class="tool-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" fill="var(--color-background-info)"/>
            <text x="20" y="12" text-anchor="middle" font-size="8" fill="var(--color-text-info)" font-family="monospace" font-weight="bold">E</text>
            <text x="14" y="19" text-anchor="middle" font-size="6" fill="var(--color-text-info)" font-family="monospace" font-weight="bold" opacity="0.85">&#x018E;</text>
            <text x="26" y="19" text-anchor="middle" font-size="6" fill="var(--color-text-info)" font-family="monospace" font-weight="bold" opacity="0.85">E</text>
            <text x="10" y="25" text-anchor="middle" font-size="5" fill="var(--color-text-info)" font-family="monospace" font-weight="bold" opacity="0.7">E</text>
            <text x="20" y="25" text-anchor="middle" font-size="5" fill="var(--color-text-info)" font-family="monospace" font-weight="bold" opacity="0.7">&#x018E;</text>
            <text x="30" y="25" text-anchor="middle" font-size="5" fill="var(--color-text-info)" font-family="monospace" font-weight="bold" opacity="0.7">E</text>
            <text x="8"  y="31" text-anchor="middle" font-size="3.5" fill="var(--color-text-info)" font-family="monospace" opacity="0.55">&#x018E;</text>
            <text x="15" y="31" text-anchor="middle" font-size="3.5" fill="var(--color-text-info)" font-family="monospace" opacity="0.55">E</text>
            <text x="22" y="31" text-anchor="middle" font-size="3.5" fill="var(--color-text-info)" font-family="monospace" opacity="0.55">&#x018E;</text>
            <text x="29" y="31" text-anchor="middle" font-size="3.5" fill="var(--color-text-info)" font-family="monospace" opacity="0.55">E</text>
            <text x="33" y="37" font-size="3.5" fill="var(--color-text-info)" font-family="monospace" opacity="0.7" text-anchor="end">logMAR</text>
          </svg>
        </div>
        <div>
          <p class="tool-name">AcuiScreen</p>
          <p class="tool-tag">Visual acuity screening</p>
        </div>
      </div>
      <p class="tool-desc">A launcher wrapper around FrACT10. Supports logMAR estimation, tumbling-E optotypes, and Landolt-C rings. Handles configuration, session flow, and result capture inside the QUALIA interface.</p>
      <div class="pills">
        <span class="pill">FrACT10</span>
        <span class="pill">logMAR</span>
        <span class="pill">tumbling-E</span>
        <span class="pill">Landolt-C</span>
      </div>
    </div>

    <div class="tool-card">
      <div class="tool-head">
        <div class="tool-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" fill="var(--color-background-secondary)"/>
            <circle cx="20" cy="20" r="15" fill="var(--color-background-primary)" stroke="var(--color-border-tertiary)" stroke-width="0.5"/>
            <circle cx="11" cy="14" r="2.2" fill="var(--color-text-tertiary)" opacity="0.35"/>
            <circle cx="16" cy="11" r="1.8" fill="var(--color-text-tertiary)" opacity="0.3"/>
            <circle cx="22" cy="10" r="2.5" fill="var(--color-text-tertiary)" opacity="0.35"/>
            <circle cx="28" cy="13" r="2"   fill="var(--color-text-tertiary)" opacity="0.3"/>
            <circle cx="31" cy="19" r="2.2" fill="var(--color-text-tertiary)" opacity="0.35"/>
            <circle cx="29" cy="25" r="1.8" fill="var(--color-text-tertiary)" opacity="0.3"/>
            <circle cx="23" cy="29" r="2.3" fill="var(--color-text-tertiary)" opacity="0.35"/>
            <circle cx="16" cy="29" r="2"   fill="var(--color-text-tertiary)" opacity="0.3"/>
            <circle cx="11" cy="25" r="2.2" fill="var(--color-text-tertiary)" opacity="0.35"/>
            <circle cx="9"  cy="19" r="1.8" fill="var(--color-text-tertiary)" opacity="0.3"/>
            <circle cx="20" cy="13" r="2.2" fill="var(--color-text-success)" opacity="0.9"/>
            <circle cx="24" cy="15" r="2"   fill="var(--color-text-success)" opacity="0.7"/>
            <circle cx="25" cy="20" r="2.3" fill="var(--color-text-success)" opacity="0.9"/>
            <circle cx="22" cy="24" r="2"   fill="var(--color-text-success)" opacity="0.7"/>
            <circle cx="17" cy="24" r="2.2" fill="var(--color-text-success)" opacity="0.9"/>
            <circle cx="15" cy="20" r="2"   fill="var(--color-text-success)" opacity="0.7"/>
            <circle cx="16" cy="16" r="2.3" fill="var(--color-text-success)" opacity="0.9"/>
            <circle cx="20" cy="20" r="2"   fill="var(--color-text-success)" opacity="0.75"/>
          </svg>
        </div>
        <div>
          <p class="tool-name">ColorScreen</p>
          <p class="tool-tag">Color vision screening</p>
        </div>
      </div>
      <p class="tool-desc">A color vision screener built around Ishihara-style plates generated as SVGs in the browser. Avoids raster image assets, ensuring reproducible stimulus presentation across display types and resolutions.</p>
      <div class="pills">
        <span class="pill">SVG plates</span>
        <span class="pill">Ishihara-style</span>
        <span class="pill">Client-side</span>
      </div>
    </div>

    <div class="tool-card">
      <div class="tool-head">
        <div class="tool-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" fill="var(--color-background-success)"/>
            <rect x="4" y="7" width="14" height="12" rx="2" fill="var(--color-background-primary)" stroke="var(--color-border-success)" stroke-width="0.5"/>
            <rect x="22" y="7" width="14" height="12" rx="2" fill="var(--color-background-primary)" stroke="var(--color-border-success)" stroke-width="0.5"/>
            <polyline points="5,13 7,10 9,13 11,10 13,13 15,10 17,13" fill="none" stroke="var(--color-text-success)" stroke-width="0.9"/>
            <polyline points="23,13 25,9 27,14 29,10 31,12 33,9 35,13" fill="none" stroke="var(--color-text-warning)" stroke-width="0.9"/>
            <text x="11" y="23" text-anchor="middle" font-size="5" fill="var(--color-text-success)" font-family="monospace" font-weight="500">A</text>
            <text x="29" y="23" text-anchor="middle" font-size="5" fill="var(--color-text-warning)" font-family="monospace" font-weight="500">B</text>
            <polyline points="4,37 8,34 12,37 16,34 20,35 24,33 28,34 32,33 36,33" fill="none" stroke="var(--color-text-success)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="4" y1="33" x2="36" y2="33" stroke="var(--color-border-success)" stroke-width="0.5" stroke-dasharray="2 2"/>
          </svg>
        </div>
        <div>
          <p class="tool-name">AuQAS</p>
          <p class="tool-tag">Audio quality adaptive screening</p>
        </div>
      </div>
      <p class="tool-desc">Estimates a candidate's sensitivity to audio degradation using 2AFC and Triangle test paradigms. The staircase procedure is configurable in step size, reversal count, and starting level.</p>
      <div class="pills">
        <span class="pill">2AFC</span>
        <span class="pill">Triangle test</span>
        <span class="pill">Adaptive staircase</span>
      </div>
    </div>

    <div class="tool-card">
      <div class="tool-head">
        <div class="tool-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" fill="var(--color-background-warning)"/>
            <rect x="3" y="7" width="15" height="11" rx="2" fill="var(--color-background-primary)" stroke="var(--color-border-warning)" stroke-width="0.5"/>
            <rect x="22" y="7" width="15" height="11" rx="2" fill="var(--color-background-primary)" stroke="var(--color-border-warning)" stroke-width="0.5"/>
            <line x1="5"  y1="12" x2="16" y2="12" stroke="var(--color-text-secondary)" stroke-width="0.6" opacity="0.6"/>
            <line x1="5"  y1="10" x2="11" y2="10" stroke="var(--color-text-secondary)" stroke-width="0.6" opacity="0.4"/>
            <rect x="8"  y="8"  width="4" height="3" rx="0.5" fill="var(--color-text-secondary)" opacity="0.3"/>
            <rect x="23" y="8"  width="3" height="3" fill="var(--color-text-warning)" opacity="0.5"/>
            <rect x="26" y="8"  width="3" height="3" fill="var(--color-background-secondary)" opacity="0.9"/>
            <rect x="29" y="8"  width="3" height="3" fill="var(--color-text-warning)" opacity="0.3"/>
            <rect x="23" y="11" width="3" height="3" fill="var(--color-background-secondary)" opacity="0.9"/>
            <rect x="26" y="11" width="3" height="3" fill="var(--color-text-warning)" opacity="0.6"/>
            <rect x="29" y="11" width="3" height="3" fill="var(--color-background-secondary)" opacity="0.7"/>
            <rect x="32" y="8"  width="4" height="6" fill="var(--color-text-warning)" opacity="0.35"/>
            <text x="4" y="25" font-size="4" fill="var(--color-text-warning)" font-family="monospace" opacity="0.9">CRF</text>
            <polyline points="8,36 10,31 14,36 18,31 22,33 26,29 30,30 34,29" fill="none" stroke="var(--color-text-warning)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="8" y1="29" x2="35" y2="29" stroke="var(--color-border-warning)" stroke-width="0.5" stroke-dasharray="2 2"/>
          </svg>
        </div>
        <div>
          <p class="tool-name">ViQAS</p>
          <p class="tool-tag">Video compression threshold screening</p>
        </div>
      </div>
      <p class="tool-desc">A 2AFC descending staircase over H.264 Constant Rate Factor levels. Candidates compare compressed and reference video clips to identify the degraded stimulus. The procedure converges on a per-assessor compression visibility threshold.</p>
      <div class="pills">
        <span class="pill">2AFC</span>
        <span class="pill">H.264 CRF</span>
        <span class="pill">Descending staircase</span>
      </div>
    </div>

    <div class="tool-card">
      <div class="tool-head">
        <div class="tool-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" fill="var(--color-background-primary)"/>
            <rect x="5" y="5" width="30" height="28" rx="2" fill="var(--color-background-secondary)" stroke="var(--color-border-tertiary)" stroke-width="0.5"/>
            <line x1="5"  y1="13" x2="35" y2="13" stroke="var(--color-border-tertiary)" stroke-width="0.5"/>
            <line x1="5"  y1="21" x2="35" y2="21" stroke="var(--color-border-tertiary)" stroke-width="0.5"/>
            <line x1="9"  y1="5"  x2="9"  y2="33" stroke="var(--color-border-secondary)" stroke-width="0.7"/>
            <line x1="9"  y1="33" x2="35" y2="33" stroke="var(--color-border-secondary)" stroke-width="0.7"/>
            <polyline points="9,9  15,13 21,19 27,24 33,27" fill="none" stroke="var(--color-text-success)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="9,11 15,15 21,21 27,25 33,27" fill="none" stroke="var(--color-text-success)" stroke-width="1"   stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
            <polyline points="9,8  15,12 21,18 27,23 33,26" fill="none" stroke="var(--color-text-warning)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="9,13 15,17 21,22 27,26 33,27" fill="none" stroke="var(--color-text-warning)" stroke-width="1"   stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
            <line x1="9" y1="27" x2="35" y2="27" stroke="var(--color-text-tertiary)" stroke-width="0.6" stroke-dasharray="2 1.5"/>
            <text x="34" y="38" text-anchor="end" font-size="4" fill="var(--color-text-tertiary)" font-family="monospace">Quarto/R</text>
          </svg>
        </div>
        <div>
          <p class="tool-name">Analysis</p>
          <p class="tool-tag">Quarto R panel reporting</p>
        </div>
      </div>
      <p class="tool-desc">A Quarto R report template for panel-level qualification reporting. Generates audiogram overlays, threshold distribution plots, and pass/fail summaries. Reports render to HTML and PNG for archival and team review.</p>
      <div class="pills">
        <span class="pill">Quarto</span>
        <span class="pill">ggplot2</span>
        <span class="pill">Audiogram overlay</span>
        <span class="pill">PNG export</span>
      </div>
    </div>

  </div>

  <h2 class="sec-title">Design rationale</h2>
  <div class="end-grid">
    <div class="end-card">
      <p class="end-label">Zero deployment</p>
      <p class="end-text">No server provisioning, no software installation on assessor machines. The full screening session runs in any modern browser, making remote qualification practical without IT coordination.</p>
    </div>
    <div class="end-card">
      <p class="end-label">Reproducible stimuli</p>
      <p class="end-text">SVG-based visual plates and Web Audio API tone synthesis produce identical stimuli across sessions, independent of display hardware, audio drivers, or operating system.</p>
    </div>
    <div class="end-card">
      <p class="end-label">Adaptive efficiency</p>
      <p class="end-text">Staircase procedures converge on individual perceptual thresholds without requiring fixed stimulus sets, keeping sessions short while producing statistically grounded threshold estimates.</p>
    </div>
    <div class="end-card">
      <p class="end-label">Ecosystem fit</p>
      <p class="end-text">QUALIA sits between Power Platform and DOTTY. Qualification records flow downstream without manual handoff, keeping the panel lifecycle traceable from admission to study completion.</p>
    </div>
  </div>

  <div class="closing">
    Internal tool, no public repository. Built for the <strong>GN Perceptual Evaluation Team</strong> to support the panel qualification lifecycle across listening and viewing research at Jabra.
  </div>
</div>
