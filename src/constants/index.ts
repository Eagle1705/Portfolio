// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fsc,
  gvfc,
  itarchimede,
  mercy,
  unict,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/Eagle1705/Portfolio",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Studente di Ingegneria Informatica",
    company_name: "Università degli Studi di Catania",
    icon: unict,
    iconBg: "#E6DEDD",
    date: "Agosto 2023 - Attuale",
    points: [
      "Formazione ingegneristica multidisciplinare su basi matematiche e fisiche (Analisi I-II, Algebra Lineare e Geometria, Fisica I-II) per modellare e risolvere problemi complessi.",
      "Competenze software complete: Fondamenti di Programmazione, Programmazione a Oggetti, Sistemi Operativi, Ingegneria del Software e Web Programming.",
      "Competenze data e AI: progettazione di database relazionali, uso avanzato di SQL e primi strumenti di Machine Learning applicati all'ICT.",
      "Competenze su sistemi intelligenti e connessi: architetture dei calcolatori, microcontrollori e IoT, Internet e Sicurezza, comunicazioni digitali e automazione.",
    ],
  },
  {
    title: "Responsabile Sviluppo Software",
    company_name: "FSC Racing Team",
    icon: fsc,
    iconBg: "linear-gradient(135deg, #b91c1c 0%, #1d4ed8 100%)",
    date: "Ottobre 2024 - Attuale",
    points: [
      "Sviluppo della piattaforma online del team.",
      "Gestione dell'ambiente di lavoro in GitHub e coordinamento del flusso di sviluppo.",
      "Membro del branco Management del Team.",
      "Implementazione di soluzioni software per ottimizzare i processi interni.",
    ],
  },
  {
    title: "Fondatore e Presidente",
    company_name: "GreenValley FC",
    icon: gvfc,
    iconBg: "#14532d",
    date: "Maggio 2024 - Attuale",
    points: [
      "Ideazione e creazione della squadra ufficiale di calcio a 5 di Valverde.",
      "Gestione organizzativa: reclutamento giocatori, coordinamento staff tecnico e pianificazione attivita.",
      "Supervisione degli aspetti burocratici e logistici per iscrizione ai campionati.",
      "Capo sviluppatore del sito ufficiale della squadra (gvfc.it).",
    ],
  },
  {
    title: "Servizio Civile Universale",
    company_name: "Misericordia di Valverde ODV",
    icon: mercy,
    iconBg: "#383E56",
    date: "Giugno 2024 - Giugno 2025",
    points: [
      "Manutenzione e gestione dei sistemi informatici dell'ente.",
      "Capo Sviluppatore del sito web ufficiale dell'organizzazione.",
      "Gestione dei rapporti con i pazienti nel contesto del trasporto sanitario.",
      "Responsabile della manutenzione e gestione dei veicoli.",
    ],
  },
  {
    title: "Diploma Tecnico Informatico",
    company_name: "ITIS Archimede Catania",
    icon: itarchimede,
    iconBg: "#383E56",
    date: "Settembre 2018 - Luglio 2023",
    points: [
      "Conseguimento del diploma con votazione 100/100.",
      "Partecipazione a progetti PON in ambito matematico, scientifico e informatico, laboratori di robotica e debate.",
      "Certificazioni ottenute: ICDL, Programmatore Python, BLS, Trinity B2, corsi CISCO in cybersecurity.",
      "Svolgimento del PCTO presso EHT S.C.p.A. consolidando competenze tecniche e organizzative.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Eagle1705/Portfolio",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Eagle1705/Portfolio",
    live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "Shoppy",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Eagle1705/Portfolio",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },
  {
    name: "TikTok Clone",
    description:
      "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Eagle1705/Portfolio",
    live_site_link: "https://tiktok-clone-react.vercel.app/",
  },
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/Eagle1705/Portfolio",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  {
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/Eagle1705/Portfolio",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@OPGAMER.",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Eagle1705",
  },
] as const;
