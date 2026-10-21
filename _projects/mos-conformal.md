---
layout: page
title: MOS Conformal
description: Conformal prediction wrappers for no-reference MOS predictors, studied under distribution shift (ICASSP 2027 submission, under review).
importance: 2
category: work
related_publications: false
---

**Conformal Uncertainty for No-Reference MOS Prediction under Distribution Shift: A Leakage-Controlled Study** is a paper submitted to ICASSP 2027 and currently under review.

No-reference MOS predictors (DNSMOS P.835, NISQA, UTMOS) return a point estimate with no signal of when to trust it. This project tests whether feature-space distance from a reference distribution can flag unreliable predictions and set per-utterance conformal interval widths. The design separates feature-reference fitting, content-disjoint calibration, and evaluation.

## Key finding

Feature-space distance detects some corpus shifts but does not reliably flag which individual predictions are wrong. Mean domain-detection AUROC is 0.615 to 0.690 across three distance scores, while mean AUROC for detecting the highest-error quartile within a domain is only 0.433 to 0.499, near chance. Feature-space alarms should be treated as domain-mismatch flags, not per-utterance error flags.

## Resources

- Code: [github.com/fransfela/mos-conformal](https://github.com/fransfela/mos-conformal)
- Citation details will be added after the review decision.
