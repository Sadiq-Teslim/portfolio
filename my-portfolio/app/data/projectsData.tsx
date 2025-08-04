import verifactImage from "../assets/verifact-thumbnail.png";
import agroscanImage from "../assets/agroscan-thumbnail.png";
import deenwiseImage from "../assets/deenwise-thumbnail.png";
import techstarsImage from "../assets/techstars-thumbnail.png";
import botImage from "../assets/bot_image.png";
import trackerImage from "../assets/progesstracker.png";
import kulaImage from "../assets/kula-thumbnail.png";
import ulesVotingImage from "../assets/ules-voting-thumbnail.png";
import echowatchImage from "../assets/echowatch-thumbnail.png";
import ulesTicketingImage from "../assets/ules-ticketing-thumbnail.png";
import gpaiImage from "../assets/gpai-thumbnail.png";
import healthhaloImage from "../assets/healthhalo-thumbnail.png";

export const projectsData = [
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
      "A multi-modal AI-powered web app offering maternal health support through chat, image analysis, and early warnings.",
    longDescription: [
      "Kula is a Progressive Web App designed for new mothers, providing conversational AI (in English & Yoruba) and AI-driven visual analysis of infant symptoms.",
      "It uses Google Gemini for natural language processing and custom TensorFlow.js models for real-time image classification.",
      "Built with React, TypeScript, and Node.js for seamless performance and deployed as a PWA for accessibility on any device.",
    ],
    liveUrl: "https://use-kula.netlify.app",
    repoUrl: "https://github.com/Sadiq-Teslim/kula-website",
  },
  {
    id: "ules-voting-platform",
    title: "ULES Awards Voting Platform",
    category: "Web App | Community",
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
      "A secure full-stack voting platform for the University of Lagos Engineering Society Awards with live dashboards and admin controls.",
    longDescription: [
      "The platform supports secure student validation, one-person-one-vote enforcement, and a nomination system for award categories.",
      "It features a live admin dashboard with auto-refreshing results, charts, and exportable PDFs.",
      "Frontend is built with React/TypeScript, backend with Node.js and MongoDB, and deployed on Netlify & Render.",
    ],
    liveUrl: "https://ules-vote.netlify.app",
    repoUrl: "https://github.com/Sadiq-Teslim/ules-voting",
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
      "A multi-step event ticketing system with secure Paystack payment integration and a modern UI.",
    longDescription: [
      "Built for the ULES Annual Dinner & Awards Night, this portal features a stunning landing page and seamless ticket purchase flow.",
      "It includes real-time cart summaries, modal-based checkout, and secure payment processing with Paystack API.",
      "The UI uses modern glassmorphism styling for a premium event experience.",
    ],
    liveUrl: "https://ticketgenerator-rho.vercel.app",
    repoUrl: "https://github.com/Sadiq-Teslim/ticketgenarator",
  },
  {
    id: "echowatch-threat-detection",
    title: "EchoWatch - AI Threat Detection System",
    category: "Web App | Security",
    imageUrl: echowatchImage,
    techStack: ["HTML5", "TailwindCSS", "JavaScript", "TensorFlow.js"],
    description:
      "A real-time AI-powered system for detecting potential public threats using live camera feeds.",
    longDescription: [
      "EchoWatch was designed to proactively detect threats (e.g., weapons) from live video streams using custom TensorFlow.js models.",
      "It features visual alerts, audible alarms, and a risk score interface to aid quick intervention.",
      "Built for lightweight deployment and presented at SafeCode Hackathon 2025.",
    ],
    liveUrl: "https://echowatch.netlify.app",
    repoUrl: "https://github.com/Sadiq-Teslim/echowatch",
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
      "OpenAI API",
    ],
    description:
      "An AI-powered GPA calculator that provides personalized academic insights and motivational feedback.",
    longDescription: [
      "GPAi simplifies GPA calculation for students and delivers AI-generated performance summaries.",
      "It leverages OpenAI API for dynamic feedback and Netlify serverless functions for secure backend operations.",
      "The platform is mobile-friendly and designed for future scalability (e.g., semester tracking).",
    ],
    liveUrl: "https://gpai.netlify.app",
    repoUrl: "https://github.com/Sadiq-Teslim/gpai-web",
  },
  {
    id: "healthhalo-platform",
    title: "HealthHalo - Health & Insurance Management",
    category: "Web App | HealthTech",
    imageUrl: healthhaloImage,
    techStack: ["React", "TailwindCSS", "Node.js"],
    description:
      "A platform for managing personal health information and exploring accessible insurance options.",
    longDescription: [
      "HealthHalo helps users track health records and find suitable insurance plans.",
      "It features a clean UI for easy navigation and integrates APIs for insurance data.",
      "Built with React and Node.js, with scalability in mind for future health service integrations.",
    ],
    liveUrl: "https://healthhalo.vercel.app",
    repoUrl: "https://github.com/Sadiq-Teslim/healthhalo",
  },
  {
    id: "deenwise-video-management",
    title: "DeenWise Tutor Video Management",
    category: "Web App | Education",
    imageUrl: deenwiseImage,
    techStack: ["React", "TypeScript", "TailwindCSS", "Java", "Springboot"],
    description:
      "A video management platform for tutors to upload and assign lessons to students.",
    longDescription: [
      "Built as part of an edtech platform, this feature allows tutors to upload lesson videos, preview content, and assign them to individual students.",
      <>
        It uses React for the frontend, TypeScript for type safety, and
        TailwindCSS for responsive design. Axios handles communication with the
        Spring Boot backend built by{" "}
        <a
          href="https://github.com/henrytech12"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline font-medium"
        >
          Fakorode Henry
        </a>
        .
      </>,
    ],
    liveUrl: "#",
    repoUrl: "https://github.com/HenryTech12/DeenWise",
  },
  {
    id: "unihustle-whatsapp-bot",
    title: "UniHustle WhatsApp Bot",
    category: "AI | Automation",
    imageUrl: botImage,
    techStack: ["Twilio API", "Node.js", "Google Sheets API"],
    description:
      "A WhatsApp bot that helps students find vendors and register businesses.",
    longDescription: [
      "The bot connects users with verified vendors based on product requests using Twilio WhatsApp API.",
      "It also provides vendor registration info using Google Sheets as a data source, and responds to queries in real-time. Future updates will include NLP-based AI response.",
    ],
    liveUrl: "#",
    repoUrl: "https://github.com/Sadiq-Teslim/unihustle-bot",
  },
  {
    id: "rumor-verification-platform",
    title: "Verifact - Rumor Verification Platform",
    category: "Web App | AI",
    imageUrl: verifactImage,
    techStack: [
      "React",
      "React Router",
      "Node.js",
      "OpenAI API",
      "Google Cloud Vision",
      "SERP API",
    ],
    description:
      "A rumor verification platform using AI and search APIs to assess media claims.",
    longDescription: [
      "Verifact helps users verify images and texts by analyzing them with the Google Cloud Vision API, running fact-check searches with SERP API, and leveraging OpenAI to generate analysis reports.",
      "Built with React and Node.js, it's designed to empower media literacy and detect misinformation.",
      "I focused on the frontend of the web application",
    ],
    liveUrl: "https://sadiq-teslim.github.io/verifact2",
    repoUrl: "https://github.com/Sadiq-Teslim/verifact2",
  },
  {
    id: "course-progress-tracker",
    title: "Smart Course Progress Tracker",
    category: "Spreadsheet Tool | Utility",
    imageUrl: trackerImage,
    techStack: ["Excel", "Conditional Formatting", "Dropdown Menus"],
    description:
      "An interactive Excel tracker for course milestones, with personalized badges and summaries.",
    longDescription: [
      "Designed in WPS Office Excel, this tracker includes dropdowns for status updates, visual badges for milestones, and a dynamic dashboard summary.",
      "It allows learners to monitor course progress in stages, view completion stats, and add personal notes.",
    ],
    liveUrl: "https://bit.ly/GetReadingTracker",
    repoUrl: "https://github.com/Sadiq-Teslim",
  },
  {
    id: "techstars-unilag-portal",
    title: "Techstars UNILAG Community Portal",
    category: "Web App | Community",
    imageUrl: techstarsImage,
    techStack: ["React", "TypeScript", "Apollo", "Node.js"],
    description:
      "A platform for Techstars UNILAG members to explore events, job listings, and connect with fellow students.",
    longDescription: [
      "This full-stack platform powers the Techstars UNILAG community. It serves as a central hub for 100-level students starting their tech journey, offering curated resources, event updates, and member profiles.",
      "GraphQL (Apollo Server) enables efficient, flexible data fetching, while the React/TypeScript frontend ensures a smooth and error-resistant user experience. PostgreSQL handles backend data management for robust performance.",
    ],
    liveUrl: "#",
    repoUrl: "https://github.com/Sadiq-Teslim",
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
      "A lightweight AI tool for diagnosing plant diseases offline, with SMS-based support for low-internet areas.",
    longDescription: [
      "AgroScan was built to support farmers in rural areas by providing an accessible plant disease diagnostic system. It uses preloaded AI models (TensorFlow Lite) to run image classification offline on low-end Android devices.",
      "The frontend is a fast-loading React/Vite web app with a clean UI for 2G/3G users. When images can't be uploaded, users can send text-based reports via SMS through Twilio integration.",
      "Results and reports are logged into Google Sheets for easy tracking, and offline use cases are supported with local caching and fallback logic.",
    ],
    liveUrl: "https://www.agroscan-xasy.onrender.com",
    repoUrl: "https://github.com/Sadiq-Teslim/agroscan",
  },
];
