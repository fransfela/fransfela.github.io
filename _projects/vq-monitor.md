---
layout: page
title: vq_monitor
description: Real-time video quality monitoring tool with 25 perceptual metrics, spatial heatmap, and scenario testing engine.
img: assets/img/vq-monitor-thumb.png
importance: 2
category: work
related_publications: false
---

<style>
.vq { padding: 0.5rem 0 2rem; font-family: var(--font-sans); }
.vq-eye { font-size: 11px; font-weight: 500; color: var(--color-text-tertiary); text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.3rem; }
.vq-h1 { font-size: 22px; font-weight: 500; color: var(--color-text-primary); margin: 0 0 0.2rem; }
.vq-h1 span { color: var(--color-text-success); }
.vq-tagline { font-size: 13px; color: var(--color-text-tertiary); margin: 0 0 1rem; font-family: var(--font-mono); }
.vq-badges { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 1.6rem; }
.bd { font-size: 10px; padding: 2px 8px; border-radius: 20px; border: 0.5px solid var(--color-border-secondary); color: var(--color-text-secondary); background: var(--color-background-secondary); font-family: var(--font-mono); }
.bd-g { border-color: var(--color-border-success); color: var(--color-text-success); background: var(--color-background-success); }
.bd-a { border-color: var(--color-border-warning); color: var(--color-text-warning); background: var(--color-background-warning); }
.mockup { border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-lg); overflow: hidden; margin-bottom: 1.8rem; }
.mock-bar { display: flex; align-items: center; gap: 6px; padding: 7px 12px; border-bottom: 0.5px solid var(--color-border-tertiary); background: var(--color-background-secondary); }
.dot { width: 8px; height: 8px; border-radius: 50%; }
.mock-url { font-size: 10px; font-family: var(--font-mono); color: var(--color-text-tertiary); margin: 0 auto; }
.mock-live { display: flex; align-items: center; gap: 4px; font-size: 10px; font-weight: 500; color: var(--color-text-danger); }
.live-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--color-text-danger); animation: pulse 1.2s ease-in-out infinite; }
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.25} }
.mock-panels { display: grid; grid-template-columns: 1fr 1fr 1fr; }
.mpanel { padding: 12px; border-right: 0.5px solid var(--color-border-tertiary); background: var(--color-background-primary); }
.mpanel:last-child { border-right: none; }
.mpanel-lbl { font-size: 10px; color: var(--color-text-tertiary); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; font-family: var(--font-mono); }
.mrow { display: flex; align-items: center; gap: 6px; margin-bottom: 5px; }
.mname { font-size: 10px; color: var(--color-text-secondary); font-family: var(--font-mono); width: 62px; flex-shrink: 0; }
.mbar-bg { flex: 1; height: 3px; border-radius: 2px; background: var(--color-border-tertiary); overflow: hidden; }
.mbar-fill { height: 100%; border-radius: 2px; }
.mval { font-size: 10px; color: var(--color-text-tertiary); font-family: var(--font-mono); width: 32px; text-align: right; }
.heatmap { display: grid; grid-template-columns: repeat(8, 1fr); gap: 2px; }
.hm { aspect-ratio: 1; border-radius: 2px; }
.hm-ok   { background: var(--color-background-success); border: 0.5px solid var(--color-border-success); }
.hm-warn { background: var(--color-background-warning); border: 0.5px solid var(--color-border-warning); }
.hm-bad  { background: var(--color-background-danger);  border: 0.5px solid var(--color-border-danger); }
.hm-dim  { background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); opacity: 0.5; }
.legend { display: flex; gap: 8px; margin-top: 7px; }
.leg { display: flex; align-items: center; gap: 3px; font-size: 9px; color: var(--color-text-tertiary); font-family: var(--font-mono); }
.leg-dot { width: 7px; height: 7px; border-radius: 1px; }
.sc-phase { display: flex; flex-direction: column; gap: 5px; }
.sc-row { display: flex; align-items: center; gap: 6px; }
.sc-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
.sc-name { font-size: 10px; color: var(--color-text-secondary); font-family: var(--font-mono); flex: 1; }
.sc-status { font-size: 9px; padding: 1px 5px; border-radius: 10px; font-weight: 500; font-family: var(--font-mono); }
.ss-pass { background: var(--color-background-success); color: var(--color-text-success); border: 0.5px solid var(--color-border-success); }
.ss-run  { background: var(--color-background-info);    color: var(--color-text-info);    border: 0.5px solid var(--color-border-info); }
.ss-wait { background: var(--color-background-secondary); color: var(--color-text-tertiary); border: 0.5px solid var(--color-border-tertiary); }
.sc-criteria { margin-top: 8px; padding-top: 7px; border-top: 0.5px solid var(--color-border-tertiary); }
.sc-criteria-lbl { font-size: 9px; color: var(--color-text-tertiary); margin-bottom: 3px; }
.sc-criteria-code { font-size: 9px; font-family: var(--font-mono); color: var(--color-text-secondary); line-height: 1.7; }
.vq-body { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-bottom: 2rem; }
@media(max-width:580px){ .vq-body { grid-template-columns: 1fr; } .mock-panels { grid-template-columns: 1fr; } .mpanel { border-right: none; border-bottom: 0.5px solid var(--color-border-tertiary); } .mpanel:last-child { border-bottom: none; } }
.vq-p { font-size: 14px; line-height: 1.75; color: var(--color-text-secondary); margin: 0; }
.stack-wrap { border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-lg); padding: 1.1rem; background: var(--color-background-secondary); margin-bottom: 1.6rem; }
.stack-lbl { font-size: 11px; font-weight: 500; color: var(--color-text-tertiary); text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 0.7rem; }
.stack-pills { display: flex; flex-wrap: wrap; gap: 5px; }
.sp { font-size: 11px; font-family: var(--font-mono); padding: 3px 9px; border-radius: 20px; border: 0.5px solid var(--color-border-secondary); color: var(--color-text-secondary); background: var(--color-background-primary); }
.sp-g { border-color: var(--color-border-success); color: var(--color-text-success); background: var(--color-background-success); }
.sp-b { border-color: var(--color-border-info); color: var(--color-text-info); background: var(--color-background-info); }
.sp-a { border-color: var(--color-border-warning); color: var(--color-text-warning); background: var(--color-background-warning); }
.closing { border-top: 0.5px solid var(--color-border-tertiary); padding-top: 1rem; font-size: 13px; color: var(--color-text-tertiary); line-height: 1.6; }
.closing strong { color: var(--color-text-secondary); font-weight: 500; }
</style>

<div class="vq">
  <p class="vq-eye">GN &middot; Internal tool &middot; Python</p>
  <h1 class="vq-h1">vq<span>_monitor</span></h1>
  <p class="vq-tagline">Real-time video quality monitoring &mdash; 25 metrics &mdash; browser dashboard &mdash; scenario engine</p>
  <div class="vq-badges">
    <span class="bd bd-g">OpenCV</span>
    <span class="bd bd-g">FastAPI</span>
    <span class="bd bd-g">PyTorch</span>
    <span class="bd bd-g">WebSocket</span>
    <span class="bd bd-g">MJPEG</span>
    <span class="bd">NumPy</span>
    <span class="bd">BRISQUE</span>
    <span class="bd">SSIM</span>
    <span class="bd bd-a">YAML scenarios</span>
    <span class="bd bd-a">8x6 heatmap</span>
  </div>

  <div class="mockup">
    <div class="mock-bar">
      <span class="dot" style="background:var(--color-text-danger);opacity:0.7;"></span>
      <span class="dot" style="background:var(--color-text-warning);opacity:0.7;"></span>
      <span class="dot" style="background:var(--color-text-success);opacity:0.7;"></span>
      <span class="mock-url">vq_monitor &mdash; localhost:8000</span>
      <span class="mock-live"><span class="live-dot"></span>LIVE</span>
    </div>
    <div class="mock-panels">
      <div class="mpanel">
        <div class="mpanel-lbl">Frame metrics</div>
        <div class="mrow"><span class="mname">brightness</span><div class="mbar-bg"><div class="mbar-fill" style="width:71%;background:var(--color-text-success);"></div></div><span class="mval">0.71</span></div>
        <div class="mrow"><span class="mname">sharpness</span><div class="mbar-bg"><div class="mbar-fill" style="width:58%;background:var(--color-text-success);"></div></div><span class="mval">0.58</span></div>
        <div class="mrow"><span class="mname">noise</span><div class="mbar-bg"><div class="mbar-fill" style="width:12%;background:var(--color-text-warning);"></div></div><span class="mval">0.12</span></div>
        <div class="mrow"><span class="mname">contrast</span><div class="mbar-bg"><div class="mbar-fill" style="width:83%;background:var(--color-text-success);"></div></div><span class="mval">0.83</span></div>
        <div class="mrow"><span class="mname">BRISQUE</span><div class="mbar-bg"><div class="mbar-fill" style="width:34%;background:var(--color-text-success);"></div></div><span class="mval">34.1</span></div>
        <div class="mrow"><span class="mname">SSIM</span><div class="mbar-bg"><div class="mbar-fill" style="width:91%;background:var(--color-text-success);"></div></div><span class="mval">0.91</span></div>
        <div class="mrow"><span class="mname">flicker</span><div class="mbar-bg"><div class="mbar-fill" style="width:4%;background:var(--color-text-success);"></div></div><span class="mval">0.04</span></div>
        <div class="mrow"><span class="mname">freeze</span><div class="mbar-bg"><div class="mbar-fill" style="width:0%;"></div></div><span class="mval" style="color:var(--color-text-success);">none</span></div>
      </div>

      <div class="mpanel">
        <div class="mpanel-lbl">Spatial heatmap (8x6)</div>
        <div class="heatmap">
          <div class="hm hm-ok"></div><div class="hm hm-ok"></div><div class="hm hm-dim"></div><div class="hm hm-warn"></div><div class="hm hm-ok"></div><div class="hm hm-dim"></div><div class="hm hm-ok"></div><div class="hm hm-ok"></div>
          <div class="hm hm-dim"></div><div class="hm hm-ok"></div><div class="hm hm-warn"></div><div class="hm hm-bad"></div><div class="hm hm-bad"></div><div class="hm hm-warn"></div><div class="hm hm-ok"></div><div class="hm hm-dim"></div>
          <div class="hm hm-ok"></div><div class="hm hm-warn"></div><div class="hm hm-bad"></div><div class="hm hm-bad"></div><div class="hm hm-bad"></div><div class="hm hm-warn"></div><div class="hm hm-ok"></div><div class="hm hm-ok"></div>
          <div class="hm hm-dim"></div><div class="hm hm-ok"></div><div class="hm hm-warn"></div><div class="hm hm-bad"></div><div class="hm hm-warn"></div><div class="hm hm-ok"></div><div class="hm hm-dim"></div><div class="hm hm-ok"></div>
          <div class="hm hm-ok"></div><div class="hm hm-dim"></div><div class="hm hm-ok"></div><div class="hm hm-dim"></div><div class="hm hm-ok"></div><div class="hm hm-dim"></div><div class="hm hm-ok"></div><div class="hm hm-dim"></div>
          <div class="hm hm-dim"></div><div class="hm hm-ok"></div><div class="hm hm-dim"></div><div class="hm hm-ok"></div><div class="hm hm-dim"></div><div class="hm hm-ok"></div><div class="hm hm-dim"></div><div class="hm hm-ok"></div>
        </div>
        <div class="legend">
          <span class="leg"><span class="leg-dot hm-ok"></span>ok</span>
          <span class="leg"><span class="leg-dot hm-warn"></span>warn</span>
          <span class="leg"><span class="leg-dot hm-bad"></span>issue</span>
          <span class="leg"><span class="leg-dot hm-dim"></span>dim</span>
        </div>
      </div>

      <div class="mpanel">
        <div class="mpanel-lbl">Scenario engine</div>
        <div class="sc-phase">
          <div class="sc-row"><span class="sc-dot" style="background:var(--color-text-success);"></span><span class="sc-name">baseline_60s</span><span class="sc-status ss-pass">PASS</span></div>
          <div class="sc-row"><span class="sc-dot" style="background:var(--color-text-success);"></span><span class="sc-name">low_light</span><span class="sc-status ss-pass">PASS</span></div>
          <div class="sc-row"><span class="sc-dot" style="background:var(--color-text-info);"></span><span class="sc-name">motion_stress</span><span class="sc-status ss-run">RUNNING</span></div>
          <div class="sc-row"><span class="sc-dot" style="background:var(--color-border-secondary);"></span><span class="sc-name">compression_hi</span><span class="sc-status ss-wait">WAITING</span></div>
          <div class="sc-row"><span class="sc-dot" style="background:var(--color-border-secondary);"></span><span class="sc-name">recovery_check</span><span class="sc-status ss-wait">WAITING</span></div>
        </div>
        <div class="sc-criteria">
          <div class="sc-criteria-lbl">Active phase criteria</div>
          <div class="sc-criteria-code">sharpness &gt; 0.40<br>BRISQUE &lt; 50<br>freeze_detected: false</div>
        </div>
      </div>
    </div>
  </div>

  <div class="vq-body">
    <p class="vq-p"><code style="font-size:12px;color:var(--color-text-success);font-family:var(--font-mono);">vq_monitor</code> is a Python tool that captures video from a camera, file, RTSP stream, or screen recording, then computes a set of quality metrics on each frame and streams the results to a browser dashboard in real time. It was built to support video quality evaluation at GN, where there is a recurring need to monitor how a camera or codec behaves across different lighting, motion, or compression conditions without setting up a formal subjective study first.</p>
    <p class="vq-p">Each frame is scored across 25 metrics spanning perceptual and signal-level dimensions: brightness, sharpness, noise, contrast, flicker, freeze detection, face-area quality, BRISQUE, and SSIM against a reference frame. Spatial issues are localised using an 8x6 grid heatmap that flags which regions of the frame are degraded, rather than collapsing everything into a single number.</p>
    <p class="vq-p">The architecture is straightforward. OpenCV handles capture and frame processing, PyTorch runs the BRISQUE model, and FastAPI serves both a WebSocket stream of metric data and an MJPEG video stream to the browser. The dashboard updates in real time without page refresh.</p>
    <p class="vq-p">A scenario testing engine allows structured test runs to be defined in YAML. Each scenario is a sequence of phases with a duration and a set of pass/fail criteria applied to the live metric stream. This makes it possible to run a repeatable test protocol and get a structured report at the end, rather than reviewing raw logs manually.</p>
  </div>

  <div class="stack-wrap">
    <p class="stack-lbl">Stack</p>
    <div class="stack-pills">
      <span class="sp sp-g">OpenCV</span>
      <span class="sp sp-g">FastAPI</span>
      <span class="sp sp-g">PyTorch</span>
      <span class="sp sp-g">NumPy</span>
      <span class="sp sp-b">WebSocket</span>
      <span class="sp sp-b">MJPEG</span>
      <span class="sp sp-a">BRISQUE</span>
      <span class="sp sp-a">SSIM</span>
      <span class="sp">YAML config</span>
      <span class="sp">RTSP / screen / file / camera</span>
    </div>
  </div>

  <div class="closing">
    Internal tool, no public repository. Built for the <strong>GN Perceptual Evaluation Team</strong> to support pre-study camera and codec assessment, scenario-based quality regression testing, and exploratory monitoring during hardware bring-up.
  </div>
</div>
