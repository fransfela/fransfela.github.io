---
layout: page
title: vq_monitor
description: Real-time video quality monitoring tool with 25 perceptual metrics, spatial heatmap, and scenario testing engine.
img: assets/img/vq-monitor-thumb.png
importance: 2
category: internal tools
related_publications: false
---
<style>
  :root {
    --teal: #1D9E75; --teal-light: #9FE1CB; --teal-dim: #085041;
    --amber: #EF9F27; --amber-dim: #633806; --amber-light: #FAC775;
    --card-border: var(--color-border-tertiary); --radius: var(--border-radius-lg);
  }
  .vq-wrap { padding: 0.5rem 0 2rem; font-family: var(--font-sans); }
  .vq-eyebrow { font-size:11px; font-weight:500; color:var(--color-text-tertiary); text-transform:uppercase; letter-spacing:0.08em; margin:0 0 0.4rem; }
  .vq-title { font-size:26px; font-weight:500; color:var(--color-text-primary); margin:0 0 0.3rem; letter-spacing:-0.01em; }
  .vq-title span { color: var(--teal); }
  .vq-tagline { font-size:13px; color:var(--color-text-tertiary); margin:0 0 1.2rem; }
  .vq-badges { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:1.6rem; }
  .badge { font-size:10px; padding:2px 8px; border-radius:20px; border:1px solid var(--card-border); color:var(--color-text-secondary); background:var(--color-background-secondary); font-family:var(--font-mono); }
  .badge.g { border-color:var(--teal); color:var(--teal-dim); background:#E1F5EE; }
  .badge.a { border-color:#BA7517; color:var(--amber-dim); background:#FAEEDA; }
  @media(prefers-color-scheme:dark){
    .badge.g{color:var(--teal-light);background:#04342C;border-color:#0F6E56;}
    .badge.a{color:var(--amber-light);background:#412402;border-color:#854F0B;}
  }

  /* Live monitor mockup */
  .vq-mockup { border:1px solid var(--card-border); border-radius:var(--radius); overflow:hidden; margin-bottom:1.8rem; background:var(--color-background-secondary); }
  .vq-mock-bar { display:flex; align-items:center; gap:6px; padding:8px 12px; border-bottom:1px solid var(--card-border); background:var(--color-background-primary); }
  .dot { width:8px; height:8px; border-radius:50%; }
  .dot.r{background:#E24B4A;} .dot.y{background:#EF9F27;} .dot.g{background:#639922;}
  .vq-mock-title { font-size:11px; color:var(--color-text-tertiary); font-family:var(--font-mono); margin-left:4px; }
  .vq-mock-live { margin-left:auto; display:flex; align-items:center; gap:4px; font-size:10px; color:#E24B4A; font-weight:500; }
  .live-dot { width:6px; height:6px; border-radius:50%; background:#E24B4A; animation: pulse 1.2s ease-in-out infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  .vq-mock-body { display:grid; grid-template-columns:1fr 1fr 1fr; gap:0; }
  .mock-panel { padding:12px; border-right:1px solid var(--card-border); }
  .mock-panel:last-child { border-right:none; }
  .mock-panel-label { font-size:10px; color:var(--color-text-tertiary); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:8px; }

  /* Metric bars */
  .metric-row { display:flex; align-items:center; gap:6px; margin-bottom:5px; }
  .metric-name { font-size:10px; color:var(--color-text-secondary); font-family:var(--font-mono); width:64px; flex-shrink:0; }
  .metric-bar-bg { flex:1; height:4px; border-radius:2px; background:var(--color-border-tertiary); overflow:hidden; }
  .metric-bar-fill { height:100%; border-radius:2px; }
  .metric-val { font-size:10px; color:var(--color-text-tertiary); font-family:var(--font-mono); width:30px; text-align:right; }

  /* Heatmap grid 8x6 */
  .heatmap { display:grid; grid-template-columns:repeat(8,1fr); gap:2px; }
  .hm-cell { aspect-ratio:1; border-radius:2px; }

  /* Scenario engine */
  .scenario-phase { display:flex; flex-direction:column; gap:4px; }
  .phase-row { display:flex; align-items:center; gap:6px; font-size:10px; }
  .phase-dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
  .phase-name { color:var(--color-text-secondary); font-family:var(--font-mono); flex:1; }
  .phase-status { font-size:9px; padding:1px 5px; border-radius:10px; font-weight:500; }
  .ps-pass { background:#EAF3DE; color:#3B6D11; border:1px solid #97C459; }
  .ps-run  { background:#E1F5EE; color:#0F6E56; border:1px solid #1D9E75; }
  .ps-wait { background:var(--color-background-primary); color:var(--color-text-tertiary); border:1px solid var(--card-border); }
  @media(prefers-color-scheme:dark){
    .ps-pass{background:#173404;color:#C0DD97;border-color:#639922;}
    .ps-run{background:#04342C;color:var(--teal-light);border-color:#0F6E56;}
  }

  /* Body text */
  .vq-body { display:grid; grid-template-columns:1fr 1fr; gap:1.2rem; margin-bottom:2rem; }
  @media(max-width:600px){ .vq-body { grid-template-columns:1fr; } }
  .vq-body-full { margin-bottom:2rem; }
  .vq-p { font-size:14px; line-height:1.75; color:var(--color-text-secondary); margin:0; }

  /* Stack section */
  .vq-stack { border:1px solid var(--card-border); border-radius:var(--radius); padding:1.2rem; background:var(--color-background-secondary); margin-bottom:1.8rem; }
  .vq-stack-title { font-size:11px; font-weight:500; color:var(--color-text-tertiary); text-transform:uppercase; letter-spacing:0.06em; margin:0 0 0.8rem; }
  .stack-grid { display:flex; flex-wrap:wrap; gap:6px; }
  .stack-item { display:flex; align-items:center; gap:5px; font-size:11px; color:var(--color-text-secondary); background:var(--color-background-primary); border:1px solid var(--card-border); border-radius:6px; padding:4px 9px; }
  .stack-dot { width:6px; height:6px; border-radius:50%; }

  /* Closing -->
  .vq-close { border-top:1px solid var(--card-border); padding-top:1rem; display:flex; align-items:baseline; gap:0.5rem; }
  .vq-close-note { font-size:12px; color:var(--color-text-tertiary); line-height:1.6; }
  .vq-close-note strong { color:var(--color-text-secondary); font-weight:500; }
</style>

<div class="vq-wrap">

  <p class="vq-eyebrow">GN &middot; Internal Tool &middot; Python</p>
  <h1 class="vq-title">vq<span>_monitor</span></h1>
  <p class="vq-tagline">Real-time video quality monitoring with live browser dashboard, 25 perceptual metrics, and scenario testing.</p>
  <div class="vq-badges">
    <span class="badge g">OpenCV</span>
    <span class="badge g">FastAPI</span>
    <span class="badge g">PyTorch</span>
    <span class="badge g">WebSocket</span>
    <span class="badge g">MJPEG</span>
    <span class="badge">NumPy</span>
    <span class="badge">BRISQUE</span>
    <span class="badge">SSIM</span>
    <span class="badge a">YAML scenarios</span>
    <span class="badge a">8x6 heatmap</span>
  </div>

  <!-- Live mockup -->
  <div class="vq-mockup">
    <div class="vq-mock-bar">
      <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
      <span class="vq-mock-title">vq_monitor &mdash; dashboard &mdash; localhost:8000</span>
      <span class="vq-mock-live"><span class="live-dot"></span>LIVE</span>
    </div>
    <div class="vq-mock-body">

      <!-- Panel 1: metrics -->
      <div class="mock-panel">
        <div class="mock-panel-label">Frame metrics</div>
        <div class="metric-row"><span class="metric-name">brightness</span><div class="metric-bar-bg"><div class="metric-bar-fill" style="width:71%;background:#1D9E75;"></div></div><span class="metric-val">0.71</span></div>
        <div class="metric-row"><span class="metric-name">sharpness</span><div class="metric-bar-bg"><div class="metric-bar-fill" style="width:58%;background:#1D9E75;"></div></div><span class="metric-val">0.58</span></div>
        <div class="metric-row"><span class="metric-name">noise</span><div class="metric-bar-bg"><div class="metric-bar-fill" style="width:12%;background:#EF9F27;"></div></div><span class="metric-val">0.12</span></div>
        <div class="metric-row"><span class="metric-name">contrast</span><div class="metric-bar-bg"><div class="metric-bar-fill" style="width:83%;background:#1D9E75;"></div></div><span class="metric-val">0.83</span></div>
        <div class="metric-row"><span class="metric-name">BRISQUE</span><div class="metric-bar-bg"><div class="metric-bar-fill" style="width:34%;background:#1D9E75;"></div></div><span class="metric-val">34.1</span></div>
        <div class="metric-row"><span class="metric-name">SSIM</span><div class="metric-bar-bg"><div class="metric-bar-fill" style="width:91%;background:#1D9E75;"></div></div><span class="metric-val">0.91</span></div>
        <div class="metric-row"><span class="metric-name">flicker</span><div class="metric-bar-bg"><div class="metric-bar-fill" style="width:4%;background:#639922;"></div></div><span class="metric-val">0.04</span></div>
        <div class="metric-row"><span class="metric-name">freeze</span><div class="metric-bar-bg"><div class="metric-bar-fill" style="width:0%;background:#E24B4A;"></div></div><span class="metric-val">none</span></div>
      </div>

      <!-- Panel 2: heatmap -->
      <div class="mock-panel">
        <div class="mock-panel-label">Spatial heatmap (8x6)</div>
        <div class="heatmap">
          <!-- 48 cells, teal=good amber=warn red=issue -->
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.8"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.9"></div>
          <div class="hm-cell" style="background:#9FE1CB;opacity:0.7"></div>
          <div class="hm-cell" style="background:#EF9F27;opacity:0.6"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.85"></div>
          <div class="hm-cell" style="background:#9FE1CB;opacity:0.8"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.75"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.9"></div>

          <div class="hm-cell" style="background:#9FE1CB;opacity:0.7"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.8"></div>
          <div class="hm-cell" style="background:#EF9F27;opacity:0.7"></div>
          <div class="hm-cell" style="background:#E24B4A;opacity:0.7"></div>
          <div class="hm-cell" style="background:#E24B4A;opacity:0.6"></div>
          <div class="hm-cell" style="background:#EF9F27;opacity:0.65"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.8"></div>
          <div class="hm-cell" style="background:#9FE1CB;opacity:0.75"></div>

          <div class="hm-cell" style="background:#5DCAA5;opacity:0.85"></div>
          <div class="hm-cell" style="background:#EF9F27;opacity:0.5"></div>
          <div class="hm-cell" style="background:#E24B4A;opacity:0.75"></div>
          <div class="hm-cell" style="background:#E24B4A;opacity:0.85"></div>
          <div class="hm-cell" style="background:#E24B4A;opacity:0.8"></div>
          <div class="hm-cell" style="background:#EF9F27;opacity:0.6"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.8"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.9"></div>

          <div class="hm-cell" style="background:#9FE1CB;opacity:0.8"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.9"></div>
          <div class="hm-cell" style="background:#EF9F27;opacity:0.55"></div>
          <div class="hm-cell" style="background:#E24B4A;opacity:0.65"></div>
          <div class="hm-cell" style="background:#EF9F27;opacity:0.6"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.85"></div>
          <div class="hm-cell" style="background:#9FE1CB;opacity:0.75"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.8"></div>

          <div class="hm-cell" style="background:#5DCAA5;opacity:0.8"></div>
          <div class="hm-cell" style="background:#9FE1CB;opacity:0.7"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.85"></div>
          <div class="hm-cell" style="background:#9FE1CB;opacity:0.8"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.9"></div>
          <div class="hm-cell" style="background:#9FE1CB;opacity:0.75"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.8"></div>
          <div class="hm-cell" style="background:#9FE1CB;opacity:0.85"></div>

          <div class="hm-cell" style="background:#9FE1CB;opacity:0.75"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.9"></div>
          <div class="hm-cell" style="background:#9FE1CB;opacity:0.8"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.85"></div>
          <div class="hm-cell" style="background:#9FE1CB;opacity:0.7"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.9"></div>
          <div class="hm-cell" style="background:#9FE1CB;opacity:0.8"></div>
          <div class="hm-cell" style="background:#5DCAA5;opacity:0.75"></div>
        </div>
        <div style="display:flex;gap:8px;margin-top:8px;align-items:center;">
          <span style="display:flex;align-items:center;gap:3px;font-size:9px;color:var(--color-text-tertiary)"><span style="width:7px;height:7px;border-radius:1px;background:#5DCAA5;display:inline-block;"></span>normal</span>
          <span style="display:flex;align-items:center;gap:3px;font-size:9px;color:var(--color-text-tertiary)"><span style="width:7px;height:7px;border-radius:1px;background:#EF9F27;display:inline-block;"></span>warn</span>
          <span style="display:flex;align-items:center;gap:3px;font-size:9px;color:var(--color-text-tertiary)"><span style="width:7px;height:7px;border-radius:1px;background:#E24B4A;display:inline-block;"></span>issue</span>
        </div>
      </div>

      <!-- Panel 3: scenario -->
      <div class="mock-panel">
        <div class="mock-panel-label">Scenario engine</div>
        <div class="scenario-phase">
          <div class="phase-row">
            <span class="phase-dot" style="background:#639922;"></span>
            <span class="phase-name">baseline_60s</span>
            <span class="phase-status ps-pass">PASS</span>
          </div>
          <div class="phase-row">
            <span class="phase-dot" style="background:#639922;"></span>
            <span class="phase-name">low_light</span>
            <span class="phase-status ps-pass">PASS</span>
          </div>
          <div class="phase-row">
            <span class="phase-dot" style="background:#1D9E75;"></span>
            <span class="phase-name">motion_stress</span>
            <span class="phase-status ps-run">RUNNING</span>
          </div>
          <div class="phase-row">
            <span class="phase-dot" style="background:var(--color-border-secondary);"></span>
            <span class="phase-name">compression_high</span>
            <span class="phase-status ps-wait">WAITING</span>
          </div>
          <div class="phase-row">
            <span class="phase-dot" style="background:var(--color-border-secondary);"></span>
            <span class="phase-name">recovery_check</span>
            <span class="phase-status ps-wait">WAITING</span>
          </div>
        </div>
        <div style="margin-top:10px;padding-top:8px;border-top:1px solid var(--card-border);">
          <div style="font-size:9px;color:var(--color-text-tertiary);margin-bottom:4px;">Active phase criteria</div>
          <div style="font-size:9px;font-family:var(--font-mono);color:var(--color-text-secondary);line-height:1.6;">
            sharpness &gt; 0.4<br>
            BRISQUE &lt; 50<br>
            freeze_detected: false
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Body text -->
  <div class="vq-body">
    <p class="vq-p">
      <code style="font-size:12px;color:var(--teal);font-family:var(--font-mono);">vq_monitor</code> is a Python tool that captures video from a camera, file, RTSP stream, or screen recording, then computes a set of quality metrics on each frame and streams the results to a browser dashboard in real time. It was built to support video quality evaluation work at GN, where there is a recurring need to monitor how a camera or codec behaves across different lighting conditions, motion levels, or compression settings without setting up a formal subjective study first.
    </p>
    <p class="vq-p">
      Each frame is scored across 25 metrics spanning perceptual and signal-level dimensions: brightness, sharpness, noise, contrast, flicker, freeze detection, face-area quality, BRISQUE (a no-reference perceptual quality score), and SSIM against a reference frame, among others. Spatial issues are localised using an 8x6 grid heatmap that flags which regions of the frame are degraded, rather than collapsing everything into a single number.
    </p>
    <p class="vq-p">
      The architecture is straightforward. OpenCV handles capture and frame processing, PyTorch runs the BRISQUE model, and FastAPI serves both a WebSocket stream of metric data and an MJPEG video stream to the browser dashboard. The dashboard updates in real time without requiring a page refresh.
    </p>
    <p class="vq-p">
      A scenario testing engine allows structured test runs to be defined in YAML. Each scenario is a sequence of phases, each with a duration and a set of pass/fail criteria applied to the metric stream. This makes it possible to run a repeatable test protocol, for example: baseline, low-light, motion stress, high compression, recovery, and get a structured pass/fail report at the end rather than reviewing raw data manually.
    </p>
  </div>

  <!-- Stack -->
  <div class="vq-stack">
    <p class="vq-stack-title">Stack</p>
    <div class="stack-grid">
      <div class="stack-item"><span class="stack-dot" style="background:#1D9E75;"></span>OpenCV</div>
      <div class="stack-item"><span class="stack-dot" style="background:#1D9E75;"></span>FastAPI</div>
      <div class="stack-item"><span class="stack-dot" style="background:#1D9E75;"></span>PyTorch</div>
      <div class="stack-item"><span class="stack-dot" style="background:#1D9E75;"></span>NumPy</div>
      <div class="stack-item"><span class="stack-dot" style="background:#378ADD;"></span>WebSocket</div>
      <div class="stack-item"><span class="stack-dot" style="background:#378ADD;"></span>MJPEG</div>
      <div class="stack-item"><span class="stack-dot" style="background:#EF9F27;"></span>BRISQUE</div>
      <div class="stack-item"><span class="stack-dot" style="background:#EF9F27;"></span>SSIM</div>
      <div class="stack-item"><span class="stack-dot" style="background:#888;"></span>YAML config</div>
      <div class="stack-item"><span class="stack-dot" style="background:#888;"></span>RTSP / screen / file / camera</div>
    </div>
  </div>

  <div class="vq-close">
    <p class="vq-close-note">
      Internal tool. <strong>No public repository.</strong> Built for the GN Perceptual Evaluation Team to support pre-study camera and codec assessment, scenario-based quality regression testing, and exploratory monitoring during hardware bring-up.
    </p>
  </div>

</div>
