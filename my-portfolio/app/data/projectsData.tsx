export const projectsData = [
  {
    id: "deenwise-video-management",
    title: "DeenWise Tutor Video Management",
    category: "Web App | Education",
    imageUrl: "https://picsum.photos/seed/deenwise/800/600",
    techStack: ["React", "TypeScript", "TailwindCSS", "Axios"],
    description:
      "A video management platform for tutors to upload and assign lessons to students.",
    longDescription: [
      "Built as part of an edtech platform, this feature allows tutors to upload lesson videos, preview content, and assign them to individual students.",
      "It uses React for the frontend, TypeScript for type safety, and TailwindCSS for responsive design. Axios handles communication with the Spring Boot backend.",
    ],
    liveUrl: "https://www.deenwise.com",
    repoUrl: "https://github.com/Henrytech12/DeenWise",
  },
  {
    id: "unihustle-whatsapp-bot",
    title: "UniHustle WhatsApp Bot",
    category: "AI | Automation",
    imageUrl: "https://picsum.photos/seed/unihustle/800/600",
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
    imageUrl: "https://picsum.photos/seed/verifact/800/600",
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
    ],
    liveUrl: "https://sadiq-teslim.github.io/verifact2",
    repoUrl: "https://github.com/Sadiq-Teslim/verifact2",
  },
  {
    id: "course-progress-tracker",
    title: "Smart Course Progress Tracker",
    category: "Spreadsheet Tool | Utility",
    imageUrl: "https://picsum.photos/seed/course-tracker/800/600",
    techStack: ["Excel", "Conditional Formatting", "Dropdown Menus"],
    description:
      "An interactive Excel tracker for course milestones, with personalized badges and summaries.",
    longDescription: [
      "Designed in WPS Office Excel, this tracker includes dropdowns for status updates, visual badges for milestones, and a dynamic dashboard summary.",
      "It allows learners to monitor course progress in stages, view completion stats, and add personal notes.",
    ],
    liveUrl: "#",
    repoUrl: "https://github.com/Sadiq-Teslim",
  },
  {
    id: "techstars-unilag-portal",
    title: "Techstars UNILAG Community Portal",
    category: "Web App | Community",
    imageUrl: "https://picsum.photos/seed/techstars/800/600",
    techStack: [
      "React",
      "TypeScript",
      "GraphQL",
      "Apollo",
      "Node.js",
      "PostgreSQL",
    ],
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
    imageUrl: "https://picsum.photos/seed/agroscan/800/600",
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
    liveUrl: "agroscan-xasy.onrender.com",
    repoUrl: "https://github.com/Sadiq-Teslim/agroscan",
  },
];
