#!/usr/bin/env python
"""Builds the "Catch the sentence" rounds for the Playground.

Clean LibriSpeech sentences are mixed with real recordings at a set SNR, enhanced with
MetricGAN+ and DeepFilterNet, transcribed with Whisper, and scored with PESQ and STOI.
Every result is measured. Rounds are hand-picked from those results, including clips that
enhancement made worse, and the overall averages are published alongside them.

Stages, in order (work_dir holds everything between stages):
  build_speech.py mix  <librispeech_root> <noise_dir> <work_dir>
  build_speech.py dfn  <work_dir>       # needs deepfilternet; ran in a Linux container
  build_speech.py mgan <work_dir>       # needs speechbrain
  build_speech.py asr  <work_dir>       # needs transformers
  build_speech.py score <work_dir>      # needs pesq, pystoi; ran in a Linux container
  build_speech.py pick <work_dir> <out_dir>
"""
import glob
import json
import os
import re
import subprocess
import sys

import numpy as np
import soundfile as sf

SR = 16000
SENTENCES = [
    '7850-281318-0003', '2035-147960-0006', '3081-166546-0015', '5895-34629-0029',
    '6319-57405-0007', '1993-147964-0006', '3081-166546-0038', '6313-76958-0015',
    '8297-275155-0028', '174-84280-0011', '3170-137482-0014', '6295-244435-0003',
    '2428-83705-0000', '3752-4944-0038', '2803-154320-0013', '251-136532-0009',
]
# noise id, raw file prefix, label in both languages, start second in the recording
NOISES = [
    ('cafe', 'restaurant-ambience', {'en': 'In a busy restaurant', 'id': 'Di restoran yang ramai'}, 5),
    ('street', 'cruce-de-eje-1', {'en': 'At a Mexico City crossing', 'id': 'Di persimpangan Kota Meksiko'}, 10),
    ('crowd', '442697-sbssa', {'en': 'In a chattering crowd', 'id': 'Di tengah kerumunan'}, 20),
    ('rain', 'light-rain-distant', {'en': 'Out in the rain', 'id': 'Di tengah hujan'}, 10),
    ('waves', 'ocean-waves-on-a-tropical', {'en': 'On a windy beach', 'id': 'Di pantai berangin'}, 30),
]
SNRS = [0, -5]
TAGS = ['noisy', 'dfn', 'mgan']
# Picked by hand from all mixes for variety. The page also reports the average over every mix,
# so these rounds are not mistaken for typical results.
ROUNDS = [
    ('6313-76958-0015_waves_-5', 'rescue'),
    ('2428-83705-0000_rain_0', 'hurt'),
    ('251-136532-0009_street_-5', 'rescue'),
    ('3081-166546-0038_cafe_0', 'hurt'),
    ('5895-34629-0029_street_-5', 'hurt'),
]


def decode(path):
    b = subprocess.run(['ffmpeg', '-v', 'error', '-i', path, '-ac', '1', '-ar', str(SR), '-f', 'f32le', '-'], capture_output=True).stdout
    return np.frombuffer(b, dtype=np.float32).copy()


def rms(x):
    return float(np.sqrt(np.mean(x ** 2)) + 1e-12)


def normal(t):
    t = re.sub(r"[^a-z' ]", ' ', t.lower().replace('-', ' '))
    return ' '.join(t.split())


def wer(ref, hyp):
    a, b = ref.split(), hyp.split()
    d = np.zeros((len(a) + 1, len(b) + 1), dtype=int)
    d[:, 0] = np.arange(len(a) + 1)
    d[0, :] = np.arange(len(b) + 1)
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            d[i, j] = min(d[i - 1, j] + 1, d[i, j - 1] + 1, d[i - 1, j - 1] + (a[i - 1] != b[j - 1]))
    return float(d[-1, -1] / max(1, len(a)))


def clips(work):
    return json.load(open(os.path.join(work, 'clips.json')))


def mix(root, noise_dir, work):
    os.makedirs(work, exist_ok=True)
    rng = np.random.default_rng(11)
    text = {}
    for f in glob.glob(root + '/dev-clean/*/*/*.trans.txt'):
        for line in open(f):
            k, t = line.strip().split(' ', 1)
            text[k] = t
    noises = {}
    for nid, prefix, _, start in NOISES:
        hit = sorted(p for p in glob.glob(noise_dir + '/' + prefix + '*') if '&' not in p)
        noises[nid] = decode(hit[0])[start * SR:]
    out = []
    for sid in SENTENCES:
        a, b, _ = sid.split('-')
        x, sr = sf.read(f'{root}/dev-clean/{a}/{b}/{sid}.flac', dtype='float32')
        assert sr == SR
        pad = np.zeros(int(0.5 * SR), dtype=np.float32)
        clean = np.concatenate([pad, x, pad])
        clean = clean / np.abs(clean).max() * 0.7
        for nid, *_ in NOISES:
            n = noises[nid]
            for snr in SNRS:
                s = int(rng.integers(0, len(n) - len(clean)))
                seg = n[s:s + len(clean)]
                speech = clean[clean != 0]
                y = clean + seg * (rms(speech) / rms(seg)) * 10 ** (-snr / 20)
                g = min(1.0, 0.95 / np.abs(y).max())
                key = f'{sid}_{nid}_{snr}'
                sf.write(f'{work}/{key}_noisy.wav', y * g, SR)
                sf.write(f'{work}/{key}_clean.wav', clean * g, SR)
                out.append({'key': key, 'sid': sid, 'noise': nid, 'snr': snr, 'truth': normal(text[sid])})
    json.dump(out, open(os.path.join(work, 'clips.json'), 'w'), indent=0)
    print(len(out), 'mixes')


def dfn(work):
    import torch
    import torchaudio
    from df.enhance import enhance, init_df
    model, state, _ = init_df()
    up = torchaudio.transforms.Resample(SR, state.sr())
    down = torchaudio.transforms.Resample(state.sr(), SR)
    for c in clips(work):
        x, _ = sf.read(f"{work}/{c['key']}_noisy.wav", dtype='float32')
        y = down(enhance(model, state, up(torch.from_numpy(x)[None]))).squeeze(0).numpy()[:len(x)]
        sf.write(f"{work}/{c['key']}_dfn.wav", np.pad(y, (0, len(x) - len(y))), SR)
    print('dfn done')


def mgan(work):
    import torch
    from speechbrain.inference.enhancement import SpectralMaskEnhancement
    from speechbrain.utils.fetching import LocalStrategy
    model = SpectralMaskEnhancement.from_hparams(source='speechbrain/metricgan-plus-voicebank', savedir=os.path.join(work, 'mgan_model'), local_strategy=LocalStrategy.COPY)
    for c in clips(work):
        x, _ = sf.read(f"{work}/{c['key']}_noisy.wav", dtype='float32')
        t = torch.from_numpy(x)[None]
        with torch.no_grad():
            y = model.enhance_batch(t, lengths=torch.tensor([1.0]))[0].numpy()[:len(x)]
        sf.write(f"{work}/{c['key']}_mgan.wav", np.pad(y, (0, len(x) - len(y))), SR)
    print('mgan done')


def asr(work):
    import torch
    from transformers import WhisperForConditionalGeneration, WhisperProcessor
    name = 'openai/whisper-small.en'
    proc = WhisperProcessor.from_pretrained(name)
    model = WhisperForConditionalGeneration.from_pretrained(name).eval()
    path = os.path.join(work, 'asr.json')
    done = json.load(open(path)) if os.path.exists(path) else {}
    items = [(c['key'], t) for c in clips(work) for t in TAGS if f"{c['key']}_{t}" not in done]
    for i in range(0, len(items), 8):
        part = items[i:i + 8]
        audio = [sf.read(f'{work}/{k}_{t}.wav', dtype='float32')[0] for k, t in part]
        feats = proc(audio, sampling_rate=SR, return_tensors='pt').input_features
        with torch.no_grad():
            ids = model.generate(feats, max_new_tokens=64)
        for (k, t), s in zip(part, proc.batch_decode(ids, skip_special_tokens=True)):
            done[f'{k}_{t}'] = normal(s)
        json.dump(done, open(path, 'w'), indent=0)
        print(i + len(part), '/', len(items), flush=True)


def score(work):
    from pesq import pesq
    from pystoi import stoi
    out = {}
    for c in clips(work):
        ref, _ = sf.read(f"{work}/{c['key']}_clean.wav", dtype='float32')
        for t in TAGS:
            x, _ = sf.read(f"{work}/{c['key']}_{t}.wav", dtype='float32')
            try:
                p = round(float(pesq(SR, ref, x, 'wb')), 2)
            except Exception:
                p = None
            out[f"{c['key']}_{t}"] = {'pesq': p, 'stoi': round(float(stoi(ref, x, SR, extended=False)), 2)}
    json.dump(out, open(os.path.join(work, 'scores.json'), 'w'), indent=0)
    print('scored', len(out))


def spectrogram(x, path):
    import librosa
    from matplotlib import cm
    from PIL import Image
    s = librosa.feature.melspectrogram(y=x, sr=SR, n_fft=1024, hop_length=128, n_mels=128, fmax=8000)
    db = np.clip((librosa.power_to_db(s, ref=1.0) + 70) / 70, 0, 1)
    img = (cm.magma(db[::-1])[:, :, :3] * 255).astype(np.uint8)
    Image.fromarray(img).resize((960, 240), Image.BICUBIC).save(path, 'WEBP', quality=68, method=6)


def encode(wav, mp3):
    subprocess.run(['ffmpeg', '-y', '-v', 'error', '-i', wav, '-c:a', 'libmp3lame', '-b:a', '48k', mp3], check=True)


def pick(work, out):
    os.makedirs(out, exist_ok=True)
    words = json.load(open(os.path.join(work, 'asr.json')))
    sc = json.load(open(os.path.join(work, 'scores.json')))
    noise_label = {n[0]: n[2] for n in NOISES}
    rows = []
    for c in clips(work):
        k = c['key']
        h = {t: words[f'{k}_{t}'] for t in TAGS}
        w = {t: round(wer(c['truth'], h[t]), 3) for t in TAGS}
        s = {t: sc[f'{k}_{t}'] for t in TAGS}
        rows.append({**c, 'asr': h, 'wer': w, 'pesq': {t: s[t]['pesq'] for t in TAGS}, 'stoi': {t: s[t]['stoi'] for t in TAGS}})
    json.dump(rows, open(os.path.join(work, 'all_rounds.json'), 'w'), indent=0)

    by_key = {r['key']: r for r in rows}
    order = [dict(by_key[k], kind=kind) for k, kind in ROUNDS]
    result = []
    for n, r in enumerate(order):
        rid = f'r{n + 1}'
        for t in TAGS + ['clean']:
            src = f"{work}/{r['key']}_{t}.wav"
            encode(src, f'{out}/{rid}-{t}.mp3')
            spectrogram(sf.read(src, dtype='float32')[0], f'{out}/{rid}-{t}.webp')
        wrong = []
        for t in TAGS:
            if r['asr'][t] != r['truth'] and r['asr'][t] and r['asr'][t] not in wrong:
                wrong.append(r['asr'][t])
        others = [x['truth'] for x in rows if x['sid'] != r['sid']]
        rng = np.random.default_rng(n)
        while len(wrong) < 2:
            o = others[int(rng.integers(0, len(others)))]
            if o not in wrong:
                wrong.append(o)
        result.append({
            'id': rid, 'noise': noise_label[r['noise']], 'snr': r['snr'], 'truth': r['truth'], 'choices': [r['truth']] + wrong[:2],
            'asr': r['asr'], 'wer': r['wer'], 'pesq': r['pesq'], 'stoi': r['stoi'], 'source': r['sid'], 'kind': r['kind'],
        })
        print(result[-1])
    mean = lambda key, t: float(np.mean([r[key][t] or 0 for r in rows]))
    overall = {t: {'pesq': round(mean('pesq', t), 2), 'stoi': round(mean('stoi', t), 2), 'wer': round(mean('wer', t), 2)} for t in TAGS}
    print(overall)
    json.dump({'n': len(rows), 'all': overall, 'rounds': result}, open(os.path.join(out, 'rounds.json'), 'w'), indent=1, ensure_ascii=False)


if __name__ == '__main__':
    stage, args = sys.argv[1], sys.argv[2:]
    {'mix': mix, 'dfn': dfn, 'mgan': mgan, 'asr': asr, 'score': score, 'pick': pick}[stage](*args)
