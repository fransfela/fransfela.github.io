---
layout: post
title: "Audio Quality Metrics: A Comprehensive Reference"
subtitle: "A Living Notebook"
date: 2025-01-14
description: "Structured guide to objective and subjective metrics for speech, music, and audio quality evaluation across diverse applications"
authors:
  - name: Randy Frans Fela
    url: "https://fransfela.github.io"
    affiliations:
      name: GN Group, Copenhagen
tags: [living-note, auditory-perception, perceptual-evaluation]
categories: [research]
giscus_comments: true
related_posts: false
toc:
  sidebar: left
---
<div class="authors">
  <div class="author">
    <strong>Randy Frans Fela</strong><br>
    <em>GN Group, Copenhagen</em><br>
    <a href="https://fransfela.github.io">fransfela.github.io</a>
  </div>
</div>
---

## Introduction

Audio quality evaluation spans multiple domains, each with specialized metrics designed for specific acoustic scenarios. This living reference consolidates metrics across speech processing, music analysis, spatial audio, and environmental soundscapes.

> **Last updated:** {{ page.date | date: "%B %d, %Y" }}  
> **Status:** 🟢 Actively maintained

## Speech Level Variation

Metrics for assessing speech level consistency and dynamics.

<details>
<summary><strong>Active Speech Level (ASL)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Measures the active speech level excluding pauses and silent segments.

**How it works:** Applies voice activity detection (VAD) to isolate speech regions, then calculates RMS level of active segments.

**Formula:**
$$
\text{ASL} = 10 \log_{10} \left( \frac{1}{N} \sum_{i=1}^{N} x_i^2 \right)
$$
where $$x_i$$ are active speech samples.

**Libraries:**
- Python: `pydub`, `librosa`
- MATLAB: Audio Toolbox

**References:**
- [ITU-T P.56: Objective measurement of active speech level](https://www.itu.int/rec/T-REC-P.56)

</div>
</details>

<details>
  <summary><strong>Loudness-html (ITU-R BS.1770)</strong></summary>

  <div style="padding:1rem; background-color:#f8f9fa; margin-top:0.5rem; border-left:3px solid #0d6efd;">
    <p><strong>Description:</strong> Perceptually weighted loudness measurement for broadcast audio.</p>

    <p><strong>How it works:</strong> Applies K-weighting filter to approximate human loudness perception, integrates over time.</p>

    <p><strong>Libraries:</strong></p>
    <ul>
      <li>Python: <code>pyloudnorm</code></li>
      <li>C++: <code>libebur128</code></li>
    </ul>

    <p><strong>Datasets:</strong></p>
    <ul>
      <li><a href="https://tech.ebu.ch/publications/tech3343">EBU Loudness Test Set</a></li>
    </ul>

    <p><strong>References:</strong></p>
    <ul>
      <li><a href="https://www.itu.int/rec/R-REC-BS.1770">ITU-R BS.1770-4</a></li>
    </ul>
  </div>
</details>

<details markdown="1">
<summary><strong>Loudness-markdown (ITU-R BS.1770)</strong></summary>

<div markdown="1">

**Description:** Perceptually weighted loudness measurement for broadcast audio.

**How it works:** Applies K-weighting filter to approximate human loudness perception.

**Libraries:**
- Python: `pyloudnorm`
- C++: `libebur128`

</div>
</details>

***

## Overall Audio Quality

Broad metrics for general audio fidelity.

<details>
<summary><strong>Signal-to-Noise Ratio (SNR)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Ratio of signal power to noise power, expressed in dB.

**How it works:**
$$
\text{SNR} = 10 \log_{10} \left( \frac{P_{\text{signal}}}{P_{\text{noise}}} \right)
$$

**Limitations:** Does not correlate well with perceptual quality.

**Libraries:**
- Python: `scipy.signal`, `numpy`
- MATLAB: Built-in `snr()` function

**References:**
- [IEEE Standard for Audio Quality Measurement](https://ieeexplore.ieee.org/document/8999518)

</div>
</details>

<details>
<summary><strong>Perceptual Evaluation of Audio Quality (PEAQ)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** ITU standard for objective audio quality measurement, designed for codec evaluation.

**How it works:** Psychoacoustic model comparing reference and degraded signals across frequency bands.

**Libraries:**
- C: [GstPEAQ (GStreamer plugin)](https://github.com/HSU-ANT/gstpeaq)
- MATLAB: Third-party implementations available

**Datasets:**
- [MUSHRA Test Corpus](https://www.audiolabs-erlangen.de/resources/MIR/2019-WASPAA-MUSHRA)

**References:**
- [ITU-R BS.1387-1: Method for objective measurements of perceived audio quality](https://www.itu.int/rec/R-REC-BS.1387)

</div>
</details>

***

## Speech Quality

Metrics specifically for telephony and VoIP.

<details>
<summary><strong>Perceptual Evaluation of Speech Quality (PESQ)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** ITU standard for predicting speech quality in telecom networks.

**How it works:** Time-aligned comparison of reference and degraded signals through perceptual model. Output: MOS-LQO (0.5 to 4.5 scale).

**Libraries:**
- Python: `pesq` (via pip)
- C: [Official ITU implementation](https://www.itu.int/rec/T-REC-P.862)

**Datasets:**
- [NOIZEUS Speech Corpus](https://ecs.utdallas.edu/loizou/speech/noizeus/)
- [TIMIT Acoustic-Phonetic Corpus](https://catalog.ldc.upenn.edu/LDC93S1)

**References:**
- [ITU-T P.862: Perceptual evaluation of speech quality (PESQ)](https://www.itu.int/rec/T-REC-P.862)
- Rix, A.W., et al. (2001). "Perceptual evaluation of speech quality (PESQ) – a new method for speech quality assessment of telephone networks and codecs"

</div>
</details>

<details>
<summary><strong>Perceptual Objective Listening Quality Assessment (POLQA)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Successor to PESQ, supporting wideband and super-wideband speech.

**How it works:** Advanced perceptual model with improved handling of time warping and codec artifacts.

**Libraries:**
- Commercial: [POLQA by OPTICOM](https://www.polqa.info/)
- Python: Limited open-source implementations

**References:**
- [ITU-T P.863: Perceptual objective listening quality assessment](https://www.itu.int/rec/T-REC-P.863)

</div>
</details>

***

## Speech Enhancement

Metrics for evaluating noise suppression and enhancement algorithms.

<details>
<summary><strong>Short-Time Objective Intelligibility (STOI)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Predicts speech intelligibility in noisy conditions.

**How it works:** Correlates time-frequency representations of clean and processed speech.

**Libraries:**
- Python: `pystoi`
- MATLAB: [STOI Toolbox](http://www.ceestaal.nl/code/)

**Datasets:**
- [LibriSpeech](https://www.openslr.org/12)
- [DNS Challenge Dataset](https://github.com/microsoft/DNS-Challenge)

**References:**
- Taal, C.H., et al. (2011). "An Algorithm for Intelligibility Prediction of Time–Frequency Weighted Noisy Speech"

</div>
</details>

<details>
<summary><strong>Perceptual Contrast Using Spectrograms (PCSS)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Measures perceptual contrast enhancement in processed speech spectrograms.

**How it works:** Computes contrast ratio in time-frequency domain weighted by auditory masking.

**Libraries:**
- Custom implementations (research-specific)

**References:**
- Healy, E.W., et al. (2013). "An algorithm to increase speech intelligibility for hearing-impaired listeners"

</div>
</details>

<details>
<summary><strong>DNSMOS (Deep Noise Suppression MOS)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Deep learning-based predictor of subjective MOS for noise suppression systems.

**How it works:** Neural network trained on large-scale listening tests to predict MOS directly from audio.

**Libraries:**
- Python: [DNSMOS by Microsoft](https://github.com/microsoft/DNS-Challenge/tree/master/DNSMOS)

**Datasets:**
- [Microsoft DNS Challenge Dataset](https://github.com/microsoft/DNS-Challenge)

**References:**
- Reddy, C.K.A., et al. (2021). "DNSMOS: A Non-Intrusive Perceptual Objective Speech Quality metric"

</div>
</details>

***

## Speech Intelligibility

Metrics correlating with human speech understanding.

<details>
<summary><strong>Speech Intelligibility Index (SII)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** ANSI standard for predicting speech intelligibility based on audibility.

**How it works:** Weights audible speech bands according to their importance for intelligibility.

**Libraries:**
- MATLAB: [SII Toolbox](https://www.mathworks.com/matlabcentral/fileexchange/51413-speech-intelligibility-index)

**References:**
- [ANSI S3.5-1997: Methods for Calculation of the Speech Intelligibility Index](https://webstore.ansi.org/standards/asa/ansis31997r2017)

</div>
</details>

<details>
<summary><strong>Extended Short-Time Objective Intelligibility (ESTOI)</strong></summary>
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Extension of STOI handling non-linear processing like spectral subtraction.

**How it works:** Applies intermediate intelligibility measure to improve correlation with subjective scores.

**Libraries:**
- Python: `pystoi` (includes ESTOI)
- MATLAB: [ESTOI Toolbox](http://www.ceestaal.nl/code/)

**References:**
- Jensen, J., & Taal, C.H. (2016). "An Algorithm for Predicting the Intelligibility of Speech Masked by Modulated Noise Maskers"

</div>
</details>

***

## Speech in Reverberation

Metrics for reverberant environments.

<details>
<summary><strong>Speech-to-Reverberation Modulation Energy Ratio (SRMR)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Non-intrusive metric estimating intelligibility degradation due to reverberation.

**How it works:** Analyzes modulation spectrum energy ratio across frequency bands.

**Libraries:**
- MATLAB: [SRMR Toolbox](https://www.mathworks.com/matlabcentral/fileexchange/42869-srmr-toolbox)

**Datasets:**
- [ACE Challenge Corpus](http://www.ee.ic.ac.uk/naylor/ACEweb/)

**References:**
- Falk, T.H., et al. (2010). "A non-intrusive quality and intelligibility measure of reverberant and dereverberated speech"

</div>
</details>

***

## Room Acoustics Quality

Metrics related to spatial and architectural acoustics.

<details>
<summary><strong>Reverberation Time (RT60)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Time for sound to decay by 60 dB after source stops.

**How it works:** Measures decay slope of impulse response in frequency bands.

**Libraries:**
- Python: `pyroomacoustics`
- MATLAB: [ITA-Toolbox](http://www.ita-toolbox.org/)

**Datasets:**
- [ACE Corpus](http://www.ee.ic.ac.uk/naylor/ACEweb/)
- [BUT Speech@FIT Reverb Database](https://speech.fit.vutbr.cz/software/but-speech-fit-reverb-database)

**References:**
- [ISO 3382-1: Measurement of room acoustic parameters](https://www.iso.org/standard/40979.html)

</div>
</details>

<details>
<summary><strong>Clarity (C50, C80)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Ratio of early to late arriving sound energy.

**How it works:**
$$
C_{50} = 10 \log_{10} \left( \frac{\int_0^{50ms} p^2(t) dt}{\int_{50ms}^{\infty} p^2(t) dt} \right)
$$

**Applications:** Speech clarity (C50), music clarity (C80).

**Libraries:**
- Python: `pyroomacoustics`

**References:**
- [ISO 3382-1: Measurement of room acoustic parameters](https://www.iso.org/standard/40979.html)

</div>
</details>

***

## Speech in Noise

Metrics for speech masked by background noise.

<details>
<summary><strong>Hearing Aid Speech Perception Index (HASPI)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Predicts speech intelligibility for hearing-impaired listeners with and without hearing aids.

**How it works:** Models auditory processing including hearing loss and amplification.

**Libraries:**
- MATLAB: [HASPI Toolbox](https://www.colorado.edu/lab/hearlab/resources)

**References:**
- Kates, J.M., & Arehart, K.H. (2014). "The Hearing-Aid Speech Perception Index (HASPI)"

</div>
</details>

***

## Blind Source Separation

Metrics for evaluating source separation quality.

<details>
<summary><strong>Signal-to-Distortion Ratio (SDR)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Measures separation quality as ratio of target signal to artifacts.

**How it works:** Decomposes error into target distortion, interference, and noise.

**Libraries:**
- Python: `mir_eval.separation`

**Datasets:**
- [MUSDB18](https://sigsep.github.io/datasets/musdb.html)
- [WSJ0-2mix](https://www.merl.com/demos/deep-clustering)

**References:**
- Vincent, E., et al. (2006). "Performance measurement in blind audio source separation"

</div>
</details>

<details>
<summary><strong>Scale-Invariant SDR (SI-SDR)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Scale-invariant version of SDR, more robust to amplitude differences.

**How it works:** Projects estimated signal onto reference, computes distortion ratio.

**Libraries:**
- Python: `torch_mir_eval` or custom implementation

**References:**
- Le Roux, J., et al. (2019). "SDR – half-baked or well done?"

</div>
</details>

***

## Music Quality

Metrics for music fidelity and artifact detection.

<details>
<summary><strong>PEAQ (Perceptual Evaluation of Audio Quality)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** See "Overall Audio Quality" section above.

</div>
</details>

<details>
<summary><strong>ViSQOL (Virtual Speech Quality Objective Listener)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Perceptual quality metric for speech and audio, supporting music mode.

**How it works:** Spectrogram-based similarity using neurogram representation.

**Libraries:**
- C++/Python: [ViSQOL by Google](https://github.com/google/visqol)

**Datasets:**
- Custom music test sets (check ViSQOL repo)

**References:**
- Hines, A., et al. (2015). "ViSQOL: an objective speech quality model"

</div>
</details>

***

## Distance-Based Metrics

Metrics measuring spectral or waveform distance.

<details>
<summary><strong>Log-Spectral Distance (LSD)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Euclidean distance between log-magnitude spectra.

**How it works:**
$$
\text{LSD} = \sqrt{ \frac{1}{K} \sum_{k=1}^{K} \left( 10 \log_{10} |X_k| - 10 \log_{10} |\hat{X}_k| \right)^2 }
$$

**Libraries:**
- Python: Custom with `librosa` or `numpy`

**References:**
- Gray, A., & Markel, J. (1976). "Distance measures for speech processing"

</div>
</details>

<details>
<summary><strong>Mel-Cepstral Distortion (MCD)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Distance between mel-frequency cepstral coefficients (MFCCs).

**How it works:**
$$
\text{MCD} = \frac{10}{\ln 10} \sqrt{2 \sum_{k=1}^{K} (c_k - \hat{c}_k)^2}
$$

**Applications:** Voice conversion, TTS evaluation.

**Libraries:**
- Python: `librosa`, `scipy`

**References:**
- Kubichek, R. (1993). "Mel-cepstral distance measure for objective speech quality assessment"

</div>
</details>

***

## ASR & NLP-Based Metrics

Metrics using automatic speech recognition and language models.

<details>
<summary><strong>Word Error Rate (WER)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Percentage of word errors (substitutions, deletions, insertions) in ASR output.

**How it works:**
$$
\text{WER} = \frac{S + D + I}{N} \times 100\%
$$
where S=substitutions, D=deletions, I=insertions, N=total words.

**Libraries:**
- Python: `jiwer`

**Datasets:**
- [LibriSpeech](https://www.openslr.org/12)
- [Common Voice](https://commonvoice.mozilla.org/)

**References:**
- [NIST Speech Recognition Scoring Toolkit](https://www.nist.gov/itl/iad/mig/tools)

</div>
</details>

<details>
<summary><strong>BERT Score</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Contextual embedding similarity between reference and hypothesis transcriptions.

**How it works:** Computes cosine similarity of BERT embeddings token-by-token.

**Libraries:**
- Python: `bert-score`

**References:**
- Zhang, T., et al. (2020). "BERTScore: Evaluating Text Generation with BERT"

</div>
</details>

***

## Hearing Aid Metrics

Metrics specific to hearing aid and assistive listening device evaluation.

<details>
<summary><strong>Hearing Aid Speech Quality Index (HASQI)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Predicts speech quality (not just intelligibility) for hearing aid users.

**How it works:** Models auditory processing with hearing loss, computes quality along multiple dimensions.

**Libraries:**
- MATLAB: [HASQI Toolbox](https://www.colorado.edu/lab/hearlab/resources)

**References:**
- Kates, J.M., & Arehart, K.H. (2010). "The Hearing-Aid Speech Quality Index (HASQI)"

</div>
</details>

<details>
<summary><strong>Binaural Intelligibility Level Difference (BILD)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Improvement in intelligibility from binaural vs. monaural listening.

**How it works:** Compares predicted intelligibility under binaural and monaural conditions.

**Applications:** Bilateral hearing aid fitting, spatial audio benefits.

**References:**
- Culling, J.F., et al. (2004). "The role of head-induced interaural time and level differences"

</div>
</details>

***

## Soundscape Indices

Metrics for environmental and ecological acoustics.

<details>
<summary><strong>Acoustic Complexity Index (ACI)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Measures temporal variability in soundscapes, correlates with biodiversity.

**How it works:** Computes intensity differences across adjacent time frames in frequency bands.

**Libraries:**
- R: `soundecology`
- Python: `scikit-maad`

**Datasets:**
- [Xeno-canto](https://www.xeno-canto.org/) (bird recordings)
- [AudioSet](https://research.google.com/audioset/)

**References:**
- Pieretti, N., et al. (2011). "A new methodology to infer the singing activity of an avian community"

</div>
</details>

<details>
<summary><strong>Normalized Difference Soundscape Index (NDSI)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Ratio of biophony (1-2 kHz) to anthrophony (1-2 kHz and 2-11 kHz).

**How it works:**
$$
\text{NDSI} = \frac{\text{Biophony} - \text{Anthrophony}}{\text{Biophony} + \text{Anthrophony}}
$$

**Libraries:**
- R: `soundecology`
- Python: `scikit-maad`

**References:**
- Kasten, E.P., et al. (2012). "The remote environmental assessment laboratory's acoustic library"

</div>
</details>

<details>
<summary><strong>Bioacoustic Index (BI)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Area under the spectrum curve within frequency range of biological sounds.

**How it works:** Integrates spectral energy in 2-8 kHz range (typical for birds/insects).

**Libraries:**
- R: `soundecology`

**References:**
- Boelman, N.T., et al. (2007). "Multi-trophic invasion resistance in Hawaii"

</div>
</details>

<details>
<summary><strong>Soundscape Pleasantness (ISO 12913-3)</strong></summary>
  
<div style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Subjective assessment of soundscape quality in urban environments.

**How it works:** Perceptual attributes evaluated via listening tests (pleasantness, eventfulness, etc.).

**Standards:**
- [ISO 12913-3: Data analysis and reporting](https://www.iso.org/standard/75267.html)

**Datasets:**
- [SATP Database (Soundscapes & Psychophysiology)](https://zenodo.org/record/2635759)

**References:**
- Aletta, F., et al. (2016). "Soundscape descriptors and a conceptual framework for developing predictive soundscape models"

</div>
</details>

***

## References

### Standards
- ITU-T P.862: PESQ
- ITU-T P.863: POLQA
- ITU-R BS.1387: PEAQ
- ITU-R BS.1770: Loudness
- ANSI S3.5: Speech Intelligibility Index
- ISO 3382-1: Room acoustics
- ISO 12913: Soundscape assessment

### Key Papers
- Rix, A.W., et al. (2001). "Perceptual evaluation of speech quality (PESQ)"
- Taal, C.H., et al. (2011). "An Algorithm for Intelligibility Prediction"
- Kates, J.M., & Arehart, K.H. (2014). "The Hearing-Aid Speech Perception Index"
- Vincent, E., et al. (2006). "Performance measurement in blind audio source separation"
- Zhang, T., et al. (2020). "BERTScore"

### Toolboxes & Libraries
- [pystoi](https://github.com/mpariente/pystoi)
- [pesq](https://github.com/ludlows/python-pesq)
- [pyroomacoustics](https://github.com/LCAV/pyroomacoustics)
- [mir_eval](https://github.com/craffel/mir_eval)
- [scikit-maad](https://github.com/scikit-maad/scikit-maad)
- [ViSQOL](https://github.com/google/visqol)
- [DNSMOS](https://github.com/microsoft/DNS-Challenge/tree/master/DNSMOS)

***

<p style="text-align: center; color: var(--global-text-color-light); font-size: 0.9rem; margin-top: 3rem; font-style: italic;">
Last updated: {{ page.date | date: "%B %d, %Y" }}<br>
This is a living document. Suggestions? <a href="mailto:randyrff@gmail.com">Email me</a>.
</p>
