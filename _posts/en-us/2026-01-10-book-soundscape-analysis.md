---
layout: post
title: "Soundscape (Bentang Suara): Teori, Metode, dan Analisis"
subtitle: "A Living Textbook"
date: 2025-01-10
description: A living book - Panduan komprehensif tentang analisis soundscape dari perspektif teknis dan perseptual dengan implementasi praktis menggunakan Python dan R
authors:
  - name: Randy Frans Fela
    url: "https://fransfela.github.io"
    affiliations:
      name: GN Group, Copenhagen
tags: [living-book, soundscape acoustics perceptual-audio]
categories: audio-engineering
giscus_comments: true
related_posts: false
toc:
  sidebar: left
---
> **Last updated:** {{ page.date | date: "%B %d, %Y" }}
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

# Bab 1: Fundamental Soundscape
Ketika kita berjalan melewati taman kota di pagi hari, telinga kita menangkap simfoni kompleks dari kicauan burung yang bersahutan, desir angin melalui dedaunan, percakapan para pengunjung yang berolahraga, dan dengung kendaraan dari jalan raya di kejauhan. Pengalaman akustik ini—bagaimana kita mendengar, mempersepsikan, dan merasakan lingkungan suara di sekitar kita—adalah inti dari apa yang kita sebut sebagai *soundscape*. Namun, *soundscape* jauh lebih kompleks daripada sekadar kumpulan suara yang terdengar pada suatu waktu dan tempat. Ia melibatkan interaksi dinamis antara sumber-sumber suara, karakteristik fisik lingkungan, dan pengalaman subjektif dari individu atau komunitas yang mendengarnya.

Bab ini akan membangun fondasi pemahaman tentang *soundscape* sebagai konsep multidimensi yang menghubungkan akustik fisik dengan persepsi manusia. Kita akan menelusuri bagaimana konsep ini berkembang dari ide artistik menjadi kerangka kerja ilmiah yang terstandarisasi, mengidentifikasi komponen-komponen pembentuknya, dan mengeksplorasi berbagai konteks di mana analisis *soundscape* memberikan nilai praktis yang signifikan. Pemahaman mendalam tentang fundamental ini akan menjadi landasan untuk bab-bab selanjutnya yang membahas metodologi teknis dalam perekaman, analisis, dan interpretasi *soundscape*.

## 1.1 Definisi dan Konsep Dasar

### 1.1.1 Apa itu Soundscape?

Untuk memahami *soundscape*, kita perlu terlebih dahulu membedakannya dari konsep-konsep akustik yang lebih familiar seperti *sound* (suara) dan *noise* (kebisingan). Suara, dalam konteks fisika, adalah gelombang mekanis yang merambat melalui medium; udara, air, atau benda padat, sebagai hasil dari getaran. Ia dapat diukur secara objektif melalui parameter seperti frekuensi (dalam Hertz), amplitudo (dalam decibel), dan durasi (dalam detik). Kebisingan, di sisi lain, secara tradisional didefinisikan sebagai "suara yang tidak diinginkan" (*unwanted sound*), sebuah definisi yang secara inheren subjektif karena bergantung pada konteks dan persepsi individu. Suara mesin konstruksi mungkin merupakan kebisingan bagi penghuni apartemen yang ingin beristirahat, namun merupakan suara kerja yang normal bagi operator alat berat tersebut.

*Soundscape* melampaui kedua konsep ini dengan mengintegrasikan dimensi perseptual, kognitif, dan kontekstual ke dalam pemahaman kita tentang lingkungan akustik. Istilah ini—yang merupakan gabungan dari *sound* dan *landscape*—pertama kali dipopulerkan oleh komposer dan teoretikus Kanada R. Murray Schafer dalam bukunya yang terkenal, *The Soundscape: Our Sonic Environment and the Tuning of the World* (1977). Schafer mendefinisikan *soundscape* sebagai "lingkungan suara" (*sonic environment*) atau "bidang studi akustik" (*acoustic field of study*) yang dapat dipelajari sebagai sebuah komposisi musik, karya seni, atau sebagai objek penelitian tentang persepsi dan perilaku manusia. Bagi Schafer, *soundscape* bukan sekadar fenomena akustik pasif, melainkan lanskap yang dapat didengar (*audible landscape*), di mana kita, sebagai pendengar, adalah bagian integral dari komposisi tersebut.

Definisi Schafer yang bersifat estetis dan fenomenologis ini kemudian berkembang dan diadopsi oleh berbagai disiplin ilmu. Dalam konteks ekologi, Pijanowski et al. (2011) mendefinisikan *soundscape* sebagai "semua suara baik yang dihasilkan oleh organisme biologis (*biophony*), proses geofisik (*geophony*), maupun aktivitas manusia (*anthrophony*) yang berasal dari lanskap tertentu dan bervariasi dalam ruang dan waktu, mencerminkan pola ekologis yang penting." Definisi ini menekankan aspek spasio-temporal dan ekologis dari *soundscape*, menjadikannya alat untuk memahami kesehatan dan dinamika ekosistem.

Namun, definisi yang paling berpengaruh dan digunakan secara luas saat ini adalah yang ditetapkan oleh International Organization for Standardization (ISO) dalam standar ISO 12913-1:2014, *Acoustics—Soundscape—Part 1: Definition and conceptual framework*. Standar ini mendefinisikan *soundscape* sebagai:

> "The acoustic environment as perceived or experienced and/or understood by a person or people, in context."

Definisi ISO ini sangat penting karena beberapa alasan. Pertama, ia secara eksplisit menekankan bahwa *soundscape* adalah konstruksi perseptual, bukan semata-mata properti fisik dari gelombang suara, melainkan hasil dari bagaimana suara-suara tersebut diinterpretasikan oleh manusia. Dua orang dapat berdiri di lokasi yang sama, terpapar pada sinyal akustik yang identik, namun mengalami *soundscape* yang sangat berbeda tergantung pada latar belakang budaya mereka, kondisi psikologis saat itu, ekspektasi, dan tujuan mereka berada di lokasi tersebut. Seorang pengamat burung mungkin mendengar kicauan burung sebagai musik alam yang menenangkan, sementara seseorang yang sedang mencoba berkonsentrasi membaca mungkin menganggapnya sebagai distraksi yang mengganggu.

Kedua, kata "dalam konteks" pada definisi ISO menggarisbawahi bahwa *soundscape* tidak pernah terjadi di ruang yang kosong. Konteks mencakup dimensi temporal (waktu dalam hari, musim), spasial (karakteristik fisik lingkungan seperti arsitektur, vegetasi, topografi), dan sosial-budaya (aktivitas yang sedang berlangsung, norma komunitas, makna historis atau simbolis dari suara tertentu). Suara lonceng gereja yang sama dapat dipersepsikan sebagai *soundmark* yang menenangkan dan menandai identitas komunitas pada hari Minggu pagi, namun sebagai gangguan tidur yang menjengkelkan pada larut malam.

Ketiga, definisi ini mengakui bahwa *soundscape* dapat dialami pada tingkat individu maupun kolektif. Persepsi *soundscape* bersifat personal, namun juga ada pola-pola yang shared oleh kelompok atau komunitas tertentu. Penelitian telah menunjukkan bahwa meskipun ada variabilitas individual yang signifikan, terdapat konsensus umum dalam populasi tentang *soundscape* mana yang dianggap menyenangkan atau mengganggu, tenang atau dinamis (Axelsson et al., 2010).

### 1.1.2 Standar ISO 12913

Standar ISO 12913 merupakan pencapaian penting dalam evolusi *soundscape* dari konsep artistik menjadi framework ilmiah yang terstruktur. Standar ini dikembangkan oleh Working Group 54 (Soundscape) di bawah Technical Committee 43 (Acoustics) dari ISO, dengan partisipasi dari ahli-ahli internasional di bidang akustik, psikologi lingkungan, perencanaan kota, dan disiplin terkait. Standar ini terdiri dari beberapa bagian yang saling melengkapi:

**ISO 12913-1:2014 (Part 1: Definition and conceptual framework)** menyediakan definisi formal dan kerangka konseptual untuk *soundscape*. Framework ini menggambarkan *soundscape* sebagai hasil dari interaksi tiga elemen utama: (1) *Person* (orang atau kelompok orang dengan karakteristik individual mereka seperti usia, budaya, preferensi, dan kondisi sementara seperti mood atau tujuan kehadiran), (2) *Acoustic environment* (lingkungan akustik yang terdiri dari berbagai sumber suara dengan karakteristik fisik mereka), dan (3) *Context* (konteks fisik, sosial, dan temporal di mana persepsi terjadi). Interaksi ketiga elemen ini menghasilkan *soundscape*, yang kemudian dapat memicu respons fisiologis (seperti peningkatan detak jantung atau perubahan tekanan darah), perilaku (seperti menghindari suatu area atau memilih untuk tinggal lebih lama), dan emosional (seperti perasaan relaks, terganggu, atau terstimulasi).

**ISO 12913-2:2018 (Part 2: Data collection and reporting requirements)** memberikan panduan metodologis untuk pengumpulan data *soundscape*. Bagian ini sangat penting karena menstandardisasi prosedur untuk mengukur dan melaporkan persepsi *soundscape*, memastikan bahwa hasil dari berbagai studi dapat dibandingkan dan direplikasi. Standar ini merekomendasikan penggunaan kuesioner terstruktur dengan skala rating untuk mengukur dimensi-dimensi perseptual seperti *pleasantness* (kenyamanan), *eventfulness* (dinamisme atau tingkat kejadian), dan atribut-atribut spesifik seperti intensitas suara tertentu (misalnya, seberapa kuat suara lalu lintas dipersepsikan). Part 2 juga memberikan panduan tentang sampling (berapa banyak responden yang diperlukan, bagaimana memilih lokasi sampling, kapan melakukan pengukuran), serta format pelaporan data untuk memastikan transparansi dan reproducibility.

**ISO 12913-3:2019 (Part 3: Data analysis)** membahas metode-metode statistik dan analitik yang sesuai untuk menganalisis data *soundscape*. Ini mencakup teknik-teknik seperti analisis korelasi antara parameter akustik objektif dengan persepsi subjektif, analisis varians untuk membandingkan *soundscape* di berbagai lokasi atau waktu, dan metode multivariat seperti Principal Component Analysis (PCA) untuk mengidentifikasi dimensi-dimensi utama yang mendasari persepsi *soundscape*.

Standar ISO 12913 ini tidak hanya memberikan legitimasi ilmiah pada studi *soundscape*, tetapi juga menyediakan bahasa bersama bagi peneliti, praktisi, dan pengambil kebijakan di seluruh dunia. Dengan adanya standar ini, hasil penelitian *soundscape* dari Tokyo dapat dibandingkan dengan yang dari Copenhagen atau São Paulo, memfasilitasi akumulasi pengetahuan global tentang bagaimana manusia mempersepsikan dan merespons lingkungan akustik mereka.

### 1.1.3 Perbedaan dengan Noise Mapping

Untuk lebih memahami keunikan pendekatan *soundscape*, perlu dikontraskan dengan metodologi yang lebih mapan dan banyak digunakan dalam akustik lingkungan: *noise mapping* (pemetaan kebisingan). *Noise mapping* telah menjadi alat standar dalam manajemen kebisingan lingkungan sejak beberapa dekade lalu, terutama di Eropa di mana European Union's Environmental Noise Directive (END) 2002/49/EC mewajibkan negara-negara anggota untuk memproduksi peta kebisingan strategis untuk area urban besar, bandara, pelabuhan, dan infrastruktur transportasi utama.

*Noise mapping* umumnya berfokus pada pengukuran dan prediksi parameter akustik objektif, terutama tingkat tekanan suara (*sound pressure level*) yang diukur dalam desibel (dB). Metrik yang paling umum digunakan adalah $L_{den}$ (Day-Evening-Night Level), yang merupakan average level tekanan suara selama 24 jam dengan penalti tambahan untuk periode sore (evening) dan malam (night) untuk merefleksikan sensitivitas yang lebih tinggi terhadap kebisingan pada waktu-waktu tersebut. Peta kebisingan biasanya divisualisasikan sebagai peta warna di mana area dengan tingkat kebisingan yang berbeda ditampilkan dalam gradasi warna, memudahkan identifikasi "hotspot" kebisingan.

Pendekatan *noise mapping* ini memiliki kekuatan yang jelas: ia objektif, dapat direproduksi, dan memungkinkan komparasi langsung antar lokasi atau periode waktu. Namun, ia juga memiliki keterbatasan fundamental yang signifikan. Pertama, *noise mapping* mereduksi kompleksitas pengalaman akustik menjadi satu angka: level kebisingan. Dua lingkungan dengan $L_{den}$ yang identik dapat memiliki karakter akustik yang sangat berbeda. Kebisingan lalu lintas yang steady dan predictable di jalan utama menghasilkan $L_{den}$ yang sama dengan lingkungan dengan komponen suara yang lebih impulsive yang terjadi sebentar-sebentar dari konstruksi, namun dampak psikologis dan fisiologisnya pada manusia bisa sangat berbeda (Öhrström et al., 2006).

Kedua, *noise mapping* secara implisit mengasumsikan bahwa semua suara pada level yang sama adalah sama gangguannya, mengabaikan perbedaan kualitatif antara sumber-sumber suara. Penelitian *soundscape* telah menunjukkan bahwa sumber suara itu penting: pada level yang sama, suara air mancur atau kicauan burung umumnya dinilai jauh lebih positif daripada suara lalu lintas atau konstruksi (Jeon et al., 2010). Beberapa suara bahkan memiliki efek "masking" positif, di mana kehadiran mereka dapat mengurangi persepsi negatif terhadap kebisingan latar belakang. Fenomena ini dikenal sebagai *informational masking* atau *perceptual masking*, di mana attention kita dialihkan dari suara yang mengganggu ke suara yang lebih menyenangkan.

Ketiga, *noise mapping* mengabaikan konteks sosial, budaya, dan individual yang membentuk persepsi kebisingan. Seseorang yang tumbuh di kota besar mungkin telah beradaptasi dengan level kebisingan tinggi dan merasa tidak nyaman dalam kesunyian total pedesaan. Sebaliknya, para migran dari desa ke kota sering mengalami *noise annoyance* yang lebih tinggi pada level kebisingan yang sama dibandingkan dengan penduduk kota yang lama (Babisch et al., 2009). Suara yang sama dapat dipersepsikan sangat berbeda tergantung pada apakah ia dianggap "necessary" (seperti sirene ambulans) atau "unnecessary" (seperti suara musik keras dari tetangga), atau apakah individu merasa memiliki kontrol terhadap sumber suara tersebut.

Pendekatan *soundscape*, sebaliknya, mengakui kompleksitas ini. Alih-alih bertanya "seberapa keras?" (*how loud?*), ia bertanya "bagaimana rasanya?" (*how does it feel?*) atau "apa kualitasnya?" (*what is its quality?*). Penelitian *soundscape* telah mengidentifikasi bahwa persepsi lingkungan akustik tidak dapat direduksi menjadi satu dimensi "baik vs buruk" atau "tenang vs bising", melainkan bersifat multidimensi. Model yang paling berpengaruh, dikembangkan oleh Axelsson et al. (2010), mengusulkan bahwa persepsi *soundscape* dapat direpresentasikan dalam ruang dua dimensi ortogonal: *pleasantness* (menyenangkan vs tidak menyenangkan) dan *eventfulness* (dinamis/penuh kejadian vs tenang/statis). *Soundscape* yang ideal untuk taman kota mungkin adalah yang tinggi dalam *pleasantness* dan sedang dalam *eventfulness*, cukup dinamis untuk menarik namun tidak terlalu berlebihan. Untuk kantor, mungkin yang diinginkan adalah *soundscape* yang netral dalam *pleasantness* namun rendah dalam *eventfulness* untuk meminimalkan distraksi.

Penting untuk dicatat bahwa pendekatan *soundscape* bukanlah pengganti untuk *noise mapping*, melainkan komplemen. *Noise mapping* tetap penting untuk tujuan regulasi, penilaian penting terhadap pemenuhan standar kebisingan, dan identifikasi area yang memerlukan intervensi akustik. Namun, untuk memahami sepenuhnya bagaimana manusia mengalami lingkungan akustik mereka dan untuk mendesain intervensi yang tidak hanya mengurangi kebisingan tetapi juga meningkatkan kualitas pengalaman akustik, pendekatan *soundscape* menjadi esensial. Kombinasi dari kedua pendekatan ini—pengukuran objektif dari parameter akustik dan evaluasi subjektif dari persepsi dan preferensi—memberikan gambaran yang paling komprehensif tentang lingkungan akustik dan dampaknya terhadap kesejahteraan manusia.

## 1.2 Sejarah Perkembangan

### 1.2.1 Era R. Murray Schafer dan World Soundscape Project

Sejarah studi *soundscape* modern tidak dapat dipisahkan dari sosok Raymond Murray Schafer dan World Soundscape Project yang ia dirikan pada awal tahun 1970-an di Simon Fraser University, British Columbia, Kanada. Schafer, seorang komposer avant-garde dan teoretikus musik, melihat lingkungan akustik tidak hanya sebagai latar belakang pasif untuk kehidupan manusia, tetapi sebagai komposisi yang dinamis dan bermakna yang dapat dan harus dipelajari dengan pendekatan yang sama ketatnya seperti yang kita gunakan untuk menganalisis karya musik.

Perhatian Schafer berasal dari pengamatannya tentang apa yang ia sebut sebagai "degradasi soundscape global"—yakni, hilangnya *soundscape* tradisional yang kaya dan bervariasi akibat industrialisasi dan urbanisasi yang cepat. Dalam esainya "*The Soundscape*" yang diterbitkan pada tahun 1969, Schafer mengekspresikan keprihatinan tentang *lo-fi soundscape* (low fidelity soundscape) di mana signal-to-noise ratio rendah, dengan kebisingan latar belakang yang konstan dari lalu lintas, mesin, dan aktivitas industri menenggelamkan suara-suara individual dan menciptakan "imperial smog of sound" yang homogen dan "oppressive". Ia mengontraskan ini dengan *hi-fi soundscape* (high fidelity soundscape) dari era pra-industri atau area rural, di mana setiap suara—lonceng gereja, kicauan burung, langkah kaki di jalan berbatu—dapat didengar dengan jelas dan distinct, masing-masing membawa informasi dan makna.

Untuk mendokumentasikan dan menganalisis perubahan *soundscape* ini secara sistematis, Schafer meluncurkan World Soundscape Project (WSP) pada tahun 1971. Proyek ini melibatkan tim peneliti interdisipliner—komposer, musisi, akustisian, sosiolog, dan psikolog—yang melakukan field recordings yang ekstensif, survey persepsi masyarakat, dan analisis historis tentang evolusi *soundscape* di berbagai lokasi. Salah satu output paling terkenal dari WSP adalah "The Vancouver Soundscape" (1973), sebuah studi komprehensif tentang lingkungan akustik Vancouver yang mencakup recordings, "diary listening" (di mana partisipan mencatat semua suara yang mereka dengar selama periode waktu tertentu), dan analisis tentang bagaimana penduduk mempersepsikan dan berinteraksi dengan *soundscape* kota mereka.

Schafer juga memperkenalkan terminologi yang telah menjadi fundamental dalam studi *soundscape*. **Soundmark**, analog dengan *landmark*, merujuk pada suara yang unik dan karakteristik untuk suatu tempat sehingga suara tersebut menjadi bagian integral dari identitas komunitas—misalnya, suara trem di San Francisco, muadzin di Istanbul, atau lonceng Big Ben di London. **Keynote sounds** adalah suara-suara latar belakang yang konstan atau hampir konstan yang menciptakan "nada dasar" dari *soundscape*—seperti suara gelombang laut di kota pantai, atau "derung" konstan dari lalu lintas di metropolis besar. **Sound signals** adalah suara-suara "foreground" yang menonjol dari keynote dan menarik perhatian—seperti sirene, klakson, atau pengumuman stasiun kereta. Tripartisi ini memberikan framework untuk menganalisis struktur hierarkis dari *soundscape*.

Schafer juga mengadvokasi konsep *acoustic design* (desain akustik)—gagasan bahwa kita dapat dan seharusnya secara aktif mendesain *soundscape* kita, sama seperti kita mendesain lanskap visual dan arsitektur. Ia mengusulkan bahwa komposer, musisi, dan seniman suara (*sound artists*) memiliki peran penting dalam desain akustik komunitas, bekerja bersama perencana kota (*urban planners*), arsitek, dan pembuat kebijakan (*policymakers*) untuk menciptakan *soundscape* yang lebih kaya, lebih beragam, dan lebih bermakna dalam kaitannya dengan identitas dan nilai-nilai komunitas.

Karya seminal Schafer, *The Tuning of the World* (1977, kemudian diterbitkan ulang sebagai *The Soundscape: Our Sonic Environment and the Tuning of the World*), mensintesis filosofi, metodologi, dan temuan dari World Soundscape Project. Buku ini bukan hanya teks dasar (*foundational text*) untuk studi *soundscape*, tetapi juga manifesto yang penuh semangat tentang perlunya *acoustic ecology* (ekologi akustik)—disiplin yang mempelajari hubungan antara organisme hidup dan lingkungan akustik mereka, dengan tujuan untuk mencapai keseimbangan akustik yang berkelanjutan (*sustainable*).

### 1.2.2 Perkembangan di Berbagai Disiplin

Setelah karya perintis Schafer, konsep *soundscape* mulai diadopsi dan diadaptasi oleh berbagai disiplin ilmu, masing-masing membawa perspektif dan metodologi mereka sendiri, memperkaya dan memperluas pemahaman kita tentang lingkungan akustik.

Dalam **arsitektur dan perencanaan kota**, *soundscape* menjadi dimensi penting yang perlu dipertimbangkan dalam desain ruang publik. Arsitek seperti Bernhard Leitner mengeksplorasi bagaimana suara dapat digunakan sebagai elemen desain ruang, menciptakan instalasi yang memanipulasi persepsi spasial melalui akustik. Para perencana kota mulai mengakui bahwa kualitas akustik dari ruang publik—plaza, taman, pasar—mempengaruhi bagaimana ruang tersebut digunakan dan dinikmati oleh warga. Penelitian menunjukkan bahwa orang cenderung tinggal lebih lama di ruang publik dengan *soundscape* yang menyenangkan, meningkatkan interaksi sosial dan rasa memiliki terhadap tempat tersebut (Kang, 2007).

Dalam **psikologi lingkungan**, *soundscape* menjadi area penelitian yang aktif terkait dengan stres, pemulihan psikologis, dan kesejahteraan. Teori seperti *Attention Restoration Theory* (Teori Pemulihan Perhatian) oleh Kaplan & Kaplan (1989) dan *Stress Recovery Theory* (Teori Pemulihan Stres) oleh Ulrich et al. (1991), yang awalnya dikembangkan dalam konteks lanskap visual, diperluas untuk mencakup dimensi akustik. Penelitian menunjukkan bahwa paparan pada *soundscape* alami—seperti suara air mengalir, burung berkicau, atau angin melalui dedaunan—dapat mengurangi stres, menurunkan tekanan darah, dan meningkatkan kinerja kognitif, sementara paparan berkepanjangan pada kebisingan perkotaan yang intens memiliki efek sebaliknya (Alvarsson et al., 2010; Ratcliffe et al., 2013).

Dalam **ekologi**, konsep *soundscape* berkembang menjadi subdisiplin tersendiri: **ekologi soundscape** (*soundscape ecology*). Bernie Krause, seorang musisi dan naturalis, mengembangkan "hipotesis ceruk" (*niche hypothesis*) yang mengusulkan bahwa spesies dalam ekosistem yang sehat menempati ceruk akustik yang berbeda—baik dalam ranah frekuensi maupun waktu—untuk meminimalkan gangguan dan kompetisi akustik (Krause, 1987, 2012). Hipotesis ini kemudian diperluas oleh Pijanowski et al. (2011), yang mendefinisikan ekologi *soundscape* sebagai "ilmu tentang suara dalam lanskap," mencakup studi tentang bagaimana suara diproduksi oleh berbagai sumber (biologis, geofisik, antropogenik), bagaimana suara ditransmisikan melalui lingkungan, dan bagaimana suara mempengaruhi organisme dan proses ekologis.

Ekologi *soundscape* telah menjadi alat yang ampuh untuk pemantauan keanekaragaman hayati dan konservasi. Dengan menganalisis rekaman akustik dari suatu habitat sepanjang waktu, peneliti dapat mendeteksi perubahan dalam komposisi spesies, mengidentifikasi spesies invasif, memantau dampak dari aktivitas manusia (seperti penebangan atau pembangunan jalan), dan mengevaluasi efektivitas dari upaya restorasi habitat—semuanya tanpa perlu kehadiran fisik manusia yang dapat mengganggu satwa liar (Sueur et al., 2008; Farina, 2014).

Dalam **teknik akustik**, tradisi yang lebih fokus pada aspek teknis dan kuantitatif, penelitian *soundscape* membawa pergeseran dari paradigma "pengendalian kebisingan" (*noise control*) ke "desain kualitas suara" (*sound quality design*). Para peneliti mulai mengembangkan metrik akustik yang lebih baru yang berusaha menangkap aspek-aspek perseptual dari *soundscape*, bukan hanya intensitas. Ini mencakup pengembangan model seperti model kenyaringan (*loudness*) dan ketajaman (*sharpness*) Zwicker (Zwicker & Fastl, 1999), yang berusaha memprediksi persepsi psiko-akustik dari sinyal audio, serta berbagai indeks akustik yang akan kita bahas secara detail di Bab 4.

### 1.2.3 Era Modern: Ekologi Soundscape dan Soundscape Perkotaan

Dekade 2010-an menandai periode akselerasi yang luar biasa dalam penelitian *soundscape*, didorong oleh beberapa faktor. Pertama, perkembangan teknologi perekaman dan sensor yang menjadi lebih murah, portabel, dan berkapasitas tinggi, memungkinkan pemasangan jaringan sensor akustik yang ekstensif dan perekaman jangka panjang yang sebelumnya tidak praktis. Unit perekam otonom (*Autonomous Recording Units* atau ARU) seperti AudioMoth, yang ukurannya kecil, beroperasi dengan baterai selama berbulan-bulan, dan cukup murah untuk dipasang dalam jumlah besar, telah merevolusi pemantauan ekologis (Hill et al., 2018).

Kedua, kemajuan dalam pembelajaran mesin (*machine learning*) dan analisis audio telah membuka kemungkinan baru dalam ekstraksi informasi dari kumpulan data akustik yang masif. Model pembelajaran mendalam (*deep learning*) dapat dilatih untuk mengenali ratusan spesies burung dari vokalisasi mereka, mendeteksi suara gergaji mesin atau tembakan sebagai indikator penebangan ilegal atau perburuan liar, atau mengklasifikasikan *soundscape* ke dalam kategori-kategori seperti "perkotaan", "hutan", "lahan basah" dengan akurasi tinggi (Stowell et al., 2019).

Ketiga, ada pengakuan yang meningkat dari pembuat kebijakan dan perencana kota tentang pentingnya kualitas akustik untuk kelayakan hunian (*livability*) dan keberlanjutan (*sustainability*) kota. Badan Lingkungan Eropa (*European Environment Agency*) telah mempublikasikan laporan-laporan yang menekankan bahwa polusi suara adalah salah satu penekan lingkungan (*environmental stressor*) paling serius di Eropa, berkontribusi pada jutaan kasus gangguan tidur, penyakit kardiovaskular, dan penurunan kinerja kognitif setiap tahunnya (EEA, 2020). Ini mendorong investasi yang signifikan dalam penelitian *soundscape* perkotaan dan implementasi "area tenang" (*quiet areas*) atau "taman soundscape" sebagai tempat perlindungan akustik dalam kota.

Di Asia, terutama di negara-negara dengan urbanisasi yang pesat seperti Tiongkok, Korea Selatan, dan Singapura, penelitian *soundscape* perkotaan telah menjadi prioritas. Kang (2007) dan kolaboratornya di Universitas Sheffield telah melakukan studi ekstensif tentang persepsi *soundscape* di berbagai konteks perkotaan, mengembangkan panduan untuk desain akustik ruang-ruang kota. Di Korea Selatan, Jeon et al. (2010, 2011) telah mengintegrasikan evaluasi *soundscape* ke dalam kebijakan perencanaan kota, dengan beberapa kota mengimplementasikan "proyek perbaikan soundscape" yang tidak hanya mengurangi kebisingan tetapi secara aktif memperkenalkan "suara positif" seperti fitur air (*water features*) atau suara alam yang dikurasi.

Proyek-proyek besar seperti [**The SONORUS Project**](https://research.chalmers.se/en/publication/246374) (*Soundscape Indices*, 2014-2018, didanai oleh EU Horizon 2020) dan *Soundscape of European Cities and Landscapes* telah menghasilkan kumpulan data berskala besar dan memajukan metodologi untuk penilaian *soundscape*. SONORUS, khususnya, mengembangkan dan memvalidasi protokol untuk mengukur dan menginterpretasi *soundscape* dalam konteks perkotaan, berkontribusi pada pengembangan standar ISO 12913-2 dan 12913-3.

Di bidang ekologi *soundscape*, indeks akustik (*Acoustic Indices*)—metrik matematis yang dihitung dari rekaman audio untuk mengkarakterisasi *soundscape*—telah menjadi alat yang esensial. Indeks seperti *Acoustic Complexity Index* (ACI), *Acoustic Diversity Index* (ADI), *Normalized Difference Soundscape Index* (NDSI), yang akan kita eksplorasi secara mendalam di Bab 4, memungkinkan peneliti untuk menganalisis ribuan jam rekaman dengan cepat, mengidentifikasi pola spasio-temporal dalam keanekaragaman hayati, dan mendeteksi perubahan ekologis (Sueur et al., 2014; Pijanowski et al., 2011).

Saat ini, penelitian *soundscape* berada di garis depan yang menarik, di mana kolaborasi interdisipliner antara ekolog, ahli akustik, psikolog, ilmuwan data, dan seniman membuka kemungkinan-kemungkinan baru untuk memahami, melindungi, dan mendesain lingkungan akustik yang mendukung kesejahteraan manusia dan kesehatan ekologis.

## 1.3 Komponen Soundscape

Untuk menganalisis *soundscape* secara sistematis, baik dalam konteks urban, natural, maupun indoor, penting untuk memahami komponen-komponen pembentuknya. Dalam *soundscape ecology*, klasifikasi yang paling luas digunakan membagi suara-suara dalam lanskap ke dalam tiga kategori berdasarkan sumbernya: *biophony* (suara biologis), *geophony* (suara geofisik), dan *anthrophony* (suara anthropogenik atau manusia). Tripartisi ini, yang dipopulerkan oleh Bernie Krause (2012) dan diadopsi secara luas dalam literatur, memberikan framework yang berguna untuk memahami komposisi dan dinamika *soundscape*.

### 1.3.1 Biophony (Suara Biologis)

*Biophony* merujuk pada suara-suara yang dihasilkan oleh organisme hidup—dari mikroorganisme hingga mamalia besar. Dalam praktiknya, *biophony* didominasi oleh vokalisasi dari vertebrata (burung, amfibi, mamalia, beberapa ikan dan reptil) dan arthropoda (terutama serangga seperti jangkrik, belalang, dan jangkrik). Suara-suara ini diproduksi untuk berbagai fungsi biologis: komunikasi antar-individu, upaya menarik perhatian dari pasangan reproduksi, upaya mempertahankan teritorial, panggilan peringatan adanya pemangsa, echolocation untuk navigasi dan berburu, dan koordinasi dalam grup sosial.

**Burung** adalah kontributor utama pada *biophony* di banyak ekosistem darat, terutama di zona beriklim sedang dan tropis. Kicauan burung (*bird song* dan *bird calls*) sangat bervariasi dalam kompleksitas, dari panggilan sederhana yang terdiri dari satu atau beberapa nada hingga nyanyian yang rumit dan melibatkan ratusan elemen berbeda yang disusun dalam pola temporal yang kompleks. Fungsi biologis dari nyanyian burung umumnya terkait dengan menarik pasangan kawin dan mempertahankan wilayah teritorial, dan karenanya paling intensif selama musim berkembang biak. Fenomena "paduan suara fajar" (*dawn chorus*)—di mana banyak spesies burung bernyanyi secara bersamaan pada dini hari sebelum matahari terbit—adalah salah satu manifestasi paling spektakuler dari *biophony*, dan telah menjadi objek studi intensif tentang pembagian ceruk akustik (*acoustic niche partitioning*) dan strategi pensinyalan (Staicer et al., 1996).

**Amfibi**, khususnya katak dan kodok, adalah penghasil suara yang menonjol lainnya, terutama di dekat badan air dan lahan basah. Vokalisasi amfibi umumnya terdiri dari panggilan yang berulang-ulang, seringkali dalam bentuk paduan suara yang sinkron atau hampir sinkron, yang diproduksi oleh jantan untuk menarik betina. Frekuensi panggilan amfibi sangat bervariasi antar spesies, dari gemuruh berfrekuensi rendah (<100 Hz) dari beberapa spesies besar hingga bunyi bergetar bernada tinggi (>5 kHz) dari spesies kecil. Pola temporal dari paduan suara amfibi juga bervariasi, dengan beberapa spesies memanggil terus-menerus sepanjang malam sementara yang lain memiliki puncak aktivitas pada waktu-waktu tertentu yang dipengaruhi oleh faktor-faktor seperti suhu, fase bulan, dan siklus pasang surut di daerah pesisir (Wells, 2007).

**Serangga** memberikan kontribusi signifikan pada *biophony*, khususnya di ekosistem tropis dan beriklim sedang selama musim hangat. Tonggeret (*cicadas*), jangkrik (*crickets*), belalang (*grasshoppers*), dan *katydids* menghasilkan suara melalui gesekan bagian tubuh tertentu (*stridulation*) atau organ khusus yang disebut *tymbal* (struktur membran yang bergetar). Suara serangga seringkali memiliki karakteristik yang sangat stereotip dan spesifik untuk setiap spesies, membuatnya berharga untuk penilaian keanekaragaman hayati. Pola temporal dari paduan suara serangga sangat bervariasi: beberapa spesies tonggeret, misalnya, hanya muncul dan memanggil dalam interval bertahun-tahun yang teratur (tonggeret periodik dengan siklus 13 atau 17 tahun), sementara jangkrik memanggil setiap malam selama musim mereka aktif.

**Mamalia** umumnya kurang vokal dibandingkan burung atau amfibi, tetapi vokalisasi mamalia dapat sangat menonjol dalam konteks tertentu. Monyet pelollong (*howler monkeys*) di hutan Neotropis menghasilkan panggilan yang dapat terdengar hingga beberapa kilometer. Serigala melolong untuk koordinasi kelompok dan pengumuman teritorial. Mamalia laut seperti paus dan lumba-lumba menggunakan vokalisasi kompleks untuk komunikasi jarak jauh di lautan. Kelelawar menggunakan panggilan ultrasonik untuk ekolokasi (umumnya >20 kHz, di luar jangkauan pendengaran manusia tetapi dapat dideteksi dengan detektor khusus) untuk navigasi dan berburu, dan struktur panggilan ekolokasi sangat spesifik untuk setiap spesies, memungkinkan identifikasi akustik (Fenton, 2013).

Dari perspektif *soundscape*, *biophony* umumnya dipersepsikan secara positif oleh manusia. Penelitian telah konsisten menunjukkan bahwa kehadiran suara-suara alami seperti kicauan burung atau aliran air meningkatkan kualitas yang dipersepsikan dari *soundscape* dan berkontribusi pada pengurangan stres serta pemulihan psikologis (Ratcliffe et al., 2013). Ini tidak berarti semua suara biologis diterima secara positif—dengungan nyamuk atau gonggongan anjing yang terus-menerus tentu dapat mengganggu—tetapi secara umum, *biophony* dilihat sebagai indikator dari lingkungan yang "sehat" dan "alami".

Dari perspektif ekologis, *biophony* memberikan informasi kritis tentang keanekaragaman hayati, aktivitas biologis, dan kesehatan ekosistem. Indeks-indeks akustik yang mengukur kompleksitas, keragaman, dan intensitas dari *biophony* telah terbukti berkorelasi dengan kekayaan spesies dan integritas ekosistem dalam berbagai studi (Sueur et al., 2008; Fuller et al., 2015). Perubahan dalam *biophony*—misalnya, penurunan dalam intensitas paduan suara fajar atau hilangnya spesies dengan tanda tangan vokal tertentu—dapat menjadi tanda peringatan dini dari degradasi ekologis atau kehilangan habitat.

### 1.3.2 Geophony (Suara Geofisik)

*Geophony* mencakup suara-suara yang dihasilkan oleh proses-proses geofisik dan atmosferik, atau pada dasarnya, "suara dari Bumi itu sendiri" tanpa keterlibatan biologis atau antropogenik. Komponen utama dari *geophony* meliputi:

**Angin** adalah kontributor *geophony* yang ada di mana-mana, menghasilkan suara melalui interaksi dengan vegetasi, struktur, dan topografi. Suara yang dihasilkan angin sangat bervariasi tergantung pada kecepatan angin dan karakteristik dari objek yang dilewatinya. Hembusan angin lembut melalui dedaunan menciptakan suara gemerisik yang umumnya dipersepsikan sebagai menenangkan dan menyenangkan, sementara angin kencang dapat menghasilkan suara meraung atau menderu yang lebih intens dan bahkan menakutkan. Dalam ekologi akustik, kebisingan angin seringkali merupakan "faktor pengganggu" karena dapat menutupi suara-suara biologis yang ingin dianalisis, sehingga pelindung angin (*windscreen*) dan penutup berbulu (*furry windshield*) biasanya digunakan pada mikrofon dalam perekaman lapangan.

**Hujan** menghasilkan *soundscape* yang khas dan kompleks, tergantung pada intensitasnya (dari gerimis ringan hingga hujan deras), permukaan yang ditimpa (dedaunan, tanah, badan air, permukaan keras seperti aspal atau atap), dan kehadiran fenomena terkait seperti petir. Suara hujan seringkali memiliki karakteristik spektral yang berpita lebar (*broadband*)—energi tersebar di banyak frekuensi—dengan variabilitas temporal yang tinggi. Dalam studi tentang restorasi melalui *soundscape*, suara hujan dan suara air secara umum menunjukkan efek relaksasi yang kuat (Annerstedt et al., 2013).

**Air mengalir**—sungai, aliran kecil (*stream*), air terjun—adalah komponen *geophony* yang sangat menonjol dan umumnya sangat dihargai dalam desain *soundscape* perkotaan. Elemen air (*water features*) seringkali secara sengaja dimasukkan dalam taman kota dan ruang publik karena efek penutupan (*masking effect*) mereka terhadap kebisingan urban dan kualitas restoratif yang dipersepsikan. Karakteristik akustik dari air mengalir bervariasi dengan laju aliran, turbulensi, dan kehadiran rintangan atau terjunan. Air terjun, khususnya, menghasilkan kebisingan berpita lebar dengan intensitas tinggi yang dapat secara efektif menutupi kebisingan lalu lintas dan menciptakan rasa keterlindungan atau privasi akustik (Jeon et al., 2010).

**Gelombang laut** dan ombak di area pesisir menciptakan *soundscape* yang berirama dan berulang dengan komponen frekuensi rendah yang dominan. Bagi banyak orang yang tinggal atau berkunjung ke area pesisir, suara gelombang adalah ciri khas dari *soundscape* dan sangat terkait dengan relaksasi dan liburan (Benfield et al., 2014).

**Guntur dan petir** adalah peristiwa geofonis yang intens, impulsif, dan bersifat episodik. Dari perspektif akustik, guntur menarik karena menghasilkan suara frekuensi sangat rendah (<20 Hz, infrasonik) yang dapat merambat jarak sangat jauh, serta komponen frekuensi lebih tinggi yang dapat didengar. Guntur dapat memicu respons kejut (*startle response*) dan kecemasan pada beberapa individu, termasuk banyak hewan.

**Suara seismik dan vulkanik**, meskipun relatif jarang, merupakan fenomena geofonis yang ekstrem. Gempa bumi menghasilkan infrasonik dan getaran frekuensi rendah yang, meskipun umumnya di bawah ambang pendengaran manusia, dapat dipersepsikan melalui sensasi getaran. Letusan gunung berapi menghasilkan energi akustik berpita lebar yang dapat sangat intens.

Dari perspektif *soundscape*, *geophony* seringkali dipersepsikan sebagai "alami" dan "autentik", khususnya dalam konteks di mana orang mencari koneksi dengan alam. Namun, peristiwa geofonis yang intens seperti guntur atau angin kencang juga dapat dipersepsikan sebagai mengancam atau tidak nyaman. Dalam ekologi *soundscape*, *geophony* menyediakan "garis dasar akustik" (*acoustic baseline*) atau "lantai kebisingan" (*noise floor*) yang di atasnya *biophony* dan *anthrophony* harus bersaing untuk dapat terdengar.

### 1.3.3 Anthrophony (Suara Manusia)

*Anthrophony* merujuk pada suara-suara yang dihasilkan oleh aktivitas manusia. Ini adalah kategori yang paling beragam dan, dalam banyak lingkungan—terutama perkotaan dan suburban—seringkali dominan. *Anthrophony* dapat dibagi ke dalam beberapa subkategori berdasarkan sumber atau karakteristiknya:

**Kebisingan transportasi** adalah kontributor terbesar pada *anthrophony* di sebagian besar lingkungan perkotaan. Ini mencakup suara dari kendaraan bermotor (mobil, truk, motor), kereta api, pesawat terbang, dan kapal. Kebisingan transportasi umumnya dicirikan oleh konten spektral yang berpita lebar dengan puncak di frekuensi rendah (dari mesin) dan frekuensi tinggi (dari interaksi ban-jalan dan kebisingan aerodinamis). Pola temporal bervariasi: kebisingan lalu lintas jalan seringkali relatif kontinu dengan fluktuasi yang sesuai dengan volume lalu lintas, sementara kebisingan pesawat bersifat episodik dengan kejadian impulsif berintensitas tinggi. Kebisingan transportasi adalah salah satu sumber utama dari gangguan kebisingan (*noise annoyance*) dan telah dipelajari secara ekstensif dalam konteks kesehatan lingkungan (Basner et al., 2014).

**Kebisingan industri dan konstruksi** mencakup berbagai mesin dan aktivitas: perkakas listrik (*power tools*) seperti bor, gergaji, *jackhammer*, mesin (*machinery*) seperti kompresor dan generator, sistem tata udara (*HVAC*), dan proses industri. Kebisingan ini seringkali berintensitas tinggi, impulsif atau siklik, dan dapat memiliki komponen tonal yang kuat. Kebisingan konstruksi, khususnya, adalah sumber keluhan yang sering karena intensitas, ketidakprediktabilitasan, dan kecenderungannya untuk terjadi di lokasi yang berdekatan dengan area residensial.

**Aktivitas komersial** seperti restoran, bar, pasar, dan toko menghasilkan *soundscape* yang kompleks yang mencakup suara percakapan, musik, suara mekanis (ventilasi, pendingin), dan suara yang spesifik untuk aktivitas tertentu (bunyi piring di restoran, mesin kasir, dan lain-lain). *Soundscape* komersial sangat bervariasi dalam karakternya: pasar luar ruang memiliki *soundscape* yang hidup dan dinamis dengan banyak suara percakapan dan aktivitas yang tumpang tindih, sementara pusat perbelanjaan memiliki lingkungan akustik yang terkontrol dengan musik latar dan pengumuman.

**Suara manusia** itu sendiri—percakapan, tawa, tangisan, teriakan—adalah komponen *anthrophony* yang ada di mana-mana dalam ruang sosial. Persepsi dari suara manusia sangat bergantung pada konteks: di taman atau plaza publik, suara orang-orang yang bersosialisasi umumnya dipersepsikan secara positif sebagai indikator vitalitas dan aktivitas komunitas, sementara di konteks yang membutuhkan konsentrasi atau istirahat (kantor, perpustakaan, kamar tidur), suara manusia dapat menjadi pengganggu yang signifikan.

**Musik** dapat merupakan *anthrophony* baik dalam bentuk terkontrol (dari speaker, instrumen) maupun insidental (musisi jalanan, musik dari toko atau kendaraan). Persepsi musik sangat individual dan bergantung pada budaya: musik yang satu orang anggap indah dapat dianggap sebagai kebisingan oleh orang lain.

**Anthrophony terkontrol versus insidental**: Perbedaan yang berguna adalah antara *anthrophony* yang sengaja dirancang atau ditempatkan (seperti musik di ruang publik, air mancur, lonceng) dan yang merupakan produk sampingan dari aktivitas (lalu lintas, konstruksi). *Anthrophony* terkontrol dapat digunakan secara strategis dalam desain *soundscape* untuk menutupi suara yang tidak menyenangkan, menciptakan identitas untuk tempat, atau memandu perilaku (contohnya, musik yang menenangkan di rumah sakit atau musik bersemangat di toko ritel untuk mendorong pembelanjaan).

Dari perspektif perseptual, *anthrophony* adalah kategori yang paling kompleks. Beberapa *anthrophony* dipersepsikan secara positif (musik, tawa, percakapan yang hidup), beberapa netral, dan banyak yang dipersepsikan secara negatif (kebisingan lalu lintas, konstruksi, mesin yang keras). Tingkat gangguan dari *anthrophony* sering bukan hanya fungsi dari sifat akustik (intensitas, konten spektral), tetapi juga dari kemampuan kontrol yang dipersepsikan (*perceived controllability*), prediktabilitas, dan keperluan. Kebisingan lalu lintas dari jalan yang diperlukan untuk perjalanan mungkin lebih dapat ditoleransi daripada musik keras dari tetangga yang dianggap tidak perlu dan tidak bijaksana (Babisch, 2014).

Dalam ekologi *soundscape*, *anthrophony* seringkali dipandang sebagai kekuatan yang mengganggu yang merusak *soundscape* alami. Konsep "perlindungan akustik" (*acoustic refuge*)—area yang relatif bebas dari kebisingan antropogenik—telah menjadi prioritas konservasi, karena kebisingan antropogenik telah terbukti mempengaruhi perilaku satwa liar, keberhasilan reproduksi, dan distribusi (Barber et al., 2010; Francis & Barber, 2013). Namun, perspektif ini perlu diimbangi dengan pengakuan bahwa manusia adalah bagian dari ekosistem, dan tingkat tertentu dari *anthrophony* adalah tak terhindarkan dan bahkan diinginkan dalam lanskap yang dihuni manusia. Tantangannya adalah menemukan keseimbangan yang memungkinkan aktivitas manusia tanpa membanjiri lingkungan akustik hingga merugikan fungsi ekologis dan kesejahteraan manusia.

### 1.3.4 Interaksi Antar-Komponen

*Soundscape* bukanlah sekadar penjumlahan sederhana dari *biophony*, *geophony*, dan *anthrophony*, melainkan hasil dari interaksi kompleks antara ketiga komponen ini, yang dimediasi oleh sifat-sifat akustik lingkungan dan proses perseptual dari pendengar.

**Acoustic Niche Hypothesis** (Hipotesis Relung Akustik), yang diajukan oleh Krause (1987, 2012), menyatakan bahwa dalam ekosistem yang sehat, spesies-spesies telah berevolusi untuk menempati relung spektral dan temporal yang berbeda guna meminimalkan interferensi akustik. Burung-burung, misalnya, cenderung bersuara terutama pada frekuensi menengah hingga tinggi (2-8 kHz) dan selama fajar, sementara serangga mendominasi frekuensi yang lebih tinggi (4-10 kHz) dan lebih aktif pada sore dan malam hari, sedangkan katak berkonsentrasi pada frekuensi rendah hingga menengah (200 Hz - 4 kHz) dan sangat aktif setelah hujan. Ini memungkinkan berbagai spesies untuk hidup berdampingan dan berkomunikasi secara efektif dalam lingkungan yang sama.

Namun, introduksi *anthrophony*—khususnya kebisingan berfrekuensi rendah dari lalu lintas dan mesin—dapat mengganggu relung akustik ini. Kebisingan antropogenik secara tidak proporsional mempengaruhi komunikator frekuensi rendah dan dapat memaksa adaptasi perilaku seperti menggeser waktu panggilan, meningkatkan amplitudo panggilan (efek Lombard), atau menaikkan frekuensi panggilan untuk menghindari *masking* (penutupan suara). Studi telah mendokumentasikan adaptasi semacam ini pada populasi burung perkotaan, dengan beberapa spesies bernyanyi lebih keras, pada nada lebih tinggi, atau selama waktu yang lebih tenang (biasanya lebih pagi atau lebih sore) dibandingkan dengan populasi mereka di pedesaan (Halfwerk & Slabbekoorn, 2009; Slabbekoorn, 2013).

**Masking** (penutupan suara) adalah fenomena di mana satu suara mengganggu persepsi terhadap suara lainnya. Dalam *soundscape*, *masking* dapat terjadi ketika *anthrophony* dengan intensitas tinggi menutupi *biophony* atau *geophony* yang lebih tenang. Namun, *masking* juga dapat digunakan secara positif dalam desain *soundscape*: fitur air sering digunakan untuk menutupi kebisingan lalu lintas di taman kota, dan kicauan burung dapat memberikan "distraksi yang menyenangkan" yang mengurangi gangguan yang dipersepsikan dari kebisingan latar belakang (Jeon et al., 2010).

**Efek interaksi** antara komponen-komponen ini juga penting dari sudut pandang perseptual. Kehadiran suara-suara alami dapat mengurangi gangguan yang dipersepsikan dari kebisingan antropogenik—fenomena yang dikenal sebagai *informational masking* atau *efek ketenangan* (*tranquility effect*). Studi oleh Gidlöf-Gunnarsson & Öhrström (2007) menunjukkan bahwa area residensial dengan akses ke ruang hijau dan *soundscape* alami memiliki laporan gangguan kebisingan yang lebih rendah meskipun tingkat kebisingan objektifnya serupa dibandingkan area tanpa akses tersebut. Ini menunjukkan bahwa kehadiran sumber suara positif dapat secara psikologis mengompensasi sumber suara negatif.

Distribusi spasial dan dinamika temporal dari komponen-komponen juga sangat penting. *Soundscape* yang mencakup sumber suara beragam yang bervariasi secara spasial dan temporal umumnya dipersepsikan sebagai lebih menarik dan kurang monoton dibandingkan yang didominasi oleh satu sumber yang konstan (Alvarsson et al., 2010). Inilah salah satu alasan mengapa *soundscape* alami—yang secara inheren bervariabel dan berlapis—sering lebih disukai daripada *soundscape* perkotaan yang seragam dan didominasi oleh dengungan lalu lintas.

Memahami interaksi antara *biophony*, *geophony*, dan *anthrophony* sangat penting untuk manajemen dan desain *soundscape* yang efektif. Dalam pemantauan ekologis, mengenali dan memperhitungkan efek *masking* adalah penting untuk penilaian biodiversitas yang akurat. Dalam perencanaan kota, introduksi strategis dari suara-suara alami (*biophony* atau *geophony*) dapat secara signifikan meningkatkan kualitas lingkungan yang dipersepsikan tanpa harus mengurangi tingkat kebisingan objektif dari *anthrophony*. Perspektif holistik ini—melihat *soundscape* sebagai kesatuan yang terintegrasi bukan sebagai sumber suara yang terisolasi—adalah yang membedakan pendekatan *soundscape* dari pengendalian kebisingan tradisional.


## 1.4 Aplikasi Soundscape

Studi dan praktik *soundscape* memiliki aplikasi yang luas dan beragam, mulai dari perencanaan kota hingga konservasi ekologi, dari desain interior hingga pelestarian warisan budaya. Bagian ini akan mengeksplorasi domain-domain aplikasi utama dari *soundscape*, mendemonstrasikan relevansi dan nilai praktis dari pendekatan ini.

### 1.4.1 Urban Soundscape

Area perkotaan adalah rumah bagi mayoritas populasi global, lebih dari 55% pada tahun 2020 dan diproyeksikan mencapai 68% pada tahun 2050 (United Nations, 2018). Kualitas lingkungan akustik perkotaan karena itu memiliki dampak langsung pada kesejahteraan miliaran orang. Penelitian dan praktik *urban soundscape* bertujuan untuk memahami, mengevaluasi, dan meningkatkan kualitas akustik ruang perkotaan untuk meningkatkan kelayakan huni dan keberlanjutan kota.

**Desain ruang publik** adalah area aplikasi utama. Taman, alun-alun, promenade, dan ruang berkumpul sangat vital untuk kehidupan perkotaan, menyediakan tempat untuk rekreasi, bersosialisasi, dan istirahat dari tekanan kehidupan urban. Kualitas akustik dari ruang-ruang ini secara signifikan mempengaruhi bagaimana mereka digunakan dan dinikmati. Penelitian telah menunjukkan bahwa orang-orang tinggal lebih lama, merasa lebih santai, dan melaporkan kepuasan yang lebih tinggi dalam ruang publik dengan *soundscape* yang menyenangkan dibandingkan dengan yang didominasi oleh kebisingan lalu lintas atau suara mengganggu lainnya (Kang, 2007; Payne et al., 2009).

Intervensi praktis untuk meningkatkan *soundscape* perkotaan dapat mengambil berbagai bentuk. Penghalang akustik berupa dinding atau tanggul dapat mengurangi transmisi langsung kebisingan lalu lintas ke area pejalan kaki. Vegetasi berfungsi sebagai penghalang fisik yang menyerap dan menyebarkan gelombang suara sekaligus memberikan distraksi visual dan akustik yang positif. Penempatan strategis fitur air seperti air mancur atau aliran buatan dapat menutupi kebisingan yang tidak menyenangkan dengan suara yang menenangkan. Material permukaan juga mempengaruhi pantulan dan penyerapan suara, di mana permukaan lunak dan berpori menyerap lebih banyak suara daripada permukaan keras dan reflektif. Konfigurasi spasial seperti bagaimana ruang-ruang disusun dan kehadiran ceruk atau area terlindung dapat mempengaruhi propagasi suara dan menciptakan area dengan karakter akustik yang berbeda dalam ruang yang sama (Kang, 2007).

Area tenang (*quiet areas*) atau tempat perlindungan akustik (*acoustic refuges*) di kota-kota telah menjadi prioritas kebijakan di banyak negara Eropa, didorong sebagian oleh *European Environmental Noise Directive* 2002/49/EC yang mengharuskan negara-negara anggota untuk mengidentifikasi dan melindungi area dengan tingkat kebisingan yang rendah. Area tenang didefinisikan sebagai lokasi di mana tingkat suara dari sumber antropogenik rendah relatif terhadap sekitarnya, memberikan istirahat dari kebisingan perkotaan. Penunjukan dan perlindungan area semacam itu diakui sebagai penting untuk kesehatan dan kesejahteraan publik. Penelitian dari proyek QUADMAP (*Quiet Areas Definition and Management in Action Plans*) yang didanai oleh European Commission telah mengembangkan kriteria dan metode untuk mengidentifikasi dan mengelola area tenang (Licitra et al., 2016).

Pemetaan *soundscape* adalah alat untuk menilai dan memvisualisasikan kualitas akustik area perkotaan. Berbeda dengan peta kebisingan tradisional yang hanya menunjukkan tingkat suara, peta *soundscape* dapat menggabungkan dimensi perseptual seperti kenyamanan atau vitalitas. Teknik-teknik seperti survei penduduk tentang evaluasi perseptual mereka terhadap lokasi yang berbeda, atau menggunakan model pembelajaran mesin yang dilatih pada penilaian subjektif untuk memprediksi kualitas *soundscape* dari fitur akustik, memungkinkan pembuatan peta yang lebih bermakna dalam merepresentasikan bagaimana orang mengalami lingkungan akustik perkotaan (De Coensel et al., 2010; Aletta et al., 2015).

Indeks atau indikator *soundscape* telah dikembangkan untuk mengkuantifikasi kualitas *soundscape* perkotaan dengan cara yang dapat ditindaklanjuti untuk perencanaan kota. Misalnya, *Tranquility Rating* (Peringkat Ketenangan) yang dikembangkan oleh Watts et al. (2011) menggabungkan faktor objektif seperti tingkat suara, visibilitas fitur alami, dan jarak dari pembangunan perkotaan untuk memprediksi ketenangan yang dipersepsikan dari lokasi-lokasi. Indeks semacam itu dapat menginformasikan keputusan tentang di mana harus melestarikan atau meningkatkan area tenang, atau di mana intervensi akustik paling diperlukan.

Penelitian *urban soundscape* juga semakin menggabungkan interaksi audio-visual. Orang-orang mengalami lingkungan secara multimodal, dan aspek visual serta akustik berinteraksi dalam membentuk persepsi keseluruhan. Kehadiran elemen visual alami seperti pohon, air, dan langit dapat meningkatkan persepsi positif terhadap lingkungan akustik, sementara visual industri yang tidak menarik dapat memperkuat gangguan dari kebisingan. Studi kasus dari berbagai kota Eropa menunjukkan bahwa integrasi desain visual dan akustik menghasilkan ruang publik yang lebih berkualitas (Kang, 2007).

### 1.4.2 Environmental Soundscape

Di luar konteks perkotaan, konsep dan alat *soundscape* diaplikasikan secara luas dalam pengaturan lingkungan untuk penilaian, pemantauan, dan pengelolaan ekosistem alami dan semi-alami.

**Pemantauan ekologis** adalah salah satu area yang paling aktif. Metode tradisional penilaian keanekaragaman hayati seperti survei visual, penangkapan burung dengan jaring kabut, atau perangkap kamera memerlukan tenaga kerja intensif, memerlukan keahlian khusus, dan dapat mengganggu satwa liar. *Passive Acoustic Monitoring* (PAM), di mana unit perekaman otonom dipasang untuk periode yang panjang guna menangkap *soundscape*, menawarkan pendekatan komplementer yang non-invasif, dapat diskalakan, dan dapat mencakup cakupan spasiotemporal yang luas (Gibb et al., 2019).

Data akustik dari PAM dianalisis menggunakan berbagai teknik. Indeks akustik yang akan dibahas secara detail di Bab 4 memberikan ringkasan otomatis dan kuantitatif dari kompleksitas, keragaman, dan properti lain dari *soundscape* yang berkorelasi dengan metrik ekologis seperti kekayaan spesies atau integritas ekosistem. Algoritma deteksi spesies yang semakin didukung oleh pembelajaran mesin dapat secara otomatis mengidentifikasi vokalisasi dari spesies target, memungkinkan pemantauan spesies langka, terancam punah, atau invasif tanpa kehadiran manusia yang berkelanjutan (Stowell et al., 2019).

Penilaian habitat melalui analisis *soundscape* memungkinkan evaluasi kualitas dan kesesuaian habitat. Habitat yang berbeda memiliki *soundscape* yang karakteristik. Hutan hujan primer akan memiliki *biophony* yang kaya dan berlapis dengan keragaman tinggi dari spesies burung dan serangga, sementara hutan sekunder yang terdegradasi atau perkebunan monokultur akan memiliki *soundscape* yang miskin dengan keragaman lebih rendah dan dominasi lebih tinggi dari suara antropogenik atau spesies generalis. *Soundscape* karena itu menyediakan proksi yang cepat dan hemat biaya untuk kualitas habitat (Fuller et al., 2015).

Efektivitas konservasi dapat dipantau melalui studi *soundscape* longitudinal. Proyek-proyek restorasi seperti reboisasi, restorasi lahan basah, atau reintroduksi satwa liar seharusnya menghasilkan perubahan dalam *soundscape* seiring ekosistem pulih. Pelacakan indeks akustik atau suara spesifik spesies dari waktu ke waktu memberikan umpan balik tentang apakah intervensi konservasi berhasil (Pijanowski et al., 2011; Sueur et al., 2008).

Penilaian dampak dari aktivitas manusia seperti penebangan, pertambangan, pembangunan jalan, atau pariwisata dapat dikuantifikasi melalui analisis *soundscape*. Introduksi atau intensifikasi kebisingan antropogenik di area yang sebelumnya tenang dapat memiliki efek kaskade pada satwa liar, mempengaruhi perilaku, distribusi, keberhasilan reproduksi, dan dinamika predator-mangsa. Data *soundscape* dasar sebelum pembangunan, diikuti dengan pemantauan selama dan setelahnya, memberikan bukti untuk penilaian dampak lingkungan (Francis & Barber, 2013).

*Soundscape* laut semakin diakui penting untuk memahami ekosistem akuatik. Samudra, danau, dan sungai memiliki *soundscape* yang kaya yang terdiri dari suara biologis seperti mamalia laut, ikan, dan udang snapping, suara fisik seperti gelombang, es, dan hujan, serta suara antropogenik dari pelayaran, sonar, dan konstruksi. Hewan laut sangat bergantung pada isyarat akustik untuk navigasi, komunikasi, mencari makan, dan menghindari predator. Kebisingan antropogenik dalam lingkungan laut, terutama dari pelayaran yang meningkat secara dramatis dengan globalisasi, kini tersebar luas dan dapat mengganggu fungsi akustik kritis ini. Penelitian *soundscape* laut bertujuan untuk memahami dampak-dampak ini dan menginformasikan strategi mitigasi (Erbe et al., 2016; Staaterman et al., 2014).

Dampak perubahan iklim dapat termanifestasi dalam perubahan *soundscape*. Pergeseran dalam fenologi seperti waktu peristiwa musiman yang meliputi migrasi burung atau reproduksi, pergeseran jangkauan spesies, atau perubahan dalam komposisi komunitas semuanya memiliki tanda tangan akustik. Pemantauan *soundscape* jangka panjang menyediakan aliran data unik untuk mendeteksi dan memahami perubahan tersebut (Farina, 2014; Pijanowski et al., 2011).

### 1.4.3 Indoor Soundscape

Lingkungan dalam ruangan seperti rumah, kantor, sekolah, rumah sakit, dan bangunan publik adalah tempat di mana orang menghabiskan sebagian besar waktu mereka, diperkirakan lebih dari 90% untuk rata-rata orang di negara maju. Kualitas akustik dari ruang-ruang ini sangat mempengaruhi kenyamanan, kesehatan, produktivitas, dan kesejahteraan.

Akustik tempat kerja adalah area dengan penelitian dan minat praktis yang substansial. Kantor dengan rencana terbuka (*open-plan offices*), yang telah menjadi lazim dalam tempat kerja modern karena efisiensi biaya dan manfaat yang dipersepsikan untuk kolaborasi, seringkali menderita kondisi akustik yang buruk. Pembicaraan dari rekan kerja, telepon berdering, pengetikan keyboard, dan sistem HVAC menciptakan *soundscape* yang dapat sangat mengganggu konsentrasi, mengurangi produktivitas, dan meningkatkan stres (Kaarlela-Tuomaala et al., 2009).

Pendekatan *soundscape* dalam akustik tempat kerja melampaui sekadar mengukur tingkat suara untuk mempertimbangkan kualitas dan kesesuaian suara. Suara tertentu seperti pembicaraan yang dapat dimengerti dari rekan kerja lebih mengganggu daripada yang lain seperti musik latar yang lembut atau suara alam pada tingkat desibel yang sama. Desain spasial seperti zona akustik, ruang tenang, dan material penyerap suara, manajemen temporal seperti jam tenang dan kebijakan tentang panggilan telepon atau rapat, serta introduksi sistem penutup suara (*sound masking*) atau *soundscape* alam dapat meningkatkan kenyamanan akustik tanpa harus menghilangkan semua suara (Haapakangas et al., 2018).

Fasilitas kesehatan memiliki tantangan dan persyaratan akustik yang unik. Rumah sakit adalah lingkungan yang secara kronis berisik, dengan tingkat kebisingan sering melebihi rekomendasi WHO untuk ruang pasien. Sumber kebisingan termasuk alarm peralatan medis, percakapan staf, langkah kaki, kereta dorong, pengumuman overhead, dan sistem HVAC. Kebisingan di rumah sakit bukan sekadar gangguan tetapi terkait dengan hasil kesehatan negatif untuk pasien seperti pemulihan yang tertunda, peningkatan persepsi rasa sakit, gangguan tidur, peningkatan hormon stres, dan efek kardiovaskular, serta untuk staf seperti stres, kelelahan, dan kesalahan komunikasi (Busch-Vishniac et al., 2005; Hsu et al., 2012).

Intervensi *soundscape* dalam pengaturan kesehatan mencakup modifikasi arsitektural seperti ruang pasien tunggal dan material penyerap suara, perubahan operasional seperti meminimalkan pengumuman overhead, mengelompokkan aktivitas perawatan untuk mengurangi gangguan, dan jam tenang, serta introduksi suara terapeutik. Terapi musik dan *soundscape* alam telah terbukti mengurangi kecemasan, meningkatkan manajemen nyeri, dan mempromosikan penyembuhan (Diette et al., 2003; Nilsson, 2008).

Lingkungan pendidikan sangat dibentuk oleh akustik. Akustik kelas yang buruk yang disebabkan oleh kebisingan berlebihan dari luar seperti lalu lintas atau area bermain, penyerapan suara yang tidak memadai yang mengakibatkan waktu gema (*reverberation time*) yang panjang dalam ruangan dengan permukaan keras, atau kejelasan ucapan yang tidak memadai dapat mengganggu pembelajaran, terutama untuk anak-anak muda, penutur non-asli, dan mereka yang memiliki gangguan pendengaran. Standar seperti ANSI/ASA S12.60 menentukan kriteria akustik untuk ruang kelas untuk memastikan kondisi optimal untuk pengajaran dan pembelajaran (Shield & Dockrell, 2008).

*Soundscape* residensial sangat personal dan kontekstual. Rumah adalah ruang untuk istirahat, relaksasi, interaksi sosial, dan berbagai aktivitas yang masing-masing memiliki persyaratan akustik yang berbeda. Intrusi kebisingan eksternal dari lalu lintas, tetangga, atau aktivitas komersial merupakan sumber utama ketidakpuasan dan keluhan residensial. Akustik internal seperti gema, insulasi suara antar ruangan, dan kebisingan dari peralatan juga penting. Pertimbangan *soundscape* dalam desain residensial mencakup pemilihan lokasi, orientasi bangunan untuk meminimalkan paparan kebisingan, desain jendela dan fasad, insulasi suara, dan akustik ruangan. Semakin banyak, suara positif seperti pemandangan atau suara dari alam dan fitur air di halaman dalam digabungkan untuk meningkatkan *soundscape* residensial (Gidlöf-Gunnarsson & Öhrström, 2007).

Ruang ritel dan perhotelan secara strategis menggunakan *soundscape* untuk mempengaruhi perilaku dan pengalaman pelanggan. Musik latar dipilih dengan hati-hati untuk mencocokkan identitas merek, mendorong perilaku yang diinginkan seperti musik yang menenangkan di spa, musik energik di gym, atau musik dengan tempo sedang di restoran untuk menyeimbangkan perputaran dengan kenikmatan, dan menutupi suara yang tidak diinginkan. Kenyamanan akustik di restoran yang memungkinkan percakapan tanpa kebisingan latar yang berlebihan atau ruang yang terlalu bergema penting untuk kepuasan pelanggan (Meng & Kang, 2016).

### 1.4.4 Soundscape Ecology

*Soundscape ecology*, sebagai subdisiplin yang berbeda, menerapkan prinsip-prinsip ekologi untuk memahami peran suara dalam ekosistem. Di luar pemantauan atau penilaian sederhana, *soundscape ecology* berusaha memahami proses dan hubungan ekologis fundamental yang dimediasi melalui suara.

Jaringan komunikasi hewan yang berfungsi pada tingkat populasi dan komunitas dapat dipelajari melalui analisis *soundscape*. Bagaimana beberapa spesies mengoordinasikan aktivitas akustik mereka dalam lingkungan bersama? Aturan apa yang mengatur pergantian giliran atau vokalisasi simultan? Bagaimana individu mengenali dan merespons anggota spesies yang sama versus spesies yang berbeda dalam lingkungan yang kompleks secara akustik? Rekaman *soundscape* menyediakan data untuk menjawab pertanyaan-pertanyaan ini (Farina, 2014).

Dinamika predator-mangsa memiliki dimensi akustik. Hewan mangsa dapat menguping vokalisasi predator untuk menilai risiko. Predator dapat menggunakan isyarat akustik untuk menemukan mangsa. *Soundscape* ambien itu sendiri seperti angin atau kebisingan air dapat mempengaruhi deteksi suara, mempengaruhi strategi berburu atau perilaku kewaspadaan. Beberapa hewan mungkin menyesuaikan waktu aktivitas vokal mereka untuk periode ketika suara lingkungan seperti angin atau paduan suara serangga memberikan penyamaran, mengurangi risiko dari predator yang menguping, sebuah konsep yang dikenal sebagai *acoustic crypsis* atau penyembunyian akustik (Ratcliffe et al., 2013).

Teritorialitas dan penggunaan ruang sering dimediasi secara akustik. Banyak hewan menggunakan vokalisasi untuk mengiklankan kepemilikan wilayah dan menghalangi penyusup. Rekaman *soundscape* dapat mengungkapkan struktur spasial populasi seperti di mana individu berada dan bagaimana wilayah didistribusikan, serta dinamika temporal dari perilaku teritorial. Untuk spesies yang memiliki jangkauan luas atau nokturnal yang sulit diamati secara visual, metode akustik mungkin merupakan satu-satunya cara praktis untuk mempelajari pola penggunaan ruang (Mennill et al., 2006).

Layanan ekosistem yang disediakan oleh *soundscape* semakin diakui. *Soundscape* yang sehat dan beragam dapat melayani fungsi pendidikan seperti pembelajaran tentang alam dan peningkatan kesadaran tentang keanekaragaman hayati, fungsi budaya seperti inspirasi untuk seni dan signifikansi spiritual, serta fungsi psikologis seperti pengurangan stres dan restorasi. Pelestarian ketenangan alami dan *soundscape* yang kaya akan keanekaragaman hayati karena itu memiliki nilai di luar pertimbangan ekologis langsung (Pijanowski et al., 2011).

Konektivitas akustik antara patch habitat adalah konsep yang muncul. Sama seperti konektivitas lanskap berupa jalur fisik untuk pergerakan yang penting untuk populasi, konektivitas akustik yaitu kemampuan suara untuk merambat antara lokasi dapat memfasilitasi komunikasi, koordinasi, atau kesadaran tentang peristiwa yang jauh. Fragmentasi habitat oleh jalan atau pembangunan tidak hanya menciptakan penghalang fisik tetapi juga penghalang akustik melalui kebisingan yang diperkenalkan, yang berpotensi mengganggu hubungan akustik (Francis & Barber, 2013).

Sinyal bioakustik sebagai indikator kondisi lingkungan telah dieksplorasi secara luas. Banyak hewan menyesuaikan vokalisasi mereka sebagai respons terhadap faktor lingkungan seperti suhu, kelembaban, atau tingkat cahaya. Fenologi aktivitas panggilan seperti kapan dalam tahun spesies tertentu mulai atau berhenti memanggil dapat berfungsi sebagai indikator biologis dari perubahan iklim atau musiman. Arsip *soundscape*, jika dipelihara secara konsisten selama bertahun-tahun atau dekade, dengan demikian menyediakan kumpulan data yang berharga untuk mendeteksi perubahan lingkungan (Sueur et al., 2008).

### 1.4.5 Cultural Soundscape

*Soundscape* bukan hanya fenomena fisik atau ekologis, tetapi juga tertanam dalam budaya, sejarah, dan kehidupan sosial. *Soundscape* budaya adalah dimensi yang mengakui peran simbolis, afektif, dan pembentuk identitas dari suara dalam komunitas manusia.

*Soundmark*, sebagaimana didefinisikan oleh Schafer, adalah suara yang secara unik mengidentifikasi tempat atau komunitas, setara dengan penanda visual (*landmark*). Ini bisa berupa suara alami seperti spesies burung yang endemik di suatu wilayah atau buatan manusia seperti lonceng gereja, suara pasar, atau musik tradisional. *Soundmark* berkontribusi pada rasa tempat dan identitas budaya. Dokumentasi dan pelestarian *soundmark* adalah bentuk dari pelestarian warisan budaya tak benda (Schafer, 1977).

Warisan akustik mencakup *soundscape* tradisional yang terkait dengan budaya atau periode historis tertentu. Ini mencakup suara dari mata pencaharian tradisional seperti pertanian, perikanan, dan kerajinan, festival dan upacara, tradisi musik, bahasa dan dialek, serta suara sehari-hari dari kehidupan komunitas. Ketika masyarakat mengalami perubahan yang cepat, *soundscape* tradisional sering memudar, digantikan oleh suara yang global dan termediasi teknologi. Upaya untuk mendokumentasikan dan melestarikan *soundscape* ini melalui rekaman dan arsip penting untuk memori dan kontinuitas budaya (Bijsterveld & van Dijck, 2009).

Pariwisata *soundscape* atau pariwisata akustik adalah bentuk pariwisata budaya yang muncul di mana wisatawan mencari pengalaman pendengaran yang khas. Ini mungkin termasuk mengunjungi lokasi yang terkenal dengan *soundscape* alami seperti paduan suara fajar di hutan hujan atau nyanyian paus, menghadiri acara musik atau upacara tradisional, atau mengalami *soundscape* perkotaan dengan karakter unik seperti pasar, festival, atau praktik keagamaan. Beberapa destinasi mulai mempromosikan diri mereka melalui *soundscape* mereka, mengakui ini sebagai aset yang khas (Atkinson, 2007).

Suara dan keterikatan tempat memberikan kontribusi yang kuat pada rasa tempat dan keterikatan emosional pada lokasi. Suara yang familiar, baik dari lingkungan masa kecil seseorang, dari peristiwa kehidupan yang signifikan, atau dari tempat yang dicintai, membangkitkan kenangan dan emosi yang kuat. Perubahan dalam *soundscape* seperti hilangnya suara tertentu atau introduksi kebisingan baru dapat dialami sebagai kehilangan dan dapat mempengaruhi hubungan orang dengan tempat. Proyek *soundscape* berbasis komunitas yang melibatkan penduduk dalam mendokumentasikan, mengevaluasi, dan membayangkan *soundscape* dari lingkungan mereka dapat memperkuat keterikatan tempat dan kohesi komunitas (Adams et al., 2006).

Dimensi keadilan sosial dari *soundscape* semakin diakui. Polusi kebisingan tidak didistribusikan secara merata. Lingkungan berpenghasilan rendah sering menderita secara tidak proporsional dari paparan kebisingan karena kedekatan dengan jalan raya, area industri, atau bandara, dikombinasikan dengan lebih sedikit sumber daya untuk insulasi suara atau akses ke ruang hijau yang tenang. Ketidakadilan lingkungan ini memiliki implikasi kesehatan dan berkontribusi pada disparitas kualitas hidup. Pendekatan *soundscape*, dengan fokus pada peningkatan kualitas daripada sekadar mengurangi kebisingan, menawarkan kerangka kerja untuk lingkungan akustik yang lebih adil (Casey et al., 2017).

---

Bab ini telah membangun pemahaman fundamental tentang *soundscape* sebagai konsep multidimensi yang mengintegrasikan dimensi fisik, perseptual, ekologis, dan budaya dari suara. Kita telah menelusuri evolusinya dari ide artistik menjadi kerangka kerja ilmiah, menguraikannya menjadi komponen-komponen penyusunnya, dan mengeksplorasi aplikasinya yang beragam dalam perencanaan kota, manajemen lingkungan, desain interior, ekologi, dan budaya.

Fondasi ini mempersiapkan kita untuk bab-bab berikutnya, di mana kita akan menyelami aspek teknis dari analisis *soundscape*: bagaimana merekam *soundscape* dengan ketelitian dan representativitas (Bab 2), bagaimana memproses sinyal audio untuk mengekstrak informasi yang bermakna (Bab 3), bagaimana mengkarakterisasi *soundscape* menggunakan indeks akustik objektif (Bab 4) dan metrik perseptual subjektif (Bab 5), bagaimana melakukan eksperimen perseptual yang tepat (Bab 6), bagaimana menganalisis data yang dihasilkan menggunakan metode statistik dan pembelajaran mesin (Bab 7), dan akhirnya, bagaimana mengintegrasikan semua elemen ini dalam alur kerja lengkap melalui studi kasus (Bab 8).

---

---

# Bab 2: Recording dan Akuisisi Data

Merekam *soundscape* adalah langkah pertama dan fundamental dalam analisis *soundscape*. Berbeda dengan perekaman musik di studio yang terkontrol, merekam *soundscape* membawa kita ke dunia yang dinamis, tidak dapat diprediksi, dan penuh dengan tantangan teknis. Bayangkan seorang peneliti yang berdiri di tengah hutan hujan pada dini hari, dengan peralatan rekaman yang harus menangkap tidak hanya kicauan burung yang jelas, tetapi juga desir angin melalui kanopi, suara serangga yang halus, bahkan mungkin panggilan primata yang jauh. Atau seorang perencana kota yang ingin memahami karakter akustik dari sebuah plaza publik sepanjang hari, dari keheningan pagi hingga hiruk-pikuk siang hari dan ketenangan malam. Setiap konteks ini memerlukan pertimbangan yang cermat tentang peralatan apa yang digunakan, bagaimana menempatkannya, kapan merekam, dan bagaimana memastikan bahwa rekaman yang dihasilkan benar-benar representatif dari *soundscape* yang ingin dipahami.

Bab ini akan memandu Anda melalui aspek-aspek teknis dan metodologis dari perekaman *soundscape*. Kita akan mulai dengan memahami prinsip-prinsip dasar yang membedakan *field recording* untuk *soundscape* dari jenis perekaman lainnya, kemudian menyelami detail tentang perangkat keras yang tersedia mulai dari mikrofon hingga sistem perekaman lengkap, mengeksplorasi teknologi perekaman spasial yang semakin penting, dan akhirnya membahas protokol praktis untuk memastikan bahwa data yang dikumpulkan berkualitas tinggi, terdokumentasi dengan baik, dan dapat digunakan untuk analisis yang rigorous. Dengan fondasi yang kuat dalam aspek-aspek praktis ini, Anda akan siap untuk mengumpulkan data *soundscape* yang dapat diandalkan, baik untuk proyek penelitian akademis, aplikasi profesional dalam desain akustik, atau inisiatif konservasi ekologi.

## 2.1 Prinsip Recording Soundscape

### 2.1.1 Perbedaan dengan Studio Recording

Untuk memahami apa yang membuat perekaman *soundscape* unik, berguna untuk mengontraskannya dengan perekaman studio yang mungkin lebih familiar bagi banyak orang. Dalam perekaman musik atau produksi audio di studio, lingkungan dirancang untuk kontrol maksimal. Ruang dirawat secara akustik dengan material penyerap dan difusor untuk meminimalkan pantulan yang tidak diinginkan dan menciptakan respons frekuensi yang datar. Tingkat kebisingan latar belakang (*noise floor*) dijaga serendah mungkin, seringkali di bawah 20-25 dB SPL. Sumber suara, baik itu musisi atau speaker, ditempatkan pada posisi yang dioptimalkan relatif terhadap mikrofon. Kondisi pencahayaan, suhu, dan kelembaban diatur untuk kenyamanan dan konsistensi. Durasi rekaman dikontrol dengan ketat, seringkali terdiri dari banyak *take* pendek yang kemudian diedit dan disusun. Tujuan utamanya adalah menangkap sinyal audio dengan *signal-to-noise ratio* (SNR) setinggi mungkin, dengan distorsi minimal, dan dengan karakteristik spasial yang dapat diprediksi dan dimanipulasi dalam pasca-produksi.

Perekaman *soundscape*, sebaliknya, terjadi dalam kondisi yang pada dasarnya tidak terkontrol dan tidak dapat diprediksi. Kita merekam di lapangan (*field recording*), di mana "ruang" adalah lingkungan terbuka atau semi-terbuka yang dapat berupa taman kota, hutan alami, jalan perkotaan yang sibuk, atau interior bangunan publik. **Variabilitas lingkungan** adalah norma, bukan pengecualian. Kondisi cuaca dapat berubah tanpa pemberitahuan, dengan angin yang tiba-tiba meningkat, hujan yang datang, atau perubahan suhu dan kelembaban yang mempengaruhi propagasi suara dan bahkan perilaku sumber biologis. Tingkat kebisingan latar belakang tidak dapat dikendalikan dan dapat sangat bervariasi, dari relatif tenang di area terpencil hingga sangat tinggi di lingkungan urban. Sumber suara tidak diatur atau diarahkan, tetapi merupakan bagian organik dari lingkungan yang bergerak, muncul, dan menghilang secara dinamis.

**Durasi perekaman** untuk *soundscape* juga sangat berbeda. Sementara sesi studio mungkin menghasilkan beberapa menit atau jam rekaman yang diedit dengan hati-hati, perekaman *soundscape* seringkali mencakup durasi yang jauh lebih panjang, dari beberapa jam hingga hari, minggu, atau bahkan bulan secara kontinyu. Ini karena *soundscape* bersifat inherently temporal, dengan pola yang berubah sepanjang hari (*diel patterns*), antar hari, dan antar musim. Untuk benar-benar memahami karakter akustik dari suatu lokasi, kita perlu menangkap variabilitas temporal ini. *Autonomous recording units* (ARUs) yang dapat beroperasi tanpa pengawasan untuk periode yang panjang telah merevolusi *soundscape ecology* dan monitoring dengan memungkinkan *temporal sampling* yang ekstensif yang sebelumnya tidak praktis (Gibb et al., 2019).

**Konteks spasial** juga fundamental dalam perekaman *soundscape* dengan cara yang berbeda dari studio. Dalam studio, kita seringkali berusaha untuk mengisolasi sumber suara dari konteks spasialnya, atau menciptakan konteks artificial melalui *reverb* dan efek spasial dalam pasca-produksi. Dalam perekaman *soundscape*, konteks spasial adalah bagian integral dari apa yang kita coba tangkap. Pertanyaan seperti, dari mana suara-suara ini berasal? Bagaimana mereka berinteraksi dengan topografi, vegetasi, atau bangunan? Bagaimana *soundscape* berbeda di lokasi yang berbeda dalam area yang sama? Ini mengharuskan pertimbangan yang cermat tentang penempatan mikrofon, jumlah dan konfigurasi mikrofon (untuk perekaman spasial), dan seringkali deployment dari multiple *recording points* untuk mendapatkan cakupan spasial yang memadai.

Akhirnya, **tujuan** dari perekaman berbeda secara fundamental. Studio recording bertujuan untuk menangkap atau menciptakan artefak sonic tertentu yang estetis atau fungsional, seperti album musik, podcast, atau efek suara. *Soundscape recording* bertujuan untuk dokumentasi, analisis, dan pemahaman fenomena ekologis, psikologis, atau sosial. Rekaman adalah data, bukan produk akhir. Mereka akan dianalisis menggunakan metode kuantitatif untuk mengekstrak metrik akustik, dibandingkan antar lokasi atau waktu, atau digunakan sebagai stimuli dalam studi perseptual. Ini berarti bahwa persyaratan untuk *fidelity* (ketelitian reproduksi), *consistency* (konsistensi antar rekaman), dan dokumentasi (*metadata*) berbeda dan dalam beberapa hal lebih ketat daripada untuk perekaman kreatif.

### 2.1.2 Tujuan Recording

Memahami dengan jelas mengapa kita merekam *soundscape* sangat penting karena hal ini akan menginformasikan keputusan tentang peralatan, lokasi, waktu, dan metodologi. Ada beberapa tujuan utama yang, meskipun seringkali tumpang tindih, memiliki implikasi yang berbeda untuk desain *recording protocol*.

**Dokumentasi** adalah tujuan yang paling dasar. Seperti fotografer mendokumentasikan lanskap visual atau biodiversitas melalui gambar, peneliti *soundscape* mendokumentasikan lanskap akustik melalui rekaman audio. Ini mungkin untuk tujuan arsip, menciptakan rekaman historis tentang bagaimana suatu tempat terdengar pada waktu tertentu. Mengingat perubahan lingkungan yang cepat, urbanisasi, dan hilangnya habitat alami, dokumentasi *soundscape* menjadi semakin penting sebagai bentuk warisan budaya dan ekologis. Proyek seperti *Soundscape of the World* oleh Schafer pada tahun 1970-an, atau yang lebih kontemporer seperti *World Listening Project*, adalah contoh dari upaya dokumentasi yang sistematis (Truax & Barrett, 2011). Untuk tujuan dokumentasi, kualitas audio yang tinggi, representativitas temporal dan spasial, dan metadata yang kaya sangat penting.

**Monitoring jangka panjang** adalah aplikasi yang semakin penting, terutama dalam ekologi dan manajemen lingkungan. Tujuannya adalah untuk mendeteksi perubahan dalam *soundscape* dari waktu ke waktu yang mungkin mengindikasikan perubahan dalam biodiversitas, kesehatan ekosistem, atau tekanan antropogenik. Misalnya, penurunan dalam kompleksitas atau keragaman akustik di suatu habitat hutan mungkin menandakan degradasi habitat, hilangnya spesies, atau peningkatan gangguan manusia. Monitoring jangka panjang memerlukan konsistensi metodologi, penggunaan lokasi perekaman yang tetap, jadwal temporal yang teratur, dan seringkali otomatisasi melalui ARUs. Proyek monitoring dapat berlangsung dari bulan hingga tahun atau bahkan dekade, menghasilkan dataset yang sangat besar yang memerlukan pendekatan analisis yang efisien, seperti penggunaan indeks akustik atau algoritma *machine learning* untuk deteksi otomatis (Wimmer et al., 2013; Burivalova et al., 2019).

**Evaluasi perseptual** melibatkan penggunaan rekaman *soundscape* sebagai stimuli dalam studi psikologi atau psiko-akustik untuk memahami bagaimana orang mempersepsikan dan merespons lingkungan akustik yang berbeda. Dalam konteks ini, rekaman harus mereproduksi pengalaman pendengaran dari lokasi senyata mungkin. Ini seringkali memerlukan teknik perekaman spasial seperti *binaural* atau *ambisonic* yang dapat merekonstruksi *spatial cues* (petunjuk spasial) yang penting untuk persepsi. Kualitas audio harus sangat tinggi untuk memastikan bahwa artefak perekaman atau reproduksi tidak memperkenalkan bias dalam respons perseptual. Kontrol atas level rekaman, spektrum frekuensi, dan dinamika juga penting untuk memastikan komparabilitas antar stimuli dalam desain eksperimental (Axelsson et al., 2010; ISO 12913-2, 2018).

**Ekstraksi metrik akustik** adalah tujuan di mana rekaman dianalisis secara komputasional untuk mengekstrak parameter kuantitatif yang mendeskripsikan *soundscape*. Ini mencakup metrik sederhana seperti tingkat tekanan suara (*sound pressure level*, SPL) yang terintegrasi waktu, hingga indeks kompleks yang mengukur keragaman spektral, kompleksitas temporal, atau distribusi energi antar band frekuensi (seperti ACI, ADI, NDSI yang akan kita bahas di Bab 4). Untuk tujuan ini, kalibrasi yang akurat dari sistem perekaman sangat penting jika pengukuran absolut diperlukan. Namun, untuk banyak indeks yang bersifat relatif atau berbasis pada struktur spektro-temporal daripada level absolut, konsistensi dan resolusi frekuensi-temporal yang memadai lebih penting daripada kalibrasi absolut (Sueur et al., 2014).

Penting untuk dicatat bahwa satu *recording session* atau *dataset* dapat melayani multiple tujuan. Rekaman yang awalnya dikumpulkan untuk monitoring ekologi jangka panjang dapat kemudian digunakan untuk ekstraksi metrik akustik, dibagikan untuk tujuan dokumentasi arsip, atau bahkan digunakan sebagai stimuli dalam studi perseptual. Namun, masing-masing tujuan ini menempatkan persyaratan yang berbeda pada metodologi, dan memahami prioritas di awal akan membantu dalam membuat keputusan yang tepat tentang trade-off yang tidak terhindarkan, seperti antara durasi perekaman dan kualitas audio, atau antara cakupan spasial dan resolusi temporal.

### 2.1.3 Pertimbangan Spasial dan Temporal

*Soundscape*, seperti lanskap visual, bersifat heterogen dalam ruang dan waktu. Suara yang kita dengar di satu titik dalam taman mungkin sangat berbeda dari yang kita dengar hanya beberapa puluh meter jauhnya karena perbedaan dalam vegetasi, topografi, atau kedekatan dengan sumber suara tertentu seperti jalan atau kolam. Demikian pula, *soundscape* pada pagi hari dapat sangat berbeda dari siang atau malam hari karena perbedaan dalam aktivitas biologis, antropogenik, dan kondisi atmosfer. Pertimbangan tentang **spatial sampling** (pengambilan sampel spasial) dan **temporal sampling** (pengambilan sampel temporal) karena itu fundamental untuk desain *recording protocol* yang baik.

**Spatial sampling** berkaitan dengan pertanyaan: di mana harus menempatkan mikrofon atau *recording points*, dan berapa banyak lokasi yang diperlukan? Ini sangat tergantung pada skala dan heterogenitas dari area yang diteliti serta tujuan penelitian. Untuk studi yang berfokus pada satu lokasi spesifik, seperti karakterisasi akustik dari satu taman atau plaza, satu atau beberapa *recording points* strategis mungkin cukup. Namun, untuk memahami variasi *soundscape* dalam lanskap yang lebih luas, seperti jaringan taman dalam kota atau gradien dari urban ke rural, *spatial sampling* yang lebih ekstensif diperlukan.

Beberapa pendekatan untuk *spatial sampling* dapat diambil. **Systematic sampling** menggunakan grid atau transek yang teratur, memastikan cakupan spasial yang konsisten dan memfasilitasi analisis spasial yang rigorous. **Stratified sampling** membagi area ke dalam strata berdasarkan karakteristik tertentu seperti tipe habitat, tingkat urbanisasi, atau jarak dari sumber kebisingan, kemudian menempatkan *recording points* dalam setiap stratum. **Targeted sampling** menempatkan *recorders* di lokasi yang dipilih berdasarkan pengetahuan *a priori* atau hipotesis spesifik, misalnya membandingkan *quiet areas* dengan *noisy areas*, atau lokasi dengan vegetasi rapat versus terbuka. Pendekatan yang dipilih akan tergantung pada pertanyaan penelitian, sumber daya yang tersedia, dan aksesibilitas lokasi (Farina, 2014).

Jumlah *recording points* adalah trade-off antara cakupan spasial dan intensitas temporal atau durasi di setiap lokasi. Dengan sumber daya terbatas (peralatan, waktu, penyimpanan data), meningkatkan jumlah lokasi berarti mengurangi durasi atau frekuensi perekaman di setiap lokasi. Simulasi dan studi pilot dapat membantu dalam menentukan desain sampling yang optimal. Dalam praktiknya, studi *soundscape ecology* menggunakan jumlah *recording points* yang sangat bervariasi, dari selusin dalam studi intensif lokal hingga ratusan dalam proyek monitoring lanskap yang luas (Burivalova et al., 2019).

**Temporal sampling** berkaitan dengan pertanyaan: kapan dan seberapa sering merekam? *Soundscape* menunjukkan pola temporal pada multiple *timescales*. Pada skala harian (*diel patterns*), aktivitas biologis seringkali menunjukkan puncak pada waktu tertentu, seperti *dawn chorus* burung atau aktivitas serangga nokturnal. Aktivitas antropogenik juga sangat bervariasi, dengan lalu lintas puncak pada jam sibuk (*rush hours*), konstruksi pada jam kerja, dan aktivitas rekreasi pada akhir pekan. Pada skala musiman, *breeding seasons* (musim kawin) untuk banyak spesies membawa peningkatan dramatis dalam vokalisasi. Migrasi mengubah komposisi komunitas vocal. Vegetasi berubah, mempengaruhi propagasi suara. Kondisi cuaca bervariasi antar musim, mempengaruhi aktivitas biologis dan karakteristik akustik lingkungan (Farina, 2014; Pijanowski et al., 2011).

Dua pendekatan utama untuk *temporal sampling* adalah **continuous recording** (perekaman kontinyu) dan **intermittent recording** (perekaman terputus-putus). *Continuous recording* menangkap setiap momen dari periode yang diminati, memberikan resolusi temporal maksimal dan memastikan bahwa tidak ada event yang terlewatkan. Ini ideal untuk dokumentasi lengkap atau ketika *timing* dari event tertentu tidak dapat diprediksi. Namun, ini menghasilkan dataset yang sangat besar yang dapat menantang untuk penyimpanan, manajemen, dan analisis. Sebagai contoh, perekaman kontinyu pada 48 kHz dengan 16-bit menghasilkan sekitar 345 MB per jam atau 8.3 GB per hari untuk rekaman mono, dan dua kali lipat untuk stereo.

*Intermittent recording*, di mana *recorder* diprogram untuk merekam pada interval tertentu, misalnya 1 menit setiap 10 menit, atau beberapa periode per hari pada waktu-waktu yang dipilih, mengurangi volume data secara substansial sambil masih menangkap pola temporal utama. Pendekatan ini memerlukan pertimbangan tentang frekuensi sampling yang tepat. Jika interval terlalu panjang, event penting atau perubahan temporal yang cepat mungkin terlewatkan. Jika terlalu pendek, efisiensi penyimpanan tidak tercapai. *Duty cycle* (rasio waktu perekaman terhadap total waktu) yang umum berkisar dari 10% hingga 50%, disesuaikan berdasarkan tujuan penelitian dan kapasitas penyimpanan (Gibb et al., 2019).

**Representativeness** (representativitas) adalah prinsip overarching yang memandu keputusan *spatial* dan *temporal sampling*. Rekaman harus representatif dari *soundscape* yang ingin dipahami atau dikarakterisasi. Ini berarti bahwa variasi spasial dan temporal yang penting harus ditangkap dengan memadai. Jika tujuannya adalah untuk memahami *soundscape* tahunan dari suatu hutan, perekaman hanya selama satu bulan atau di satu musim tidak akan representatif. Jika tujuannya adalah membandingkan *soundscape* dari taman-taman urban, merekam hanya pada hari kerja akan melewatkan pola akhir pekan yang mungkin sangat berbeda.

Mencapai representativitas sempurna seringkali tidak praktis atau bahkan tidak mungkin karena keterbatasan sumber daya dan variabilitas inherent dalam *soundscapes*. Sebaliknya, tujuannya adalah untuk mencapai representativitas yang cukup (*adequate representativeness*) di mana sampel yang dikumpulkan menangkap fitur utama dan variasi dari fenomena yang diteliti. Ini memerlukan pengetahuan tentang sistem yang diteliti, studi pilot untuk memahami pola variasi, dan seringkali pendekatan iteratif di mana desain sampling dapat disesuaikan berdasarkan temuan awal.

## 2.2 Perangkat dan Setup

Memilih peralatan yang tepat untuk perekaman *soundscape* sangat penting untuk kesuksesan proyek. Pilihan ini harus diinformasikan oleh tujuan penelitian, kondisi lapangan yang diantisipasi, durasi deployment, anggaran, dan pertimbangan praktis lainnya. Bagian ini akan membahas komponen-komponen utama dari sistem perekaman *soundscape*, mulai dari mikrofon sebagai transduser fundamental, hingga sistem perekaman lengkap, format file dan spesifikasi teknis, dan teknologi perekaman spasial yang semakin canggih.

### 2.2.1 Microphone Types

Mikrofon adalah transduser yang mengubah tekanan suara (*sound pressure*) menjadi sinyal listrik. Karakteristik mikrofon sangat mempengaruhi kualitas dan sifat dari rekaman yang dihasilkan. Ada beberapa dimensi di mana mikrofon dapat dibedakan, termasuk pola polaritas (*polar pattern*), prinsip transduksi, rentang frekuensi, sensitivitas, dan faktor bentuk (*form factor*).

**Pola polaritas** mendeskripsikan sensitivitas directional dari mikrofon, yaitu bagaimana mikrofon merespons suara yang datang dari arah yang berbeda. **Omnidirectional microphones** (mikrofon omnidirectional) memiliki sensitivitas yang sama di semua arah (secara teori, respons spherical yang sempurna, meskipun dalam praktiknya ada sedikit variasi terutama pada frekuensi tinggi). Mikrofon omnidirectional sangat cocok untuk merekam *soundscape* umum di mana tujuannya adalah untuk menangkap semua suara di lingkungan tanpa bias directional. Mereka merekam lingkungan akustik secara merata dari semua arah, yang umumnya diinginkan dalam *soundscape ecology* dan monitoring lingkungan (Merchant et al., 2015).

**Directional microphones** (mikrofon directional), di sisi lain, lebih sensitif terhadap suara dari arah tertentu. Pola polar yang paling umum adalah **cardioid** (berbentuk hati), yang paling sensitif terhadap suara dari depan dan menolak suara dari belakang. Variasi termasuk **supercardioid** dan **hypercardioid** yang memiliki lobus depan yang lebih sempit dan beberapa sensitivitas belakang. **Shotgun microphones** (mikrofon shotgun) adalah jenis hypercardioid ekstrem dengan direktivitas yang sangat tinggi, berguna untuk mengisolasi sumber suara tertentu dari kebisingan latar belakang atau untuk merekam sumber yang jauh. Dalam konteks *soundscape*, mikrofon directional dapat berguna untuk merekam sumber suara spesifik (misalnya, vokalisasi burung tertentu) atau untuk mengurangi pengaruh dari sumber kebisingan yang tidak diinginkan yang berasal dari arah tertentu (Farina, 2014).

**Prinsip transduksi** mengacu pada mekanisme fisik di mana mikrofon mengubah tekanan suara menjadi sinyal listrik. **Condenser microphones** (mikrofon kondensor), juga dikenal sebagai mikrofon kapasitif, menggunakan membran konduktif yang bergetar dalam respons terhadap tekanan suara, mengubah kapasitansi dalam *capsule* mikrofon dan menghasilkan sinyal listrik. Mikrofon kondensor umumnya menawarkan respons frekuensi yang sangat baik (lebar dan datar), sensitivitas tinggi, dan *transient response* (respons transien) yang cepat, menjadikannya pilihan yang sangat baik untuk perekaman berkualitas tinggi. Namun, mereka memerlukan daya (*phantom power* 48V atau baterai internal) dan dapat lebih rentan terhadap kelembaban dan kondisi lingkungan ekstrem dibandingkan jenis lainnya (Katz, 2007).

**Dynamic microphones** (mikrofon dinamis) menggunakan prinsip induksi elektromagnetik, di mana membran yang menempel pada *voice coil* bergerak dalam medan magnet, menginduksi arus listrik. Mikrofon dinamis umumnya lebih robust, tidak memerlukan daya eksternal, dan lebih toleran terhadap kondisi kasar dan level tekanan suara yang sangat tinggi. Namun, mereka biasanya memiliki sensitivitas yang lebih rendah dan respons frekuensi tinggi yang kurang bagus dibandingkan kondensor, membuatnya kurang ideal untuk perekaman *soundscape* yang memerlukan *fidelity* tinggi, terutama untuk menangkap detail frekuensi tinggi dari vokalisasi burung atau serangga. Meskipun demikian, dalam aplikasi tertentu di mana robustness adalah prioritas utama, mikrofon dinamis dapat menjadi pilihan yang pragmatis.

**Karakteristik frekuensi dan sensitivitas** adalah spesifikasi kunci. **Frequency response** (respons frekuensi) mendeskripsikan bagaimana sensitivitas mikrofon bervariasi dengan frekuensi. Idealnya untuk perekaman *soundscape* yang netral, kita menginginkan respons frekuensi yang datar (*flat frequency response*) di seluruh rentang yang relevan, biasanya 20 Hz hingga 20 kHz untuk aplikasi yang berfokus pada persepsi manusia, tetapi mungkin diperluas ke ultrasound (>20 kHz) untuk aplikasi seperti deteksi kelelawar atau serangga tertentu. Dalam praktiknya, sebagian besar mikrofon berkualitas baik memiliki respons yang relatif datar dalam rentang vokal manusia dan vokalisasi banyak hewan (sekitar 100 Hz hingga 15 kHz), dengan beberapa *roll-off* pada ekstrem frekuensi rendah dan tinggi.

**Sensitivity** (sensitivitas) mikrofon menunjukkan level output untuk level input tertentu, biasanya dinyatakan dalam mV/Pa (milivolt per Pascal) atau dBV/Pa (desibel relatif terhadap 1V per Pascal). Mikrofon dengan sensitivitas lebih tinggi akan menghasilkan sinyal output yang lebih kuat untuk level suara yang sama, yang dapat menguntungkan dalam situasi di mana sumber suara sangat lemah atau jauh. Namun, sensitivitas yang sangat tinggi juga dapat membuat mikrofon lebih rentan terhadap overload atau distorsi dari suara yang sangat keras. Dalam perekaman *soundscape*, di mana kita sering berhadapan dengan rentang dinamis yang luas, dari suara sangat lemah (seperti serangga yang jauh) hingga sangat keras (seperti petir atau lalu lintas dekat), mikrofon dengan sensitivitas sedang dan *dynamic range* yang baik seringkali optimal (Merchant et al., 2015).

**Form factors** khusus layak disebutkan. **Lavalier microphones** (mikrofon lavalier atau clip-on) adalah mikrofon kecil yang dirancang untuk diklip pada pakaian, umumnya digunakan untuk merekam suara manusia dalam broadcast atau produksi video. Dalam konteks *soundscape*, mereka jarang digunakan untuk perekaman lingkungan tetapi dapat digunakan dalam studi di mana narasi atau komentar peneliti perlu direkam bersamaan dengan *soundscape*. **Array microphones** (array mikrofon) terdiri dari multiple *capsules* mikrofon yang disusun dalam konfigurasi geometris tertentu (linear, planar, spherical) untuk memungkinkan perekaman spasial, lokalisasi sumber suara, atau *beamforming*. Array ini akan kita bahas lebih detail dalam konteks perekaman *ambisonic*.

### 2.2.2 Recording Systems

Mikrofon harus dihubungkan ke sistem perekaman yang mengubah sinyal listrik analog menjadi data digital, menyimpannya, dan menyediakan kontrol atas parameter perekaman. Ada berbagai jenis sistem perekaman yang sesuai untuk aplikasi *soundscape* yang berbeda.

**Portable recorders** (perekam portabel) adalah perangkat genggam atau dapat dibawa yang mengintegrasikan mikrofon (built-in atau eksternal via input XLR/jack), preamp, ADC (analog-to-digital converter), penyimpanan (memory card), dan kontrol perekaman dalam satu unit kompak. Perekam portabel seperti seri Zoom H-series (H4n, H5, H6), Tascam DR-series, atau Sound Devices MixPre-series sangat populer untuk *field recording* karena portabilitas, kemudahan penggunaan, dan kualitas audio yang baik. Mereka cocok untuk *recording sessions* yang attended (diawasi), di mana peneliti hadir untuk mengoperasikan peralatan, atau untuk deployment jangka pendek. Banyak model modern menawarkan fitur seperti perekaman multi-track, limiters dan *low-cut filters* yang dapat dikonfigurasi, phantom power untuk mikrofon kondensor, dan bahkan kemampuan untuk bertindak sebagai *audio interface* USB untuk komputer (Katz, 2007).

**Autonomous Recording Units (ARUs)** adalah perangkat yang dirancang khusus untuk deployment jangka panjang tanpa pengawasan (*unattended*) di lapangan. Mereka biasanya tahan cuaca (*weatherproof*), beroperasi dengan baterai untuk periode yang panjang (hari hingga bulan), dapat diprogram untuk jadwal perekaman tertentu (*duty cycles*, waktu mulai/berhenti, interval), dan menyimpan data pada memory card berkapasitas besar. ARUs telah merevolusi *soundscape ecology* dan monitoring biodiversitas dengan memungkinkan *spatially* dan *temporally extensive sampling* yang sebelumnya tidak praktis (Gibb et al., 2019).

Contoh ARUs yang populer termasuk **Wildlife Acoustics Song Meter** (SM2, SM3, SM4), **Audiomoth** (perangkat open-source yang sangat terjangkau), **Frontier Labs BAR-LT**, dan **Cornell Lab's Swift**. Setiap model memiliki trade-off dalam hal kualitas audio, konsumsi daya, kapasitas penyimpanan, programmability, dan harga. Audiomoth, misalnya, meskipun lebih rendah dalam kualitas audio dibandingkan Song Meter, sangat terjangkau (sekitar $60-80 per unit), memungkinkan deployment dalam jumlah besar untuk proyek dengan anggaran terbatas (Hill et al., 2018). Song Meters menawarkan kualitas audio yang superior, opsi konfigurasi yang lebih luas, dan kemampuan untuk stereo atau bahkan multi-channel recording, tetapi dengan harga yang jauh lebih tinggi (sekitar $500-1500 per unit).

**Smartphone-based systems** (sistem berbasis smartphone) memanfaatkan kemampuan audio yang semakin baik dari smartphone modern. Dengan aplikasi khusus, smartphone dapat digunakan sebagai perekam audio portabel, menawarkan keuntungan dari ketersediaan luas, biaya rendah, GPS terintegrasi untuk geolocation otomatis, dan konektivitas untuk remote monitoring atau upload data. Proyek *citizen science* seperti **Noise-Planet** atau aplikasi seperti **Audio Evolution Mobile** atau **Rode Reporter** memungkinkan rekaman berkualitas baik. Namun, kualitas mikrofon built-in smartphone bervariasi dan umumnya tidak sebanding dengan mikrofon eksternal berkualitas profesional. Untuk aplikasi yang memerlukan kualitas audio terbaik, smartphone lebih baik digunakan dengan mikrofon eksternal yang terhubung melalui adaptor (seperti iRig atau Shure MV88).

**Distributed sensor networks** (jaringan sensor terdistribusi) mewakili frontier dalam *soundscape monitoring*. Ini melibatkan deployment dari multiple ARUs atau *acoustic sensors* yang terhubung dalam jaringan, seringkali dengan kemampuan untuk transmisi data real-time atau near-real-time melalui komunikasi wireless (WiFi, cellular, LoRa). Sistem seperti ini dapat memberikan cakupan spasio-temporal yang sangat luas dan memungkinkan deteksi dan respons cepat terhadap event akustik tertentu (misalnya, deteksi chainsaw untuk anti-poaching, atau deteksi suara tertentu untuk *early warning systems*). Proyek seperti **ARBIMON** (Automated Remote Biodiversity Monitoring Network) atau **Rainforest Connection** menggunakan pendekatan ini untuk monitoring hutan tropis dalam skala besar (Aide et al., 2013).

### 2.2.3 Recording Formats dan Specifications

Setelah sinyal akustik ditangkap oleh mikrofon dan diubah menjadi sinyal listrik, ia harus didigitasi (di-*sampling* dan di-*quantize*) untuk disimpan dan diproses. Parameter digitisasi dan format file yang dipilih memiliki implikasi signifikan untuk kualitas audio, ukuran file, dan kompatibilitas dengan *software* analisis.

**Sample rate** (laju sampling) adalah jumlah sampel per detik yang diambil dari sinyal analog, diukur dalam Hertz (Hz) atau kilohertz (kHz). Menurut *Nyquist-Shannon sampling theorem*, untuk merekonstruksi sinyal dengan akurat, laju sampling harus setidaknya dua kali frekuensi tertinggi yang ada dalam sinyal. Untuk audio yang dimaksudkan untuk persepsi manusia (yang memiliki rentang pendengaran sekitar 20 Hz hingga 20 kHz), **44.1 kHz** adalah standar *de facto* yang diwarisi dari CD audio. Dengan laju sampling ini, frekuensi hingga sekitar 22 kHz dapat direkonstruksi dengan akurat, yang sedikit melebihi batas pendengaran manusia.

**48 kHz** adalah standar lain yang umum, terutama dalam produksi video profesional dan broadcasting. Untuk perekaman *soundscape* yang berfokus pada persepsi manusia atau sumber suara dalam rentang frekuensi audible, 44.1 atau 48 kHz umumnya memadai. Namun, untuk aplikasi yang memerlukan menangkap frekuensi ultrasound, seperti deteksi vokalisasi kelelawar (yang dapat mencapai 100 kHz atau lebih) atau beberapa serangga, laju sampling yang jauh lebih tinggi diperlukan. **96 kHz, 192 kHz, atau bahkan 250-500 kHz** digunakan dalam *bat detectors* atau *ultrasonic recorders* khusus (Russo & Voigt, 2016).

Penting untuk dicatat bahwa meningkatkan laju sampling secara linier meningkatkan ukuran file dan persyaratan penyimpanan. Perekaman pada 96 kHz akan menghasilkan file dua kali lebih besar daripada 48 kHz untuk durasi yang sama. Karena itu, pemilihan laju sampling harus seimbang antara kebutuhan untuk menangkap konten frekuensi yang relevan dan keterbatasan praktis penyimpanan dan processing.

**Bit depth** (kedalaman bit) menentukan resolusi amplitudo dalam digitisasi, yaitu berapa banyak level kuantisasi yang tersedia untuk merepresentasikan amplitudo sinyal. Bit depth yang lebih tinggi memberikan *dynamic range* yang lebih besar dan *noise floor* yang lebih rendah. **16-bit** adalah standar untuk CD audio, menyediakan *dynamic range* teoritis sekitar 96 dB, yang cukup untuk banyak aplikasi. **24-bit** menyediakan sekitar 144 dB *dynamic range*, yang sangat berguna untuk perekaman *soundscape* di mana kita mungkin ingin menangkap suara sangat lemah tanpa perlu setting *gain* yang sangat presisi. Dengan 24-bit, kita memiliki lebih banyak *headroom* untuk menghindari *clipping* dari transien keras sementara masih menangkap suara lemah dengan *noise floor* yang rendah (Katz, 2007).

Untuk sebagian besar perekaman *soundscape*, **24-bit/48 kHz** adalah kombinasi yang sangat baik yang menyeimbangkan kualitas audio tinggi dengan ukuran file yang dapat dikelola. Ini adalah pengaturan default yang direkomendasikan oleh banyak protokol *soundscape* dan digunakan secara luas dalam penelitian (Merchant et al., 2015; ISO 12913-2, 2018).

**File formats** (format file) menentukan bagaimana data audio digital disimpan. Format utama yang relevan adalah:

**WAV (Waveform Audio File Format)**: Format *uncompressed* yang menyimpan data audio sebagai *raw PCM* (Pulse Code Modulation). WAV files tidak mengalami kehilangan kualitas karena tidak ada kompresi *lossy*. Mereka adalah standar untuk perekaman berkualitas tinggi dan analisis ilmiah. Kekurangannya adalah ukuran file yang besar. Sebagai contoh, rekaman stereo 24-bit/48 kHz menghasilkan sekitar 35 MB per menit.

**FLAC (Free Lossless Audio Codec)**: Format *lossless compression* yang mengurangi ukuran file (biasanya 40-60% dari ukuran WAV) tanpa kehilangan informasi. FLAC sangat berguna untuk menghemat penyimpanan dan bandwidth saat mentransfer file, sementara masih mempertahankan kualitas audio yang identik dengan WAV. Banyak *software* analisis modern dapat membaca FLAC secara native.

**MP3 (MPEG-1 Audio Layer 3)**: Format *lossy compression* yang sangat mengurangi ukuran file (sering 10% atau kurang dari ukuran WAV) tetapi dengan kehilangan informasi. MP3 menggunakan model psiko-akustik untuk membuang komponen sinyal yang dianggap kurang perseptible oleh telinga manusia. Untuk perekaman *soundscape* yang akan dianalisis secara kuantitatif, terutama jika analisis melibatkan detail spektral halus atau frekuensi tinggi, MP3 **tidak direkomendasikan** karena artefak kompresi dapat mempengaruhi hasil analisis. Namun, untuk arsip tambahan, distribusi publik, atau dalam situasi di mana penyimpanan sangat terbatas, MP3 dengan *bitrate* tinggi (320 kbps) dapat diterima sebagai kompromi (Towsey et al., 2014).

**Storage considerations** (pertimbangan penyimpanan) menjadi signifikan untuk proyek *soundscape* jangka panjang. Perekaman kontinyu pada 48 kHz/24-bit stereo menghasilkan sekitar 50 GB per hari. ARU deployment untuk beberapa bulan dapat menghasilkan ratusan gigabytes hingga terabytes data per unit. Ini mengharuskan perencanaan yang cermat untuk kapasitas memory card, backup strategy, dan infrastruktur penyimpanan jangka panjang. Penggunaan FLAC compression, pengaturan *duty cycle* yang bijaksana, dan seleksi careful dari sample rate yang sesuai (misalnya, tidak menggunakan 96 kHz jika tidak diperlukan untuk konten frekuensi tinggi) dapat secara substansial mengurangi beban penyimpanan tanpa mengorbankan tujuan ilmiah proyek (Gibb et al., 2019).

### 2.2.4 Spatial Audio Recording Technologies

Sampai saat ini, kita telah membahas perekaman audio dengan fokus pada menangkap konten spektro-temporal dari *soundscape*. Namun, informasi spasial yaitu dari mana suara berasal dan bagaimana mereka didistribusikan dalam ruang adalah dimensi penting lain dari *soundscape* yang dapat mempengaruhi baik interpretasi ekologi maupun persepsi manusia. Teknologi perekaman spasial memungkinkan kita untuk menangkap dan mereproduksi *spatial cues* ini dengan berbagai tingkat ketelitian.

#### 2.2.4.1 Ambisonic Recording

*Ambisonics* adalah teknik perekaman dan reproduksi audio spasial yang menangkap *sound field* (medan suara) lengkap di sekitar satu titik, memungkinkan reproduksi dalam berbagai konfigurasi speaker atau rendering untuk headphone. Berbeda dengan teknik stereo atau surround konvensional yang berfokus pada channel-based encoding (encoding berbasis channel), *ambisonics* adalah *scene-based* (berbasis scene), menangkap representasi dari medan suara itu sendiri yang kemudian dapat di-*decode* untuk sistem reproduksi yang berbeda.

Format *ambisonic* paling dasar adalah **B-format** (*first-order ambisonics*, FOA), yang terdiri dari empat channel audio yang disebut W, X, Y, dan Z. Channel **W** adalah komponen omnidirectional yang menangkap tekanan suara total dari semua arah. Channel **X, Y, dan Z** adalah komponen bidirectional (figure-of-eight) yang menangkap gradien tekanan sepanjang tiga sumbu Cartesian (depan-belakang, kiri-kanan, atas-bawah). Bersama-sama, keempat channel ini menyediakan representasi lengkap dari medan suara spasial hingga first-order spherical harmonics (Daniel, 2001).

Untuk merekam B-format, mikrofon khusus yang disebut **Ambisonic microphones** atau **soundfield microphones** digunakan. Mikrofon ini mengintegrasikan beberapa *capsules* (biasanya empat untuk FOA) yang disusun dalam konfigurasi tetrahedral atau lainnya untuk menangkap komponen W, X, Y, Z secara simultan. Contoh termasuk **Core Sound TetraMic**, **Rode NT-SF1**, atau yang lebih high-end seperti **Sennheiser AMBEO VR Mic**. Rekaman B-format dapat kemudian di-*decode* untuk stereo, surround 5.1, atau bahkan rendering binaural untuk headphone, memberikan fleksibilitas yang sangat besar dalam pasca-produksi.

**Higher-order ambisonics (HOA)** memperluas prinsip ini ke orde yang lebih tinggi dari *spherical harmonics*, menyediakan resolusi spasial yang lebih baik. Second-order ambisonics memerlukan 9 channel, third-order 16 channel, dan seterusnya. Untuk merekam HOA, *microphone arrays* yang lebih kompleks dengan lebih banyak *capsules* (misalnya, arrays spherical dengan puluhan mikrofon) diperlukan. Peralatan seperti **em32 Eigenmike** (32 capsules) atau **Zylia ZM-1** (19 capsules) memungkinkan perekaman HOA berkualitas tinggi. HOA memberikan *imaging* spasial yang lebih presisi dan kemampuan untuk *beamforming* atau fokus pada arah tertentu dalam pasca-produksi (Zotter & Frank, 2019).

Dalam konteks *soundscape*, *ambisonic recording* memiliki beberapa keuntungan. Pertama, ia menangkap *spatial distribution* dari sumber suara, yang dapat informatif untuk analisis ekologi (misalnya, lokalisasi vokalisasi individual, pemahaman struktur spasial dari choruses). Kedua, untuk evaluasi perseptual, rekaman *ambisonic* dapat di-*render* untuk berbagai format reproduksi termasuk binaural, memberikan *spatial realism* yang tinggi yang penting untuk penilaian kualitas *soundscape*. Ketiga, representasi *scene-based* memungkinkan manipulasi spasial yang fleksibel dalam pasca-produksi, seperti rotasi medan suara atau ekstraksi sumber dari arah tertentu (Katz & Parseihian, 2012).

#### 2.2.4.2 Binaural Recording

*Binaural recording* adalah teknik untuk menangkap audio dengan cara yang mensimulasikan pendengaran manusia, menghasilkan rekaman yang, ketika diputar melalui headphone, menciptakan ilusi spasial tiga dimensi yang sangat realistic. Prinsip di balik binaural recording adalah mereplikasi *acoustic cues* yang digunakan oleh sistem pendengaran manusia untuk lokalisasi suara: *interaural time differences* (ITD, perbedaan waktu antar telinga), *interaural level differences* (ILD, perbedaan level antar telinga), dan *spectral cues* yang dihasilkan oleh interaksi suara dengan kepala, torso, dan terutama *pinna* (daun telinga).

Cara paling langsung untuk membuat rekaman *binaural* adalah menggunakan **dummy head** atau *artificial head*, yang merupakan replika kepala manusia dengan mikrofon ditempatkan di posisi kanal telinga. Dummy heads seperti **Neumann KU 100** atau **3Dio Free Space** memiliki struktur anatomis yang mensimulasikan kepala, torso, dan pinna manusia, sehingga suara yang tiba dari berbagai arah mengalami filterisasi spasial yang sama seperti yang akan dialami oleh manusia nyata. Rekaman yang dihasilkan, ketika diputar melalui headphone, memberikan pengalaman spasial yang sangat immersive dengan lokalisasi yang akurat dari arah horizontal dan vertikal serta sense of *externalization* (suara terdengar berasal dari luar kepala, bukan dari dalam kepala seperti stereo konvensional) (Møller et al., 1996).

Alternatif yang lebih portabel adalah **in-ear microphones** atau *binaural microphones*, yang berukuran kecil dan dapat dikenakan di telinga seseorang. Mikrofon ini, seperti **Soundman OKM** atau **Roland CS-10EM**, menangkap suara setelah melewati struktur telinga pengguna sendiri. Keuntungannya adalah portabilitas dan kemampuan untuk merekam dari perspektif pengguna yang sebenarnya bergerak dalam lingkungan. Kekurangannya adalah bahwa *Head-Related Transfer Function* (HRTF, fungsi transfer terkait kepala) yang direkam adalah spesifik untuk individu tersebut, dan mungkin tidak optimal untuk semua pendengar saat diputar ulang. Gerakan kepala atau suara yang dibuat oleh orang yang memakai mikrofon juga dapat terekam dan mengganggu (Hammershøi & Møller, 2002).

**HRTF considerations** (pertimbangan HRTF) penting dalam *binaural recording* dan reproduksi. HRTF mendeskripsikan bagaimana struktur anatomis individu (kepala, torso, pinna) memfilter suara yang datang dari arah tertentu sebelum mencapai gendang telinga. HRTF bersifat individual, bervariasi antar orang karena perbedaan anatomis. Ketika kita merekam dengan dummy head, kita menggunakan HRTF dari dummy head tersebut (yang biasanya dirancang untuk menjadi "rata-rata" dari populasi). Saat pendengar mendengarkan rekaman ini melalui headphone, jika HRTF mereka sendiri sangat berbeda dari yang ada dalam rekaman, lokalisasi mungkin kurang akurat atau *externalization* mungkin berkurang. Namun, untuk mayoritas pendengar, rekaman *binaural* dengan HRTF "generic" masih memberikan pengalaman spasial yang jauh superior dibandingkan stereo konvensional (Møller et al., 1996).

**Aplikasi untuk evaluasi perseptual**: *Binaural recording* sangat berharga dalam studi *soundscape* yang melibatkan evaluasi perseptual subjektif. Ketika peneliti ingin menilai bagaimana orang bereaksi terhadap *soundscape* yang berbeda, menggunakan rekaman *binaural* yang diputar melalui headphone berkualitas dapat memberikan pengalaman yang jauh lebih *ecologically valid* (valid secara ekologis) daripada stereo konvensional atau mono. Partisipan dapat merasakan *spatial richness* dan *immersiveness* dari *soundscape* yang mirip dengan berada di lokasi sebenarnya. Ini telah terbukti mempengaruhi penilaian perceptual; misalnya, *soundscape* dengan distribusi spasial yang kaya dinilai lebih positif daripada yang sama secara spektro-temporal tetapi dengan spatiality yang miskin (Kang & Zhang, 2010; Axelsson, 2015).

Namun, untuk analisis akustik kuantitatif, rekaman *binaural* memerlukan pertimbangan khusus. Karena rekaman sudah mengandung HRTF dan *spatial encoding*, metrik akustik standar yang dirancang untuk mono atau stereo mungkin tidak langsung applicable. Jika tujuan utama adalah ekstraksi metrik akustik daripada evaluasi perseptual, mikrofon omnidirectional tunggal atau stereo sederhana mungkin lebih sesuai.

#### 2.2.4.3 Stereo Techniques

*Stereo recording* adalah teknik yang paling luas digunakan untuk menangkap informasi spasial dasar, menggunakan dua mikrofon untuk menciptakan dua channel (kiri dan kanan) yang, ketika diputar melalui dua speaker atau headphone, memberikan sense of *width* (lebar) dan *localization* (lokalisasi) horizontal. Ada beberapa konfigurasi stereo klasik, masing-masing dengan karakteristik spasial yang berbeda.

**XY configuration** menggunakan dua mikrofon *directional* (biasanya cardioid) yang ditempatkan sedekat mungkin (ideally dengan *capsules* coincident atau bertepatan pada satu titik) tetapi diarahkan pada sudut, biasanya 90° hingga 135° satu sama lain. Keuntungan utama dari XY adalah bahwa ia time-coherent karena kedua mikrofon berada pada titik yang sama, ia tidak ada perbedaan waktu antar mikrofon (*no time delay*), hanya perbedaan level dan spektral. Ini berarti bahwa rekaman XY *mono-compatible*, yaitu ketika di-*sum* menjadi mono tidak ada *phase cancellation*. XY memberikan *imaging* yang jelas dengan lokalisasi yang baik, tetapi *width* stereo yang lebih sempit dibandingkan beberapa teknik lain. XY sangat cocok untuk merekam sumber yang relatif terfokus atau untuk situasi di mana *mono compatibility* penting (Bartlett & Bartlett, 2012).

**AB configuration** (juga dikenal sebagai *spaced pair*) menggunakan dua mikrofon *omnidirectional* yang dipisahkan oleh jarak tertentu, biasanya 20 cm hingga beberapa meter tergantung pada ukuran *sound stage* yang ingin ditangkap. Pemisahan spasial ini menciptakan baik *interaural time differences* (ITD) maupun *interaural level differences* (ILD), menghasilkan *sense of space* yang luas dan *ambience* yang kaya. AB dapat memberikan *width* stereo yang sangat lebar dan sense of *envelopment*. Namun, karena mikrofon terpisah, ada potensi untuk *phase issues* ketika di-*sum* ke mono, terutama jika spacing terlalu besar. AB sangat baik untuk menangkap *soundscapes* luas dengan banyak sumber terdistribusi, seperti hutan atau lingkungan urban terbuka (Bartlett & Bartlett, 2012).

**ORTF configuration** (dikembangkan oleh *Office de Radiodiffusion Télévision Française*) adalah kompromi antara XY dan AB. Ia menggunakan dua mikrofon cardioid dengan spacing 17 cm (kira-kira lebar kepala manusia) dan diangulasi 110° satu sama lain. ORTF menggabungkan *coincident-like imaging* dari XY dengan beberapa *spaciousness* dari AB, memberikan *stereophonic image* yang baik dengan *width* yang sedang dan *depth*. ORTF adalah konfigurasi yang sangat serbaguna dan populer untuk perekaman *field* umum (Williams, 2013).

**MS (Mid-Side) configuration** adalah teknik yang lebih kompleks tetapi sangat fleksibel yang menggunakan dua mikrofon: satu mikrofon *directional* (biasanya cardioid atau shotgun) diarahkan ke depan menangkap sinyal "Mid" (M), dan satu mikrofon *bidirectional* (figure-8) yang oriented sideways menangkap sinyal "Side" (S). Rekaman MS tidak langsung menghasilkan stereo L/R; sebaliknya, sinyal M dan S harus di-*decode* dalam pasca-produksi melalui *sum and difference* processing: L = M + S, R = M - S. Keuntungan besar dari MS adalah bahwa *stereo width* dapat dikontrol secara terus-menerus dalam pasca-produksi dengan mengubah rasio M terhadap S, dan rekaman MS inherently mono-compatible karena sinyal M sendiri adalah mono berkualitas tinggi. MS sangat berguna dalam situasi di mana kita tidak yakin berapa banyak *stereo width* yang diinginkan atau ketika kita mungkin ingin variasi dari narrow hingga wide dalam proyek yang sama (Streicher & Everest, 2006).

**Kelebihan dan keterbatasan**: Setiap teknik stereo memiliki *sweet spot* dalam hal aplikasi. XY memberikan *imaging* yang presisi dan mono compatibility, ideal untuk merekam sumber yang relatif terfokus. AB memberikan *spaciousness* dan *ambience*, cocok untuk *large soundscapes*. ORTF adalah all-rounder yang baik. MS memberikan fleksibilitas post-production terbesar. Tidak ada satu teknik yang "terbaik" untuk semua situasi; pilihan harus diinformasikan oleh karakteristik dari *soundscape* yang akan direkam, bagaimana rekaman akan digunakan (evaluasi perseptual vs ekstraksi metrik), dan preferensi estetik atau analitik dari peneliti (Williams, 2013).

Untuk analisis *soundscape ecology* yang kuantitatif, di mana tujuan utama adalah ekstraksi indeks akustik, konfigurasi stereo sederhana atau bahkan mono tunggal mungkin cukup, karena banyak indeks dihitung dari representasi spektro-temporal tanpa menggunakan informasi spasial. Namun, untuk studi yang interested dalam *spatial distribution* dari sumber suara (misalnya, struktur spasial dari bird choruses, atau lokalisasi sumber kebisingan tertentu), rekaman stereo atau lebih baik lagi *ambisonic* dapat memberikan informasi tambahan yang berharga.

## 2.3 Recording Protocol

Memiliki peralatan yang tepat hanyalah bagian dari persamaan. Untuk menghasilkan data *soundscape* yang berkualitas tinggi, representatif, dan berguna untuk analisis, kita memerlukan protokol perekaman yang terstruktur dengan baik yang mempertimbangkan di mana menempatkan peralatan, kapan merekam, bagaimana mengkalibrasi sistem, dan bagaimana mendokumentasikan konteks dari setiap rekaman. Protokol yang baik tidak hanya meningkatkan kualitas data tetapi juga memfasilitasi replikabilitas, memungkinkan peneliti lain untuk mengulangi metodologi kita, dan memastikan bahwa data yang dikumpulkan dapat dibandingkan secara bermakna antar lokasi, waktu, atau studi.

### 2.3.1 Site Selection

Pemilihan lokasi untuk perekaman *soundscape* adalah keputusan fundamental yang harus diinformasikan oleh tujuan penelitian, pertanyaan ilmiah yang ingin dijawab, dan pertimbangan praktis tentang aksesibilitas, keamanan, dan logistik.

**Kriteria pemilihan lokasi** bervariasi tergantung pada konteks penelitian. Untuk studi *urban soundscape* yang bertujuan mengkarakterisasi kualitas akustik ruang publik, lokasi mungkin dipilih berdasarkan tipe ruang (taman, plaza, jalan komersial, area residensial), tingkat penggunaan (tinggi vs rendah), atau proximity ke sumber kebisingan tertentu (jalan raya, rel kereta api, bandara). Untuk studi *soundscape ecology*, kriteria mungkin termasuk tipe habitat (hutan primer, sekunder, lahan basah, savanna), tingkat gangguan antropogenik, atau kehadiran spesies target. Dalam banyak studi, pendekatan *stratified sampling* digunakan, di mana area studi dibagi ke dalam strata berdasarkan karakteristik yang relevan, dan lokasi dipilih dari setiap stratum untuk memastikan representasi yang memadai dari variasi yang ada (Farina, 2014).

**Aksesibilitas** adalah pertimbangan praktis yang penting. Lokasi harus dapat dijangkau oleh peneliti untuk instalasi peralatan, pemeliharaan berkala (jika ARUs digunakan), dan pengambilan data atau peralatan. Dalam beberapa kasus, terutama di area yang terpencil atau sulit dijangkau seperti hutan hujan yang lebat atau pegunungan tinggi, aksesibilitas yang terbatas dapat menjadi kendala utama yang membatasi jumlah lokasi yang dapat di-*sample* atau frekuensi kunjungan untuk pemeliharaan. Trade-off seringkali harus dibuat antara ideal ilmiah (misalnya, merekam di area yang paling *pristine* atau representatif) dan kelayakan praktis (Gibb et al., 2019).

**Keamanan** mencakup dua aspek: keamanan personel dan keamanan peralatan. Untuk personel, risiko dapat berasal dari kondisi lingkungan (cuaca ekstrem, medan berbahaya), satwa liar (misalnya, di area dengan predator besar atau ular berbisa), atau dalam beberapa konteks, risiko sosial (area dengan kriminalitas tinggi atau konflik). Penilaian risiko yang tepat dan protokol keselamatan harus ada, terutama untuk *field work* di lokasi terpencil atau *high-risk*. Untuk peralatan, risiko termasuk pencurian, vandalisme, atau kerusakan oleh hewan (misalnya, hewan yang penasaran dapat mengunyah kabel atau menjatuhkan peralatan). Strategi mitigasi dapat mencakup penyamaran atau pemasangan peralatan di lokasi yang tidak mencolok, penggunaan kabel tahan hewan, atau dalam kasus ekstrem, penjagaan atau penggunaan kamera keamanan (Gibb et al., 2019).

**Representativeness** (representativitas) dari lokasi yang dipilih terhadap area atau fenomena yang lebih luas yang ingin dipahami adalah pertimbangan kritis. Jika tujuannya adalah untuk membuat pernyataan umum tentang *soundscape* dari tipe habitat tertentu atau area urban tertentu, lokasi perekaman harus representative dari variasi yang ada dalam kategori tersebut. Ini memerlukan pengetahuan tentang sistem yang diteliti. Studi pilot atau reconnaissance dapat membantu dalam memahami variabilitas spasial dan mengidentifikasi lokasi yang representative. Dalam beberapa kasus, randomisasi atau *systematic sampling designs* dapat membantu mengurangi bias dalam pemilihan lokasi (Merchant et al., 2015).

### 2.3.2 Temporal Sampling Strategy

Seperti yang telah kita diskusikan dalam bagian 2.1.3, *soundscape* menunjukkan variabilitas temporal yang signifikan. Strategi *temporal sampling* harus dirancang untuk menangkap variabilitas ini dengan cara yang sesuai dengan tujuan penelitian dan sumber daya yang tersedia.

**Durasi per rekaman** adalah parameter dasar. Untuk studi yang menggunakan *continuous recording*, durasi ditentukan oleh kapasitas baterai dan penyimpanan dari peralatan serta periode waktu yang diminati (misalnya, satu hari, satu minggu). Untuk *intermittent recording*, durasi setiap *recording bout* (sesi perekaman) harus cukup panjang untuk menangkap variasi temporal pada skala yang relevan tetapi tidak terlalu panjang sehingga menghasilkan data redundan yang berlebihan. Durasi umum untuk *recording bouts* dalam *soundscape ecology* berkisar dari 1 menit hingga 10 menit (Gibb et al., 2019). Durasi 1 menit sering dianggap cukup untuk menangkap representasi dari *soundscape* pada momen tertentu untuk tujuan komputasi indeks akustik, sementara durasi yang lebih panjang mungkin diinginkan untuk menangkap event langka atau untuk analisis yang memerlukan resolusi temporal yang lebih baik.

**Time of day** (waktu dalam hari) sangat penting karena banyak organisme dan aktivitas manusia menunjukkan pola *diel* yang kuat. Burung paling vocal selama *dawn chorus* (sekitar 30 menit sebelum hingga beberapa jam setelah sunrise) dan pada tingkat yang lebih rendah selama *dusk chorus*. Serangga seperti jangkrik dan katydids paling aktif di malam hari. Aktivitas manusia puncak pada jam sibuk pagi dan sore hari di area urban. Jika tujuannya adalah untuk menangkap pola *diel* lengkap, perekaman harus mencakup berbagai waktu sepanjang hari dan malam. Jika fokusnya adalah pada kelompok taksonomi tertentu atau fenomena tertentu, perekaman dapat ditargetkan pada waktu ketika mereka paling aktif. Banyak protokol *soundscape ecology* menggunakan *recording schedules* yang mencakup periode key seperti dawn, mid-morning, noon, dusk, dan midnight untuk menangkap variasi *diel* (Farina, 2014; Wimmer et al., 2013).

**Seasonal variations** (variasi musiman) juga sangat signifikan, terutama di zona temperate dan tropis di mana musim sangat berbeda. *Breeding seasons* membawa peningkatan dramatis dalam aktivitas vocal untuk banyak spesies. Migrasi mengubah komposisi komunitas. Vegetasi berubah, mempengaruhi propagasi suara dan microhabitat. Cuaca bervariasi, mempengaruhi aktivitas dan detektabilitas suara. Untuk memahami *soundscape* tahunan lengkap, perekaman idealnya harus mencakup semua musim. Namun, ini seringkali tidak praktis karena durasi yang panjang dan sumber daya yang diperlukan. Kompromi umum adalah merekam selama *key seasons* yang relevan dengan pertanyaan penelitian, misalnya, fokus pada breeding season untuk studi biodiversitas burung, atau merekam di musim hujan dan kering untuk memahami variasi seasonal di daerah tropis (Sueur et al., 2008).

**Weather conditions** (kondisi cuaca) mempengaruhi baik aktivitas biologis maupun karakteristik akustik lingkungan. Angin dapat menciptakan kebisingan yang menutupi suara lain dan dapat mengurangi aktivitas vocal dari banyak hewan. Hujan menghasilkan kebisingan yang intens yang dapat mendominasi *soundscape*. Suhu dan kelembaban mempengaruhi propagasi suara dan aktivitas biologis. Dalam desain *recording protocol*, keputusan harus dibuat tentang apakah merekam dalam semua kondisi cuaca atau hanya dalam kondisi tertentu. Untuk monitoring jangka panjang dengan ARUs, rekaman biasanya dilakukan tanpa memandang cuaca, dan kondisi cuaca didokumentasikan melalui *metadata* atau sensor cuaca co-located, sehingga pengaruhnya dapat dipertimbangkan dalam analisis. Untuk *attended recording sessions* di mana peneliti hadir, cuaca yang ekstrem (angin kencang, hujan deras) seringkali dihindari karena menghasilkan rekaman dengan kualitas rendah yang didominasi oleh noise cuaca (Merchant et al., 2015).

**Trade-off** yang fundamental dalam *temporal sampling* adalah antara *temporal extent* (berapa lama total periode yang dicakup) dan *temporal resolution* (seberapa sering atau seberapa kontinyu perekaman). Dengan sumber daya tetap, meningkatkan extent (misalnya, merekam sepanjang tahun daripada satu bulan) biasanya berarti mengurangi resolution (misalnya, merekam sekali per jam daripada kontinyu). Keputusan ini harus diinformasikan oleh pertanyaan penelitian. Jika tujuannya adalah mendeteksi perubahan jangka panjang atau variasi seasonal, extent lebih penting. Jika tujuannya adalah memahami secara detail struktur temporal dari *soundscape* pada periode tertentu (misalnya, dinamika *dawn chorus*), resolution lebih penting.

### 2.3.3 Microphone Placement

Penempatan mikrofon dalam ruang tiga dimensi memiliki dampak besar pada apa yang direkam dan bagaimana *soundscape* direpresentasikan dalam data yang dihasilkan. Pertimbangan utama termasuk ketinggian, jarak dari permukaan reflektif, orientasi, perlindungan dari angin, dan dalam beberapa kasus, penyembunyian dari pandangan untuk keamanan atau untuk menghindari gangguan pada perilaku hewan.

**Height** (ketinggian) dari mikrofon di atas tanah mempengaruhi apa yang direkam karena beberapa alasan. Pertama, sumber suara yang berbeda berada pada ketinggian yang berbeda. Burung yang berkicau di kanopi hutan berada pada puluhan meter di atas tanah, sementara amfibi atau mamalia kecil yang bersuara berada di atau dekat permukaan tanah. Menempatkan mikrofon pada ketinggian tertentu akan membuatnya lebih sensitif terhadap sumber pada ketinggian yang sama atau dekat. Kedua, atenuasi suara dan kondisi atmosfer (seperti gradien suhu, kelembaban, atau angin) dapat bervariasi dengan ketinggian, mempengaruhi propagasi suara. Ketiga, kebisingan dari aktivitas permukaan tanah (seperti gerakan hewan, tetesan air, atau debris yang jatuh) lebih intens dekat tanah (Farina, 2014).

Dalam *soundscape ecology*, ketinggian penempatan mikrofon bervariasi tergantung pada fokus studi. Untuk studi yang interested dalam keseluruhan komunitas akustik, ketinggian menengah (misalnya, 1.5 - 2 meter) sering digunakan sebagai kompromi yang menangkap suara dari berbagai strata vertikal. Untuk studi yang fokus pada kanopi burung, mikrofon dapat ditempatkan lebih tinggi, bahkan di dalam kanopi jika memungkinkan. Untuk studi amfibi atau mamalia terrestrial, mikrofon mungkin ditempatkan lebih rendah, sekitar 0.5 - 1 meter. Dalam *urban soundscape* studies, ketinggian standar sering dipilih untuk konsistensi, misalnya, 1.5 meter yang kira-kira tinggi telinga manusia rata-rata ketika berdiri (Kang, 2007).

**Distance from reflective surfaces** (jarak dari permukaan reflektif) penting karena pantulan dari permukaan keras seperti tanah, dinding, atau air dapat menciptakan *interference patterns* dan *comb filtering* yang mempengaruhi respons frekuensi dari rekaman. Secara umum, mikrofon sebaiknya tidak ditempatkan terlalu dekat (misalnya, dalam beberapa sentimeter) dari permukaan reflektif besar. Namun, dalam beberapa konteks, seperti merekam di dekat badan air untuk menangkap suara dari amfibi atau serangga aquatic, proximity ke permukaan air mungkin tidak dapat dihindari. Dalam kasus tersebut, kesadaran tentang potensi efek refleksi penting untuk interpretasi yang tepat dari data (Katz, 2007).

**Orientation** (orientasi) relevan jika menggunakan mikrofon directional. Mikrofon directional harus diorientasikan ke arah sumber suara yang diminati atau, jika merekam *soundscape* umum, diorientasikan secara konsisten antar lokasi untuk memastikan komparabilitas. Untuk mikrofon omnidirectional, orientasi kurang kritis, meskipun bahkan mikrofon omnidirectional dapat memiliki beberapa variasi directional pada frekuensi tinggi, sehingga konsistensi orientasi masih diinginkan (Merchant et al., 2015).

**Wind protection** (perlindungan angin) sangat penting untuk perekaman outdoor. Angin yang bertiup di atas membran mikrofon menciptakan turbulensi dan fluktuasi tekanan yang terekam sebagai low-frequency rumble atau roar yang dapat sangat mendominasi rekaman dan menutupi suara lain. *Windscreens* (pelindung angin) atau *furry windshields* (yang menyerupai bola bulu atau "dead cat") digunakan untuk meredam turbulensi tanpa signifikan mempengaruhi respons frekuensi mikrofon. Windscreen foam sederhana efektif untuk angin lemah hingga sedang. Untuk kondisi berangin, *furry windshields* yang lebih tebal dan panjang sangat efektif. Namun, mereka juga dapat sedikit attenuate frekuensi tinggi, sehingga trade-off harus dipertimbangkan (Farina, 2014; Gibb et al., 2019).

**Concealment** (penyembunyian) peralatan dapat penting untuk beberapa alasan. Dalam studi ekologi, peralatan yang terlihat dapat menarik perhatian hewan penasaran atau menjadi perch untuk burung, yang dapat mengubah *soundscape* lokal atau bahkan merusak peralatan. Dalam konteks urban atau area dengan aktivitas manusia, peralatan yang terlihat dapat menarik vandalisme atau pencurian. Strategi penyembunyian dapat mencakup penggunaan warna kamuflase, penempatan di dalam vegetasi atau struktur, atau pemasangan di lokasi yang tinggi dan tidak mudah dijangkau. Namun, penyembunyian harus seimbang dengan kebutuhan untuk memastikan bahwa mikrofon tidak terhalang dan dapat menangkap suara dengan jelas (Gibb et al., 2019).

### 2.3.4 Calibration

Kalibrasi sistem perekaman memastikan bahwa level suara yang direkam akurat dan dapat dibandingkan antar rekaman, antar lokasi, dan antar studi. Kalibrasi sangat penting jika tujuan penelitian termasuk pengukuran level tekanan suara absolut (misalnya, dalam dB SPL) atau jika indeks akustik yang dihitung sensitif terhadap level absolut.

**Sound level meter calibration** (kalibrasi sound level meter): Jika menggunakan *sound level meter* (SLM) untuk mengukur tingkat suara di lapangan, SLM itu sendiri harus dikalibrasi secara teratur menggunakan *acoustic calibrator* atau *pistonphone*. Calibrator ini menghasilkan tone pada frekuensi dan level yang diketahui dengan akurat (biasanya 1 kHz pada 94 atau 114 dB SPL). SLM di-adjust sehingga ia membaca level yang benar ketika calibrator diterapkan pada mikrofonnya. Kalibrasi harus dilakukan sebelum dan setelah setiap *recording session*, atau setidaknya setiap hari jika melakukan perekaman multi-hari, untuk memastikan konsistensi (Kang, 2007).

**Microphone calibration** (kalibrasi mikrofon): Untuk sistem perekaman yang menggunakan *recorder* digital dengan mikrofon eksternal, kalibrasi dapat dilakukan dengan beberapa cara. Metode yang paling rigorous adalah menggunakan acoustic calibrator yang diterapkan pada mikrofon sementara merekam, menciptakan *calibration tone* di awal (dan idealnya di akhir) dari setiap rekaman. Dengan mengetahui level sebenarnya dari calibrator (misalnya, 94 dB SPL pada 1 kHz), kita dapat menghitung *calibration factor* yang menghubungkan level digital yang direkam (dalam digital full scale atau dBFS) dengan level akustik sebenarnya (dalam dB SPL). Ini memungkinkan konversi post-hoc dari nilai digital ke nilai SPL absolut (Merchant et al., 2015).

Dalam praktiknya, tidak semua sistem perekaman *soundscape* dikalibrasi untuk pengukuran absolut, terutama dalam *soundscape ecology* di mana fokus seringkali pada indeks relatif atau perbandingan antar lokasi daripada level absolut. Namun, bahkan tanpa kalibrasi absolut, penting untuk memastikan **konsistensi** antar rekaman. Ini berarti menggunakan *gain settings* (pengaturan penguatan) yang konsisten pada *recorder*, konfigurasi mikrofon yang sama, dan protokol perekaman yang identik antar semua *recording sessions* dalam satu studi (Gibb et al., 2019).

**Absolute vs relative measurements** (pengukuran absolut vs relatif): Untuk beberapa aplikasi, seperti penilaian compliance terhadap regulasi kebisingan atau studi tentang dampak kesehatan dari eksposur kebisingan, pengukuran level suara absolut sangat penting dan memerlukan kalibrasi yang ketat. Untuk aplikasi lain, seperti membandingkan kompleksitas akustik antar habitat atau melacak perubahan temporal dalam aktivitas biologis, pengukuran relatif mungkin cukup. Indeks seperti ACI atau ADI, yang akan kita bahas di Bab 4, umumnya tidak memerlukan kalibrasi absolut karena mereka didasarkan pada struktur spektro-temporal relatif dari sinyal daripada level absolut. Namun, mengetahui level absolut masih bisa berguna untuk interpretasi dan untuk memastikan bahwa rekaman tidak terlalu lemah (mendekati noise floor dari *recorder*) atau terlalu kuat (mendekati clipping) (Sueur et al., 2014).

### 2.3.5 Metadata dan Documentation

Metadata, secara harfiah "data tentang data", adalah informasi kontekstual yang mendeskripsikan kapan, di mana, bagaimana, dan dalam kondisi apa rekaman *soundscape* dibuat. Metadata yang kaya dan terstruktur dengan baik sangat penting untuk interpretasi yang tepat dari data akustik, untuk memungkinkan analisis yang menggabungkan faktor kontekstual, untuk memfasilitasi data sharing dan reuse, dan untuk memastikan reproducibility penelitian.

**Essential metadata** (metadata esensial) yang harus dikumpulkan untuk setiap rekaman mencakup:

**Location** (lokasi): Koordinat geografis (latitude dan longitude) dengan presisi yang memadai (biasanya hingga beberapa desimal places, misalnya, 6 desimal memberikan presisi sekitar 10 cm). Sistem koordinat yang digunakan (biasanya WGS84) harus dicatat. Dalam beberapa kasus, informasi tambahan seperti elevation (ketinggian), site name atau ID, dan deskripsi tekstual dari lokasi juga berguna.

**Date and time** (tanggal dan waktu): Tanggal lengkap (tahun, bulan, hari) dan waktu (jam, menit, detik) dari *start* rekaman dalam format standar (ISO 8601 recommended, misalnya, 2025-01-15T06:30:00Z). Time zone atau UTC offset harus jelas. Untuk deployment jangka panjang, tanggal dan waktu *end* juga penting. Sinkronisasi waktu dari *recorders* sebelum deployment memastikan akurasi temporal.

**Equipment specifications** (spesifikasi peralatan): Model dan tipe mikrofon, model *recorder*, *gain settings*, sample rate, bit depth, file format. Informasi tentang *windscreen* yang digunakan, mounting hardware, atau aksesoris lain yang dapat mempengaruhi rekaman.

**Weather conditions** (kondisi cuaca): Deskripsi atau pengukuran kondisi cuaca pada waktu rekaman: suhu, kelembaban, kecepatan angin, tutupan awan, presipitasi. Ini dapat dicatat secara manual oleh peneliti yang hadir atau, untuk ARU deployments, dapat diintegrasikan dari stasiun cuaca terdekat atau sensor cuaca *co-located*.

Metadata tambahan yang sangat berguna tergantung pada konteks penelitian mungkin mencakup:

**Habitat characteristics** (karakteristik habitat): Tipe habitat (misalnya, hutan primer, hutan sekunder, lahan basah, urban park), tutupan vegetasi, keberadaan badan air, jarak ke jalan atau sumber kebisingan antropogenik lainnya.

**Observer notes** (catatan pengamat): Untuk *attended recordings*, catatan tentang observasi visual atau auditory yang dibuat oleh peneliti, event khusus yang terjadi selama rekaman, atau masalah teknis yang dihadapi.

**Photographic documentation** (dokumentasi fotografis): Foto dari *recording site*, penempatan peralatan, dan kondisi lingkungan dapat memberikan konteks visual yang berharga yang melengkapi data akustik.

**File naming conventions** (konvensi penamaan file) yang terstruktur memfasilitasi organisasi dan manajemen dataset yang besar. Nama file yang informatif dapat mencakup elemen seperti site ID, tanggal, waktu, dan informasi peralatan. Misalnya, `Site01_20250115_063000_H4n.wav` dengan jelas mengindikasikan lokasi (Site01), tanggal (15 Januari 2025), waktu (06:30:00), dan recorder (Zoom H4n). Konsistensi dalam penamaan sangat penting, terutama untuk proyek dengan ratusan atau ribuan file (Gibb et al., 2019; ISO 12913-2, 2018).

**Data dictionaries** (kamus data) mendeskripsikan setiap variabel metadata, termasuk definisi, unit, format, dan nilai yang diizinkan. Misalnya, untuk variabel "habitat_type", data dictionary dapat mendeskripsikan bahwa itu adalah variabel kategorikal dengan nilai yang diizinkan {"primary_forest", "secondary_forest", "plantation", "grassland", "urban_park"} dan definisi dari setiap kategori. Data dictionary memastikan bahwa metadata konsisten dan dapat diinterpretasikan dengan benar oleh peneliti lain atau dalam jangka panjang (Michener, 2015).

**Standardized metadata schemas** (skema metadata terstandarisasi) seperti *Dublin Core*, *Darwin Core* (untuk data biodiversitas), atau skema khusus akustik seperti *Acoustic Metadata Standard* yang dikembangkan oleh beberapa proyek *bioacoustics*, menyediakan framework terstruktur untuk dokumentasi metadata. Mengadopsi skema standar memfasilitasi interoperabilitas data, memungkinkan data dari studi yang berbeda untuk digabungkan atau dibandingkan lebih mudah, dan meningkatkan *discoverability* dari dataset ketika dibagikan melalui repositori publik (Merchant et al., 2015).

## 2.4 Quality Control

Mengumpulkan data *soundscape* hanyalah langkah pertama. Memastikan bahwa data tersebut berkualitas tinggi dan siap untuk analisis memerlukan serangkaian langkah *quality control* (kontrol kualitas) yang mencakup pengecekan sebelum perekaman, validasi setelah perekaman, deteksi dan penanganan artefak, dan manajemen data yang tepat.

### 2.4.1 Pre-Recording Checks

Pengecekan sebelum perekaman (*pre-recording checks*) adalah langkah-langkah yang dilakukan sebelum memulai sesi perekaman untuk memastikan bahwa semua sistem berfungsi dengan benar dan bahwa kondisi optimal untuk perekaman.

**Equipment testing** (pengujian peralatan): Sebelum pergi ke lapangan, semua peralatan harus diuji untuk memastikan fungsi yang tepat. Mikrofon, kabel, dan *recorder* harus diperiksa dengan membuat rekaman uji di lingkungan yang terkontrol dan mendengarkan playback untuk memastikan tidak ada noise, distorsi, atau masalah lain. *Phantom power* (jika mikrofon memerlukan) harus diverifikasi berfungsi. Kontrol dan menu *recorder* harus familiar untuk peneliti untuk menghindari kesalahan operasional di lapangan (Katz, 2007).

**Battery levels** (level baterai): Baterai yang terisi penuh atau baru sangat penting. Untuk ARUs yang akan di-deploy untuk periode yang lama, perhitungan estimasi durasi baterai berdasarkan *duty cycle* dan konsumsi daya peralatan harus dilakukan untuk memastikan bahwa baterai akan bertahan untuk durasi yang direncanakan. Membawa baterai cadangan adalah praktik yang baik. Beberapa ARUs memiliki fitur low-battery warning atau automatic shutdown untuk mencegah kehilangan data jika baterai habis (Gibb et al., 2019).

**Storage capacity** (kapasitas penyimpanan): Memory card harus memiliki kapasitas yang cukup untuk menampung semua data yang akan dikumpulkan. Perhitungan ukuran file yang diharapkan berdasarkan sample rate, bit depth, jumlah channel, dan durasi total perekaman harus dilakukan sebelumnya. Memory card harus diformat sebelum digunakan untuk menghindari fragmentasi dan error. Kartu kelas yang cepat (Class 10 atau UHS) direkomendasikan untuk memastikan kecepatan tulis yang memadai untuk *high-resolution recording* (Gibb et al., 2019).

**Weather forecast** (prakiraan cuaca): Memeriksa prakiraan cuaca sebelum pergi ke lapangan dapat membantu dalam merencanakan waktu perekaman yang optimal dan dalam mempersiapkan perlindungan yang tepat untuk peralatan. Jika kondisi cuaca ekstrem diharapkan (hujan deras, angin kencang), keputusan dapat dibuat untuk menunda atau menyesuaikan rencana. Untuk ARU deployments jangka panjang, prakiraan cuaca jangka panjang dapat menginformasikan apakah perlindungan tambahan (misalnya, casing tambahan, desiccant untuk kontrol kelembaban) diperlukan (Merchant et al., 2015).

### 2.4.2 Post-Recording Validation

Setelah data dikumpulkan, validasi segera untuk memastikan bahwa rekaman berhasil dan memiliki kualitas yang dapat diterima sangat penting, terutama untuk *one-time recording events* yang tidak dapat diulang.

**File integrity checks** (pengecekan integritas file): Pertama, verifikasi bahwa file audio yang diharapkan memang telah dibuat dan dapat dibuka. Korupsi file dapat terjadi karena error penyimpanan, memory card yang rusak, atau kegagalan sistem selama penulisan. Membuka beberapa file secara random dan memainkannya untuk memastikan bahwa mereka berisi audio dan bukan silence atau corrupted data adalah pengecekan dasar yang cepat. *Software* dapat digunakan untuk batch-checking file integrity atau untuk mengidentifikasi file yang sangat kecil atau besar yang mungkin mengindikasikan masalah (Gibb et al., 2019).

**Audio quality assessment** (penilaian kualitas audio): Mendengarkan sebagian dari rekaman atau memeriksa waveform dan spectrogram untuk memastikan kualitas audio yang dapat diterima. Cari tanda-tanda **clipping** (distorsi karena level terlalu tinggi yang menyebabkan waveform terpotong pada nilai maksimum), **excessive noise** (noise floor yang tinggi yang mungkin menutupi suara yang diminati), **interference** (misalnya, RF interference dari peralatan elektronik terdekat yang dapat muncul sebagai buzzing atau whining), atau **other artifacts** seperti handling noise jika rekaman *attended*. Jika masalah ditemukan, mereka dapat diatasi untuk rekaman di masa depan, atau dalam beberapa kasus, rekaman mungkin perlu diulang jika masalahnya parah (Katz, 2007).

**Metadata completeness** (kelengkapan metadata): Verifikasi bahwa semua metadata yang diperlukan telah dicatat. Periksa bahwa file log atau spreadsheet metadata berisi entri untuk setiap rekaman dengan semua field yang terisi dengan benar. Metadata yang hilang atau tidak lengkap dapat sangat mengurangi nilai dari data akustik, membuat interpretasi atau analisis yang bermakna sulit atau tidak mungkin (Michener, 2015).

### 2.4.3 Artifact Detection dan Handling

Artefak adalah sinyal yang tidak diinginkan dalam rekaman yang tidak merupakan bagian dari *soundscape* yang sebenarnya tetapi diperkenalkan oleh proses perekaman atau kondisi lingkungan. Mendeteksi dan menangani artefak dengan tepat sangat penting untuk analisis yang akurat.

**Wind noise** (kebisingan angin) adalah artefak yang sangat umum dalam perekaman outdoor. Seperti disebutkan sebelumnya, angin yang bertiup di atas mikrofon menciptakan low-frequency rumble yang dapat mendominasi rekaman. Deteksi wind noise dapat dilakukan secara manual dengan mendengarkan atau memeriksa spectrogram untuk kehadiran energi broadband yang intens pada frekuensi rendah (<500 Hz) tanpa struktur harmonis. Metode otomatis telah dikembangkan yang menggunakan fitur spektral dan temporal untuk mengidentifikasi segmen yang terpengaruh wind noise (Ntalampiras, 2016). Penanganan wind noise tergantung pada severity. Wind noise lemah dapat dikurangi dengan *high-pass filtering* yang menghapus frekuensi di bawah ambang tertentu (misalnya, 100 atau 200 Hz), meskipun ini juga akan menghapus suara legitimate dalam rentang frekuensi tersebut. Wind noise yang parah mungkin membuat rekaman tidak dapat digunakan untuk analisis, dan segmen yang terkena dampak dapat ditandai untuk eksklusi.

**Handling noise** (kebisingan penanganan) terjadi jika mikrofon atau *recorder* tersentuh, dipindahkan, atau terguncang selama perekaman, menghasilkan thumps, bumps, atau scraping sounds yang intens. Ini umumnya hanya masalah untuk *attended recordings* di mana peneliti mungkin secara tidak sengaja menyentuh peralatan. Handling noise biasanya sangat jelas dalam waveform sebagai transien impulsive dengan amplitudo tinggi. Segmen dengan handling noise harus diidentifikasi dan dieksklusikan dari analisis atau, jika hanya brief events, dapat dipotong atau muted (Katz, 2007).

**Clipping** terjadi ketika sinyal input melebihi rentang dinamis dari *recorder*, menyebabkan waveform "terpotong" pada nilai maksimum yang dapat direpresentasikan. Clipping menghasilkan distorsi harmonik dan mengubah karakteristik spektral dari sinyal. Dalam waveform, clipping terlihat sebagai bagian-bagian di mana amplitudo tetap konstan pada nilai maksimum daripada mengikuti kontur asli sinyal. Dalam spectrogram, clipping dapat menyebabkan munculnya energi pada frekuensi harmonik yang sebenarnya tidak ada dalam suara asli. Clipping harus dihindari dengan setting gain yang tepat. Jika terjadi, segmen yang ter-*clip* mungkin perlu dieksklusikan dari analisis, terutama jika analisis sensitif terhadap karakteristik spektral yang akurat. Beberapa *software* dapat mendeteksi clipping secara otomatis dengan mengidentifikasi sampel yang berada pada atau sangat dekat dengan nilai maksimum digital (Merchant et al., 2015).

**Dropouts** (kehilangan data) adalah periode singkat di mana tidak ada data yang direkam, muncul sebagai gap atau silence dalam file audio. Dropouts dapat terjadi karena masalah dengan memory card (kecepatan tulis tidak memadai, card rusak), kehabisan baterai sesaat, atau error *software/hardware*. Deteksi dapat dilakukan dengan memeriksa kontinuitas timestamp atau dengan mengidentifikasi segmen silence yang abnormal. Dropouts pendek mungkin tidak signifikan untuk analisis jangka panjang, tetapi dropout yang sering atau panjang dapat mengurangi kualitas data secara substansial (Gibb et al., 2019).

**Decision: exclude, flag, atau process**: Ketika artefak dideteksi, keputusan harus dibuat tentang bagaimana menanganinya. Opsi utama adalah:
- **Exclude** (eksklusikan): Menghapus rekaman atau segmen yang terpengaruh sepenuhnya dari analisis. Ini adalah pendekatan yang paling konservatif dan tepat untuk artefak yang parah yang tidak dapat diperbaiki.
- **Flag** (tandai): Menandai rekaman atau segmen sebagai terpengaruh oleh artefak tetapi tetap memasukkannya dalam analisis, dengan catatan bahwa hasil mungkin bias. Ini dapat berguna jika kehilangan data karena eksklusi akan menghasilkan gap yang signifikan dalam *temporal coverage*.
- **Process** (proses): Menggunakan teknik *signal processing* untuk mengurangi atau menghapus artefak. Misalnya, *high-pass filtering* untuk wind noise, *noise gates* untuk mengurangi noise latar belakang, atau *spectral editing* untuk menghapus interference. Processing harus dilakukan dengan hati-hati karena dapat juga mempengaruhi sinyal yang legitimate. Setiap processing yang diterapkan harus didokumentasikan dengan jelas dalam metadata (Merchant et al., 2015; Towsey et al., 2014).

### 2.4.4 Data Management

Data *soundscape* dari proyek yang bahkan moderat dapat dengan cepat menjadi sangat besar dan kompleks, memerlukan strategi manajemen data yang terstruktur untuk memastikan integritas, aksesibilitas, dan keberlanjutan jangka panjang.

**File naming conventions** (konvensi penamaan file), seperti disebutkan sebelumnya, harus konsisten dan informatif. Struktur penamaan harus didefinisikan di awal proyek dan didokumentasikan dengan jelas sehingga semua anggota tim mengikuti konvensi yang sama.

**Directory structure** (struktur direktori) yang logis memfasilitasi organisasi. Hirarki yang umum mungkin mengorganisir file berdasarkan project > site > date > raw recordings, processed data, analysis outputs. Misalnya:
```
/Project_SoundscapeEcology/
  /Site_01_PrimaryForest/
    /2025-01-15/
      /raw/
      /processed/
  /Site_02_SecondaryForest/
    /2025-01-15/
      /raw/
      /processed/
  /Metadata/
  /Analysis_Scripts/
  /Results/
```
Struktur yang terorganisir dengan baik membuat navigasi, pencarian, dan manajemen file jauh lebih mudah, terutama ketika dataset tumbuh (Michener, 2015).

**Backup strategy** (strategi backup) sangat penting untuk mencegah kehilangan data karena kegagalan hardware, korupsi file, atau kecelakaan. Prinsip umum adalah **3-2-1 rule**: memiliki setidaknya **3 copies** dari data, pada **2 media storage yang berbeda** (misalnya, hard drive dan cloud storage), dengan **1 copy off-site** (tidak di lokasi fisik yang sama dengan yang lain untuk melindungi dari bencana lokal seperti kebakaran atau banjir). Backup harus dilakukan secara teratur, idealnya segera setelah data dikumpulkan dari lapangan. *Automated backup systems* dapat membantu memastikan konsistensi (Michener, 2015; Gibb et al., 2019).

**Database management** (manajemen database) dapat sangat bermanfaat untuk proyek dengan banyak rekaman dan metadata yang kompleks. Database relational (misalnya, menggunakan PostgreSQL, MySQL, atau bahkan SQLite untuk proyek yang lebih kecil) memungkinkan penyimpanan terstruktur dari metadata dengan kemampuan untuk query yang kompleks, filtering, dan export. Database dapat menghubungkan rekaman audio dengan metadata mereka, informasi lokasi, kondisi cuaca, hasil analisis, dan data kontekstual lainnya, menyediakan sistem yang kuat untuk manajemen dan eksplorasi data. Untuk proyek yang sangat besar atau kolaboratif, sistem manajemen data yang lebih sophisticated seperti *Acoustic Observatory* platforms atau custom-built databases dengan web interfaces mungkin digunakan (Towsey et al., 2018).

**Data documentation** (dokumentasi data) adalah komponen kritis dari manajemen data yang sering diabaikan. README files yang mendeskripsikan organisasi direktori, konvensi penamaan file, skema metadata, dan processing yang telah diterapkan harus dibuat dan dipelihara. Data dictionaries yang mendeskripsikan setiap variabel dan coding scheme harus disediakan. Processing logs yang mendokumentasikan langkah-langkah *signal processing* atau analisis yang diterapkan, termasuk parameter dan *software* yang digunakan, memastikan reproducibility dan transparency. Dokumentasi yang baik membuat data dapat digunakan tidak hanya oleh peneliti asli tetapi juga oleh kolaborator dan dalam jangka panjang ketika detail mungkin terlupakan (Michener, 2015).

**Long-term archiving and sharing** (pengarsipan dan pembagian jangka panjang): Untuk memaksimalkan nilai ilmiah dari data *soundscape* dan untuk mendukung prinsip *open science*, pertimbangan harus diberikan untuk pengarsipan jangka panjang dalam repositori yang trustable dan, jika sesuai, sharing data dengan komunitas ilmiah yang lebih luas. Repositori seperti **Zenodo**, **Dryad**, **Figshare**, atau domain-specific repositories seperti **Xeno-canto** (untuk rekaman burung) atau **Animal Sound Archive** menyediakan infrastruktur untuk *long-term preservation*, assignment dari *Digital Object Identifiers* (DOIs) untuk citability, dan platforms untuk *data discovery* dan *access*. Saat membagikan data, pertimbangan harus diberikan untuk privasi, hak kekayaan intelektual, dan potensi *misuse*, tetapi secara umum, data *soundscape* yang dikumpulkan dengan dana publik atau untuk tujuan konservasi atau ilmiah memiliki nilai yang sangat besar ketika dibuat tersedia untuk peneliti lain (Michener, 2015; Gibb et al., 2019).

---

Bab ini telah memberikan panduan komprehensif tentang aspek praktis dari perekaman dan akuisisi data *soundscape*. Kita telah membahas bagaimana *soundscape recording* berbeda dari *studio recording*, tujuan-tujuan yang berbeda yang dapat memotivasi perekaman, dan pentingnya pertimbangan spasial dan temporal dalam desain *sampling*. Kita telah mengeksplorasi berbagai jenis mikrofon, sistem perekaman, format dan spesifikasi teknis, dan teknologi perekaman spasial yang semakin canggih. Kita telah menguraikan protokol untuk pemilihan lokasi, strategi *temporal sampling*, penempatan mikrofon, kalibrasi, dan dokumentasi metadata yang kaya. Akhirnya, kita telah membahas langkah-langkah *quality control* yang penting untuk memastikan bahwa data yang dikumpulkan berkualitas tinggi dan dapat dipercaya.

Dengan data *soundscape* berkualitas tinggi di tangan, kita sekarang siap untuk memproses dan menganalisis data tersebut. Bab berikutnya akan menyelami teknik-teknik *signal processing* yang fundamental untuk mengekstrak informasi dari rekaman audio: bagaimana merepresentasikan sinyal dalam domain waktu dan frekuensi, bagaimana memfilter dan meningkatkan kualitas, dan bagaimana mengekstrak fitur yang bermakna yang dapat menginformasikan pemahaman kita tentang *soundscape*.

---

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
