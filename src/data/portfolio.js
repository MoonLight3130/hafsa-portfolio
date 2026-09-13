/**
 * Centralized Portfolio Data Configuration
 * Modify any developer profile details, statistics, skills, services, projects, or links here.
 */

export const portfolioData = {
  personal: {
    name: "Hafsa Nishad",
    role: "Frontend Developer",
    secondaryRole: "UI/UX & Full-Stack Specialist",
    greeting: "Hello, I'm",
    bio: "I build responsive, user-friendly, and performant web applications that deliver exceptional user experiences.",
    extendedBio: "I am a passionate frontend developer and UI/UX engineer with over a decade of experience crafting high-impact digital experiences. My work bridges the gap between intricate design systems and robust, scalable web architectures. From high-throughput fintech platforms to AI-driven workflow engines, I prioritize micro-interactions, accessibility, and high performance in every project.",
    signatureText: "Hafsa",
    logoText: "Hafsa",
    avatar: "https://res.cloudinary.com/nmrxsjhh/image/upload/v1789282408/1779864870663_xf6j1p.jpg",
    resumeUrl: "/resume.pdf",
    email: "chandni.chauhan@example.com",
    location: "San Francisco, CA / Remote",
    status: "Available for freelance & full-time roles",
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "Linkedin",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com",
      icon: "Twitter",
    },
    {
      name: "Email",
      url: "mailto:chandni.chauhan@example.com",
      icon: "Mail",
    },
  ],

  // 4 Key Stat Cards shown directly below Hero
  stats: [
    {
      id: "stat-experience",
      number: "1+",
      label: "Years of Experience",
      icon: "Award",
    },
    {
      id: "stat-projects",
      number: "6+",
      label: "Projects Completed",
      icon: "CodeXml",
    },
    {
      id: "stat-tech",
      number: "5+",
      label: "Technologies Mastered",
      icon: "Layers",
    },
    {
      id: "stat-clients",
      number: "10+",
      label: "Happy Clients",
      icon: "Users",
    },
  ],

  about: {
    title: "Crafting Digital Experiences with Precision",
    description:
      "With over a decade of deep involvement in modern web technologies, I focus on turning complex systems into elegant, intuitive, and responsive user experiences.",
    highlights: [
      {
        title: "Modern Frontend Architecture",
        desc: "Specialized in React, Next.js, and TypeScript with atomic design systems.",
      },
      {
        title: "Performance & Accessibility",
        desc: "Obsessed with 60fps animations, Core Web Vitals, and WCAG accessibility standards.",
      },
      {
        title: "Full-Stack Integration",
        desc: "Seamlessly connecting frontends with Node.js, Express, MongoDB, and GraphQL APIs.",
      },
    ],
    education: [
      {
        degree: "B.S. in Computer Science",
        institution: "Tech University",
        year: "2013 - 2017",
      },
      {
        degree: "Advanced Human-Computer Interaction",
        institution: "Design & UX Institute",
        year: "2018",
      },
    ],
    interests: ["Design Systems", "Generative AI", "Micro-animations", "Open Source", "Creative Coding"],
  },

  skills: [
    { name: "React.js", category: "Frontend", level: "Expert" },
    { name: "JavaScript (ES6+)", category: "Frontend", level: "Expert" },
    { name: "TypeScript", category: "Frontend", level: "Advanced" },
    { name: "Next.js", category: "Frontend", level: "Advanced" },
    { name: "Tailwind CSS", category: "Frontend", level: "Expert" },
    { name: "HTML5 / CSS3", category: "Frontend", level: "Expert" },
    { name: "Framer Motion", category: "Frontend", level: "Advanced" },
    { name: "GSAP", category: "Frontend", level: "Intermediate" },
    { name: "Node.js", category: "Backend", level: "Advanced" },
    { name: "Express.js", category: "Backend", level: "Advanced" },
    { name: "MongoDB / Mongoose", category: "Backend", level: "Advanced" },
    { name: "REST & GraphQL", category: "Backend", level: "Advanced" },
    { name: "Git & GitHub", category: "Tools", level: "Expert" },
    { name: "Docker", category: "Tools", level: "Intermediate" },
    { name: "Vite", category: "Tools", level: "Expert" },
    { name: "Figma to Code", category: "Design", level: "Expert" },
  ],

  services: [
    {
      id: "web-dev",
      title: "Web Development",
      description: "Modern, blazing-fast, and responsive websites built with React and cutting-edge web standards.",
      icon: "Layout",
    },
    {
      id: "ui-ux",
      title: "UI/UX Implementation",
      description: "Pixel-perfect translations of Figma designs into accessible, interactive, and production-ready code.",
      icon: "Palette",
    },
    {
      id: "full-stack",
      title: "Full-Stack Development",
      description: "Complete scalable solutions combining React frontends with resilient Express and MongoDB backends.",
      icon: "Server",
    },
    {
      id: "ai-apps",
      title: "AI-Powered Applications",
      description: "Integration of modern LLMs, neural canvases, and intelligent workflow automation into web apps.",
      icon: "Sparkles",
    },
    {
      id: "automation",
      title: "Business Automation",
      description: "Custom dashboards and workflow tools designed to streamline operations and eliminate manual friction.",
      icon: "Cpu",
    },
    {
      id: "cloud-deploy",
      title: "Cloud Deployment",
      description: "End-to-end continuous deployment, performance optimization, and scalable cloud hosting configurations.",
      icon: "Cloud",
    },
  ],

  projects: [
    {
      id: "fintech-analytics",
      title: "FinTech Analytics Suite",
      category: "Full Stack",
      description: "Real-time institutional trading analytics dashboard featuring live green metrics, transaction streams, and low-latency chart visualizations.",
      image: "/images/project-1.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      id: "neural-canvas",
      title: "Neural Canvas AI Studio",
      category: "AI",
      description: "Visual node-based workflow editor for orchestrating generative AI multi-model synthesis pipelines and prompt workflows.",
      image: "/images/project-2.jpg",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Express.js"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      id: "lux-commerce",
      title: "Omni-Channel Commerce",
      category: "Web",
      description: "High-performance headless e-commerce store with 99+ Core Web Vitals, instant page transitions, and integrated Stripe checkout.",
      image: "/images/project-3.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      id: "cloud-monitor",
      title: "Cloud Infrastructure Monitor",
      category: "Client Projects",
      description: "Enterprise DevOps telemetry console providing cluster health tracking, memory leak warnings, and automated incident logs.",
      image: "/images/project-4.jpg",
      technologies: ["React", "Node.js", "Express", "REST API"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
  ],

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
};
