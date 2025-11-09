export type ExperienceMetric = {
  label: string;
  value: string;
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  stack: string[];
  metrics: ExperienceMetric[];
};

export const experienceData: ExperienceItem[] = [
  {
    id: "avzdax-obex-edge",
    company: "Avzdax Technologies",
    role: "Fullstack Engineer Intern",
    period: "2025 – Present",
    location: "Lekki, Lagos",
    description:
      "Contributing to a confidential mobility security initiative at Avzdax Technologies.",
    achievements: [
      "Partner with cross-functional squads to deliver secure API and dashboard increments under NDA constraints.",
      "Ship fullstack updates that align with internal safety reviews and stakeholder rollout plans.",
      "Collaborate with product and research pods to prioritise improvements while protecting sensitive details.",
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Python", "TensorFlow"],
    metrics: [
      { label: "Focus", value: "Confidential security R&D" },
      { label: "Delivery", value: "Fullstack increments" },
      { label: "Tenure", value: "2025–Present" },
    ],
  },
  {
    id: "webderk-site-ops",
    company: "WebDerk",
    role: "Technical Lead (Contract)",
    period: "2024 – Present",
    location: "Remote",
    description:
      "Keeping the WebDerk marketplace performant while growing its subscription catalogue for creators.",
    achievements: [
      "Guard uptime while rolling out UI and checkout improvements that help customers unlock Canva Pro, GPT Pro, and CapCut Pro tiers without friction.",
      "Automate catalogue and pricing syncs between the marketing site and Node utilities so new digital products ship in under 30 minutes.",
      "Instrument conversion analytics and A/B experiments to keep refund and support turnaround below 24 hours.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Stripe", "PostgreSQL"],
    metrics: [
      { label: "Catalogue", value: "Multi-product SaaS bundles" },
      { label: "Support SLA", value: "<24h" },
      { label: "Tenure", value: "2024–Present" },
    ],
  },
];
