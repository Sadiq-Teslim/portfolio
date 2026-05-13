export const resumeUrl = "/Teslim%20Adetola%20Sadiq%20-%20Resume.pdf";

export const profile = {
  name: "Teslim Sadiq",
  shortName: "Teslim",
  role: "Software Engineer",
  location: "Lagos, Nigeria",
  timezone: "Africa/Lagos",
  email: "sadiqadetola08@gmail.com",
  summary:
    "I build scalable web systems across edtech, fintech, civic tech, and AI products. I work mostly with TypeScript, Node.js, React, Python, FastAPI, PostgreSQL, MongoDB, and Redis.",
  current:
    "Currently building Nevo, improving my systems design and DSA fundamentals, and looking for software engineering roles where product speed and engineering depth both matter.",
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
    title: "PIDEC 1.0",
    source: "pidec.pxxl.click",
    href: "https://pidec.pxxl.click",
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
    title: "Nevo",
    source: "github.com",
    href: "https://github.com/Sadiq-Teslim/nevo-app",
    description:
      "Adaptive learning platform with personalized content flows, AI-assisted lesson delivery, and student progress systems.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "BullMQ", "SLM", "React"],
  },
  {
    year: "2025",
    title: "ECX LMS",
    source: "internal platform",
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
    role: "Founding Backend Engineer",
    company: "Nevo",
    period: "2025 - Present",
    description:
      "Architecting the adaptive learning backend with FastAPI, PostgreSQL, Redis, async workers, and AI content personalization.",
  },
  {
    role: "Lead Software Engineer",
    company: "FAP Game",
    period: "2024 - Present",
    description:
      "Leading web, game backend, leaderboard, real-time event infrastructure, and deployment architecture.",
  },
  {
    role: "Software Engineer",
    company: "Avzdax Technologies",
    period: "2023 - Present",
    description:
      "Building FastAPI microservices, production dashboards, and ML-backed data workflows for real-time security platforms.",
  },
  {
    role: "Technical Lead",
    company: "ECX UNILAG",
    period: "2023 - Present",
    description:
      "Leading student developers and shipping community tools including LMS, forms, commerce, and internal systems.",
  },
];

export const notes = [
  "9x hackathon winner across AI, cybersecurity, civic tech, fintech, and edtech.",
  "Strongest stack: TypeScript, Node.js, React, Python, FastAPI, PostgreSQL, MongoDB, Redis.",
  "Focused on software engineering roles where product speed and engineering depth both matter.",
];
