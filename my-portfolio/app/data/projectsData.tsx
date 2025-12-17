import fairplayImage from "../assets/fairplay-thumbnail.svg";
import agroscanImage from "../assets/agroscan-thumbnail.png";
import kulaImage from "../assets/kula-thumbnail.png";
import ulesVotingImage from "../assets/ules-voting-thumbnail.png";
import echowatchImage from "../assets/echowatch-thumbnail.png";
import ulesTicketingImage from "../assets/ules-ticketing-thumbnail.png";
import gpaiImage from "../assets/gpai-thumbnail.png";
import nevoImage from "../assets/techstars-thumbnail.png";
import aegisImage from "../assets/verifact-thumbnail.png";
import yarngptImage from "../assets/deenwise-thumbnail.png";

export type ProjectData = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  techStack: string[];
  description: string;
  longDescription: string[];
  liveUrl: string;
  repoUrl: string;
  backendRepoUrl?: string;
};

export const projectsData: ProjectData[] = [
  {
    id: "fairplay-africa",
    title: "FairPlay Africa",
    category: "AI | Entertainment Security",
    imageUrl: fairplayImage,
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Gemini AI"],
    description:
      "ACM 2025 grand-prize piracy watchtower protecting Nollywood titles with sub-300ms detection sweeps.",
    longDescription: [
      "FairPlay Africa tackles revenue leaks for African filmmakers by automating piracy surveillance across high-risk channels.",
      "A decoupled Next.js dashboard pairs with Node.js and MongoDB services to fingerprint catalog assets and issue enforcement reports in under 300ms.",
      "Producers receive takedown-ready evidence packs, while Gemini AI summarises threat patterns for rapid follow-up across legal and operations teams.",
      "Won the ACM 2025 grand prize (NGN 10M / $6.5K) after demonstrating measurable protection for Nollywood releases.",
    ],
    liveUrl: "https://fair-play-africa.vercel.app",
    repoUrl: "https://github.com/Sadiq-Teslim/fair-play-africa",
  },
  {
    id: "ules-voting-platform",
    title: "ULES Awards Voting Platform",
    category: "Web App | CivicTech",
    imageUrl: ulesVotingImage,
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Chart.js",
    ],
    description:
      "Secure e-voting stack verifying 3,500+ students and streaming 20,000+ ballots in real time with Paystack-backed validation and audit logs.",
    longDescription: [
      "I solved the issues of voting fraud and result delays by building a secure, real-time e-voting platform for the ULES Awards. The platform successfully collected 20,000+ votes from 3,500+ verified students.",
      "A React + TypeScript SPA feeds an Express + MongoDB backend that streams live dashboards and exports auditor-ready PDFs.",
      "20K+ ballots sync in real time so stakeholders maintain transparency without sacrificing speed or uptime.",
    ],
    liveUrl: "https://ules-vote.netlify.app",
    repoUrl: "https://github.com/Sadiq-Teslim/ules-voting",
    backendRepoUrl: "https://github.com/Sadiq-Teslim/ules-voting-backend",
  },
  {
    id: "gpai-assistant",
    title: "GPAi - AI GPA Assistant",
    category: "Web App | Education",
    imageUrl: gpaiImage,
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Netlify Functions",
      "Google Gemini API",
    ],
    description:
      "AI GPA mentor that has helped 2,000+ undergraduates simulate grades and auto-build study plans.",
    longDescription: [
      "GPAi supports students who previously stitched spreadsheets and guesswork to plan their semesters.",
      "The React interface calls Netlify Functions that orchestrate Google Gemini prompts to forecast GPA trajectories and surface risky courses.",
      "Students receive personalised study nudges and printable action plans designed for quick academic interventions.",
    ],
    liveUrl: "https://gpai.netlify.app",
    repoUrl: "https://github.com/Sadiq-Teslim/gpai-web",
  },
  {
    id: "kula-ai-companion",
    title: "Kula - AI Companion for New Mothers",
    category: "Web App | HealthTech",
    imageUrl: kulaImage,
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "Google Gemini",
      "TensorFlow.js",
    ],
    description:
      "Offline-first maternal health copilot guiding 1.2k+ mothers with multilingual AI triage and cached care plans.",
    longDescription: [
      "Kula keeps maternal care within reach for low-bandwidth communities by blending AI chat, symptom scans, and SMS fallbacks.",
      "Google Gemini powers bilingual conversations (English and Yoruba) while TensorFlow.js models assess infant images directly in the browser.",
      "The PWA layers React, TypeScript, and Node.js services so cached care plans sync instantly once connectivity returns.",
    ],
    liveUrl: "https://use-kula.netlify.app",
    repoUrl: "https://github.com/Sadiq-Teslim/kula-website",
  },
  {
    id: "echowatch-threat-detection",
    title: "EchoWatch - AI Threat Detection System",
    category: "Web App | Security",
    imageUrl: echowatchImage,
    techStack: ["HTML5", "TailwindCSS", "JavaScript", "TensorFlow.js"],
    description:
      "Browser threat monitor flagging risks in roughly 80ms with audible alerts for volunteer security teams.",
    longDescription: [
      "EchoWatch equips operations teams with real-time vision analytics without buying new hardware.",
      "TensorFlow.js models run directly in the browser to flag anomalies in about 80ms and trigger audible alarms for instant response.",
      "The project secured an Avzdax Hackathon win thanks to lightweight deployment that works on commodity laptops.",
    ],
    liveUrl: "https://echowatch.netlify.app",
    repoUrl: "https://github.com/Sadiq-Teslim/echowatch",
  },
  {
    id: "ules-ticketing-portal",
    title: "ULES Dinner & Awards Ticketing Portal",
    category: "Web App | Events",
    imageUrl: ulesTicketingImage,
    techStack: [
      "HTML5",
      "TailwindCSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Paystack API",
    ],
    description:
      "Paystack-driven ticketing funnel clearing 1.4k+ dinner passes at a 94% checkout completion rate.",
    longDescription: [
      "This portal replaced manual spreadsheets with an automated ticketing pipeline covering seat tiers, add-ons, and email receipts.",
      "React pages talk to a Node.js service that verifies Paystack transactions, reconciles orders, and issues branded confirmations.",
      "The glassmorphism UI keeps the event premium while conversion tracking surfaces a 94% checkout completion rate.",
    ],
    liveUrl: "https://ticketgenerator-rho.vercel.app",
    repoUrl: "https://github.com/Sadiq-Teslim/ticketgenarator",
  },
  {
    id: "agroscan-ai-diagnostic",
    title: "AgroScan - AI Crop Disease Diagnostic",
    category: "AI | Agriculture",
    imageUrl: agroscanImage,
    techStack: [
      "React",
      "TensorFlow Lite",
      "Twilio SMS",
      "Node.js",
      "Google Sheets",
      "Vite",
    ],
    description:
      "Low-bandwidth crop diagnostics piloted with 500+ farmers and 2G-ready SMS reporting.",
    longDescription: [
      "AgroScan addresses rural crop loss by providing an accessible diagnostic system that runs on low-end Android devices.",
      "Preloaded TensorFlow Lite models score leaf scans offline while Twilio SMS fallbacks capture incident reports when photos are impossible.",
      "A React/Vite UI syncs treatment advice to Google Sheets once connectivity returns, keeping agronomists in the loop for 500+ pilot farmers.",
    ],
    liveUrl: "https://www.agroscan.com.ng",
    repoUrl: "https://github.com/Sadiq-Teslim/agroscan",
  },
  {
    id: "nevo-adaptive-learning",
    title: "Nevo - Adaptive Learning Coach",
    category: "AI | Inclusive Education",
    imageUrl: nevoImage,
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "Google Gemini",
      "Web Speech API",
    ],
    description:
      "3MTT South-West champion adapting lesson flows for neurodivergent learners via realtime cognitive signals.",
    longDescription: [
      "Nevo personalises study plans for neurodivergent learners by blending onboarding surveys, focus insights, and AI-generated lesson variants.",
      "Next.js and Supabase sync telemetry while Gemini prompts craft micro-lessons, spoken cues, and calm-state interventions in under 200ms.",
      "The build won the 3MTT South-West regional hackathon and was profiled by TechCabal for bridging inclusive learning gaps.",
    ],
    liveUrl: "https://nevo-app.vercel.app",
    repoUrl: "https://github.com/Sadiq-Teslim?tab=repositories",
  },
  {
    id: "aegis-ai-anti-phishing",
    title: "Aegis AI - Anti-Phishing Radar",
    category: "Security | AI",
    imageUrl: aegisImage,
    techStack: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "OpenCV",
      "Google Gemini",
      "PostgreSQL",
    ],
    description:
      "AfriHackBox-winning inbox radar flagging phishing payloads with explainable AI scoring and USD 1,000 prize traction.",
    longDescription: [
      "Aegis AI ingests email headers, DOM snapshots, and attachment hashes before running FastAPI + Gemini heuristics for phishing probability.",
      "Security teams get a React dashboard with traffic-light verdicts, OpenCV-powered screenshot diffs, and webhook alerts for escalations.",
      "The project clinched first place at AfriHackBox 2025 after demonstrating measurable reductions in simulated breaches.",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/Sadiq-Teslim?tab=repositories",
  },
  {
    id: "yarngpt-yoruba-nlp",
    title: "YarnGPT Yoruba NLP Contributions",
    category: "AI | Language",
    imageUrl: yarngptImage,
    techStack: ["Python", "TensorFlow", "Hugging Face", "FastAPI", "PostgreSQL"],
    description:
      "Open-source Yoruba NLP work restoring tone marks and idioms for YarnGPT's conversational models.",
    longDescription: [
      "Curated and cleaned thousands of Yoruba utterances, aligning tone marks and idioms so YarnGPT could respond contextually.",
      "Fine-tuned TensorFlow + Hugging Face models for tone restoration, then wrapped inference inside FastAPI endpoints for community bots.",
      "Helps Yoruba-first communities access AI copilots with culturally accurate phrasing, reducing hallucinations in tests by 28%.",
    ],
    liveUrl: "https://x.com/teslimadetola08",
    repoUrl: "https://github.com/Sadiq-Teslim?tab=repositories",
  },
];
