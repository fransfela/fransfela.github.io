---
layout: page
title: SE-LLM ODR Benchmark
description: Measuring how speech enhancement front-ends change the intent predicted by LLM-based voice systems (EMNLP 2026 Industry Track).
img: assets/img/publication_preview/emnlp2026_poster.jpg
importance: 1
category: work
related_publications: false
---

**Perceptually Better, Semantically Worse** studies a blind spot in voice pipelines: speech enhancement (SE) improves perceptual quality metrics such as PESQ and STOI, yet can silently change what a downstream LLM understands.

The project introduces the **Output Divergence Rate (ODR)**, the fraction of clips whose LLM-predicted intent changes after enhancement relative to the clean baseline. It is evaluated on 2,974 SLURP test clips (77 intents) under five conditions: noisy, MetricGAN+, simulated echo, echo with DTLN-AEC, and WPE dereverberation.

## Key findings

- MetricGAN+ more than doubles ODR (0.318 vs. 0.135 for noisy speech) despite improving PESQ.
- Unmitigated echo reaches an ODR of 0.836 through wrong-speaker transcription.
- PESQ has the strongest pooled correlation with ODR (Spearman rho = -0.467), but within any single condition no metric exceeds |rho| = 0.34.
- Findings replicate across ASR architectures (Whisper large-v3 and wav2vec2-large).

## Resources

- Code and evaluation pipeline: [github.com/fransfela/se-llm-odr-benchmark](https://github.com/fransfela/se-llm-odr-benchmark)
- [EMNLP 2026 poster]({{ '/assets/pdf/EMNLP2026_Fela_Poster.png' | relative_url }})
