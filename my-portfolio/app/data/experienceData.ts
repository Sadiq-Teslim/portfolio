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
      "Advancing a peace-tech security initiative by pairing AI research with production-grade dashboards at Avzdax Technologies.",
    achievements: [
      "Prototype and productionise threat-detection dashboards that fuse React, Node.js, and TensorFlow services for <250ms alerting.",
      "Extend OpenCV pipelines into hardened APIs so operations teams can triage anomalies without exposing confidential datasets.",
      "Partner with research pods to plan sprint scopes, instrument telemetry, and shepherd releases through NDA compliance.",
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Python", "TensorFlow"],
    metrics: [
      { label: "Focus", value: "Threat detection & safety R&D" },
      { label: "Latency", value: "<250ms dashboard sweeps" },
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
      "Keeping the WebDerk marketplace performant while scaling multi-product SaaS for creators.",
    achievements: [
      "Orchestrate TypeScript + Node.js services, Docker builds, and CI/CD so launches stay within a <24h support SLA.",
      "Automate catalogue and pricing syncs across marketing pages and fulfillment utilities, shrinking SKU rollout to under 30 minutes.",
      "Ship UI and checkout experiments that lifted conversion by 15% while Stripe reconciliation stays audit-ready.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Stripe", "PostgreSQL"],
    metrics: [
      { label: "Conversion Lift", value: "+15% checkouts" },
      { label: "Support SLA", value: "<24h" },
      { label: "Tenure", value: "2024–Present" },
    ],
  },
  {
    id: "ecx-unilag-dev-lead",
    company: "ECX UNILAG",
    role: "Development Lead",
    period: "Oct 2025 – Present",
    location: "Akoka, Lagos",
    description:
      "Leading the ECX UNILAG engineering pod to ship community tools, merch funnels, and learning platforms with measurable reach.",
    achievements: [
      "Manage a squad of 10+ student developers, steering roadmaps, code reviews, and mentorship cadences.",
      "Rebuilt the ECX Go link shortener and analytics service, halving redirect latency while adding regional insights.",
      "Launched the ECX merch store (NGN 500k+ in week-one preorders) and a modular LMS powering 1,000+ community learners.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Paystack"],
    metrics: [
      { label: "Team", value: "10+ builders" },
      { label: "Revenue", value: "NGN 500k+ week one" },
      { label: "Learners", value: "1,000+ onboarded" },
    ],
  },
];
