#!/usr/bin/env python
"""Builds the "You vs the metric" rounds for the Playground.

Each round is a crop of an openly licensed photo, a degraded copy, and two repairs:
a plain one and a neural one. PSNR, SSIM and a sharpness score are computed against the
original, so the page only ever shows measured numbers.

Usage: build_images.py <photos_dir> <weights_dir> <out_dir>
Needs: torch, spandrel, opencv-python, scikit-image, Pillow.
Weights: RealESRGAN_x4plus.pth, scunet_color_real_psnr.pth, fbcnn_color.pth
"""
import io
import json
import os
import sys

import cv2
import numpy as np
import torch
from PIL import Image
from skimage.metrics import peak_signal_noise_ratio as psnr
from skimage.metrics import structural_similarity as ssim
from spandrel import ModelLoader

photos, weights, out = sys.argv[1:4]
os.makedirs(out, exist_ok=True)
SIZE = (960, 640)

# name, source file, crop box (left, top, width, height), problem, shrink factor
ROUNDS = [
    ('kingfisher', 'kingfisher', (960, 150, 960, 640), 'noise', 4),
    ('nyhavn', 'nyhavn', (560, 480, 960, 640), 'lowres', 4),
    ('warung', 'warung', (690, 560, 630, 420), 'lowres', 8),
    ('einstein', 'einstein', (360, 110, 960, 640), 'lowres', 4),
    ('ameya', 'ameya', (480, 560, 960, 640), 'jpeg', 4),
]


def run(model, rgb):
    x = torch.from_numpy(rgb.astype(np.float32) / 255).permute(2, 0, 1)[None]
    with torch.no_grad():
        y = model(x)
    if isinstance(y, (tuple, list)):
        y = y[0]
    return (y[0].clamp(0, 1).permute(1, 2, 0).numpy() * 255).round().astype(np.uint8)


def jpeg(rgb, q):
    b = io.BytesIO()
    Image.fromarray(rgb).save(b, 'JPEG', quality=q)
    return np.array(Image.open(io.BytesIO(b.getvalue())).convert('RGB'))


def sharp(rgb):
    return float(cv2.Laplacian(cv2.cvtColor(rgb, cv2.COLOR_RGB2GRAY), cv2.CV_64F).var())


def score(ref, x):
    return {
        'psnr': round(float(psnr(ref, x, data_range=255)), 1),
        'ssim': round(float(ssim(ref, x, channel_axis=2, data_range=255)), 3),
        'sharp': round(sharp(x)),
    }


def save(rgb, name, q=80):
    Image.fromarray(rgb).save(os.path.join(out, name + '.webp'), 'WEBP', quality=q, method=6)


load = lambda f: ModelLoader().load_from_file(os.path.join(weights, f)).eval()
esrgan, scunet, fbcnn = load('RealESRGAN_x4plus.pth'), load('scunet_color_real_psnr.pth'), load('fbcnn_color.pth')
rng = np.random.default_rng(7)
result = []

for name, src, (l, t, w, h), problem, factor in ROUNDS:
    img = Image.open(os.path.join(photos, src + '.jpg')).convert('RGB').crop((l, t, l + w, t + h)).resize(SIZE, Image.LANCZOS)
    ref = np.array(img)
    if problem == 'lowres':
        small = jpeg(np.array(img.resize((SIZE[0] // factor, SIZE[1] // factor), Image.BICUBIC)), 75)
        broken = np.array(Image.fromarray(small).resize(SIZE, Image.NEAREST))
        plain = np.array(Image.fromarray(small).resize(SIZE, Image.BICUBIC))
        neural = np.array(Image.fromarray(run(esrgan, small)).resize(SIZE, Image.LANCZOS))
        names = ('Bicubic upscaling', 'Real-ESRGAN')
    elif problem == 'noise':
        broken = np.clip(ref + rng.normal(0, 38, ref.shape), 0, 255).astype(np.uint8)
        plain = cv2.GaussianBlur(broken, (0, 0), 1.6)
        neural = run(scunet, broken)
        names = ('Gaussian blur', 'SCUNet')
    else:
        broken = jpeg(ref, 7)
        plain = cv2.GaussianBlur(broken, (0, 0), 1.0)
        neural = run(fbcnn, broken)
        names = ('Gaussian blur', 'FBCNN')
    for tag, x in (('original', ref), ('broken', broken), ('plain', plain), ('neural', neural)):
        save(x, f'{name}-{tag}')
    result.append({
        'id': name, 'problem': problem, 'plainName': names[0], 'neuralName': names[1],
        'broken': score(ref, broken), 'plain': score(ref, plain), 'neural': score(ref, neural), 'original': {'sharp': round(sharp(ref))},
    })
    print(result[-1], flush=True)

with open(os.path.join(out, 'rounds.json'), 'w') as f:
    json.dump(result, f, indent=1)
