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
    role: "Fullstack Engineer",
    period: "2025 – Present",
    location: "Lekki, Lagos",
    description:
      "Co-building Obex Edge, a predictive security platform that senses vehicle threats before they escalate.",
    achievements: [
      "Own telemetry ingestion pipelines and React command interfaces so operators receive pre-emptive alerts across shifts.",
      "Ship both Node microservices and dashboard UX to visualise risk timelines and remediation playbooks for two stakeholder groups.",
      "Benchmark model performance with the product and research pods, tightening false positives through weekly iterations.",
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Python", "TensorFlow"],
    metrics: [
      { label: "Focus", value: "Predictive vehicle security" },
      { label: "Surfaces", value: "APIs + Command UI" },
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
