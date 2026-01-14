---
layout: distill
title: "Audio Quality Metrics: A Comprehensive Reference"
date: 2025-01-13
description: "Objective and subjective metrics for evaluating speech, music, and general audio quality with implementation resources"
tags: [living-note, auditory-perception, perceptual-evaluation]
categories: [research]

authors:
  - name: Randy F. Fela
    url: "https://fransfela.com"
    affiliations:
      name: GN Group, Denmark

toc:
  - name: Introduction
  - name: Objective Metrics
    subsections:
      - name: Speech Quality
      - name: Music Quality
      - name: General Audio
  - name: Subjective Metrics
    subsections:
      - name: Mean Opinion Score (MOS)
      - name: MUSHRA
  - name: Implementation Resources
  - name: References
---
> **Last updated:** {{ page.date | date: "%B %d, %Y" }}

## Introduction

Audio quality evaluation is fundamental to developing, optimizing, and validating audio systems. This living reference covers both **objective metrics** (computational algorithms) and **subjective metrics** (human perception-based) used across speech, music, and general audio domains.

> **Last updated:** {{ page.date | date: "%B %d, %Y" }}  
> **Status:** 🟢 Actively maintained

***

## Objective Metrics

Objective metrics provide automated, repeatable quality assessment without human listeners. These algorithms correlate with perceptual quality to varying degrees depending on the application.

### Speech Quality

#### PESQ (Perceptual Evaluation of Speech Quality)

**Description**  
PESQ is a widely adopted objective metric for assessing speech quality in telecommunications. It compares a degraded speech signal against a reference to produce a quality score.

**How It Works**  
1. Time-align reference and degraded signals
2. Apply perceptual frequency weighting (Bark scale)
3. Compute disturbance measures across time-frequency bins
4. Map disturbances to MOS-LQO (Listening Quality Objective) score

**Score Range**: -0.5 to 4.5 (higher is better)

**Use Cases**: VoIP systems, telephony codecs, narrow-band speech (300–3400 Hz)

**Limitations**: Not suitable for music, wideband speech, or modern codecs with packet loss concealment

**Open Libraries**
- [PESQ Python wrapper](https://github.com/ludlows/python-pesq)
- [pypesq](https://github.com/vBaiCai/python-pesq)

**Datasets**
- [ITU-T P.Sup23 Database](https://www.itu.int/rec/T-REC-P.Sup23) (subjective test results)
- [NOIZEUS Speech Corpus](https://ecs.utdallas.edu/loizou/speech/noizeus/) (noisy speech for testing)

**References**
- [ITU-T Recommendation P.862](https://www.itu.int/rec/T-REC-P.862)
- Rix, A. W., et al. (2001). [Perceptual evaluation of speech quality (PESQ) – a new method for speech quality assessment](https://ieeexplore.ieee.org/document/941023)

<div class="l-page">
  <iframe src="https://www.itu.int/rec/T-REC-P.862" frameborder='0' scrolling='yes' height="600px" width="100%"></iframe>
</div>

***

#### POLQA (Perceptual Objective Listening Quality Assessment)

**Description**  
POLQA is the successor to PESQ, designed for modern telecommunications including super-wideband (50–14000 Hz) and HD voice applications.

**How It Works**
1. Extract perceptual features from reference and degraded signals
2. Apply advanced time-alignment algorithms (handles delays, time warping)
3. Compute disturbance densities across frequency bands
4. Map to MOS-LQO using optimized neural network model

**Score Range**: 1.0 to 4.5 (MOS scale)

**Use Cases**: VoLTE, HD voice, wideband/super-wideband speech, 3G/4G/5G networks

**Advantages Over PESQ**: Better correlation with subjective quality for modern codecs, handles time-varying delays

**Open Libraries**  
POLQA is proprietary. Reference implementation available through [OPTICOM GmbH](https://www.opticom.de/products/polqa/)

**Datasets**
- [ITU-T P.Sup23 Database](https://www.itu.int/rec/T-REC-P.Sup23)
- [TCD-VoIP Database](https://sigmedia.tcd.ie/TCDVOIP/) (VoIP quality assessment)

**References**
- [ITU-T Recommendation P.863](https://www.itu.int/rec/T-REC-P.863)
- Beerends, J. G., et al. (2013). [Perceptual Objective Listening Quality Assessment (POLQA)](https://www.opticom.de/download/polqa_aes_paper.pdf)

***

#### STOI (Short-Time Objective Intelligibility)

**Description**  
STOI predicts speech intelligibility (how well speech can be understood) rather than quality. Particularly useful for hearing aid and noise suppression algorithm evaluation.

**How It Works**
1. Divide signals into short-time frames (384 ms analysis window)
2. Compute one-third octave band representation
3. Calculate correlation between clean and processed speech in each band
4. Average correlations to produce intelligibility score

**Score Range**: 0 to 1 (higher indicates better intelligibility)

**Use Cases**: Hearing aids, noise reduction, speech enhancement, cochlear implants

**Why Use STOI**: Outperforms PESQ and other quality metrics for intelligibility prediction in noisy/reverberant conditions

**Open Libraries**
- [pystoi (Python)](https://github.com/mpariente/pystoi)
- [STOI MATLAB](https://github.com/ceestkaal/matlab_code)

**Datasets**
- [Hurricane Challenge Database](http://www.ah-andersen.net/hurricane-challenge/) (noisy speech intelligibility)
- [TIMIT Acoustic-Phonetic Corpus](https://catalog.ldc.upenn.edu/LDC93S1)

**References**
- Taal, C. H., et al. (2011). [An Algorithm for Intelligibility Prediction of Time-Frequency Weighted Noisy Speech](https://ieeexplore.ieee.org/document/5713237)

***

### Music Quality

#### PEAQ (Perceptual Evaluation of Audio Quality)

**Description**  
PEAQ is the ITU-R standard for objective assessment of perceived audio quality, specifically designed for evaluating lossy audio codecs.

**How It Works**
1. Apply peripheral ear model (converts signal to internal representation)
2. Extract perceptual features: loudness, modulation, harmonic structure
3. Compute Model Output Variables (MOVs) capturing perceived distortion
4. Map MOVs to Objective Difference Grade (ODG) using neural network

**Score Range**: 0 (imperceptible) to -4 (very annoying)

**Use Cases**: Codec evaluation (MP3, AAC, Opus), audio streaming quality, archival systems

**Open Libraries**
- [GstPEAQ (GStreamer plugin)](https://github.com/HSU-ANT/gstpeaq)
- [PEAQ implementation research code](https://github.com/sergiogcharles/PEAQ)

**Datasets**
- [EBU SQAM (Sound Quality Assessment Material)](https://tech.ebu.ch/publications/sqamcd)
- [Audio Degradation Toolbox](https://code.soundsoftware.ac.uk/projects/audio-degradation-toolbox)

**References**
- [ITU-R Recommendation BS.1387-1](https://www.itu.int/rec/R-REC-BS.1387/)
- Thiede, T., et al. (2000). [PEAQ – The ITU Standard for Objective Measurement of Perceived Audio Quality](https://www.aes.org/e-lib/browse.cfm?elib=12078)

***

### General Audio

#### SNR (Signal-to-Noise Ratio)

**Description**  
SNR measures the ratio between desired signal power and background noise power. Simple but widely used baseline metric.

**How It Works**
1. Compute power of signal: \( P_{signal} \)
2. Compute power of noise: \( P_{noise} \)
3. Calculate ratio: \( SNR = 10 \log_{10} \frac{P_{signal}}{P_{noise}} \) (dB)

**Score Range**: Typically 0 to 100+ dB (higher is better)

**Use Cases**: Audio system characterization, codec benchmarking, microphone testing

**Limitations**: Poor correlation with perceptual quality; does not account for frequency masking, distortion type

**Open Libraries**  
Standard signal processing libraries (NumPy, SciPy, MATLAB Signal Processing Toolbox)

**References**
- Cherry, E. C. (1957). [On Human Communication](https://mitpress.mit.edu/9780262530606/on-human-communication/)

***

## Subjective Metrics

Subjective metrics involve human listeners rating audio quality under controlled conditions. These remain the gold standard for quality assessment.

### Mean Opinion Score (MOS)

**Description**  
MOS is the most fundamental subjective quality metric. Listeners rate audio samples on a discrete scale, and scores are averaged.

**How It Works**
1. Recruit representative listener panel (minimum 24 listeners per ITU-T P.800)
2. Present stimuli in controlled listening environment
3. Listeners rate quality on 5-point scale:
   - 5: Excellent
   - 4: Good
   - 3: Fair
   - 2: Poor
   - 1: Bad
4. Compute mean and confidence intervals

**Test Methods**
- **ACR (Absolute Category Rating)**: Rate single stimulus without reference
- **DCR (Degradation Category Rating)**: Rate degradation relative to reference
- **CCR (Comparison Category Rating)**: Compare two processed versions

**Use Cases**: Codec validation, system benchmarking, research studies

**Standards**
- [ITU-T Recommendation P.800](https://www.itu.int/rec/T-REC-P.800)
- [ITU-T Recommendation P.805](https://www.itu.int/rec/T-REC-P.805) (conversational tests)

**Open Tools**
- [BeaqleJS](https://github.com/HSU-ANT/beaqlejs) (browser-based listening test framework)
- [webMUSHRA](https://github.com/audiolabs/webMUSHRA)

**Datasets With MOS Scores**
- [NISQA Corpus](https://github.com/gabrielmittag/NISQA) (speech quality with MOS)
- [P.SAMOLED Database](https://www.itu.int/rec/T-REC-P.Sup23)

***

### MUSHRA (Multiple Stimuli with Hidden Reference and Anchor)

**Description**  
MUSHRA is an advanced subjective test method for evaluating intermediate to high-quality audio systems where small differences matter.

**How It Works**
1. Present hidden reference (unprocessed), multiple test conditions, and anchor (degraded reference)
2. Listeners rate all stimuli on continuous 0-100 scale
3. Hidden reference identifies unreliable listeners (should score near 100)
4. Anchor (typically 3.5 kHz low-pass) sets lower quality bound

**Score Range**: 0 to 100 (continuous scale)

**Use Cases**: Codec comparison (Opus, AAC variants), spatial audio evaluation, high-quality audio processing

**Advantages**: Detects small quality differences, includes validity checks (hidden reference/anchor)

**Standards**
- [ITU-R Recommendation BS.1534-3](https://www.itu.int/rec/R-REC-BS.1534/)

**Open Tools**
- [webMUSHRA](https://github.com/audiolabs/webMUSHRA) (full implementation)
- [BeaqleJS](https://github.com/HSU-ANT/beaqlejs) (supports MUSHRA-like tests)

**References**
- [ITU-R BS.1534-3 Specification](https://www.itu.int/rec/R-REC-BS.1534/)

***

## Implementation Resources

### Open-Source Toolkits

**Python**
- [PyAudioAnalysis](https://github.com/tyiannak/pyAudioAnalysis): Feature extraction and classification
- [librosa](https://librosa.org/): Music and audio analysis
- [pystoi](https://github.com/mpariente/pystoi): STOI implementation
- [python-pesq](https://github.com/ludlows/python-pesq): PESQ wrapper

**MATLAB**
- [Auditory Modeling Toolbox](http://amtoolbox.org/): Comprehensive psychoacoustic models
- [PEMO-Q](https://github.com/andresperezlopez/pemo-q): Perceptual evaluation model

**Web-Based**
- [BeaqleJS](https://github.com/HSU-ANT/beaqlejs): Browser listening tests
- [webMUSHRA](https://github.com/audiolabs/webMUSHRA): Online MUSHRA tests

### Public Datasets

| Dataset | Domain | MOS Available | Size | Access |
|---------|--------|---------------|------|--------|
| [NISQA Corpus](https://github.com/gabrielmittag/NISQA) | Speech | ✅ | 14K samples | Open |
| [NOIZEUS](https://ecs.utdallas.edu/loizou/speech/noizeus/) | Noisy Speech | ✅ | 30 speakers | Open |
| [EBU SQAM](https://tech.ebu.ch/publications/sqamcd) | Music | ❌ | 71 tracks | Open |
| [TIMIT](https://catalog.ldc.upenn.edu/LDC93S1) | Speech | ❌ | 6.3K utterances | Licensed |
| [DNS Challenge](https://github.com/microsoft/DNS-Challenge) | Speech Enhancement | Varies | 500+ hours | Open |

***

## When to Use What

<div class="fake-img l-body">
  <table style="width: 100%; border-collapse: collapse;">
    <thead>
      <tr style="background-color: var(--global-theme-color); color: white;">
        <th style="padding: 0.75rem; text-align: left;">Metric</th>
        <th style="padding: 0.75rem; text-align: center;">Speech</th>
        <th style="padding: 0.75rem; text-align: center;">Music</th>
        <th style="padding: 0.75rem; text-align: center;">Real-time</th>
        <th style="padding: 0.75rem; text-align: center;">Training Data</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid var(--global-divider-color);">PESQ</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">✅</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">❌</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">✅</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">❌</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid var(--global-divider-color);">POLQA</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">✅</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">❌</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">✅</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">❌</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid var(--global-divider-color);">STOI</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">✅</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">❌</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">✅</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">❌</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid var(--global-divider-color);">PEAQ</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">❌</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">✅</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">❌</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">❌</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem; border-bottom: 1px solid var(--global-divider-color);">MOS</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">✅</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">✅</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">❌</td>
        <td style="padding: 0.75rem; text-align: center; border-bottom: 1px solid var(--global-divider-color);">✅</td>
      </tr>
      <tr>
        <td style="padding: 0.75rem;">MUSHRA</td>
        <td style="padding: 0.75rem; text-align: center;">✅</td>
        <td style="padding: 0.75rem; text-align: center;">✅</td>
        <td style="padding: 0.75rem; text-align: center;">❌</td>
        <td style="padding: 0.75rem; text-align: center;">✅</td>
      </tr>
    </tbody>
  </table>
</div>

***

## Changelog

- **2025-01-13**: Initial comprehensive version with implementation resources
- **[Upcoming]**: Add deep learning based metrics (DNSMOS, ViSQOL)

***

<p style="text-align: center; margin-top: 3rem; font-style: italic; color: var(--global-text-color-light);">
  Found an error or want to suggest an addition? <a href="mailto:randyrff@gmail.com">Let me know</a>.
</p>
