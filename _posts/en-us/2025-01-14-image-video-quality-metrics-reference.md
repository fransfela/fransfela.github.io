---
layout: post
title: "Image and Video Quality Metrics: A Comprehensive Reference"
date: 2025-01-14
description: "Structured guide to objective and subjective metrics for image and video quality evaluation across diverse applications and content types"
tags: [living-note, visual-perception, perceptual-evaluation]
categories: [research]
toc:
  sidebar: left
---

> **Last updated:** {{ page.date | date: "%B %d, %Y" }}  
> **Status:** 🟢 Actively maintained

---

## Introduction

Image and video quality assessment spans multiple methodologies, from full-reference (intrusive) metrics requiring pristine originals to no-reference (blind) approaches that evaluate quality without any reference. This living reference consolidates metrics across traditional media, omnidirectional content, HDR, and specialized applications.

***

## Intrusive (Full-Reference) Metrics

Metrics requiring access to both reference (original) and distorted signals.

<details markdown="1">
<summary><strong>Peak Signal-to-Noise Ratio (PSNR)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Most widely used objective metric measuring pixel-wise difference between reference and distorted images.

**How it works:**

$$
\text{PSNR} = 10 \log_{10} \left( \frac{\text{MAX}^2}{\text{MSE}} \right)
$$

where MAX is maximum possible pixel value (255 for 8-bit images), MSE is mean squared error.

**Limitations:** Poor correlation with human perception.

**Libraries:**
- Python: `skimage.metrics.peak_signal_noise_ratio`, `cv2.PSNR`
- MATLAB: Built-in `psnr()` function

**Open Source:**
- [scikit-image metrics module](https://github.com/scikit-image/scikit-image)

**Datasets:**
- [TID2013](http://www.ponomarenko.info/tid2013.htm)
- [LIVE Image Quality Database](https://live.ece.utexas.edu/research/Quality/subjective.htm)

**References:**
- [Wikipedia: Peak signal-to-noise ratio](https://en.wikipedia.org/wiki/Peak_signal-to-noise_ratio)

</div>
</details>

<details markdown="1">
<summary><strong>Structural Similarity Index (SSIM)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Perceptual metric considering luminance, contrast, and structure similarities.

**How it works:**

$$
\text{SSIM}(x,y) = \frac{(2\mu_x\mu_y + C_1)(2\sigma_{xy} + C_2)}{(\mu_x^2 + \mu_y^2 + C_1)(\sigma_x^2 + \sigma_y^2 + C_2)}
$$

where μ is mean, σ is variance/covariance, C are constants.

**Libraries:**
- Python: `skimage.metrics.structural_similarity`, `pytorch-msssim`
- MATLAB: Built-in `ssim()` function

**Open Source:**
- [SSIM PyTorch implementation](https://github.com/VainF/pytorch-msssim)
- [Original MATLAB code](https://www.cns.nyu.edu/~lcv/ssim/)

**Datasets:**
- [LIVE IQA Database](https://live.ece.utexas.edu/research/Quality/)
- [CSIQ Database](http://vision.eng.shizuoka.ac.jp/mod/page/view.php?id=23)

**References:**
- Wang, Z., et al. (2004). "Image quality assessment: from error visibility to structural similarity"
- [IEEE Xplore paper](https://ieeexplore.ieee.org/document/1284395)

</div>
</details>

<details markdown="1">
<summary><strong>Multi-Scale SSIM (MS-SSIM)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Extension of SSIM evaluating structure at multiple scales via downsampling.

**How it works:** Applies SSIM at multiple resolutions, combines results with weights.

**Libraries:**
- Python: `pytorch-msssim`, `piq`
- MATLAB: Available via File Exchange

**Open Source:**
- [MS-SSIM PyTorch](https://github.com/VainF/pytorch-msssim)

**References:**
- Wang, Z., et al. (2003). "Multiscale structural similarity for image quality assessment"

</div>
</details>

<details markdown="1">
<summary><strong>Video Multi-Method Assessment Fusion (VMAF)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Machine learning-based video quality metric developed by Netflix, fusing multiple elementary metrics.

**How it works:** Combines VIF, DLM, motion, and temporal features via SVR (Support Vector Regression).

**Libraries:**
- C: [libvmaf (Netflix)](https://github.com/Netflix/vmaf)
- Python: `vmaf` (pip installable)
- FFmpeg: Built-in VMAF filter

**Open Source:**
- [Netflix VMAF GitHub](https://github.com/Netflix/vmaf)

**Datasets:**
- [VMAF Dataset (NFLX-TEST)](https://github.com/Netflix/vmaf/tree/master/resource/doc)
- [VideoSet](https://github.com/Netflix/vmaf/blob/master/resource/doc/datasets.md)

**References:**
- Li, Z., et al. (2016). "Toward a practical perceptual video quality metric"
- [Netflix Tech Blog](https://netflixtechblog.com/toward-a-practical-perceptual-video-quality-metric-653f208b9652)

</div>
</details>

<details markdown="1">
<summary><strong>Visual Information Fidelity (VIF)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Information-theoretic metric quantifying shared information between reference and distorted images.

**How it works:** Models image as natural scene statistics passing through distortion channel, computes mutual information.

**Libraries:**
- Python: `piq` library
- MATLAB: [VIF Toolbox](https://live.ece.utexas.edu/research/Quality/VIF.htm)

**Open Source:**
- [PyIQA implementation](https://github.com/chaofengc/IQA-PyTorch)

**References:**
- Sheikh, H.R., & Bovik, A.C. (2006). "Image information and visual quality"

</div>
</details>

<details markdown="1">
<summary><strong>Feature Similarity Index (FSIM)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Low-level feature-based metric using phase congruency and gradient magnitude.

**How it works:** Extracts phase congruency (PC) and gradient magnitude (GM) as features, computes similarity.

**Libraries:**
- Python: `piq`, `sewar`
- MATLAB: [FSIM Code](http://www4.comp.polyu.edu.hk/~cslzhang/IQA/FSIM/FSIM.htm)

**Open Source:**
- [FSIM MATLAB code](http://www4.comp.polyu.edu.hk/~cslzhang/IQA/FSIM/Files/FeatureSIM.m)

**References:**
- Zhang, L., et al. (2011). "FSIM: A feature similarity index for image quality assessment"

</div>
</details>

***

## Semi-Intrusive Metrics

Metrics using partial reference information (e.g., extracted features).

<details markdown="1">
<summary><strong>Reduced-Reference Entropic Differencing (RRED)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Uses wavelet-based entropy features transmitted as side information.

**How it works:** Extracts entropy of wavelet subbands from reference, compares with distorted version.

**Libraries:**
- MATLAB: [LIVE RR-IQA toolbox](https://live.ece.utexas.edu/research/Quality/RR_IQA_software_release.zip)

**References:**
- Soundararajan, R., & Bovik, A.C. (2012). "RRED indices: Reduced reference entropic differencing"

</div>
</details>

<details markdown="1">
<summary><strong>SpEED-QA (Spatial-Spectral Entropy-based Quality)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Reduced-reference metric based on spatial and spectral entropies.

**How it works:** Transmits entropy statistics of DCT blocks and edges as reference features.

**References:**
- Chandler, D.M., & Hemami, S.S. (2007). "A57 database and VSNR metric"

</div>
</details>

***

## Non-Intrusive (No-Reference) Metrics

Blind quality assessment without access to reference.

<details markdown="1">
<summary><strong>Blind/Referenceless Image Spatial Quality Evaluator (BRISQUE)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** No-reference metric using natural scene statistics (NSS) features and SVR.

**How it works:** Extracts locally normalized luminance coefficients, fits to generalized Gaussian distribution, trains SVR on features.

**Libraries:**
- Python: `libsvm`, `piq`, `imquality`
- MATLAB: [BRISQUE Code](https://live.ece.utexas.edu/research/Quality/index_algorithms.htm)

**Open Source:**
- [BRISQUE MATLAB](https://github.com/krshay/BRISQUE-MATLAB)
- [imquality Python](https://github.com/ocampor/image-quality)

**Datasets:**
- [LIVE IQA Database](https://live.ece.utexas.edu/research/Quality/)
- [TID2013](http://www.ponomarenko.info/tid2013.htm)

**References:**
- Mittal, A., et al. (2012). "No-reference image quality assessment in the spatial domain"

</div>
</details>

<details markdown="1">
<summary><strong>Natural Image Quality Evaluator (NIQE)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Opinion-unaware (no training on human scores) metric based on NSS model.

**How it works:** Models pristine natural images with multivariate Gaussian (MVG) in NSS feature space, measures distance of test image.

**Libraries:**
- Python: `piq`, `scikit-image` (limited)
- MATLAB: [NIQE Code](https://live.ece.utexas.edu/research/Quality/niqe_release.zip)

**Open Source:**
- [NIQE Python implementation](https://github.com/guptapraful/niqe)

**References:**
- Mittal, A., et al. (2013). "Making a 'completely blind' image quality analyzer"

</div>
</details>

<details markdown="1">
<summary><strong>Perception-based Image Quality Evaluator (PIQE)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** No-reference metric analyzing blockiness, noise, and spatial activity.

**How it works:** Divides image into blocks, evaluates distortion using perceptual features (noticeably distorted blocks, noise, spatial activity).

**Libraries:**
- MATLAB: Built-in `piqe()` function

**References:**
- Venkatanath, N., et al. (2015). "Blind image quality evaluation using perception based features"

</div>
</details>

<details markdown="1">
<summary><strong>Deep Learning-Based: NIMA (Neural Image Assessment)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** CNN-based aesthetic and technical quality predictor trained on AVA dataset.

**How it works:** Fine-tunes pre-trained CNN (e.g., MobileNet, Inception) to predict distribution of human ratings.

**Libraries:**
- Python: TensorFlow/Keras, PyTorch

**Open Source:**
- [NIMA PyTorch](https://github.com/kentsyx/Neural-IMage-Assessment)
- [TensorFlow implementation](https://github.com/titu1994/neural-image-assessment)

**Datasets:**
- [AVA (Aesthetic Visual Analysis)](https://github.com/mtobeiyf/ava_downloader)

**References:**
- Talebi, H., & Milanfar, P. (2018). "NIMA: Neural image assessment"

</div>
</details>

<details markdown="1">
<summary><strong>MUSIQ (Multi-Scale Image Quality Transformer)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Vision Transformer-based no-reference IQA handling arbitrary resolutions and aspect ratios.

**How it works:** Uses multi-scale image representation fed to Transformer encoder, predicts quality score.

**Open Source:**
- [MUSIQ GitHub](https://github.com/google-research/google-research/tree/master/musiq)

**References:**
- Ke, J., et al. (2021). "MUSIQ: Multi-scale image quality transformer"

</div>
</details>

***

## Overall Image Quality Metrics

General-purpose metrics for diverse distortion types.

<details markdown="1">
<summary><strong>Mean Absolute Error (MAE)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Average absolute pixel-wise difference.

**How it works:**

$$
\text{MAE} = \frac{1}{N} \sum_{i=1}^{N} |x_i - y_i|
$$

**Libraries:**
- Python: `numpy.mean(np.abs(x - y))`

**Limitations:** Does not correlate well with perceived quality.

</div>
</details>

<details markdown="1">
<summary><strong>Perceptual Index (PI)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** No-reference metric combining Ma's and NIQE scores to measure perceptual quality.

**How it works:**

$$
\text{PI} = \frac{1}{2} \left( 10 - \text{Ma} + \text{NIQE} \right)
$$

**References:**
- Blau, Y., & Michaeli, T. (2018). "The perception-distortion tradeoff"

</div>
</details>

***

## Image Attribute-Specific Metrics

Metrics targeting specific visual attributes.

<details markdown="1">
<summary><strong>Sharpness (Laplacian Variance)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Measures image sharpness via Laplacian operator variance.

**How it works:** Applies Laplacian filter, computes variance (higher = sharper).

**Libraries:**
- Python: `cv2.Laplacian()` + `numpy.var()`

**Open Source:**
- [OpenCV Laplacian sharpness](https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html)

**References:**
- Pech-Pacheco, J.L., et al. (2000). "Diatom autofocusing in brightfield microscopy"

</div>
</details>

<details markdown="1">
<summary><strong>Colorfulness Metric</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Quantifies perceived colorfulness based on opponent color space.

**How it works:** Computes standard deviation and mean of rg and yb channels in opponent space.

**Open Source:**
- [Colorfulness Python implementation](https://github.com/hmsch/image-colorfulness)

**References:**
- Hasler, D., & Suesstrunk, S. (2003). "Measuring colorfulness in natural images"

</div>
</details>

<details markdown="1">
<summary><strong>Contrast Metric (Michelson, RMS)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Measures luminance contrast.

**How it works:**

Michelson:
$$
C = \frac{L_{\max} - L_{\min}}{L_{\max} + L_{\min}}
$$

RMS: Standard deviation of pixel intensities.

**Libraries:**
- Python: Custom with `numpy`

**References:**
- Peli, E. (1990). "Contrast in complex images"

</div>
</details>

<details markdown="1">
<summary><strong>Blockiness/Blurring Detection</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Detects compression artifacts like blocking and blur.

**How it works:** Analyzes edge discontinuities (blocking) and high-frequency attenuation (blur).

**Open Source:**
- Part of BRISQUE, PIQE implementations

**References:**
- Wang, Z., et al. (2002). "A universal image quality index"

</div>
</details>

***

## Omnidirectional (360°) Image/Video Metrics

Metrics for spherical content.

<details markdown="1">
<summary><strong>Spherical PSNR (S-PSNR)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** PSNR adapted for equirectangular projection, accounting for latitude-dependent sampling density.

**How it works:** Weights pixel errors by spherical area (cos of latitude).

**Open Source:**
- [360Lib (spherical video tools)](https://github.com/facebook/transform360)

**References:**
- Yu, M., et al. (2015). "A framework to evaluate omnidirectional video coding schemes"

</div>
</details>

<details markdown="1">
<summary><strong>Weighted-to-Spherically-Uniform PSNR (WS-PSNR)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Improved S-PSNR with uniform sampling on sphere via resampling.

**How it works:** Projects equirectangular to uniform spherical grid, computes PSNR.

**Open Source:**
- [360Lib GitHub](https://github.com/facebook/transform360)

**References:**
- Sun, Y., et al. (2017). "Weighted-to-spherically-uniform quality evaluation for omnidirectional video"

</div>
</details>

<details markdown="1">
<summary><strong>Craster Parabolic Projection PSNR (CPP-PSNR)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Uses Craster projection minimizing area distortion for quality measurement.

**How it works:** Converts to Craster parabolic projection before computing PSNR.

**References:**
- Yu, M., et al. (2017). "A framework to evaluate omnidirectional video coding schemes"

</div>
</details>

<details markdown="1">
<summary><strong>Viewport-based Quality Assessment</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Evaluates quality based on user's viewing direction/viewport.

**How it works:** Samples viewports according to head movement patterns, computes quality per viewport.

**Datasets:**
- [360° Video Head Movement Dataset](https://github.com/360VidStr/A_large_dataset_of_360_video_user_behaviour)

**References:**
- Xu, M., et al. (2018). "Predicting head movement in panoramic video"

</div>
</details>

***

## Natural Image Quality

Metrics for photographic/natural scenes.

<details markdown="1">
<summary><strong>NIQE (Natural Image Quality Evaluator)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** See "Non-Intrusive Metrics" section above.

</div>
</details>

<details markdown="1">
<summary><strong>IL-NIQE (Integrated Local NIQE)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Improved NIQE with local quality assessment and integration.

**How it works:** Computes local NIQE scores in patches, aggregates for global score.

**Open Source:**
- [IL-NIQE MATLAB](https://github.com/christosbampis/ILNIQE)

**References:**
- Zhang, L., et al. (2015). "A feature-enriched completely blind image quality evaluator"

</div>
</details>

***

## HDR Image Quality

Metrics for high dynamic range content.

<details markdown="1">
<summary><strong>HDR-VDP-2 (HDR Visual Difference Predictor)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Full-reference metric modeling human visual system for HDR images.

**How it works:** Applies luminance masking, contrast sensitivity, spatial frequency channels.

**Libraries:**
- MATLAB: [HDR-VDP-2 Toolbox](https://sourceforge.net/projects/hdrvdp/)

**Open Source:**
- [HDR-VDP-2 SourceForge](https://sourceforge.net/projects/hdrvdp/)

**Datasets:**
- [ESPL-LIVE HDR Database](https://live.ece.utexas.edu/research/LIVE_HDRIDatabase/index.html)

**References:**
- Mantiuk, R., et al. (2011). "HDR-VDP-2: A calibrated visual metric for visibility and quality predictions"

</div>
</details>

<details markdown="1">
<summary><strong>HDR-VQM (HDR Video Quality Metric)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Extends HDR-VDP to video with temporal modeling.

**How it works:** Adds temporal contrast sensitivity and motion modeling to HDR-VDP.

**References:**
- Narwaria, M., et al. (2015). "HDR-VQM: An objective quality measure for high dynamic range video"

</div>
</details>

<details markdown="1">
<summary><strong>PU21 (Perceptual Uniformity 2021)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Perceptually uniform color space for HDR images.

**How it works:** Transforms HDR pixel values to perceptually uniform encoding before computing differences.

**Open Source:**
- [PU21 MATLAB/Python](https://github.com/gfxdisp/pu21)

**References:**
- Mikhailiuk, A., et al. (2021). "A perceptually uniform color space for HDR imaging"

</div>
</details>

***

## Artistic Image Quality

Metrics for stylized/artistic content.

<details markdown="1">
<summary><strong>Neural Style Transfer Quality (Gatys Loss)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Measures content and style preservation in neural style transfer.

**How it works:** Computes content loss (feature difference in deep layers) and style loss (Gram matrix difference).

**Open Source:**
- [Neural Style Transfer PyTorch](https://github.com/pytorch/examples/tree/main/fast_neural_style)

**References:**
- Gatys, L.A., et al. (2016). "Image style transfer using convolutional neural networks"

</div>
</details>

<details markdown="1">
<summary><strong>Aesthetic Quality Assessment (AVA-based models)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Predicts aesthetic appeal using deep learning trained on AVA dataset.

**How it works:** CNN extracts features correlating with aesthetic ratings (composition, color harmony, etc.).

**Open Source:**
- [NIMA (see No-Reference section)](https://github.com/titu1994/neural-image-assessment)

**Datasets:**
- [AVA Dataset](https://github.com/mtobeiyf/ava_downloader)

**References:**
- Murray, N., et al. (2012). "AVA: A large-scale database for aesthetic visual analysis"

</div>
</details>

***

## Video-Specific Metrics

### Video Movies

<details markdown="1">
<summary><strong>Video Multimethod Assessment Fusion (VMAF)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** See "Intrusive Metrics" section above. Widely used for streaming video (Netflix, YouTube).

</div>
</details>

<details markdown="1">
<summary><strong>Spatial-Temporal SSIM (ST-SSIM)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Extends SSIM to temporal dimension for video.

**How it works:** Computes SSIM across spatial and temporal patches (3D blocks).

**References:**
- Wang, Z., et al. (2004). "Video quality assessment based on structural distortion measurement"

</div>
</details>

<details markdown="1">
<summary><strong>Video Quality Metric (VQM)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** ITU standard for broadcast video quality.

**How it works:** Extracts perceptual features (spatial/temporal activity, edge degradation, chroma spread), combines via linear model.

**References:**
- [ITU-T J.144: Objective perceptual video quality measurement](https://www.itu.int/rec/T-REC-J.144)

</div>
</details>

### Videoconferencing

<details markdown="1">
<summary><strong>ViVQM (Video-over-IP Visual Quality Metric)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** No-reference metric for videoconferencing and VoIP video.

**How it works:** Detects packet loss artifacts, blockiness, blurring specific to real-time video transmission.

**References:**
- Reibman, A.R., et al. (2004). "Quality monitoring of video over a packet network"

</div>
</details>

<details markdown="1">
<summary><strong>Real-Time Video Quality Assessment (QoE models)</strong></summary>

<div markdown="1" style="padding: 1rem; background-color: var(--global-bg-color); margin-top: 0.5rem; border-left: 3px solid var(--global-theme-color);">

**Description:** Models predicting quality-of-experience considering bitrate switching, stalling, resolution changes.

**How it works:** Combines video quality metrics with buffering/stalling penalties.

**Open Source:**
- [QoE Models GitHub](https://github.com/itu-p1203/itu-p1203)

**References:**
- [ITU-T P.1203: Parametric bitstream-based quality assessment](https://www.itu.int/rec/T-REC-P.1203)

</div>
</details>

***

## Key Datasets

### Image Quality Databases
- [LIVE IQA Database](https://live.ece.utexas.edu/research/Quality/subjective.htm)
- [TID2013](http://www.ponomarenko.info/tid2013.htm)
- [CSIQ](http://vision.eng.shizuoka.ac.jp/mod/page/view.php?id=23)
- [KADID-10k](http://database.mmsp-kn.de/kadid-10k-database.html)
- [AVA (Aesthetic Visual Analysis)](https://github.com/mtobeiyf/ava_downloader)
- [ESPL-LIVE HDR Database](https://live.ece.utexas.edu/research/LIVE_HDRIDatabase/)

### Video Quality Databases
- [LIVE Video Quality Database](https://live.ece.utexas.edu/research/Quality/live_video.html)
- [Netflix Public Dataset](https://github.com/Netflix/vmaf/tree/master/resource/doc)
- [Waterloo IVC 4K Video Quality Database](https://ivc.uwaterloo.ca/database/Waterloo-IVC-4K-Video.html)
- [YouTube UGC Dataset](https://media.withyoutube.com/)

### 360° Video Databases
- [360° Video Head Movement Dataset](https://github.com/360VidStr/A_large_dataset_of_360_video_user_behaviour)
- [VQA-ODV (Omnidirectional Video)](https://ieeexplore.ieee.org/document/8463705)

***

## References

### Standards
- ITU-T J.144: VQM
- ITU-T P.1203: QoE for adaptive streaming
- ITU-R BT.500: Subjective assessment of TV pictures

### Key Papers
- Wang, Z., et al. (2004). "Image quality assessment: from error visibility to structural similarity"
- Li, Z., et al. (2016). "Toward a practical perceptual video quality metric" (VMAF)
- Mittal, A., et al. (2012). "No-reference image quality assessment in the spatial domain" (BRISQUE)
- Mantiuk, R., et al. (2011). "HDR-VDP-2"
- Talebi, H., & Milanfar, P. (2018). "NIMA: Neural image assessment"

### Toolboxes & Libraries
- [scikit-image](https://github.com/scikit-image/scikit-image)
- [piq (PyTorch Image Quality)](https://github.com/photosynthesis-team/piq)
- [IQA-PyTorch](https://github.com/chaofengc/IQA-PyTorch)
- [Netflix VMAF](https://github.com/Netflix/vmaf)
- [HDR-VDP-2](https://sourceforge.net/projects/hdrvdp/)
- [imquality](https://github.com/ocampor/image-quality)

***

<p style="text-align: center; color: var(--global-text-color-light); font-size: 0.9rem; margin-top: 3rem; font-style: italic;">
Last updated: {{ page.date | date: "%B %d, %Y" }}<br>
This is a living document. Suggestions? <a href="mailto:randyrff@gmail.com">Email me</a>.
</p>
