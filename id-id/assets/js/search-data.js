
const currentUrl = window.location.href;
const siteUrl = "https://fransfela.github.io";
let updatedUrl = currentUrl.replace("https://fransfela.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("id-id".length > 0) {
  updatedUrl = updatedUrl.replace("/id-id", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "🎧",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/id-id/";
    },
  },{id: "nav-",
          title: "🎧",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/id-id/";
          },
        },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/id-id/about/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "A journey navigating signal, data, and human experience",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/id-id/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "My research journey started in Acoustics with my bachelor&#39;s thesis on Mathematical Modeling of Acoustic Emission for Water Pipeline Leakage Detection, while simultaneously working as a research assistant specializing in building acoustics and physics. This foundation evolved during my master&#39;s studies at Institut Teknologi Bandung, where I delved into audio-visual perception, VR technology, and immersive multimedia. Today, my research centers on perceptual multimedia evaluation for next-generation AV communication devices, integrating expertise in experimental design optimization, predictive modeling, statistical machine learning, perceptual metrics, and composite model building. Here are selected highlights from my scientific contributions.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/id-id/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "This page will be updated with my recent works and fun projects.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/id-id/projects/";
          },
        },{id: "nav-zettelkasten",
          title: "Zettelkasten",
          description: "A living archive of interconnected ideas. Notes that evolve, connect, and compound over time",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/id-id/zettelkasten/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/id-id/cv/";
          },
        },{id: "post-mentoringbangrandy-perjalanan-dari-kuli-pabrik-ke-denmark",
        
          title: "MentoringBangRandy: Perjalanan dari Kuli Pabrik ke Denmark",
        
        description: "Bagaimana saya membantu kamu meraih beasiswa luar negeri berdasarkan pengalaman nyata",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/id-id/blog/2026/mentoring-bang-randy-scholarship-guidance/";
          
        },
      },{id: "post-just-a-moment",
        
          title: 'Just a moment... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://fransfela.substack.com/p/sound-horeg-antara-euforia-budaya", "_blank");
          
        },
      },{id: "post-soundscape-bentang-suara-teori-metode-dan-analisis",
        
          title: "Soundscape (Bentang Suara): Teori, Metode, dan Analisis",
        
        description: "Panduan komprehensif tentang analisis soundscape dari perspektif teknis dan perseptual dengan implementasi praktis menggunakan Python dan R",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/id-id/blog/2025/book-soundscape-analysis/";
          
        },
      },{id: "post-megatrends-in-sound-ai-competition-and-what-39-s-next-for-audio",
        
          title: "Megatrends in Sound: AI, Competition, and What&#39;s Next for Audio",
        
        description: "Reflections from the Danish Sound Cluster workshop on AI, industry challenges, and the future of audio technology",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/id-id/blog/2024/megatrends-sound-industry-workshop-reflection/";
          
        },
      },{id: "post-finding-the-optimal-number-of-clusters-part-3-alternative-approaches-amp-practical-guide",
        
          title: "Finding the Optimal Number of Clusters: Part 3 - Alternative Approaches &amp; Practical...",
        
        description: "Complete your clustering toolkit with dendrogram analysis, DBSCAN tuning, and a comprehensive decision framework. From theory to production-ready code.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/id-id/blog/2024/optimal-clustering-part3-alternative-approaches/";
          
        },
      },{id: "post-finding-the-optimal-number-of-clusters-part-2-advanced-statistical-methods",
        
          title: "Finding the Optimal Number of Clusters: Part 2 - Advanced Statistical Methods",
        
        description: "Dive deeper into cluster validation with Calinski-Harabasz Index, Gap Statistic, and BIC/AIC. Statistical rigor meets practical implementation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/id-id/blog/2024/optimal-clustering-part2-advanced-statistical-methods/";
          
        },
      },{id: "post-finding-the-optimal-number-of-clusters-part-1-foundation-methods",
        
          title: "Finding the Optimal Number of Clusters: Part 1 - Foundation Methods",
        
        description: "Master the art of determining optimal clusters with Elbow Method, Silhouette Analysis, and Davies-Bouldin Index. A practical guide with Python implementations.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/id-id/blog/2024/optimal-clustering-part1-foundation-methods/";
          
        },
      },{id: "post-sound-health-and-memories-reflections-from-danish-sound-day-2023",
        
          title: "Sound, Health, and Memories: Reflections from Danish Sound Day 2023",
        
        description: "Personal reflections on audio technology in healthcare; from ICU soundscape recordings in Indonesia to cutting-edge research at Rigshospitalet",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/id-id/blog/2023/danish-sound-day-health-wellbeing-reflection/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/id-id/books/the_godfather/";
            },},{id: "news-master-thesis-defense-on-own-voice-perception-at-dtu",
          title: 'Master Thesis Defense on Own Voice Perception at DTU',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/id-id/news/announcement_miho_defense/";
            },},{id: "news-secured-phc-nusantara-2024-multinational-research-funding",
          title: 'Secured PHC Nusantara 2024 Multinational Research Funding',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/id-id/news/announcement_phc_nusantara/";
            },},{id: "news-winner-of-microsoft-power-platform-hackathon-2024",
          title: 'Winner of Microsoft Power Platform Hackathon 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/id-id/news/announcement_microsoft_hackathon_winner/";
            },},{id: "news-master-thesis-defense-on-video-conferencing-quality-at-dtu-fotonik",
          title: 'Master Thesis Defense on Video Conferencing Quality at DTU Fotonik',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/id-id/news/announcement_rucha_defense/";
            },},{id: "projects-batchmailer",
          title: 'BatchMaileR',
          description: "A Shiny web application for sending batch emails with personalized content and attachments",
          section: "Projects",handler: () => {
              window.location.href = "/id-id/projects/batchmailer/";
            },},{id: "projects-hoa-ssr-dataset",
          title: 'HOA-SSR Dataset',
          description: "Higher-Order Ambisonics Sound Scene Repository - A comprehensive 360° audiovisual quality dataset for immersive media research",
          section: "Projects",handler: () => {
              window.location.href = "/id-id/projects/hoassr_dataset/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%6E%64%79%72%66%66@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/randy-frans-fela", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5905-5522", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Randy-Fela/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=XSBROGkAAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=57195643532", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@fransfela", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Languages',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
