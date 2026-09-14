export const resumeUrl = "/Teslim%20Adetola%20Sadiq%20-%20Resume.pdf";
export const siteUrl = "https://teslimcodes.tech";
export const seoImage = `${siteUrl}/og-image.png`;

export const profile = {
  name: "Teslim Sadiq",
  shortName: "Teslim",
  role: "Software Engineer",
  location: "Lagos, Nigeria",
  timezone: "Africa/Lagos",
  email: "sadiqadetola08@gmail.com",
  summary:
    "I am a Software Engineer and Software Engineering Intern at Access Bank Plc, working across backend systems, product-facing interfaces, and AI-powered student tools.",
  current:
    "I excel at turning ambiguous product requirements into reliable systems: designing APIs, modeling data, building React and TypeScript interfaces, and shipping full-stack products that can serve real communities.",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Sadiq-Teslim", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sadiq-ta", icon: "linkedin" },
  { label: "X", href: "https://x.com/teslimcodes", icon: "x" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
] as const;

export const projects = [
  {
    year: "2026",
    title: "Nevo",
    source: "nevolearning.com",
    href: "https://nevolearning.com",
    description:
      "Adaptive learning platform with personalized content flows, AI-assisted lesson delivery, and student progress systems.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "BullMQ", "SLM", "React"],
  },
  {
    year: "2026",
    title: "PIDEC 1.0",
    source: "pidec.com.ng",
    href: "https://pidec.com.ng",
    description:
      "Faculty-wide engineering challenge platform with team registration, staged submissions, judging, and AI document checks.",
    stack: ["TypeScript", "Express", "Supabase", "BullMQ", "Redis", "Groq Vision", "Gemini"],
  },
  {
    year: "2026",
    title: "ThreadCraft",
    source: "github.com",
    href: "https://github.com/Sadiq-Teslim/lc-thread-posts",
    description:
      "Open-source LeetCode progress poster that turns daily problem-solving updates into publishable X threads.",
    stack: ["React", "FastAPI", "TypeScript", "Python", "X API"],
  },
  {
    year: "2025",
    title: "ECX LMS",
    source: "learn.ecx.com.ng",
    href: "https://learn.ecx.com.ng",
    description:
      "Learning management system for ECX UNILAG, covering course delivery, student dashboards, progress tracking, and admin workflows.",
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "React"],
  },
  {
    year: "2025",
    title: "ULES E-Voting Platform",
    source: "ules-vote.netlify.app",
    href: "https://ules-vote.netlify.app",
    description:
      "High-concurrency voting system used by 3,500+ students and built to process 20,000+ votes with real-time results.",
    stack: ["TypeScript", "Node.js", "Express", "MongoDB", "Redis", "WebSockets"],
  },
  {
    year: "2025",
    title: "FairPlay Africa",
    source: "fair-play-africa.vercel.app",
    href: "https://fair-play-africa.vercel.app",
    description:
      "AI content detection system for piracy monitoring, built with event-driven queues and low-latency matching workflows.",
    stack: ["React", "Node.js", "MongoDB", "Gemini AI", "Bull Queues"],
  },
  {
    year: "2025",
    title: "GPAi",
    source: "gpai.netlify.app",
    href: "https://gpai.netlify.app",
    description:
      "Academic planning assistant for students to simulate GPA outcomes and generate practical study plans.",
    stack: ["React", "TypeScript", "Gemini API", "Netlify Functions"],
  },
];

export const experience = [
  {
    role: "Software Engineering Intern",
    company: "Access Bank Plc",
    href: "https://www.linkedin.com/company/access-bank-plc/",
    period: "2026 - Present",
    description:
      "Gaining hands-on experience on real-world banking systems while learning from Access Bank's engineering team.",
  },
  {
    role: "Backend Engineer",
    company: "Nevo",
    href: "https://nevolearning.com",
    period: "2026 - Present",
    description:
      "Building backend systems for an adaptive learning platform for neurodivergent students, supporting product launch and AI-assisted learning workflows.",
  },
  {
    role: "Backend Engineering Intern",
    company: "Avzdax Technologies",
    href: "https://www.linkedin.com/company/avzdaxtech/",
    period: "2025 - 2026",
    description:
      "Advancing a peace-tech security initiative by pairing AI research with production-grade dashboards, threat-detection services, and hardened API workflows.",
  },
  {
    role: "Development Team Lead",
    company: "Engineering Career Expo",
    href: "https://www.linkedin.com/company/engineering-career-expo/",
    period: "2025 - 2026",
    description:
      "Led the ECX 6.0 development team, shipping the official website, LMS, forms platform, link management tool, and internal community infrastructure.",
  },
  {
    role: "Deputy Development Lead",
    company: "GDGoC UNILAG",
    href: "https://www.linkedin.com/company/dscunilag/",
    period: "2026 - Present",
    description:
      "Supporting developer community programs and technical experiences that help students get closer to the people and teams building technology in practice.",
  },
];

export const technicalSkills = [
  {
    category: "Languages & Frameworks",
    items: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "Express.js",
      "FastAPI",
      "Django",
      "Spring Boot",
      "React",
      "Next.js",
    ],
  },
  {
    category: "Databases & Caching",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "query optimization",
      "indexing strategies",
      "transactions",
      "rate limiting",
    ],
  },
  {
    category: "APIs & Integrations",
    items: ["REST", "GraphQL", "WebSockets", "JWT/OAuth2", "Paystack", "Stripe", "third-party API integrations"],
  },
  {
    category: "Frontend & Product Interfaces",
    items: [
      "React Query",
      "Zustand",
      "Redux",
      "Tailwind CSS",
      "Shadcn/ui",
      "Radix UI",
      "Figma",
      "responsive dashboards",
    ],
  },
  {
    category: "Infrastructure & DevOps",
    items: ["AWS S3", "AWS EC2", "Docker", "CI/CD", "GitHub Actions", "BullMQ", "Render", "Vercel"],
  },
  {
    category: "AI/ML Systems",
    items: [
      "SLM integration",
      "inference pipelines",
      "Gemini API",
      "content personalization",
      "ML-backed workflows",
    ],
  },
];

export const notes = [
  "9x hackathon winner across AI, cybersecurity, civic tech, fintech, and edtech.",
  "Strongest stack: TypeScript, Node.js, React, Python, FastAPI, PostgreSQL, MongoDB, Redis.",
  "Focused on software engineering roles where product speed and engineering depth both matter.",
];
