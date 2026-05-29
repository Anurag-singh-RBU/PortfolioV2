export const navLinks = [
  {
    path: "/",
    name: "About",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/experience",
    name: "Experience",
  },
  {
    path: "/resume",
    name: "Resume",
  },
];

export const notableAchievements = [
  {
    title: "Smart India Hackathon",
    body: [
      { text: "Made it to " },
      { text: "SIH 2023", bold: true },
      {
        text: " in my very first semester of college. Didn't really know what I was doing but figured it out.",
      },
    ],
  },

  {
    title: "Rise In bounty",
    body: [
      { text: "Got a bounty from " },
      { text: "Rise In", bold: true },
      { text: " for a project that lets people lend money on " },
      { text: "Ethereum", bold: true },
      { text: " and build an actual " },
      { text: "credit score on-chain", bold: true },
      {
        text: ". Built flows for issuing loans, tracking active borrows, repayments, and defaulter marking with transparent contract-backed state. No banks, just smart contracts.",
      },
    ],
    link: "https://github.com/Anurag-singh-RBU/lending-blockchain",
    linkLabel: "lending-blockchain on GitHub",
  },
  {
    title: "In the news",
    body: [
      { text: "Got featured in a " },
      { text: "national newspaper", bold: true },
      { text: " for building a " },
      { text: "fine-tuned LLM on the Assamese language", bold: true },
      {
        text: ", one of the first of its kind for a low-resource Indian language.",
      },
    ],
  },
  {
    title: "Side project at scale",
    body: [
      { text: "Built " },
      { text: "AnimeTrix", bold: true },
      { text: ", an anime streaming site, hit around " },
      { text: "15,000 users", bold: true },
      { text: " and was handling " },
      { text: "100 concurrent viewers", bold: true },
      {
        text: " at peak using web scraping and some creative infra decisions. Had to take it down after a DMCA. The repo still has ",
      },
      { text: "~190 stars", bold: true },
      { text: "." },
    ],
    link: "https://github.com/Anurag-singh-RBU/AnimeTrix-next",
    linkLabel: "AnimeTrix on GitHub",
  },
];

export const intros = [
  "Software Engineer",
  "Graphic Designer",
  "Web Developer",
  "Problem Solver",
  "Creative Thinker",
  "Coffee Addict",
  "Tech Geek",
  "Data Operations Intern"
];

export const experiences = [
  {
    role: "Data Operations Intern",
    year: "May 2026 - June 2026",
    company: "Nexora",
    type: "Internship",
    location: "Bangalore, India",
    logo: "/Company/nexora.png",
    logoPadding: true,
    invertLogo: true,
    responsibility: [
      [
        { text: "Designed and implemented a multi layered Data Warehouse architecture using " },
        { text: "Bronze, Silver and Gold ", bold: true },
        { text: " layers for structured data processing." },
        { text: " Automated data ingestion pipelines from disparate sources " },
        { text: " for clients" },
      ],
      [
        { text: "Processed and transformed " },
        { text: "50,000+ sales records ", bold: true },
        { text: " using advanced SQL queries including Joins, CTEs, Window Functions and Aggregate Functions." },
      ],
      [
        { text: "Improved query performance by " },
        { text: "40%", bold: true },
        { text: " using Indexing and Query Optimization techniques in MySQL. Developed " },
        { text: "ETL", bold: true },
        { text: " scripts to clean, normalize and load data into the warehouse, ensuring data integrity and consistency." },
      ]
    ],
    techstacks: ["MySQL", "SQL", "ETL", "Data Warehousing"],
  },
  {
    role: "Freelance",
    year: "Feb 2026 - March 2026",
    company: "Shadcn Blocks",
    type: "Part time",
    location: "India, Remote",
    logo: "/Company/shadcnblocks.webp",
    logoPadding: true,
    responsibility: [
      [
        { text: "Built " },
        {
          text: "58",
          bold: true,
        },
        { text: " reusable UI blocks with React js, JavaScript and Tailwind so developers can copy paste and use them right away." },
      ],
      [
        { text: "Published everything on " },
        { text: "ShadcnBlocks.com. ", bold: true },
        { text: "Developers use and buy these blocks. " },
        { text: "It has 5K+", bold: true },
        { text: " page views" },
        { text: ", " },
        { text: " 500+", bold: true },
        { text: " users. " },
      ],
      [
        { text: "Focused on " },
        { text: "developer experience", bold: true },
        { text: " by implementing clean abstractions, minimal configuration setup and copy paste usability, improving adoption and usability for end developers." }
      ],
    ],
    techstacks: [
      "Javascript",
      "Tailwind",
      "ReactJS",
      "Shadcn",
      "Framer Motion"
    ],
  },
  {
    role: "Full Stack Intern",
    year: "Feb 2025 - June 2025",
    company: "ACADME",
    type: "Part time",
    location: "New York, Remote",
    logo: "/Company/prepeasy.webp",
    logoPadding: true,
    invertLogo: true,
    responsibility: [
      [
        {
          text: "Worked on a web application called ",
        },
        { text: "NeuroLearn.", bold: true },
        { text: " It provides personalized learning paths, interactive content and real time feedback for neurodivergent students, improving engagement and educational outcomes." },
      ],
      [
        { text: "Containerized using " },
        { text: "Docker", bold: true },
        {
          text: " and deployed on ",
        },
        {
          text: " AWS (ECS Fargate + ALB + ECR) ", bold: true,
        },
        { text: " with CI/CD pipelines for streamlined updates and maintenance." },
      ],
      [
        { text: "Reducing environment setup time and handling " },
        { text: "~300+ concurrent requests", bold: true },
        { text: " with optimized backend services and scalable infrastructure." },
      ],
      [
        { text: "Integrated " },
        { text: "OpenAI SDK", bold: true },
        {
          text: " with secure secret injection (ENV or KMS style). Added ",
        },
        { text: "FIREBASE24", bold: true },
        { text: " backed PDF Notes pipeline with versioned storage, shareable access tokens and atomic sync for team ready documentation" },
      ],
      [
        { text: "Optimized " },
        { text: "UI components and flows", bold: true },
        { text: " for better user experience and accessibility, contributing to a more inclusive learning platform." },
      ]
    ],
    techstacks: [
      "Next",
      "Node JS",
      "Express",
      "MongoDB",
      "Tailwind",
      "Shadcn",
      "OpenAI",
      "Firebase",
      "XYFlow",
      "jsPDF",
      "Docker",
    ],
  },
];

export const projects = [
  {
    title: "Shadyx UI",
    category: "Goto Project · Web App",
    description:
      "UI components library that offers awesome reusable components for building web applications, create stunning websites and enjoy the flow  from COPY to VIBE.",
    techstacks: ["Next", "TypeScript", "Tailwind", "Convex", "Monaco"],
    status: "active",
    link: "https://shadyxui.in/",
    preview: "/projects/SHADYX.png",
    previewDark: "/projects/SHADYX.png",
    github: "Anurag-singh-RBU/SHADYX-UI",
  },
  {
    title: "Axion",
    category: "Open Source · Github",
    description:
      "A full featured project management platform designed to streamline team's task tracking and team collaboration through dashboards that is customizable workflows and real time updates.",
    techstacks: ["Next", "Javascript", "Tailwind", "Hono", "Appwrite"],
    status: "active",
    link: "https://vectrus.vercel.app",
    preview: "/projects/axion.png",
    previewDark: "/projects/axion.png",
    github: "Anurag-singh-RBU/Axion",
  },
  {
    title: "FuGu",
    category: "Networking Project · Web App",
    description:
      "Networking platform designed to help users connect and interact. Enables users to create profiles, share updates, communicate in real time and expand their network through a social experience.",
    techstacks: ["Next", "Javascript", "Tailwind", "Node.js", "MongoDB", "Socket.IO"],
    status: "active",
    link: "https://sonification.anuragsingh.codes",
    preview: "/projects/FUGU.png",
    previewDark: "/projects/FUGU.png",
    github: "Anurag-singh-RBU/image-sonification",
  },
];

export const research = [
  {
    title:
      "PolySpeech-HS: Multilingual Non-Autoregressive Text-to-Speech Synthesis with Hidden-State Adapters",
    category: "Speech Synthesis & Multilingual AI",
    description:
      "A non-autoregressive text-to-speech (TTS) multilingual synthesis framework designed to address the linguistic diversity and real-time deployment challenges of Indian languages. By deploying a unified encoder-decoder architecture paired with lightweight hidden-state adapters, PolySpeech-HS enables efficient cross-lingual generalization while preserving language-specific prosodic nuances. Achieved state-of-the-art performance with MOS of 4.30, MCD of 4.7 dB, and RTF of 0.13 across six Indian languages.",
    techstacks: [
      "TTS",
      "Non-Autoregressive",
      "Hidden-State Adapters",
      "Multilingual AI",
      "Indian Languages",
      "AMO-HSA",
    ],
    status: "under-review",
    link: "#",
    journal: "IEEE Transactions on Audio, Speech and Language Processing",
    year: "2025",
    collaboration: "Vellore Institute of Technology",
  },
  {
    title:
      "A Novel Data-Centric Transformer Fine-Tuning: A Modular Framework for Rapid Domain Adaptation and Deployment",
    category: "Large Language Models & Domain Adaptation",
    description:
      "A data-centric, hardware-light workflow for fine-tuning transformers that sidesteps costly LLM APIs. Automatically scrapes high-signal web content and converts it into Q&A pairs to fine-tune a GPT-2-Medium model (355M parameters) in ~7 minutes on a single RTX-3060. Achieves 67.3% accuracy (+34% over base model) with 1.4s median latency and zero inference cost.",
    techstacks: [
      "GPT-2",
      "LoRA",
      "8-bit Adam",
      "Domain Adaptation",
      "Next.js",
      "Q&A Generation",
      "Fine-tuning",
    ],
    status: "under-review",
    link: "#",
    journal: "IEEE Transactions on Computational Social Systems",
    year: "2025",
    collaboration: "Vellore Institute of Technology",
  },
  {
    title:
      "Fine-Tuning Mistral 22B: The First Large Language Model for Assamese Language Tasks",
    category: "Low-Resource Language Processing",
    description:
      "The first fine-tuned Large Language Model specifically engineered for Assamese, a low-resource Indo-Aryan language spoken by approximately 15 million individuals. Introduces AssamText-750K dataset and custom Unicode mapping system exclusively for Assamese. This pioneering work becomes the first and only Assamese LLM backed by language-specific Unicode infrastructure, achieving 20% average improvement across text generation fluency, sentiment analysis accuracy, and Assamese-to-English translation quality.",
    techstacks: [
      "Mistral 22B",
      "LoRA",
      "Unicode Mapping",
      "Assamese NLP",
      "Low-Resource Languages",
      "AssamText-750K",
    ],
    status: "under-review",
    link: "#",
    journal: "IEEE Transactions on Neural Networks and Learning Systems",
    year: "2025",
    collaboration: "Vellore Institute of Technology",
  },
];
