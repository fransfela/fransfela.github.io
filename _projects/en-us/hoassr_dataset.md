---
page_id: hoassr_dataset
layout: page
title: HOA-SSR Dataset
description: Higher-Order Ambisonics Sound Scene Repository - A comprehensive 360° audiovisual quality dataset for immersive media research
img: assets/img/hoassr.png
importance: 2
category: work
related_publications: false
---

The **Higher-Order Ambisonics Sound Scene Repository (HOA-SSR)** is a groundbreaking open-source dataset designed to advance research in perceptual quality evaluation of immersive 360° audiovisual content. This comprehensive dataset combines state-of-the-art spatial audio recording with ultra-high-definition 360° video, accompanied by subjective quality scores from trained assessors.

## Research Impact

To our knowledge, this is the first recorded audiovisual dataset with Mean Opinion Scores (MOS) specifically created to support perceptual quality research in immersive audiovisual content. The dataset opens new possibilities for developing and validating quality metrics for next-generation virtual reality, augmented reality, and immersive media applications.

<div class="alert alert-info mt-4">
  <h5>📊 Dataset Highlights</h5>
  <ul class="mb-0">
    <li><strong>150+ audiovisual scenes</strong> captured in diverse real-world environments</li>
    <li><strong>8K 360° video</strong> (7680×3840) at 30fps with YUV 4:2:2 color space</li>
    <li><strong>4th order ambisonic audio</strong> (25 channels) at 48kHz, 24-bit</li>
    <li><strong>Subjective quality scores</strong> from trained assessors</li>
    <li><strong>Multiple quality metrics</strong> for both audio and video domains</li>
  </ul>
</div>

## Technical Specifications

### Recording Equipment

The dataset was captured using professional-grade equipment to ensure the highest quality baseline:

<div class="row mt-3">
    <div class="col-md-6">
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">🎥 Video Capture</h5>
                <p class="card-text"><strong>Insta360 Pro2</strong> - Professional spherical 360° camera with 6 synchronized lenses capturing every angle simultaneously</p>
                <ul class="small">
                    <li>Resolution: 8K (7680×3840)</li>
                    <li>Frame rate: 30 fps</li>
                    <li>Color depth: 8-bit YUV 4:2:2</li>
                    <li>Format: Equirectangular projection (ERP)</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">🎙️ Audio Capture</h5>
                <p class="card-text"><strong>em32 Eigenmike</strong> - Spherical microphone array with 32 omnidirectional microphones</p>
                <ul class="small">
                    <li>Order: 4th order ambisonics</li>
                    <li>Channels: 25 (AmbiX B-format)</li>
                    <li>Sample rate: 48 kHz</li>
                    <li>Bit depth: 24-bit PCM</li>
                    <li>Normalization: SN3D, ACN ordering</li>
                </ul>
            </div>
        </div>
    </div>
</div>

### Scene Diversity

The dataset contains audiovisual scenes with diverse characteristics including nature-mechanical, indoor-outdoor, static-dynamic, traffic-quiet, impulsive-steady, and speech-music variations. This diversity ensures broad applicability across different use cases and research questions.

<div class="row mt-4">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/hoassr-outdoor.png" title="Outdoor scene capture" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/hoassr-indoor.png" title="Indoor scene capture" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/hoassr-urban.png" title="Urban environment" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Representative scenes from the HOA-SSR dataset showcasing the diversity of recording environments.
</div>

## Subjective Quality Evaluation

Three comprehensive subjective experiments were conducted to assess perceptual quality:

### Experimental Methodology

<div class="row mt-3">
    <div class="col-md-4">
        <div class="card border-primary h-100">
            <div class="card-header bg-primary text-white">
                <strong>Audio Quality Test</strong>
            </div>
            <div class="card-body">
                <p class="small">Evaluated spatial audio fidelity and clarity using a 26-channel loudspeaker setup compliant with EBU 3276 and ITU-R BS.1116-3 standards</p>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card border-success h-100">
            <div class="card-header bg-success text-white">
                <strong>Video Quality Test</strong>
            </div>
            <div class="card-body">
                <p class="small">Assessed visual quality through head-mounted display (Samsung Odyssey+ Mixed Reality Headset) for immersive viewing</p>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card border-info h-100">
            <div class="card-header bg-info text-white">
                <strong>Audiovisual Quality Test</strong>
            </div>
            <div class="card-body">
                <p class="small">Combined evaluation of multimodal perceptual quality using synchronized audio-visual presentation</p>
            </div>
        </div>
    </div>
</div>

**Protocol**: Multiple Stimulus with Hidden Reference (MUSHRA-style) methodology  
**Participants**: 20 trained assessors  
**Location**: SenseLab Listening Test and VR facilities at FORCE Technology, Denmark  
**Ethics Approval**: Danish Committee System on Health Research Ethics (Journal-nr H-20031815)

## Quality Metrics & Analysis

### Objective Quality Metrics Evaluated

**Audio Metrics:**
- **PEAQ** (Perceptual Evaluation of Audio Quality)
- **ViSQOL** (Virtual Speech Quality Objective Listener)
- **AMBIQUAL** (Ambisonic quality metric)

**Video Metrics:**
- PSNR and variants (WS-PSNR, CPP-PSNR, S-PSNR)
- SSIM and MS-SSIM
- VMAF (2K and 4K variants)

### Encoding Parameters

Audio was encoded at 16, 32, and 64 kbps per channel using AAC-LC encoder. Video was encoded using H.265/HEVC at three resolutions (1920×1080, 3840×1920, 6144×3072) and four quantization parameters (QP: 0, 22, 28, 34).

<div class="row justify-content-sm-center mt-4">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/hoassr-scores.png" title="Subjective quality scores distribution" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Distribution of Mean Opinion Scores (MOS) across audio, video, and audiovisual experiments with 95% confidence intervals.
</div>

## Machine Learning Predictions

Building on the subjective data, we developed predictive models for audiovisual quality assessment:

### Modeling Approach

Four regression-based machine learning models were trained and tested: multiple linear regression, decision tree, random forest, and support vector machine. Each model was constructed using combinations of audio and video quality metrics, producing 312 predictive models through cross-validation.

**Key Findings:**
- The combination of VMAF and AMBIQUAL metrics proved most effective for audiovisual quality prediction
- Support Vector Machine achieved the highest performance with k-Fold cross-validation (PCC = 0.909, SROCC = 0.914, RMSE = 0.416)
- Machine learning approaches significantly outperformed simple linear models

```python
# Example model architecture
from sklearn.svm import SVR
from sklearn.model_selection import KFold

# Best performing configuration
model = SVR(kernel='rbf', C=1.0, epsilon=0.1)
features = ['VMAF', 'AMBIQUAL']  # Audio-video metric fusion
cv = KFold(n_splits=5, shuffle=True)

# Achieved metrics:
# - Pearson Correlation: 0.909
# - Spearman Rank: 0.914
# - RMSE: 0.416
```

## Research Applications

The HOA-SSR dataset enables research across multiple domains:

<div class="row mt-3">
    <div class="col-md-6 mt-3">
        <h5>🎧 Audio Product Development</h5>
        <ul>
            <li>Hearing aids and assistive devices testing</li>
            <li>True wireless stereo (TWS) earbuds evaluation</li>
            <li>Telecom headset quality assessment</li>
            <li>Spatial audio algorithm development</li>
        </ul>
    </div>
    <div class="col-md-6 mt-3">
        <h5>🤖 AI & Machine Learning</h5>
        <ul>
            <li>Training perceptual quality models</li>
            <li>Audio-visual fusion algorithms</li>
            <li>Scene understanding and classification</li>
            <li>Quality metric development and validation</li>
        </ul>
    </div>
    <div class="col-md-6 mt-3">
        <h5>🎮 Virtual Reality</h5>
        <ul>
            <li>Immersive experience quality evaluation</li>
            <li>Compression artifact assessment</li>
            <li>Codec performance benchmarking</li>
            <li>User experience optimization</li>
        </ul>
    </div>
    <div class="col-md-6 mt-3">
        <h5>📊 Quality of Experience Research</h5>
        <ul>
            <li>Multimodal perception studies</li>
            <li>Cross-modal interaction analysis</li>
            <li>Standardization and benchmarking</li>
            <li>Quality metric correlation studies</li>
        </ul>
    </div>
</div>

## Experimental Design Optimization

In follow-up research, we investigated efficient experimental design strategies:

**Full Factorial Design (FFD) vs. Optimal Experimental Design (OED):**
- D-optimal design for factor screening
- I-optimal design for prediction accuracy
- Significant reduction in required test conditions while maintaining statistical power
- Applications in large-scale perceptual studies where FFD becomes impractical

This work demonstrates how smart experimental design can reduce participant burden and testing time without compromising research validity.

## Collaboration & Partners

The HOA-SSR dataset is the result of a collaborative effort between leading research institutions and industry partners:

**Research Partners:**
- Technical University of Denmark (DTU)
- FORCE Technology - SenseLab
- Nantes Université (France)

**Industry Partners:**
- Bang & Olufsen
- Demant
- GN Store Nord (Jabra)
- Sonova
- WSA
- Additional industrial collaborators

**Funding:**
- European Union Horizon 2020 Marie Skłodowska-Curie Actions (Grant No. 765911 - RealVision)
- Danish Ministry of Higher Education and Science

## Access & Citation

### Dataset Availability

The complete HOA-SSR dataset containing 150 audiovisual scenes is available for research and commercial use. The dataset can be purchased for full access, with partial access available for specific scenarios.

**Contact**: [FORCE Technology SenseLab](https://forcetechnology.com/en/services/acoustics-noise-sound-quality/senselab-download-hoa-ssr-dataset)

### Publications

If you use this dataset in your research, please cite the relevant publications:

**Primary Dataset Paper:**
```bibtex
@article{fela2022perceptual,
  title={Perceptual Evaluation on Audio-visual Dataset of 360 Content},
  author={Fela, Randy Frans and Pastor, Andr{\'e}as and Le Callet, Patrick and Zacharov, Nick and Vigier, Toinon and Forchhammer, S{\o}ren},
  journal={arXiv preprint arXiv:2205.08007},
  year={2022}
}
```

**Machine Learning Predictions:**
```bibtex
@article{fela2021perceptual,
  title={Perceptual Evaluation of 360 Audiovisual Quality and Machine Learning Predictions},
  author={Fela, Randy Frans and Zacharov, Nick and Forchhammer, S{\o}ren},
  journal={arXiv preprint arXiv:2112.12273},
  year={2021}
}
```

**Experimental Design Optimization:**
```bibtex
@article{fela2023comparison,
  title={Comparison of Full Factorial and Optimal Experimental Design for Perceptual Evaluation of Audiovisual Quality},
  author={Fela, Randy Frans and Zacharov, Nick and Forchhammer, S{\o}ren},
  journal={Journal of the Audio Engineering Society},
  volume={71},
  number={1/2},
  pages={4--19},
  year={2023}
}
```

**Assessor Selection Methodology:**
```bibtex
@article{fela2022assessor,
  title={Assessor Selection Process for Perceptual Quality Evaluation of 360 Audiovisual Content},
  author={Fela, Randy Frans and Zacharov, Nick and Forchhammer, S{\o}ren},
  journal={Journal of the Audio Engineering Society},
  volume={70},
  number={10},
  pages={824--842},
  year={2022}
}
```

## Technical Documentation

For researchers implementing models or reproducing results:

1. **Audio Decoding**: 4th order ambisonics decoded to 26-channel configuration
2. **Video Rendering**: Equirectangular to viewport projection with proper field of view
3. **Synchronization**: Audio-visual temporal alignment critical for multimodal evaluation
4. **Metric Computation**: Frame-level metrics aggregated using temporal pooling

Detailed specifications and processing pipelines are available in the accompanying technical papers.

---

**Status**: Dataset Available  
**Version**: 2.0  
**Last Updated**: 2022  
**Related Papers**: 
- [arXiv:2205.08007](https://arxiv.org/abs/2205.08007) - Primary Dataset Paper
- [JAES 2023](https://aes2.org/publications/elibrary-page/?id=22027) - Experimental Design Comparison
- [JAES 2022](https://www.aes.org/e-lib/browse.cfm?elib=22010) - Assessor Selection Process
**Dataset URL**: [FORCE Technology](https://forcetechnology.com/en/services/acoustics-noise-sound-quality/senselab-download-hoa-ssr-dataset)

The HOA-SSR dataset represents a significant contribution to the field of immersive media quality assessment, enabling researchers worldwide to develop and validate next-generation quality metrics and perceptual models for 360° audiovisual content.
