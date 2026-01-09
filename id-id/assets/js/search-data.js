
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
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/id-id/blog/2024/advanced-images/";
          
        },
      },{id: "post-statistical-design-of-experiment-01-an-introduction",
        
          title: 'Statistical Design of Experiment 01: An Introduction <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@fransfela/statistical-design-of-experiment-01-an-introduction-98394af6c74c?source=rss-d87e2a60cec5------2", "_blank");
          
        },
      },{id: "post-ffmpeg-apa-itu-dan-bagaimana-cara-menginstalnya-di-mesin-anda",
        
          title: 'FFmpeg: Apa Itu dan Bagaimana Cara Menginstalnya di Mesin Anda <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@fransfela/ffmpeg-apa-itu-dan-bagaimana-cara-menginstalnya-di-mesin-anda-17590374a7b?source=rss-d87e2a60cec5------2", "_blank");
          
        },
      },{id: "post-ffmpeg-what-it-is-and-how-to-install-it-on-your-machine",
        
          title: 'FFmpeg: What it is and how to install it on your machine <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@fransfela/ffmpeg-what-it-is-and-how-to-install-it-on-your-machine-fb589318d117?source=rss-d87e2a60cec5------2", "_blank");
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/id-id/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/id-id/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/id-id/blog/2023/videos/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/id-id/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/id-id/blog/2018/distill/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/id-id/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/id-id/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-our-industrial-master-student-from-dtu-fotonik-defended-her-work-today",
          title: 'Our industrial master student from DTU Fotonik defended her work today',
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
