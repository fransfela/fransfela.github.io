---
layout: post
title: "Soundscape (Bentang Suara): Teori, Metode, dan Analisis"
subtitle: "A Living Textbook"
date: 2025-01-10
description: Panduan komprehensif tentang analisis soundscape dari perspektif teknis dan perseptual dengan implementasi praktis menggunakan Python dan R
authors:
  - name: Randy Frans Fela
    url: "https://fransfela.github.io"
    affiliations:
      name: GN Group, Copenhagen
tags: soundscape acoustics perceptual-audio
categories: audio-engineering
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
# Pengantar

Dalam beberapa dekade terakhir, kesadaran akan pentingnya kualitas lingkungan akustik telah meningkat secara signifikan, tidak hanya dalam konteks pengendalian kebisingan (*noise control*), tetapi juga dalam pemahaman yang lebih holistik tentang bagaimana manusia mempersepsikan dan berinteraksi dengan lingkungan sonik mereka. Pergeseran paradigma ini menandai transisi dari pendekatan reduksionis yang berfokus pada pengurangan kebisingan (*noise reduction*) menuju pendekatan yang lebih komprehensif dalam memahami lanskap suara (*soundscape*) sebagai sumber daya lingkungan yang berharga.

Istilah *soundscape* pertama kali diperkenalkan oleh komposer dan peneliti Kanada, R. Murray Schafer, pada tahun 1960-an melalui proyek monumentalnya, *World Soundscape Project* (Schafer, 1977). Schafer mendefinisikan *soundscape* sebagai lingkungan suara (*sonic environment*) yang dapat dipelajari sebagai komposisi musik, suatu karya seni, atau sebagai medan untuk mempelajari persepsi dan perilaku manusia. Konsep ini kemudian berkembang dan diadopsi dalam berbagai disiplin ilmu, mulai dari ekologi, urbanisme, psikologi lingkungan, hingga teknik akustik.

Saat ini, *soundscape* didefinisikan secara formal dalam standar internasional ISO 12913-1:2014 sebagai "lingkungan akustik yang dipersepsikan, dialami, dan/atau dipahami oleh seseorang atau sekelompok orang dalam konteks tertentu" (International Organization for Standardization, 2014). Definisi ini menekankan bahwa *soundscape* bukan sekadar fenomena fisik akustik, melainkan hasil dari interaksi kompleks antara rangsangan akustik (*acoustic stimuli*), persepsi manusia, dan konteks situasional. Dengan kata lain, *soundscape* adalah pengalaman subjektif yang dibentuk oleh karakteristik objektif dari lingkungan suara.

Analisis *soundscape* memiliki aplikasi yang luas dan beragam. Dalam konteks perkotaan (*urban soundscape*), pemahaman tentang kualitas akustik ruang publik seperti taman, alun-alun, dan jalan dapat menginformasikan perencanaan kota yang lebih baik dan meningkatkan kualitas hidup warga (Kang et al., 2016). Dalam ekologi (*soundscape ecology*), analisis lanskap suara digunakan untuk memantau keanekaragaman hayati, kesehatan ekosistem, dan dampak aktivitas manusia terhadap lingkungan alami (Pijanowski et al., 2011; Farina, 2014). Di lingkungan dalam ruangan (*indoor soundscape*), seperti kantor, rumah sakit, dan sekolah, desain akustik yang mempertimbangkan aspek perseptual dapat meningkatkan kenyamanan, produktivitas, dan kesejahteraan pengguna (Rychtáriková & Vermeir, 2013).

Tantangan utama dalam analisis *soundscape* adalah menjembatani kesenjangan antara pengukuran objektif dari sinyal akustik dengan evaluasi subjektif dari pengalaman manusia. Di satu sisi, kita memiliki berbagai metrik akustik (*acoustic indices*) yang dapat mengukur properti fisik suara seperti tingkat tekanan suara (*sound pressure level*), kompleksitas spektral, dan keanekaragaman akustik. Di sisi lain, kita memerlukan metode evaluasi perseptual yang dapat menangkap dimensi psikologis seperti kenyamanan (*pleasantness*), kebangkitan emosi (*arousal*), dan kepuasan keseluruhan (*overall satisfaction*). Hubungan antara metrik objektif dan respons subjektif ini menjadi fokus penelitian yang terus berkembang (Aletta et al., 2016; Lionello et al., 2020).

Perkembangan teknologi dalam pemrosesan sinyal digital (*digital signal processing*), pembelajaran mesin (*machine learning*), dan sensor akustik telah membuka peluang baru dalam analisis *soundscape*. Saat ini, kita dapat melakukan perekaman (*recording*) dengan resolusi spasial tinggi menggunakan teknologi *ambisonic* atau *binaural*, mengekstraksi fitur kompleks dari sinyal audio menggunakan algoritma canggih, dan memodelkan hubungan antara karakteristik akustik dengan respons manusia menggunakan pendekatan berbasis data. Namun, untuk memanfaatkan teknologi ini secara efektif, pemahaman yang kuat tentang prinsip-prinsip dasar akustik, persepsi pendengaran (*auditory perception*), dan metodologi eksperimen menjadi sangat penting.

Buku ini hadir untuk menjawab kebutuhan akan panduan komprehensif yang mengintegrasikan teori *soundscape* dengan praktik analisis data yang konkret. Tidak seperti banyak publikasi yang berfokus pada aspek teoritis atau hanya memberikan gambaran umum, buku ini memberikan penekanan khusus pada implementasi praktis menggunakan bahasa pemrograman Python dan R—dua *tools* yang paling populer dalam komunitas peneliti audio dan data sains. Dengan pendekatan *hands-on* ini, pembaca tidak hanya memahami konsep, tetapi juga dapat langsung menerapkannya dalam proyek penelitian atau aplikasi profesional mereka.

## Tentang Buku Ini

### Tujuan dan Sasaran Pembaca

Buku ini dirancang sebagai panduan praktis dan komprehensif untuk mahasiswa, peneliti, praktisi, dan siapa saja yang tertarik dalam bidang analisis *soundscape*. Baik Anda adalah mahasiswa pascasarjana yang sedang mengerjakan penelitian terkait akustik lingkungan, insinyur audio yang ingin memperluas keahlian ke domain perseptual, *urban planner* yang ingin memahami dimensi akustik dalam desain kota, ekolog yang menggunakan *bioacoustics* untuk monitoring, atau *data scientist* yang tertarik pada aplikasi audio, buku ini menyediakan fondasi yang kuat dan panduan praktis yang dapat langsung diterapkan.

Tidak diperlukan latar belakang yang mendalam dalam akustik atau pemrograman untuk memulai. Buku ini dimulai dari prinsip-prinsip fundamental dan secara bertahap membangun ke topik-topik yang lebih kompleks. Namun, pemahaman dasar tentang matematika (aljabar, statistik deskriptif), fisika gelombang, dan pengalaman dengan setidaknya satu bahasa pemrograman akan sangat membantu dalam mengikuti bagian-bagian implementasi.

### Struktur dan Organisasi Buku

Buku ini disusun dalam delapan bab utama yang mengikuti alur logis dari teori hingga praktik:

**Bab 1: Fundamental Soundscape** memberikan fondasi konseptual dengan membahas definisi, sejarah perkembangan, komponen-komponen *soundscape* (biophony, geophony, anthrophony), dan berbagai konteks aplikasi mulai dari lingkungan perkotaan hingga ekologi.

**Bab 2: Recording dan Akuisisi Data** membahas aspek praktis dalam merekam *soundscape*, termasuk pemilihan perangkat, konfigurasi *setup* perekaman, protokol sampling, dan kontrol kualitas. Bab ini juga membahas teknologi perekaman spasial seperti *ambisonic* dan *binaural* yang semakin populer dalam penelitian *soundscape*.

**Bab 3: Pemrosesan Sinyal Audio** mengulas teknik-teknik fundamental dalam pemrosesan sinyal digital yang relevan untuk analisis *soundscape*. Topik yang dibahas mencakup analisis domain waktu dan frekuensi, representasi waktu-frekuensi (*time-frequency representations*), filtering, ekstraksi fitur, dan berbagai *library* Python dan R yang dapat digunakan. Setiap konsep disertai dengan contoh kode dan visualisasi.

**Bab 4: Acoustic Indices (Objective Metrics)** merupakan salah satu bab inti yang membahas secara mendalam berbagai indeks akustik yang digunakan untuk mengkarakterisasi *soundscape* secara objektif. Pembahasan mencakup metrik berbasis amplitudo (SPL, percentile levels), indeks keanekaragaman (*biodiversity indices*) seperti ACI, ADI, AEI, BAI, dan NDSI, serta metrik temporal dan spektral seperti entropy dan kurtosis. Setiap metrik dijelaskan dari segi teori, formula matematika, implementasi komputasi (dengan kode lengkap dalam Python dan R), dan interpretasi hasilnya. Bab ini juga membahas bagaimana memproses data secara batch dan pertimbangan performa komputasi.

**Bab 5: Perceptual Metrics (Subjective Evaluation)** membahas sisi perseptual dari analisis *soundscape*. Bab ini mengulas kerangka kerja standar ISO 12913-2, dimensi-dimensi psikologis seperti *pleasantness*, *arousal*, *eventfulness*, dan *vibrancy*, atribut kualitas suara seperti *loudness*, *sharpness*, dan *roughness*, serta metrik fisiologis seperti detak jantung, respirasi, dan *heart rate variability*. Pembahasan juga mencakup hubungan antara metrik objektif dan subjektif serta keterbatasan pendekatan prediksi.

**Bab 6: Metode Eksperimen Subjektif** memberikan panduan praktis dalam merancang dan melaksanakan studi perseptual. Topik yang dibahas meliputi desain eksperimen, metode presentasi stimulus, berbagai teknik pengumpulan respons (skala rating, perbandingan berpasangan, kuesioner), pertimbangan partisipan, dan protokol pengumpulan data fisiologis. Bab ini sangat penting bagi mereka yang ingin melakukan evaluasi subjektif dengan standar metodologi yang baik.

**Bab 7: Analisis Data** membahas berbagai teknik statistik dan *machine learning* untuk menganalisis data *soundscape*. Pembahasan mencakup statistik deskriptif, analisis korelasi, model regresi, analisis multivariat (PCA, analisis faktor, clustering), uji statistik, dan pendekatan pembelajaran mesin. Semua teknik dijelaskan dengan contoh implementasi lengkap menggunakan Python (pandas, scikit-learn, statsmodels) dan R. Bab ini juga menekankan praktik terbaik dalam visualisasi data untuk komunikasi hasil yang efektif.

**Bab 8: Studi Kasus** menyajikan tiga studi kasus lengkap yang mengintegrasikan semua konsep dan teknik yang telah dibahas: (1) analisis *soundscape* taman kota, (2) penilaian kenyamanan akustik lingkungan kantor, dan (3) monitoring lingkungan alami menggunakan *bioacoustics*. Setiap studi kasus menyajikan *workflow* lengkap dari perekaman hingga analisis dan interpretasi hasil, dengan semua kode dan data yang diperlukan.

Buku ini juga dilengkapi dengan dua lampiran: **Appendix A** berisi katalog *software* dan *tools* yang berguna untuk analisis *soundscape*, dan **Appendix B** menyediakan daftar *dataset* publik, standar internasional, dan sumber daya komunitas riset.

### Pendekatan Hands-On dengan Python dan R

Salah satu keunggulan utama buku ini adalah penekanan pada implementasi praktis. Setiap konsep teoritis dan metrik yang dibahas disertai dengan contoh kode yang dapat langsung dijalankan. Kami menggunakan dua bahasa pemrograman utama:

**Python** dipilih karena ekosistem *library*-nya yang kaya untuk pemrosesan audio (librosa, soundfile, scipy.signal), analisis data (pandas, numpy), pembelajaran mesin (scikit-learn, tensorflow), dan visualisasi (matplotlib, seaborn, plotly). Python juga menjadi bahasa *de facto* dalam komunitas *data science* dan *machine learning*, sehingga keterampilan yang Anda peroleh dapat dengan mudah ditransfer ke aplikasi lain.

**R** dipilih karena popularitasnya dalam komunitas ekologi dan statistik, serta ketersediaan paket-paket spesifik untuk analisis *soundscape* seperti `soundecology`, `seewave`, dan `tuneR`. R juga unggul dalam analisis statistik dan visualisasi data (ggplot2), menjadikannya pilihan yang sangat baik untuk eksplorasi data dan publikasi hasil.

Semua kode disajikan dengan penjelasan langkah demi langkah, sehingga pembaca dapat memahami tidak hanya "apa" yang dilakukan, tetapi juga "mengapa" dan "bagaimana" cara kerjanya. Kode-kode ini dirancang untuk modular dan dapat digunakan kembali (*reusable*), sehingga Anda dapat dengan mudah mengadaptasinya untuk proyek Anda sendiri. 

### Catatan tentang Reprodusibilitas

Dalam semangat *open science*, semua contoh kode, dataset contoh, dan *notebook* Jupyter/RMarkdown yang digunakan dalam buku ini akan tersedia secara terbuka melalui repositori GitHub. Kami mendorong pembaca untuk menjalankan kode, bereksperimen dengan parameter, dan berkontribusi pada pengembangan *resources* ini.

### Konvensi Penulisan

Dalam buku ini, kami menggunakan beberapa konvensi untuk memudahkan pembacaan:

- **Istilah teknis** dalam bahasa Inggris ditulis dalam *italic* saat pertama kali muncul, dengan padanan Bahasa Indonesia (jika ada) diberikan dalam tanda kurung.
- `Kode`, nama fungsi, dan nama variabel ditulis dalam font monospace.
- **Konsep penting** ditebalkan untuk penekanan.
- Persamaan matematika ditulis menggunakan notasi LaTeX untuk presisi dan standarisasi.

### Referensi Utama

Buku ini berdiri di atas pundak karya-karya seminal dan penelitian terkini dalam bidang *soundscape*. Beberapa referensi kunci yang menjadi fondasi buku ini meliputi:

- **Schafer, R. M.** (1977). *The Soundscape: Our Sonic Environment and the Tuning of the World*. Destiny Books. — Karya klasik yang memperkenalkan konsep *soundscape*.

- **International Organization for Standardization (ISO)**. (2014). *ISO 12913-1:2014 Acoustics — Soundscape — Part 1: Definition and conceptual framework*. — Standar internasional yang mendefinisikan kerangka konseptual *soundscape*.

- **International Organization for Standardization (ISO)**. (2018). *ISO 12913-2:2018 Acoustics — Soundscape — Part 2: Data collection and reporting requirements*. — Standar untuk pengumpulan dan pelaporan data *soundscape*.

- **Kang, J., Aletta, F., Gjestland, T. T., Brown, L. A., Botteldooren, D., Schulte-Fortkamp, B., ... & Lavia, L.** (2016). Ten questions on the soundscapes of the built environment. *Building and Environment*, 108, 284-294. — Review komprehensif tentang isu-isu kunci dalam *soundscape* lingkungan terbangun.

- **Pijanowski, B. C., Villanueva-Rivera, L. J., Dumyahn, S. L., Farina, A., Krause, B. L., Napoletano, B. M., ... & Pieretti, N.** (2011). Soundscape ecology: the science of sound in the landscape. *BioScience*, 61(3), 203-216. — Paper fundamental yang mendefinisikan *soundscape ecology*.

- **Farina, A.** (2014). *Soundscape Ecology: Principles, Patterns, Methods and Applications*. Springer. — Textbook komprehensif tentang ekologi *soundscape*.

- **Aletta, F., Kang, J., & Axelsson, Ö.** (2016). Soundscape descriptors and a conceptual framework for developing predictive soundscape models. *Landscape and Urban Planning*, 149, 65-74. — Framework untuk memodelkan hubungan antara metrik objektif dan persepsi.

- **Lionello, M., Aletta, F., & Kang, J.** (2020). A systematic review of prediction models for the experience of urban soundscapes. *Applied Acoustics*, 170, 107479. — Review sistematis tentang model prediksi dalam *urban soundscape*.

- **Rychtáriková, M., & Vermeir, G.** (2013). Soundscape categorization on the basis of objective acoustical parameters. *Applied Acoustics*, 74(2), 240-247. — Studi tentang kategorisasi *soundscape* berdasarkan parameter objektif.

Daftar referensi lengkap disediakan di akhir buku, mencakup publikasi klasik maupun penelitian terkini yang relevan untuk setiap bab.

### Mari Memulai

Analisis *soundscape* adalah bidang yang dinamis dan terus berkembang, berada di persimpangan berbagai disiplin ilmu. Dengan menggabungkan pemahaman teoritis yang kuat, metodologi yang rigorous, dan keterampilan komputasi yang praktis, Anda akan dapat berkontribusi pada pemahaman kita tentang bagaimana manusia berinteraksi dengan lingkungan sonik mereka dan bagaimana kita dapat menciptakan *soundscape* yang lebih baik untuk semua.

Selamat membaca, dan selamat mengeksplorasi dunia *soundscape*!

---
---

# Bab 1: Fundamental Soundscape

## 1.1 Definisi dan Konsep Dasar

### 1.1.1 Apa itu Soundscape?
Pembahasan tentang perbedaan antara *sound*, *noise*, dan *soundscape*. Penjelasan tentang bagaimana *soundscape* merupakan konstruksi perseptual yang melibatkan konteks, pengalaman, dan interpretasi subjektif.

### 1.1.2 Standar ISO 12913
Penjelasan detail tentang standar internasional ISO 12913-1:2014 (Definition and conceptual framework) dan ISO 12913-2:2018 (Data collection and reporting requirements). Kerangka kerja konseptual yang menghubungkan konteks, sumber suara, dan persepsi manusia.

### 1.1.3 Perbedaan dengan Noise Mapping
Kontras antara pendekatan tradisional *noise mapping* yang berfokus pada pengurangan kebisingan dengan pendekatan *soundscape* yang holistik. Keterbatasan metrik tunggal seperti LAeq dalam menangkap kualitas lingkungan akustik.

## 1.2 Sejarah Perkembangan

### 1.2.1 Era R. Murray Schafer dan World Soundscape Project
Kontribusi Schafer pada tahun 1960-1970an, konsep *soundmark*, *keynote sounds*, dan *sound signals*. World Soundscape Project di Simon Fraser University.

### 1.2.2 Perkembangan di Berbagai Disiplin
Adopsi konsep *soundscape* dalam arsitektur, urbanisme, ekologi, psikologi lingkungan, dan teknik akustik dari tahun 1980an hingga 2000an.

### 1.2.3 Era Modern: Soundscape Ecology dan Urban Soundscape
Munculnya *soundscape ecology* (Pijanowski et al., 2011) dan penelitian *urban soundscape* yang intensif di Eropa dan Asia sejak 2010an.

## 1.3 Komponen Soundscape

### 1.3.1 Biophony (Suara Biologis)
Suara yang dihasilkan oleh organisme hidup: burung, serangga, amfibi, mamalia. Peran dalam komunikasi, teritorial, dan reproduksi.

### 1.3.2 Geophony (Suara Geofisik)
Suara dari proses geofisik: angin, hujan, gelombang air, gempa, petir. Karakteristik spektral dan temporal.

### 1.3.3 Anthrophony (Suara Manusia)
Suara dari aktivitas manusia: lalu lintas, konstruksi, percakapan, musik. Kategori anthrophony: controlled vs incidental.

### 1.3.4 Interaksi Antar-Komponen
Konsep *acoustic niche hypothesis*, *acoustic adaptation hypothesis*, dan bagaimana ketiga komponen berinteraksi dalam membentuk *soundscape*.

## 1.4 Aplikasi Soundscape

### 1.4.1 Urban Soundscape
Aplikasi dalam perencanaan kota, desain ruang publik, *quiet areas*, dan kebijakan publik. Contoh proyek: SONORUS, SOBA, SSID.

### 1.4.2 Environmental Soundscape
Monitoring kualitas lingkungan, dampak polusi suara, penilaian restorasi ekologi.

### 1.4.3 Indoor Soundscape
Kantor, rumah sakit, sekolah, perpustakaan, restoran. Hubungan dengan produktivitas, kesehatan, dan well-being.

### 1.4.4 Soundscape Ecology
Monitoring biodiversitas, deteksi spesies invasif, perubahan iklim, habitat health assessment.

### 1.4.5 Cultural Soundscape
Heritage soundscape, soundscape tourism, identitas budaya melalui suara.

---

# Bab 2: Recording dan Akuisisi Data

## 2.1 Prinsip Recording Soundscape

### 2.1.1 Perbedaan dengan Studio Recording
Karakteristik *field recording*: variabilitas lingkungan, kondisi tidak terkontrol, durasi panjang, konteks spasial.

### 2.1.2 Tujuan Recording
Dokumentasi, monitoring jangka panjang, evaluasi perseptual, ekstraksi metrik akustik.

### 2.1.3 Pertimbangan Spasial dan Temporal
Spatial sampling, temporal sampling (continuous vs intermittent), representativeness.

## 2.2 Perangkat dan Setup

### 2.2.1 Microphone Types
Omnidirectional vs directional, condenser vs dynamic, lavalier, shotgun, array microphones. Karakteristik frekuensi dan sensitivitas.

### 2.2.2 Recording Systems
Portable recorders, autonomous recording units (ARU), smartphone-based systems, distributed sensor networks.

### 2.2.3 Recording Formats dan Specifications
Sample rate (44.1 kHz, 48 kHz, 96 kHz), bit depth (16-bit, 24-bit), file formats (WAV, FLAC, MP3), storage considerations.

### 2.2.4 Spatial Audio Recording Technologies

#### 2.2.4.1 Ambisonic Recording
Prinsip B-format, higher-order ambisonics (HOA), microphone arrays (tetrahedral, spherical), encoding dan decoding.

#### 2.2.4.2 Binaural Recording
Dummy head recording, in-ear microphones, HRTF considerations, aplikasi untuk evaluasi perseptual.

#### 2.2.4.3 Stereo Techniques
XY, AB, ORTF, MS (Mid-Side) configurations. Kelebihan dan keterbatasan masing-masing.

## 2.3 Recording Protocol

### 2.3.1 Site Selection
Kriteria pemilihan lokasi, accessibility, safety, representativeness, spatial coverage.

### 2.3.2 Temporal Sampling Strategy
Duration per recording, time of day, seasonal variations, weather conditions. Trade-off antara resolution dan feasibility.

### 2.3.3 Microphone Placement
Height, distance from reflective surfaces, orientation, wind protection, concealment (untuk wildlife recording).

### 2.3.4 Calibration
Sound level meter calibration, microphone calibration, absolute vs relative measurements.

### 2.3.5 Metadata dan Documentation
Essential metadata: location (GPS), datetime, weather, equipment specs, gain settings. Field notes tentang konteks visual dan aktivitas.

## 2.4 Quality Control

### 2.4.1 Pre-Recording Checks
Equipment testing, battery levels, storage capacity, weather forecast.

### 2.4.2 Post-Recording Validation
File integrity checks, audio quality assessment, metadata completeness.

### 2.4.3 Artifact Detection dan Handling
Wind noise, handling noise, clipping, dropouts. Decision: exclude, flag, atau process.

### 2.4.4 Data Management
File naming conventions, directory structure, backup strategy, database management.

---

# Bab 3: Pemrosesan Sinyal Audio

## 3.1 Fundamental Signal Processing

### 3.1.1 Representasi Sinyal Audio Digital
Sampling, quantization, Nyquist theorem, aliasing.

### 3.1.2 Time Domain Analysis
Waveform, amplitude envelope, zero-crossing rate, energy, RMS.

### 3.1.3 Frequency Domain Analysis
Fourier Transform, DFT, FFT. Spectrum, power spectral density, frequency resolution.

### 3.1.4 Time-Frequency Representations

#### 3.1.4.1 Short-Time Fourier Transform (STFT)
Window functions (Hann, Hamming, Blackman), window size vs time-frequency resolution trade-off, spectrogram.

#### 3.1.4.2 Wavelet Transform
Continuous Wavelet Transform (CWT), Discrete Wavelet Transform (DWT), multiresolution analysis, scalogram.

#### 3.1.4.3 Other Representations
Mel-spectrogram, constant-Q transform, chromagram.

## 3.2 Filtering dan Enhancement

### 3.2.1 Filter Design
FIR vs IIR filters, lowpass, highpass, bandpass, bandstop filters. Filter order dan characteristics.

### 3.2.2 Noise Reduction Techniques
Spectral subtraction, Wiener filtering, adaptive filtering.

### 3.2.3 Source Separation
Non-negative Matrix Factorization (NMF), Independent Component Analysis (ICA), deep learning approaches.

### 3.2.4 Dynamic Range Processing
Compression, expansion, limiting, normalization.

## 3.3 Feature Extraction

### 3.3.1 Spectral Features
Spectral centroid, spectral spread, spectral rolloff, spectral flux, spectral flatness.

### 3.3.2 Temporal Features
Zero-crossing rate, energy, envelope statistics, attack time, decay time.

### 3.3.3 Cepstral Features
Mel-Frequency Cepstral Coefficients (MFCC), computation pipeline, applications.

### 3.3.4 Perceptual Features
Loudness (ISO 532, ANSI S3.4), sharpness, roughness, fluctuation strength.

### 3.3.5 Statistical Features
Mean, variance, skewness, kurtosis, percentiles computed dari berbagai representations.

## 3.4 Tools dan Software

### 3.4.1 Python Libraries
`librosa`, `soundfile`, `scipy.signal`, `pydub`, `essentia`, `audioread`, `pyAudioAnalysis`.

### 3.4.2 R Packages
`tuneR`, `seewave`, `signal`, `audio`, `warbleR`.

### 3.4.3 Standalone Software
Audacity, Raven Pro, Sonic Visualiser, Praat.

### 3.4.4 Specialized Frameworks
AudioSet, Essentia, openSMILE, librosa, Madmom.

---

# Bab 4: Acoustic Indices (Objective Metrics)

## 4.1 Amplitude-Based Metrics

### 4.1.1 Sound Pressure Level (SPL)

#### 4.1.1.1 Root-Mean-Square SPL ($L_{p,rms}$)
Definisi, formula, computation, interpretasi.

#### 4.1.1.2 Peak SPL ($L_{p,pk}$)
Definisi, aplikasi untuk impulsive sounds.

#### 4.1.1.3 Equivalent Continuous SPL ($L_{eq}$)
Definisi, time-weighting (Fast, Slow, Impulse), frequency-weighting (A, C, Z).

### 4.1.2 Percentile Levels
$L_{10}$, $L_{50}$, $L_{90}$, $L_{95}$. Interpretasi dalam konteks soundscape: background level, typical level, peak events.

### 4.1.3 Day-Evening-Night Level ($L_{den}$)
Definisi, penalties untuk evening dan night, aplikasi dalam regulasi.

## 4.2 Biodiversity Indices

### 4.2.1 Acoustic Complexity Index (ACI)

#### 4.2.1.1 Konsep dan Teori
Mengukur variasi intensitas dalam time bins sebagai indikator biophony complexity.

#### 4.2.1.2 Formula Matematika
Penjelasan step-by-step computation, parameters (time window, frequency bins).

#### 4.2.1.3 Implementasi Komputasi
Struktur algoritma, parameter tuning, computational considerations.

#### 4.2.1.4 Interpretasi dan Aplikasi
Nilai tinggi = high complexity/diversity, nilai rendah = monotonous. Use cases dalam ecology.

### 4.2.2 Acoustic Diversity Index (ADI)

#### 4.2.2.1 Konsep dan Teori
Adaptasi Shannon diversity index untuk domain akustik, mengukur distribusi power across frequency bands.

#### 4.2.2.2 Formula Matematika
Shannon entropy computation, frequency band division.

#### 4.2.2.3 Implementasi Komputasi
Algoritma, parameter selection (number of bands, frequency range).

#### 4.2.2.4 Interpretasi dan Aplikasi
Range 0-1, nilai tinggi = even distribution, nilai rendah = dominated by few bands.

### 4.2.3 Acoustic Evenness Index (AEI)

#### 4.2.3.1 Konsep dan Teori
Gini index applied to soundscape, mengukur evenness of power distribution.

#### 4.2.3.2 Formula Matematika
Gini coefficient computation dari power distribution.

#### 4.2.3.3 Implementasi Komputasi
Algoritma, visualization (Lorenz curve).

#### 4.2.3.4 Interpretasi dan Aplikasi
Range 0-1, nilai tinggi = more even, nilai rendah = dominated.

### 4.2.4 Bioacoustic Index (BAI)

#### 4.2.4.1 Konsep dan Teori
Mengukur biophonic activity dalam frequency range tertentu (biasanya 2-11 kHz).

#### 4.2.4.2 Formula Matematika
Area under spectrum curve dalam defined frequency range.

#### 4.2.4.3 Implementasi Komputasi
Frequency range selection, normalization.

#### 4.2.4.4 Interpretasi dan Aplikasi
Proxy untuk animal vocal activity, seasonal patterns, habitat comparison.

### 4.2.5 Normalized Difference Soundscape Index (NDSI)

#### 4.2.5.1 Konsep dan Teori
Ratio biophony (1-2 kHz, 2-11 kHz) terhadap anthrophony (1-2 kHz), analog dengan NDVI.

#### 4.2.5.2 Formula Matematika
$(Biophony - Anthrophony) / (Biophony + Anthrophony)$

#### 4.2.5.3 Implementasi Komputasi
Frequency band power computation, ratio calculation.

#### 4.2.5.4 Interpretasi dan Aplikasi
Range -1 to +1, nilai positif = dominasi biophony, nilai negatif = dominasi anthrophony. Indikator anthropogenic disturbance.

### 4.2.6 Acoustic Richness (AR)
Temporal median of amplitude envelope, indicator of consistent biophonic activity.

### 4.2.7 Temporal Entropy (Ht) dan Spectral Entropy (Hf)
Shannon entropy applied to temporal envelope dan frequency spectrum.

## 4.3 Temporal dan Spectral Metrics

### 4.3.1 Total Entropy (H)
Combined temporal dan spectral entropy, overall unpredictability of soundscape.

### 4.3.2 Kurtosis
Statistical measure of impulsiveness, peakedness of amplitude distribution.

### 4.3.3 Dissimilarity Index
Euclidean distance between successive time windows, measuring uniformity over time.

### 4.3.4 Spectral Cover
Percentage of frequency bins with significant energy, indicator of bandwidth occupancy.

### 4.3.5 Frequency Modulation (FM) dan Amplitude Modulation (AM) Rates
Detection of periodic variations, relevant untuk certain bioacoustic signals.

## 4.4 Soundscape Descriptors dari Machine Learning

### 4.4.1 Learned Features
Deep learning embeddings (VGGish, YAMNet, PANNs) sebagai compact representations.

### 4.4.2 Cluster-Based Descriptors
Unsupervised clustering untuk mengidentifikasi recurring patterns dalam soundscape.

## 4.5 Computational Implementation

### 4.5.1 Single File Processing Workflow
Load audio → preprocessing → compute indices → store results.

### 4.5.2 Batch Processing
Directory traversal, parallel processing, progress tracking, error handling.

### 4.5.3 Performance Optimization
Vectorization, memory management, caching, GPU acceleration (bila applicable).

### 4.5.4 Hasil Output dan Storage
DataFrame structures, CSV/JSON export, database integration.

---

# Bab 5: Perceptual Metrics (Subjective Evaluation)

## 5.1 Perceptual Framework

### 5.1.1 ISO 12913-2 Standard
Framework untuk data collection, response attributes, reporting requirements.

### 5.1.2 Psychoacoustic Principles
Just Noticeable Difference (JND), masking, critical bands, temporal integration.

### 5.1.3 Circumplex Model of Affect
Two-dimensional model: Pleasantness (valence) dan Arousal, aplikasi dalam soundscape.

## 5.2 Psychological Descriptors

### 5.2.1 Core Dimensions

#### 5.2.1.1 Pleasantness (Valence)
Pleasant vs unpleasant, comfortable vs uncomfortable. Rating scales, semantic differential.

#### 5.2.1.2 Arousal (Eventfulness)
Calm vs exciting, uneventful vs eventful. Hubungan dengan attention dan stimulation.

#### 5.2.1.3 Vibrancy
Monotonous vs varied, dull vs vibrant. Indicator of acoustic diversity dari perspektif perceptual.

#### 5.2.1.4 Familiarity
Familiar vs unfamiliar, expected vs unexpected. Peran konteks dan memory.

### 5.2.2 Sound Quality Attributes

#### 5.2.2.1 Loudness
Perceptual correlate of intensity, Stevens' power law, sone scale, ISO 532 model.

#### 5.2.2.2 Sharpness
High-frequency content perception, acum scale, computation models (Zwicker, Aures).

#### 5.2.2.3 Roughness
Amplitude modulation perception (15-300 Hz), asper scale, annoyance factor.

#### 5.2.2.4 Fluctuation Strength
Slow amplitude modulation (<20 Hz), vacil scale, temporal pattern perception.

#### 5.2.2.5 Tonality
Presence of tonal components vs broadband noise, prominence ratio.

#### 5.2.2.6 Impulsiveness
Sudden onset, short duration sounds. Kurtosis sebagai objective correlate.

### 5.2.3 Semantic Descriptors
Natural, mechanical, human, chaotic, harmonious, spatial. Relationship dengan sound sources.

### 5.2.4 Overall Assessment

#### 5.2.4.1 Overall Satisfaction
General evaluation of soundscape quality, single-item vs multi-item scales.

#### 5.2.4.2 Appropriateness
Context-dependent evaluation, match between sound dan place.

#### 5.2.4.3 Annoyance
Specific negative response, dose-response relationships.

## 5.3 Physiological Metrics

### 5.3.1 Cardiovascular Measures

#### 5.3.1.1 Heart Rate (HR)
Beats per minute, indicator of arousal dan stress. Measurement methods (ECG, PPG).

#### 5.3.1.2 Heart Rate Variability (HRV)
Variation in beat-to-beat intervals, indicator of autonomic nervous system balance.

##### 5.3.1.2.1 Time-Domain HRV Metrics
RMSSD (Root Mean Square of Successive Differences), SDNN (Standard Deviation of NN intervals), pNN50.

##### 5.3.1.2.2 Frequency-Domain HRV Metrics
LF (Low Frequency) power, HF (High Frequency) power, LF/HF ratio.

### 5.3.2 Respiratory Measures

#### 5.3.2.1 Respiration Rate
Breaths per minute, indicator of arousal dan relaxation.

#### 5.3.2.2 Respiratory Sinus Arrhythmia (RSA)
HRV component linked to breathing, vagal tone indicator.

### 5.3.3 Electrodermal Activity (EDA)

#### 5.3.3.1 Skin Conductance Level (SCL)
Tonic level, overall arousal state.

#### 5.3.3.2 Skin Conductance Response (SCR)
Phasic responses to specific stimuli, event-related arousal.

### 5.3.4 Electroencephalography (EEG)
Brain activity patterns, frequency bands (delta, theta, alpha, beta, gamma), frontal asymmetry (approach vs withdrawal motivation).

### 5.3.5 Cortisol
Stress hormone, saliva sampling, biomarker of chronic stress exposure.

## 5.4 Relationship: Objective ↔ Subjective

### 5.4.1 Correlation Studies
Methods untuk mengidentifikasi relationships antara acoustic indices dan perceptual responses.

### 5.4.2 Prediction Models
Linear regression, multiple regression, non-linear models untuk predicting subjective responses dari objective metrics.

### 5.4.3 Limitations dan Challenges
Individual differences, context dependency, temporal dynamics, non-linear relationships, causality issues.

### 5.4.4 Integrated Approaches
Combining multiple acoustic indices, contextual variables, dan machine learning untuk improved predictions.

---

# Bab 6: Metode Eksperimen Subjektif

## 6.1 Experimental Design

### 6.1.1 Research Questions dan Hypotheses
Formulating clear, testable hypotheses. Exploratory vs confirmatory studies.

### 6.1.2 Study Types

#### 6.1.2.1 Laboratory Studies
Controlled conditions, standardized stimuli, high internal validity, limited ecological validity.

#### 6.1.2.2 Field Studies
In-situ evaluation, real-world contexts, high ecological validity, lower control.

#### 6.1.2.3 Hybrid Approaches
Virtual reality, augmented reality, ambisonics playback untuk balancing control dan realism.

### 6.1.3 Design Types

#### 6.1.3.1 Within-Subject Design
Same participants for all conditions, higher statistical power, carryover effects.

#### 6.1.3.2 Between-Subject Design
Different participants for each condition, no carryover, requires larger sample.

#### 6.1.3.3 Mixed Design
Combination of within dan between factors.

### 6.1.4 Sample Size Determination
Power analysis, effect size estimation, practical constraints.

### 6.1.5 Randomization dan Counterbalancing
Controlling order effects, Latin square designs.

## 6.2 Stimulus Presentation

### 6.2.1 Playback Systems

#### 6.2.1.1 Headphone Presentation
Open vs closed-back, calibration, comfort considerations.

#### 6.2.1.2 Loudspeaker Presentation
Stereo, multichannel, ambisonics. Room acoustics considerations.

### 6.2.2 Reproduction Techniques

#### 6.2.2.1 Binaural Reproduction
HRTF selection (generic vs individualized), headphone equalization.

#### 6.2.2.2 Ambisonic Reproduction
Decoder design, speaker array configuration, sweet spot size.

### 6.2.3 Stimulus Duration
Sufficient untuk stable perception (typically 10-30 seconds untuk soundscape), listener fatigue.

### 6.2.4 Stimulus Order dan Spacing
Randomization, inter-stimulus interval (ISI), context effects.

### 6.2.5 Level Calibration
Target playback level (typically 65-75 dB SPL untuk soundscape), level roving untuk avoiding loudness cues.

## 6.3 Response Collection Methods

### 6.3.1 Rating Scales

#### 6.3.1.1 Likert Scales
5-point, 7-point, 9-point. Odd vs even number of points, labeled vs unlabeled.

#### 6.3.1.2 Visual Analog Scales (VAS)
Continuous scales, slider interfaces, higher resolution.

#### 6.3.1.3 Semantic Differential Scales
Bipolar adjective pairs, capturing nuances in perception.

#### 6.3.1.4 Magnitude Estimation
Ratio scaling, free modulus vs fixed modulus.

### 6.3.2 Paired Comparisons

#### 6.3.2.1 Method of Paired Comparisons
All possible pairs, forced choice, complete vs incomplete designs.

#### 6.3.2.2 Thurstone Scaling
Deriving interval scales dari paired comparison data, Case V model.

#### 6.3.2.3 Bradley-Terry Models
Probabilistic models, maximum likelihood estimation.

### 6.3.3 Ranking Methods
Ordering stimuli, ties vs strict ordering, rank aggregation.

### 6.3.4 Questionnaires

#### 6.3.4.1 Swedish Soundscape Quality Protocol (SSQP)
8 perceptual attributes, validated scales.

#### 6.3.4.2 Soundscape Attribute and Quality Indicator (SAQI)
Standardized protocol, multiple dimensions.

#### 6.3.4.3 Custom Questionnaires
Design principles, pilot testing, validation.

### 6.3.5 Open-Ended Responses
Qualitative data, thematic analysis, mixed methods.

## 6.4 Participant Considerations

### 6.4.1 Recruitment dan Screening

#### 6.4.1.1 Inclusion/Exclusion Criteria
Hearing status, age range, language proficiency, relevant experience.

#### 6.4.1.2 Hearing Screening
Audiometry, hearing threshold checks, normal hearing definition.

### 6.4.2 Instructions

#### 6.4.2.1 Clarity dan Standardization
Written vs verbal, comprehension checks.

#### 6.4.2.2 Task-Specific Instructions
What to focus on, how to use rating scales, reminder of no right/wrong answers.

### 6.4.3 Training Phase
Familiarization dengan stimuli range, practice trials, anchor stimuli.

### 6.4.4 Ethical Considerations

#### 6.4.4.1 Informed Consent
Explanation of procedures, risks, benefits, right to withdraw.

#### 6.4.4.2 Data Protection
Anonymization, secure storage, GDPR compliance.

#### 6.4.4.3 Debriefing
Post-experiment explanation, addressing concerns.

### 6.4.5 Compensation
Payment rates, participation certificates, impact on motivation.

## 6.5 Physiological Data Collection

### 6.5.1 Equipment Setup

#### 6.5.1.1 Wearable Sensors
ECG electrodes placement, PPG sensors (wrist, fingertip), EDA sensors (fingers, wrist).

#### 6.5.1.2 Non-Contact Methods
Camera-based HR detection, thermal imaging untuk respiration.

### 6.5.2 Synchronization dengan Audio
Timestamp alignment, trigger signals, latency considerations.

### 6.5.3 Baseline Measurements
Pre-stimulus baseline, resting state, duration (typically 2-5 minutes).

### 6.5.4 Artifact Handling
Movement artifacts, electrode contact issues, noise filtering.

### 6.5.5 Real-Time Monitoring
Quality checks during data collection, participant comfort.

---

# Bab 7: Analisis Data

## 7.1 Descriptive Statistics

### 7.1.1 Central Tendency
Mean, median, mode. Kapan menggunakan masing-masing.

### 7.1.2 Variability
Range, variance, standard deviation, interquartile range, coefficient of variation.

### 7.1.3 Distribution Shape
Skewness, kurtosis, normality assessment (histogram, Q-Q plots, Shapiro-Wilk test).

### 7.1.4 Visualization
Histograms, boxplots, violin plots, density plots.

## 7.2 Correlation Analysis

### 7.2.1 Pearson Correlation
Assumptions (linearity, homoscedasticity, normality), interpretation, significance testing.

### 7.2.2 Spearman Correlation
Rank-based, non-parametric alternative, monotonic relationships.

### 7.2.3 Kendall's Tau
Alternative rank correlation, better untuk small samples dengan ties.

### 7.2.4 Correlation Matrices
Visualization (heatmaps), identifying patterns, multicollinearity checks.

### 7.2.5 Partial Correlation
Controlling untuk confounding variables.

## 7.3 Regression Models

### 7.3.1 Simple Linear Regression
Model formulation, least squares estimation, interpretation of coefficients.

### 7.3.2 Multiple Linear Regression

#### 7.3.2.1 Model Building
Variable selection, stepwise methods (forward, backward, both).

#### 7.3.2.2 Assumptions
Linearity, independence, homoscedasticity, normality of residuals.

#### 7.3.2.3 Diagnostics
Residual plots, influential points (leverage, Cook's distance), VIF untuk multicollinearity.

### 7.3.3 Polynomial Regression
Non-linear relationships, overfitting concerns.

### 7.3.4 Regularization Methods

#### 7.3.4.1 Ridge Regression
L2 penalty, shrinkage of coefficients.

#### 7.3.4.2 Lasso Regression
L1 penalty, feature selection through sparsity.

#### 7.3.4.3 Elastic Net
Combination of L1 dan L2 penalties.

### 7.3.5 Model Validation

#### 7.3.5.1 Train-Test Split
Holdout validation, typical split ratios (70-30, 80-20).

#### 7.3.5.2 Cross-Validation
K-fold CV, leave-one-out CV, stratified CV.

#### 7.3.5.3 Performance Metrics
R², adjusted R², RMSE, MAE, MAPE.

## 7.4 Multivariate Analysis

### 7.4.1 Principal Component Analysis (PCA)

#### 7.4.1.1 Teori
Variance maximization, orthogonal components, dimensionality reduction.

#### 7.4.1.2 Implementation
Standardization, eigendecomposition, scree plot, loadings interpretation.

#### 7.4.1.3 Applications
Data exploration, feature reduction, visualization.

### 7.4.2 Factor Analysis

#### 7.4.2.1 Exploratory Factor Analysis (EFA)
Identifying latent factors, rotation (varimax, promax).

#### 7.4.2.2 Confirmatory Factor Analysis (CFA)
Testing theoretical models, goodness-of-fit indices.

### 7.4.3 Cluster Analysis

#### 7.4.3.1 K-Means Clustering
Algorithm, choosing k (elbow method, silhouette), initialization.

#### 7.4.3.2 Hierarchical Clustering
Agglomerative vs divisive, linkage methods (single, complete, average, Ward), dendrogram.

#### 7.4.3.3 DBSCAN
Density-based, handling noise dan outliers, parameter selection.

#### 7.4.3.4 Cluster Validation
Internal indices (silhouette, Davies-Bouldin), external indices (adjusted Rand index).

### 7.4.4 Discriminant Analysis
Linear Discriminant Analysis (LDA), classification, relationship dengan ANOVA.

## 7.5 Statistical Testing

### 7.5.1 Hypothesis Testing Framework
Null dan alternative hypotheses, Type I dan Type II errors, significance level (α), p-values.

### 7.5.2 T-Tests

#### 7.5.2.1 One-Sample t-Test
Testing against known value.

#### 7.5.2.2 Independent Samples t-Test
Comparing two groups, equal vs unequal variances.

#### 7.5.2.3 Paired Samples t-Test
Within-subject comparisons, repeated measures.

### 7.5.3 Analysis of Variance (ANOVA)

#### 7.5.3.1 One-Way ANOVA
Comparing multiple groups, assumptions, post-hoc tests (Tukey HSD, Bonferroni).

#### 7.5.3.2 Factorial ANOVA
Multiple factors, interaction effects.

#### 7.5.3.3 Repeated Measures ANOVA
Within-subject factors, sphericity assumption (Mauchly's test), corrections (Greenhouse-Geisser, Huynh-Feldt).

#### 7.5.3.4 Mixed ANOVA
Both within dan between factors.

### 7.5.4 Non-Parametric Alternatives

#### 7.5.4.1 Mann-Whitney U Test
Independent samples, non-parametric alternative to t-test.

#### 7.5.4.2 Wilcoxon Signed-Rank Test
Paired samples, non-parametric alternative to paired t-test.

#### 7.5.4.3 Kruskal-Wallis Test
Multiple groups, non-parametric alternative to one-way ANOVA.

#### 7.5.4.4 Friedman Test
Repeated measures, non-parametric alternative to repeated measures ANOVA.

### 7.5.5 Effect Size
Cohen's d, eta-squared (η²), omega-squared (ω²), importance beyond significance.

### 7.5.6 Multiple Comparison Corrections
Bonferroni, Holm, FDR (Benjamini-Hochberg), family-wise error rate.

## 7.6 Machine Learning Approaches

### 7.6.1 Supervised Learning

#### 7.6.1.1 Classification

##### 7.6.1.1.1 Logistic Regression
Binary dan multiclass classification, interpretation.

##### 7.6.1.1.2 Decision Trees
CART algorithm, pruning, interpretation.

##### 7.6.1.1.3 Random Forest
Ensemble method, feature importance, hyperparameter tuning.

##### 7.6.1.1.4 Support Vector Machines (SVM)
Kernel methods, margin maximization, multiclass strategies.

##### 7.6.1.1.5 Neural Networks
Multilayer perceptrons, activation functions, backpropagation.

#### 7.6.1.2 Regression

##### 7.6.1.2.1 Decision Tree Regression
Non-parametric, capturing non-linearities.

##### 7.6.1.2.2 Random Forest Regression
Ensemble untuk improved predictions.

##### 7.6.1.2.3 Gradient Boosting (XGBoost, LightGBM)
Sequential ensemble, handling complex relationships.

##### 7.6.1.2.4 Neural Network Regression
Deep learning untuk high-dimensional problems.

### 7.6.2 Unsupervised Learning

#### 7.6.2.1 Dimensionality Reduction
t-SNE, UMAP untuk visualization, autoencoders.

#### 7.6.2.2 Anomaly Detection
Isolation Forest, one-class SVM, identifying unusual soundscapes.

### 7.6.3 Model Evaluation

#### 7.6.3.1 Classification Metrics
Accuracy, precision, recall, F1-score, ROC curve, AUC, confusion matrix.

#### 7.6.3.2 Regression Metrics
MSE, RMSE, MAE, R², explained variance.

### 7.6.4 Feature Importance
Permutation importance, SHAP values, understanding model decisions.

### 7.6.5 Hyperparameter Tuning
Grid search, random search, Bayesian optimization.

## 7.7 Time Series Analysis

### 7.7.1 Temporal Patterns
Trend, seasonality, autocorrelation.

### 7.7.2 ARIMA Models
Autoregressive Integrated Moving Average, forecasting.

### 7.7.3 Spectral Analysis
Periodogram, identifying cycles dalam soundscape dynamics.

## 7.8 Visualization

### 7.8.1 Best Practices

#### 7.8.1.1 Principles
Clarity, accuracy, efficiency, aesthetics. Tufte's principles.

#### 7.8.1.2 Color Schemes
Colorblind-friendly palettes, perceptual uniformity.

#### 7.8.1.3 Chart Types Selection
Matching visualization to data type dan message.

### 7.8.2 Static Visualizations

#### 7.8.2.1 Python (matplotlib, seaborn)
Publication-quality plots, customization.

#### 7.8.2.2 R (ggplot2)
Grammar of graphics, layered approach.

### 7.8.3 Interactive Visualizations

#### 7.8.3.1 Python (plotly, bokeh)
Web-based interactivity, dashboards.

#### 7.8.3.2 R (plotly, shiny)
Interactive web applications.

### 7.8.4 Acoustic Visualizations
Spectrograms, waveforms, interactive audio players, annotations.

---

# Bab 8: Studi Kasus

## 8.1 Urban Park Soundscape Analysis

### 8.1.1 Konteks dan Tujuan
Evaluating soundscape quality di urban park, comparing different locations, seasonal variations.

### 8.1.2 Data Collection

#### 8.1.2.1 Recording Protocol
Location selection (5 sites), temporal sampling (spring dan summer), equipment setup.

#### 8.1.2.2 Subjective Evaluation
In-situ questionnaire (SSQP), sample size (n=100 per season).

### 8.1.3 Data Processing

#### 8.1.3.1 Acoustic Analysis
Computing multiple indices (ACI, ADI, NDSI, Leq), temporal aggregation.

#### 8.1.3.2 Subjective Data Processing
Data cleaning, reliability checks, aggregation.

### 8.1.4 Statistical Analysis

#### 8.1.4.1 Descriptive Statistics
Site dan seasonal comparisons.

#### 8.1.4.2 Correlation Analysis
Objective-subjective relationships.

#### 8.1.4.3 Regression Models
Predicting pleasantness dari acoustic indices.

### 8.1.5 Visualization
Maps, spectrograms, correlation heatmaps, scatter plots.

### 8.1.6 Interpretation dan Recommendations
Identifying problematic areas, design interventions, policy implications.

### 8.1.7 Complete Workflow Code
End-to-end Python dan R scripts.

## 8.2 Indoor Office Environment Acoustic Comfort Assessment

### 8.2.1 Konteks dan Tujuan
Assessing acoustic comfort di open-plan office, identifying disturbance sources.

### 8.2.2 Data Collection

#### 8.2.2.1 Recording Setup
Distributed microphones (10 locations), continuous recording (1 week).

#### 8.2.2.2 Subjective Surveys
Daily surveys (productivity, distraction, satisfaction), end-of-week questionnaire.

### 8.2.3 Data Processing

#### 8.2.3.1 Source Classification
Separating speech, equipment noise, HVAC. Machine learning untuk automatic classification.

#### 8.2.3.2 Acoustic Metrics
LAeq, LN, speech intelligibility index (SII), reverberation time (T60).

### 8.2.4 Statistical Analysis

#### 8.2.4.1 Multilevel Modeling
Accounting untuk nested structure (time within person within location).

#### 8.2.4.2 Time Series Analysis
Temporal patterns, peak disturbance periods.

### 8.2.5 Visualization
Heatmaps of noise levels, time-of-day patterns, location comparisons.

### 8.2.6 Interpretation dan Recommendations
Optimal workstation placement, acoustic treatment priorities.

### 8.2.7 Complete Workflow Code
Python dan R implementation.

## 8.3 Natural Environment Monitoring Using Bioacoustics

### 8.3.1 Konteks dan Tujuan
Long-term monitoring of forest soundscape, biodiversity assessment, impact of human activities.

### 8.3.2 Data Collection

#### 8.3.2.1 Autonomous Recording Units
Deployment strategy (grid layout, 20 units), programming (dawn chorus, dusk, night recordings).

#### 8.3.2.2 Duration
6 months, across breeding season.

### 8.3.3 Data Processing

#### 8.3.3.1 Massive Dataset Handling
Thousands of audio files, efficient storage, parallel processing.

#### 8.3.3.2 Acoustic Indices
ACI, ADI, BAI, NDSI computed untuk all files.

#### 8.3.3.3 Species Detection
Automatic detection algorithms, manual validation subset.

### 8.3.4 Statistical Analysis

#### 8.3.4.1 Temporal Trends
Seasonal patterns, diel patterns (daily cycles).

#### 8.3.4.2 Spatial Analysis
Kriging untuk spatial interpolation, identifying hotspots.

#### 8.3.4.3 Impact Assessment
Before-after analysis of logging event.

### 8.3.5 Visualization
Time series plots, spatial maps, spectrogram galleries, species accumulation curves.

### 8.3.6 Interpretation dan Conservation Implications
Habitat quality indicators, recommendations untuk management.

### 8.3.7 Complete Workflow Code
R-based workflow (leveraging soundecology package), Python alternatives.

---

# Appendix A: Software dan Tools

## A.1 Python Ecosystem

### A.1.1 Audio I/O dan Basic Processing
- `librosa`: Feature extraction, analysis, visualization
- `soundfile`: Reading/writing audio files
- `pydub`: Simple audio manipulation
- `audioread`: Backend untuk multiple formats
- `scipy.signal`: Signal processing functions

### A.1.2 Advanced Audio Analysis
- `essentia`: Comprehensive audio analysis (MIR Lab)
- `pyAudioAnalysis`: Audio feature extraction dan classification
- `madmom`: Audio signal processing for music information retrieval
- `musdb`: Stems dataset untuk source separation
- `pyroomacoustics`: Room acoustics simulation

### A.1.3 Machine Learning
- `scikit-learn`: Classical ML algorithms
- `tensorflow`, `pytorch`: Deep learning frameworks
- `keras`: High-level neural network API

### A.1.4 Data Manipulation dan Analysis
- `numpy`: Numerical computing
- `pandas`: Data structures dan analysis
- `scipy`: Scientific computing
- `statsmodels`: Statistical modeling

### A.1.5 Visualization
- `matplotlib`: Publication-quality plots
- `seaborn`: Statistical visualization
- `plotly`: Interactive plots
- `bokeh`: Interactive web visualizations

### A.1.6 Specialized Soundscape Tools
- `scikit-maad`: Multiresolution analysis of acoustic diversity

## A.2 R Ecosystem

### A.2.1 Audio Processing
- `tuneR`: Audio analysis infrastructure
- `seewave`: Sound analysis dan synthesis
- `signal`: Signal processing functions
- `audio`: Audio interface
- `warbleR`: Bioacoustic analysis

### A.2.2 Soundscape-Specific Packages
- `soundecology`: Acoustic indices computation
- `monitoR`: Acoustic template detection
- `Rraven`: Interface dengan Raven Pro

### A.2.3 Statistical Analysis
- `stats`: Base statistics
- `lme4`: Mixed-effects models
- `nlme`: Non-linear mixed-effects
- `psych`: Psychometric analysis
- `FactoMineR`: Multivariate exploratory analysis

### A.2.4 Machine Learning
- `caret`: Unified ML interface
- `randomForest`: Random forest implementation
- `e1071`: SVM dan other ML algorithms
- `xgboost`: Gradient boosting

### A.2.5 Visualization
- `ggplot2`: Grammar of graphics
- `plotly`: Interactive plots
- `shiny`: Interactive web apps
- `leaflet`: Interactive maps

## A.3 Standalone Software

### A.3.1 Audio Editors
- Audacity (free, open-source)
- Raven Pro (Cornell Lab of Ornithology, bioacoustics focus)
- Sonic Visualiser (analysis dan annotation)
- Praat (phonetics dan speech analysis)

### A.3.2 Acoustic Simulation
- ODEON (room acoustics)
- CATT-Acoustic (room acoustics)
- SoundPLAN (environmental noise)

### A.3.3 GIS dan Mapping
- QGIS (open-source GIS)
- ArcGIS (commercial GIS)

## A.4 Online Platforms dan APIs

### A.4.1 Audio Datasets
- FSD50K, AudioSet annotations
- ESC-50 (Environmental Sound Classification)
- UrbanSound8K

### A.4.2 Cloud Computing
- Google Colab (free GPU access)
- AWS, Azure, GCP (scalable computing)

## A.5 Development Environments

### A.5.1 Python
- Jupyter Notebook / JupyterLab
- Spyder
- PyCharm
- VS Code

### A.5.2 R
- RStudio
- VS Code dengan R extension

---

# Appendix B: Datasets dan Resources

## B.1 Public Soundscape Datasets

### B.1.1 Urban Soundscape Datasets

#### B.1.1.1 SONYC Urban Sound Dataset
- **Sumber**: New York University
- **URL**: https://zenodo.org/record/3966543
- **Deskripsi**: Large-scale dataset dari sensor network di New York City (>40,000 recordings). Contains 10-second audio clips dengan annotations untuk 23 sound classes (dog bark, car horn, drilling, music, dll).
- **Format**: WAV files (44.1 kHz, mono)
- **Metadata**: Timestamps, GPS coordinates, sound class labels
- **Lisensi**: Creative Commons Attribution 4.0
- **Aplikasi**: Urban sound classification, noise complaint prediction, soundscape analysis

#### B.1.1.2 UrbanSound8K
- **Sumber**: New York University
- **URL**: https://urbansounddataset.weebly.com/urbansound8k.html
- **Deskripsi**: 8,732 labeled sound excerpts (≤4s) dari 10 classes: air conditioner, car horn, children playing, dog bark, drilling, engine idling, gun shot, jackhammer, siren, street music.
- **Format**: WAV files (varied sample rates)
- **Pre-arranged folds**: 10-fold cross-validation setup
- **Lisensi**: Various (check per file)
- **Aplikasi**: Machine learning training, urban sound event detection

#### B.1.1.3 ARAUS Dataset
- **Sumber**: ARAUS project (EU)
- **URL**: http://www.araus-sounds.org/ (project website)
- **Deskripsi**: Audio-visual recordings dari urban public spaces across Europe dengan synchronized perceptual evaluations.
- **Format**: Ambisonic recordings (B-format), 360° video
- **Subjective data**: Questionnaires (ISO 12913-based)
- **Lisensi**: Research use
- **Aplikasi**: Audio-visual interaction studies, VR/AR soundscape applications

#### B.1.1.4 SONORUS Dataset
- **Sumber**: SONORUS project (EU)
- **URL**: Available through project partners
- **Deskripsi**: Soundscape recordings dan perceptual evaluations dari various European cities.
- **Format**: Binaural recordings
- **Subjective data**: SSQP questionnaires
- **Lisensi**: Research collaboration
- **Aplikasi**: Urban soundscape quality assessment

### B.1.2 Natural Environment Datasets

#### B.1.2.1 AudioMoth Deployment Data
- **Sumber**: Various research groups (data sharing initiatives)
- **URL**: https://www.openacousticdevices.info/data-repository
- **Deskripsi**: Long-term autonomous recordings dari natural habitats worldwide.
- **Format**: WAV files (various sampling rates, typically 16-48 kHz)
- **Coverage**: Rainforests, temperate forests, wetlands, savannas
- **Lisensi**: Varies by contributor
- **Aplikasi**: Biodiversity monitoring, soundscape ecology, climate change studies

#### B.1.2.2 Xeno-canto
- **Sumber**: Community-contributed bird sounds
- **URL**: https://www.xeno-canto.org/
- **Deskripsi**: >700,000 recordings dari >10,000 bird species worldwide. Includes metadata (species, location, recordist, quality ratings).
- **Format**: MP3 (variable bitrate)
- **API**: Available untuk programmatic access
- **Lisensi**: Various Creative Commons licenses
- **Aplikasi**: Species identification training, bioacoustic research, soundscape component analysis

#### B.1.2.3 Macaulay Library (Cornell Lab)
- **Sumber**: Cornell Lab of Ornithology
- **URL**: https://www.macaulaylibrary.org/
- **Deskripsi**: Largest archive of animal sounds dan video. >1 million audio recordings.
- **Format**: Various (high-quality WAV available)
- **Coverage**: Birds, mammals, amphibians, insects globally
- **Lisensi**: Various (many CC licenses)
- **Aplikasi**: Comparative bioacoustics, training datasets

#### B.1.2.4 Freesound
- **Sumber**: Music Technology Group (Universitat Pompeu Fabra)
- **URL**: https://freesound.org/
- **Deskripsi**: Collaborative database of audio snippets, samples, recordings (>500,000 sounds). Includes natural sounds, urban sounds, musical instruments.
- **Format**: Various (original formats preserved)
- **Metadata**: Tags, descriptions, geotags (optional)
- **API**: RESTful API untuk search dan download
- **Lisensi**: Creative Commons (various)
- **Aplikasi**: Sound design, machine learning training, soundscape synthesis

### B.1.3 Indoor Soundscape Datasets

#### B.1.3.1 AudioSet
- **Sumber**: Google Research
- **URL**: https://research.google.com/audioset/
- **Deskripsi**: Large-scale dataset dengan 2+ million human-labeled 10-second sound clips dari YouTube videos. 632 audio event classes, termasuk indoor sounds (speech, office, kitchen, dll).
- **Format**: YouTube video IDs dengan timestamps (audio extraction required)
- **Ontology**: Hierarchical class structure
- **Pre-computed embeddings**: VGGish embeddings available
- **Lisensi**: Various (YouTube content)
- **Aplikasi**: Audio event detection, sound classification, pre-training models

#### B.1.3.2 DCASE Challenge Datasets
- **Sumber**: Detection and Classification of Acoustic Scenes and Events (DCASE) community
- **URL**: http://dcase.community/challenge2023/
- **Deskripsi**: Annual challenge datasets covering various tasks including acoustic scene classification (indoor/outdoor), sound event detection, audio tagging.
- **Example tasks**: 
  - Task 1: Acoustic Scene Classification (airports, shopping malls, metro stations, parks, streets)
  - Task 4: Sound Event Detection in Domestic Environments
- **Format**: Typically WAV (44.1 kHz atau 48 kHz)
- **Annotations**: Weak labels, strong labels, atau both
- **Lisensi**: Varies by year/task
- **Aplikasi**: Benchmarking ML models, scene classification research

### B.1.4 Mixed / Multi-Context Datasets

#### B.1.4.1 ESC-50 (Environmental Sound Classification)
- **Sumber**: Karol Piczak (2015)
- **URL**: https://github.com/karolpiczak/ESC-50
- **Deskripsi**: 2,000 environmental audio recordings (5 seconds each) dalam 50 classes across 5 major categories: animals, natural soundscapes, human non-speech, interior/domestic, exterior/urban.
- **Format**: WAV (44.1 kHz, mono)
- **Pre-arranged folds**: 5-fold cross-validation
- **Lisensi**: Various (attribution required)
- **Aplikasi**: Baseline benchmarking, transfer learning source

#### B.1.4.2 TUT Acoustic Scenes Dataset
- **Sumber**: Tampere University of Technology
- **URL**: https://zenodo.org/communities/tut-acoustic-scenes/
- **Deskripsi**: Series of datasets dari DCASE challenges, covering diverse acoustic scenes (beach, bus, cafe, car, city center, forest path, grocery store, home, library, metro station, office, park, residential area, train, tram).
- **Format**: WAV (44.1 kHz atau 48 kHz, stereo)
- **Duration**: Typically 10-30 second segments
- **Lisensi**: Creative Commons licenses
- **Aplikasi**: Acoustic scene classification, context-aware applications

## B.2 Benchmark Datasets untuk Machine Learning

### B.2.1 FSD50K (Freesound Dataset 50K)
- **Sumber**: Freesound Annotator project
- **URL**: https://annotator.freesound.org/fsd/downloads/
- **Deskripsi**: 51,197 audio clips dengan labels dari AudioSet ontology. Development set dengan verified labels, evaluation set untuk testing.
- **Format**: WAV (variable sample rates, mono)
- **Lisensi**: Creative Commons
- **Aplikasi**: Audio tagging, sound event detection

### B.2.2 VGGSound
- **Sumber**: Visual Geometry Group (Oxford)
- **URL**: http://www.robots.ox.ac.uk/~vgg/data/vggsound/
- **Deskripsi**: 200,000+ video clips dengan 310 audio classes. Audio-visual correspondence.
- **Format**: YouTube video IDs
- **Lisensi**: Research use
- **Aplikasi**: Audio-visual learning, cross-modal retrieval

## B.3 Perceptual Evaluation Datasets

### B.3.1 SATP (Soundscapes Attributes Translation Project)
- **Sumber**: Various European institutions
- **URL**: Available through publications
- **Deskripsi**: Multilingual perceptual evaluations dari soundscapes. Validated translations of soundscape descriptors dalam multiple languages.
- **Languages**: English, Swedish, Chinese, Italian, Dutch, dll
- **Lisensi**: Research use
- **Aplikasi**: Cross-cultural soundscape studies

### B.3.2 ISD (International Soundscape Database)
- **Sumber**: Mitchell et al.
- **URL**: Available through request to authors
- **Deskripsi**: 693 soundscapes dari 11 countries dengan perceptual ratings pada 8 dimensions.
- **Subjective data**: Pleasantness, eventfulness, familiarity, dll
- **Lisensi**: Research collaboration
- **Aplikasi**: Cross-cultural analysis, model development

## B.4 Specialized Application Datasets

### B.4.1 Bird Audio Detection Challenge (BAD)
- **Sumber**: DCASE community
- **URL**: http://dcase.community/
- **Deskripsi**: Long-duration recordings untuk bird presence detection.
- **Format**: WAV files (10+ minutes each)
- **Annotations**: Presence/absence per file
- **Aplikasi**: Ecological monitoring, rare species detection

### B.4.2 Speech in Noise Datasets
- **Sumber**: Various (LibriSpeech, TIMIT, etc.)
- **URL**: https://www.openslr.org/
- **Deskripsi**: Clean speech dengan various noise backgrounds untuk speech intelligibility studies relevant untuk indoor soundscape.
- **Lisensi**: Open-source
- **Aplikasi**: Speech intelligibility modeling, room acoustics evaluation

## B.5 Dataset Access dan Usage Guidelines

### B.5.1 Data Access Procedures
- **Public repositories**: Direct download (Zenodo, Figshare, institutional repositories)
- **APIs**: Programmatic access (Freesound, Xeno-canto, AudioSet)
- **Request-based**: Email authors atau fill data request forms
- **Collaborative projects**: Join research networks

### B.5.2 Citation Requirements
Selalu cite original dataset papers dan data repositories. Format yang direkomendasikan:
```
Author(s). (Year). Dataset Name. Repository. DOI/URL
```

### B.5.3 Ethical Considerations
- **Privacy**: Some datasets may contain identifiable information
- **Indigenous knowledge**: Respect traditional ecological knowledge dalam natural recordings
- **Commercial use**: Check license compatibility
- **Data sharing**: Contribute back to community when possible

### B.5.4 Data Preprocessing Recommendations
- **Quality assessment**: Check recordings untuk corruption, artifacts
- **Normalization**: Consider level normalization untuk consistent analysis
- **Segmentation**: Extract relevant portions for computational efficiency
- **Metadata validation**: Verify timestamps, GPS coordinates, labels

## B.6 Creating Your Own Dataset

### B.6.1 Planning Considerations
- Research questions driving data needs
- Sample size determination (statistical power)
- Temporal coverage (time of day, seasons)
- Spatial coverage (geographic distribution)

### B.6.2 Documentation Standards
- README files dengan dataset description
- Metadata schemas (Dublin Core, AudioMD)
- Data dictionaries (variable descriptions)
- Methodology documentation

### B.6.3 Data Sharing Best Practices
- **Repositories**: Zenodo, Figshare, institutional repositories
- **Licensing**: Choose appropriate Creative Commons license
- **DOI**: Obtain persistent identifier
- **FAIR principles**: Findable, Accessible, Interoperable, Reusable

## B.7 Additional Resources

### B.7.1 Standards dan Guidelines
- **ISO 12913 series**: Soundscape standards
- **ISO 1996 series**: Acoustics - Description, measurement and assessment of environmental noise
- **ANSI/ASA standards**: American acoustical standards

### B.7.2 Research Networks
- **International Commission for the Biological Effects of Noise (ICBEN)**
- **European Acoustics Association (EAA) - Soundscape Technical Committee**
- **Soundscape Network**: Global network of researchers
- **COST Action Soundscape-INDICES**: European research collaboration

### B.7.3 Conferences
- **Inter-Noise**: International Congress on Noise Control Engineering
- **Euronoise**: European Conference on Noise Control
- **Forum Acusticum**: European acoustics conference
- **Acoustical Society of America (ASA) meetings**
- **DCASE Workshop**: Annual workshop on acoustic scenes and events

### B.7.4 Online Learning Resources
- **Coursera**: Audio Signal Processing courses
- **YouTube channels**: Valerio Velardo - Sound of AI, sentdex
- **Documentation**: Librosa tutorials, scikit-learn user guide
- **Blogs**: Towards Data Science (audio ML articles)

### B.7.5 Software Repositories
- **GitHub**: Search "soundscape" untuk open-source tools
- **PyPI**: Python package index
- **CRAN**: R package repository

---

# Referensi


---

# Tentang Penulis

Dr. Randy Frans Fela adalah Perceptual Audio-Visual Engineer dan peneliti di GN Group (Jabra), Copenhagen, Denmark. Beliau meraih gelar PhD dalam Perceptual Evaluation of Immersive Audio-visual Technology dari Technical University of Denmark. Penelitiannya berfokus pada evaluasi kualitas audio-visual dan menjembatani metrik AI dengan persepsi manusia.

---
