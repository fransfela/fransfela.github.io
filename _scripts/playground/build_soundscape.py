#!/usr/bin/env python
"""Builds the soundscape library for the Playground from openly licensed field recordings.

For every sound this picks the best stretch of the raw recording using AudioSet labels
(ast.json: 5 s windows labelled by MIT/ast-finetuned-audioset-10-10-0.4593), turns it into a
seamless loop, or cuts one-shot events at their real onsets, then levels and encodes it.

Loops are stored with 0.25 s of wrapped audio at both ends. The content is periodic, so
looping from 0.25 s for exactly `l` seconds is seamless whatever delay the MP3 encoder adds.

Usage: build_soundscape.py <raw_dir> <ast.json> <candidates.json> <out_dir>
"""
import glob
import json
import os
import re
import subprocess
import sys

import numpy as np
from scipy.signal import butter, sosfilt

raw, ast_path, cand_path, out = sys.argv[1:5]
SR = 44100
PAD = 0.25
XF = 2.5
ast = {k: v for k, v in json.load(open(ast_path, encoding='utf8')).items() if 'utm' not in k}
cands = json.load(open(cand_path, encoding='utf8'))

GREEN, BLUE, ORANGE, RED, PURPLE, YELLOW = '#7bd88f', '#6ec6ff', '#ffb86b', '#ff7b72', '#d6a4ff', '#ecdf7a'
SPEECH = ['Speech', 'Narration, monologue', 'Male speech, man speaking', 'Female speech, woman speaking', 'Conversation']

# In THEMES, v evens out loudness between places, from levels measured in the browser.
# id: source prefix, seconds, wanted AudioSet labels, unwanted labels, names, pleasant, eventful, colour
BEDS = {
    'b_forest': ('rveil-des-oiseaux', 26, ['Bird', 'Chirp, tweet', 'Bird vocalization, bird call, bird song'], SPEECH, ('Dawn forest', 'Hutan pagi'), 0.8, 0.0, GREEN),
    'b_park': ('bourne-woods-windy', 26, ['Bird', 'Chirp, tweet'], SPEECH, ('Open park', 'Taman terbuka'), 0.7, -0.2, GREEN),
    'b_street': ('sunday-in-the-center', 26, ['Speech', 'Music', 'Crowd'], ['Vehicle horn, car horn, honking'], ('Sunday street', 'Jalan hari Minggu'), 0.3, 0.6, ORANGE),
    'b_city': ('cruce-de-eje-1', 26, ['Vehicle', 'Car', 'Traffic noise, roadway noise'], [], ('City crossing', 'Persimpangan kota'), -0.7, 0.4, RED),
    'b_beach': ('ocean-waves-on-a-tropical', 26, ['Ocean', 'Waves, surf', 'Rain'], SPEECH, ('Tropical surf', 'Ombak tropis'), 0.8, -0.3, BLUE),
    'b_rain': ('light-rain-distant', 26, ['Rain', 'Rain on surface', 'Raindrop'], SPEECH, ('Steady rain', 'Hujan tetap'), 0.5, -0.6, BLUE),
    'b_cafe': ('restaurant-ambience', 26, ['Speech', 'Chink, clink', 'Dishes, pots, and pans'], [], ('Restaurant room', 'Ruang restoran'), 0.1, 0.4, ORANGE),
    'b_tropic': ('night-original-format', 24, ['Cricket', 'Insect'], SPEECH, ('Night insects', 'Serangga malam'), 0.5, -0.4, YELLOW),
}
LOOPS = {
    'birds': ('dobroide-20060824', 24, ['Bird', 'Chirp, tweet', 'Bird vocalization, bird call, bird song'], SPEECH, ('Songbirds', 'Burung kicau'), 0.9, 0.2, GREEN),
    'chorus': ('rveil-des-oiseaux', 24, ['Bird vocalization, bird call, bird song', 'Owl'], SPEECH, ('Dawn chorus', 'Paduan fajar'), 0.9, 0.3, GREEN),
    'stream': ('sanna-river-rapids', 24, ['Waterfall', 'Rain on surface', 'Water'], SPEECH, ('River', 'Sungai'), 0.7, -0.3, BLUE),
    'brook': ('brook-sound', 13, ['Drip', 'Liquid', 'Water'], SPEECH, ('Little brook', 'Anak sungai'), 0.8, -0.5, BLUE),
    'leaves': ('wind-sounds-2020', 24, ['Rustling leaves', 'Wind'], ['Wind noise (microphone)'] + SPEECH, ('Wind in the leaves', 'Angin di dedaunan'), 0.4, -0.5, GREEN),
    'cicadas_id': ('cicadas-singing-in-a-public-park-in-bang', 17, [], SPEECH, ('Cicadas, Bangka', 'Tonggeret, Bangka'), 0.3, 0.3, YELLOW),
    'cicadas_java': ('2026-03-29', 24, ['Cricket', 'Insect'], SPEECH, ('Cicadas, East Java', 'Tonggeret, Jawa Timur'), 0.3, 0.2, YELLOW),
    'crickets': ('night-original-format', 22, ['Cricket', 'Insect'], SPEECH, ('Crickets', 'Jangkrik'), 0.5, -0.4, YELLOW),
    'frogs': ('nature-sounds-ambience', 24, ['Frog', 'Croak'], SPEECH, ('Pond frogs', 'Katak kolam'), 0.5, 0.1, GREEN),
    'fountain': ('fountain-in-toulouse', 24, ['Water', 'Trickle, dribble', 'Liquid'], SPEECH, ('Fountain', 'Air mancur'), 0.7, -0.1, BLUE),
    'kids': ('douzen-kids-on-playground', 24, ['Children playing', 'Speech'], [], ('Playground', 'Taman bermain'), 0.4, 0.8, ORANGE),
    'crowd': ('360703-eguobyte', 24, ['Speech', 'Crowd'], [], ('Crowd', 'Keramaian'), -0.1, 0.6, ORANGE),
    'chatter': ('442697-sbssa', 24, ['Speech'], [], ('Chatter', 'Obrolan'), 0.0, 0.4, ORANGE),
    'market': ('italia-palermo-mercato', 24, ['Speech', 'Outside, urban or manmade'], [], ('Market stalls', 'Lapak pasar'), 0.2, 0.9, ORANGE),
    'violin': ('street-musician-violin', 24, ['Violin, fiddle', 'Music'], SPEECH, ('Street violinist', 'Pemain biola jalanan'), 0.8, 0.5, PURPLE),
    'flea': ('flea-market-in-the-rain', 24, ['Music', 'Ukulele'], [], ('Street band', 'Musik jalanan'), 0.6, 0.7, PURPLE),
    'rainwin': ('rain-against-the-window', 24, ['Rain', 'Rain on surface', 'Raindrop'], SPEECH, ('Rain on glass', 'Hujan di kaca'), 0.6, -0.6, BLUE),
    'storm': ('thunderstorm-after-hot', 24, ['Rain', 'Rain on surface'], ['Thunder', 'Thunderstorm'], ('Heavy rain', 'Hujan deras'), 0.2, 0.2, BLUE),
    'surf': ('oceanwavescrushing', 24, ['Ocean', 'Waves, surf'], SPEECH, ('Breaking waves', 'Ombak pecah'), 0.8, 0.1, BLUE),
    'traffic': ('highway-from-bridge', 24, ['Vehicle', 'Car', 'Traffic noise, roadway noise'], ['Honk'] + SPEECH, ('Traffic', 'Lalu lintas'), -0.8, 0.3, RED),
    'bridge': ('cars-passing-over-bridge', 24, ['Vehicle', 'Car'], SPEECH, ('Road bridge', 'Jembatan jalan'), -0.9, 0.1, RED),
    'dishes': ('restaurant-in-leeuwarden', 24, ['Dishes, pots, and pans', 'Cutlery, silverware'], [], ('Plates and cutlery', 'Piring dan sendok'), 0.2, 0.3, ORANGE),
    'mall': ('1-minute-at-the-alexa-mall', 24, ['Speech'], [], ('Shopping mall', 'Pusat belanja'), -0.3, 0.2, ORANGE),
}
# id: source prefix, search window (s), how many, longest and shortest cut (s), names, colour, gain trim.
# BANDS limits onset detection to the frequencies that define the event.
SHOTS = {
    'dog': ('barking-dog-in-rome', (0, 18), 3, (2.2, 0.7), ('Dog', 'Anjing'), ORANGE, 0.9),
    'bike': ('campana-clsica', (0, 10), 1, (3, 1.6), ('Bicycle bell', 'Bel sepeda'), YELLOW, 0.7),
    'horn': ('car-horn', (0, 4), 1, (3.5, 2.6), ('Car horn', 'Klakson'), RED, 0.6),
    'tram': ('melbourne-trams', (100, 118), 1, (10, 9), ('Tram', 'Trem'), RED, 1.0),
    'tramb': ('sydney-tram-18', (12, 22), 1, (4, 2), ('Tram bell', 'Bel trem'), YELLOW, 0.8),
    'car': ('highway-from-bridge', (0, 195), 3, (7, 5), ('Passing car', 'Mobil lewat'), RED, 0.9),
    'siren': ('wws-policecarsiren', (0, 15), 1, (15, 14), ('Police siren', 'Sirene polisi'), RED, 0.5),
    'thunder': ('thunderstorm-after-hot', (155, 180), 2, (11, 8), ('Thunder', 'Guntur'), BLUE, 1.0),
    'call': ('bird-call-with-so-called', (0, 40), 3, (3, 1.6), ('Bird call', 'Panggilan burung'), GREEN, 1.0),
    'gull': ('gull-1', (0, 18), 3, (3, 1.3), ('Gull', 'Camar'), BLUE, 0.8),
    'geese': ('geese-honking-distant', (0, 9), 1, (9, 8), ('Geese overhead', 'Angsa melintas'), GREEN, 0.8),
    'bell': ('sound-of-church-bells', (10, 95), 1, (13, 11), ('Distant bells', 'Lonceng jauh'), PURPLE, 0.6),
}
BANDS = {'car': (70, 900)}
THEMES = [
    dict(id='forest', v=2.5, n=('Forest', 'Hutan'), paint='forest', rt=1.5, wet=1.0, bed=[('b_forest', 0.8)],
         src=[('birds', -6.5, -3, 0.7), ('stream', 7.2, -1, 0.55), ('leaves', -3, 4, 0.45), ('brook', 6, 3.5, 0.5)],
         ev=[(['call'], (5, 16), 'spot', 0.7), (['geese'], (40, 90), 'pass', 0.6)]),
    dict(id='park', v=2.0, n=('Park', 'Taman'), paint='park', rt=0.7, wet=0.8, bed=[('b_park', 0.7)],
         src=[('kids', -7.4, 3.2, 0.5), ('fountain', 6, -3.8, 0.7), ('chatter', -2.5, -4.6, 0.3)],
         ev=[(['dog'], (10, 28), 'spot', 0.7), (['bike'], (14, 34), 'pass', 0.6), (['bell'], (50, 110), 'spot', 0.6), (['geese'], (35, 80), 'pass', 0.55)]),
    dict(id='street', v=1.1, n=('Walking street', 'Jalan pedestrian'), paint='street', rt=1.0, wet=1.0, bed=[('b_street', 0.8)],
         src=[('violin', -6, -3.4, 0.7), ('market', 7, 3.6, 0.45), ('crowd', 0, 4, 0.4), ('flea', 9, -3.8, 0.3)],
         ev=[(['bike'], (10, 26), 'pass', 0.6), (['dog'], (20, 45), 'spot', 0.6), (['bell'], (45, 100), 'spot', 0.5)]),
    dict(id='city', v=1.25, n=('City street', 'Jalan kota'), paint='city', rt=1.1, wet=1.2, bed=[('b_city', 0.75)],
         src=[('traffic', 0, -2, 0.55), ('bridge', 7, 2, 0.3), ('crowd', -6, 5.6, 0.3)],
         ev=[(['car'], (3, 9), 'pass', 0.8), (['horn'], (7, 18), 'spot', 0.7), (['tram', 'tramb'], (20, 45), 'pass', 0.8), (['siren'], (35, 80), 'pass', 0.7)]),
    dict(id='beach', v=2.0, n=('Beach', 'Pantai'), paint='beach', rt=0.3, wet=0.4, bed=[('b_beach', 0.65)],
         src=[('surf', 1, -5, 0.65), ('leaves', -8, 4, 0.3), ('kids', 8, 3.5, 0.2)],
         ev=[(['gull'], (5, 14), 'spot', 0.7)]),
    dict(id='rain', v=1.7, n=('Rainstorm', 'Badai hujan'), paint='rain', rt=1.2, wet=1.0, bed=[('b_rain', 0.85)],
         src=[('rainwin', -3, -3, 0.65), ('storm', 6, -4, 0.5), ('traffic', 8, 5, 0.15)],
         ev=[(['thunder'], (14, 34), 'spot', 0.9), (['car'], (18, 40), 'pass', 0.5)]),
    dict(id='cafe', v=1.5, n=('Restaurant', 'Restoran'), paint='cafe', rt=0.8, wet=1.3, bed=[('b_cafe', 0.8)],
         src=[('chatter', -7, -3.4, 0.45), ('dishes', 6, 2, 0.5), ('violin', 8, -4.5, 0.2)],
         ev=[(['car'], (20, 45), 'pass', 0.2), (['horn'], (30, 70), 'spot', 0.18)]),
    dict(id='tropic', v=1.5, n=('Tropical evening', 'Senja tropis'), paint='forest', rt=1.0, wet=0.8, bed=[('b_tropic', 0.6)],
         src=[('cicadas_id', -7, -3, 0.55), ('cicadas_java', 7, -2.5, 0.5), ('frogs', 4, 4, 0.6), ('brook', -5, 4, 0.3)],
         ev=[(['dog'], (30, 70), 'spot', 0.35), (['call'], (20, 50), 'spot', 0.4)]),
]


def source(prefix):
    hit = sorted(p for p in glob.glob(os.path.join(raw, prefix + '*')) if 'utm' not in p)
    if not hit:
        raise SystemExit('missing recording: ' + prefix)
    return hit[0]


def decode(path, channels):
    b = subprocess.run(['ffmpeg', '-v', 'error', '-i', path, '-ac', str(channels), '-ar', str(SR), '-f', 'f32le', '-'], capture_output=True).stdout
    x = np.frombuffer(b, dtype=np.float32).copy()
    return x.reshape(-1, channels)


def channels_of(path):
    o = subprocess.run(['ffprobe', '-v', 'error', '-select_streams', 'a:0', '-show_entries', 'stream=channels', '-of', 'csv=p=0', path], capture_output=True, text=True).stdout
    return min(2, int(o.strip().split(',')[0] or 1))


def highpass(x, hz=45):
    return sosfilt(butter(4, hz, 'hp', fs=SR, output='sos'), x, axis=0).astype(np.float32)


def best_start(path, seconds, want, avoid):
    """Finds the stretch that is most like `want`, least like `avoid`, and steady in level."""
    win = ast[os.path.basename(path)]
    if not want:
        return 0.0
    def s(w):
        d = dict(map(tuple, w['top']))
        return sum(d.get(k, 0) for k in want) - 1.5 * sum(d.get(k, 0) for k in avoid)
    end = win[-1]['t'] + 5
    span = seconds + XF
    best, at = -1e9, 0.0
    # long files were labelled at sampled times, so judge each stretch by the windows inside it
    for w0 in win:
        part = [w for w in win if w0['t'] <= w['t'] < w0['t'] + span]
        if w0['t'] + span > end:
            continue
        spread = max(w['db'] for w in part) - min(w['db'] for w in part)
        v = np.mean([s(w) for w in part]) - 0.03 * spread
        if v > best:
            best, at = v, w0['t']
    return float(at)


def make_loop(path, seconds, want, avoid):
    ch = channels_of(path)
    x = decode(path, ch)
    start = best_start(path, seconds, want, avoid)
    i = int(start * SR)
    total = len(x) - i
    L = min(int(seconds * SR), total - int(XF * SR))
    if L < 6 * SR:
        i, total = 0, len(x)
        L = total - int(XF * SR)
    seg = highpass(x[i:i + L + int(XF * SR)])
    n = int(XF * SR)
    t = np.linspace(0, np.pi / 2, n, dtype=np.float32)[:, None]
    loop = seg[:L].copy()
    # equal-power crossfade: the end of the take flows into the start
    loop[:n] = seg[:n] * np.sin(t) + seg[L:L + n] * np.cos(t)
    p = int(PAD * SR)
    y = np.concatenate([loop[-p:], loop, loop[:p]])
    return y, L / SR, start


def level(y, target_db):
    r = float(np.sqrt(np.mean(y ** 2)) + 1e-9)
    y = y * (10 ** (target_db / 20) / r)
    pk = float(np.abs(y).max())
    return y * (0.88 / pk) if pk > 0.88 else y


def write(y, name, kbps):
    ch = y.shape[1]
    p = subprocess.Popen(['ffmpeg', '-y', '-v', 'error', '-f', 'f32le', '-ar', str(SR), '-ac', str(ch), '-i', '-', '-c:a', 'libmp3lame', '-b:a', f'{kbps}k', os.path.join(out, name)], stdin=subprocess.PIPE)
    p.communicate(y.astype(np.float32).tobytes())


def shots(path, window, count, span, band=None):
    longest, shortest = span
    x = highpass(decode(path, 1), 60)[:, 0]
    a, b = int(window[0] * SR), min(len(x), int(window[1] * SR))
    seg = x[a:b]
    hop = int(0.02 * SR)
    probe = sosfilt(butter(4, band, 'bp', fs=SR, output='sos'), seg) if band else seg
    env = np.sqrt(np.convolve(probe ** 2, np.ones(hop) / hop, 'same'))[::hop]
    floor = np.percentile(env, 30)
    used = np.zeros(len(env), dtype=bool)
    cuts = []
    for _ in range(count):
        e = np.where(used, 0, env)
        peak = int(np.argmax(e))
        if e[peak] < floor * 2 and cuts:
            break
        limit = max(env[peak] * 0.1, floor * 1.3)
        s = peak
        while s > 0 and env[s] > limit and (peak - s) * 0.02 < longest * 0.4:
            s -= 1
        t = peak
        while t < len(env) - 1 and (env[t] > limit or (t - peak) * 0.02 < 0.25) and (t - s) * 0.02 < longest:
            t += 1
        t = min(len(env) - 1, max(t, s + int(shortest / 0.02)))
        if (t - s) * 0.02 < shortest:
            s = max(0, t - int(shortest / 0.02))  # near the end of the take: start earlier instead
        used[max(0, s - 25):t + 25] = True
        y = seg[s * hop:t * hop].copy()
        if len(y) < int(0.08 * SR):
            continue
        fi, fo = int(0.006 * SR), min(len(y) // 3, int(max(0.06, len(y) / SR * 0.12) * SR))
        y[:fi] *= np.linspace(0, 1, fi)
        y[-fo:] *= np.linspace(1, 0, fo)
        cuts.append(y / (np.abs(y).max() + 1e-9) * 0.7)
    return cuts


def credit_for(path):
    stem = os.path.basename(path)
    for title, v in cands.items():
        slug = re.sub(r'[^a-z0-9]+', '-', title[5:].lower().encode('ascii', 'ignore').decode())[:40].strip('-')
        if stem.startswith(slug) and slug:
            return {'title': title[5:].rsplit('.', 1)[0], 'url': v['page'], 'by': v['artist'].strip() or 'unknown', 'lic': v['lic']}
    raise SystemExit('no licence record for ' + stem)


def main():
    os.makedirs(out, exist_ok=True)
    sounds, used = {}, {}
    for table, target, kbps, bed in ((BEDS, -24, 96, True), (LOOPS, -22, 64, False)):
        for sid, (prefix, secs, want, avoid, names, p, e, colour) in table.items():
            path = source(prefix)
            y, length, start = make_loop(path, secs, want, avoid)
            write(level(y, target), f'{sid}.mp3', kbps)
            sounds[sid] = {'f': f'sound/{sid}.mp3', 'l': round(length, 4), 'n': {'en': names[0], 'id': names[1]}, 'p': p, 'e': e, 'c': colour}
            if bed:
                sounds[sid]['bed'] = 1
            used[path] = 1
            print(sid, 'from', round(start, 1), 's, loop', round(length, 1), 's', flush=True)
    for sid, (prefix, window, count, span, names, colour, trim) in SHOTS.items():
        path = source(prefix)
        cuts = shots(path, window, count, span, BANDS.get(sid))
        for i, y in enumerate(cuts):
            key = sid if i == 0 else f'{sid}{i + 1}'
            write(y[:, None], f'{key}.mp3', 64)
            sounds[key] = {'f': f'sound/{key}.mp3', 'n': {'en': names[0], 'id': names[1]}, 'p': 0, 'e': 0.6, 'c': colour, 'shot': 1, 't': trim}
        used[path] = 1
        print(sid, len(cuts), 'cuts', [round(len(c) / SR, 1) for c in cuts], flush=True)

    themes = []
    for t in THEMES:
        events = []
        for ids, every, path, gain in t['ev']:
            group = [k for k in sounds if any(re.fullmatch(i + r'\d?', k) for i in ids) and sounds[k].get('shot')]
            event = {'s': group, 'every': list(every), 'path': path, 'g': gain}
            if t['paint'] == 'city' and path == 'pass':
                event['area'] = [-12, -3, 12, 3]  # keep vehicles on the road
            events.append(event)
        themes.append({
            'id': t['id'], 'n': {'en': t['n'][0], 'id': t['n'][1]}, 'paint': t['paint'], 'rt': t['rt'], 'wet': t['wet'], 'v': t['v'],
            'bed': [{'s': s, 'g': g} for s, g in t['bed']],
            'src': [{'s': s, 'x': x, 'y': y, 'l': l} for s, x, y, l in t['src']],
            'ev': events,
        })
    credits = sorted((credit_for(p) for p in used), key=lambda c: c['title'].lower())
    with open(os.path.join(os.path.dirname(out.rstrip('/\\')), 'soundscape.json'), 'w', encoding='utf8') as f:
        json.dump({'sounds': sounds, 'themes': themes, 'credits': credits}, f, ensure_ascii=False, separators=(',', ':'))
    print(len(sounds), 'sounds,', len(credits), 'recordings')


main()
