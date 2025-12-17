import React from "react";
import { Link } from "react-router-dom";
import { useRevealAnimation } from "../hooks/useRevealAnimation";
import fairplayImage from "../assets/fairplay-thumbnail.svg";
import ulesVotingImage from "../assets/ules-voting-thumbnail.png";
import gpaiImage from "../assets/gpai-thumbnail.png";
import nevoImage from "../assets/techstars-thumbnail.png";

type FeaturedProject = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  metric: string;
};

const FeaturedProjectCard: React.FC<{ project: FeaturedProject; delay: number }> = ({ project, delay }) => {
  const { ref, style, isVisible } = useRevealAnimation<HTMLDivElement>({ delay });

  return (
    <div
      ref={ref}
      style={style}
      className={`transition-all duration-700 ${
        isVisible ? "motion-safe:animate-reveal-up" : "opacity-0 translate-y-8"
      } motion-reduce:opacity-100 motion-reduce:translate-y-0`}
    >
      <Link
        to={`/projects/${project.id}`}
        className="block group h-full rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-slate-900/70 overflow-hidden shadow-2xl shadow-slate-900/40 transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/80"
      >
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          <span className="absolute top-4 left-4 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            {project.category}
          </span>
        </div>

        <div className="flex flex-col gap-4 p-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-violet-300/90 mb-2">
              {project.metric}
            </p>
            <h3 className="text-2xl font-bold text-slate-50 mb-2">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex items-center justify-between text-sm font-semibold text-violet-200">
            <span className="inline-flex items-center gap-2">
              View Case Study
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <span className="rounded-full border border-violet-500/50 bg-violet-500/10 px-3 py-1 text-[12px] uppercase tracking-[0.2em]">
              Detail
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
const FeaturedProjects = () => {
  const headerReveal = useRevealAnimation<HTMLDivElement>({ delay: 60 });
  const showcaseStats = [
    {
      label: "8× Hackathon Wins",
      detail: "ACM, AfriHackBox, 3MTT SW, and more",
    },
    {
      label: "20K+ Civic Ballots",
      detail: "ULES voting verified & auditable",
    },
    {
      label: "2K+ Students",
      detail: "Mentored via GPAi & ECX",
    },
  ];

  const projects: FeaturedProject[] = [
    {
      id: "fairplay-africa",
      title: "FairPlay Africa",
      description:
        "ACM grand-prize piracy watchtower protecting Nollywood releases with automated, sub-300ms takedown intel.",
      image: fairplayImage,
      category: "AI · Security",
      metric: "NGN 10M ACM Grand Prize",
    },
    {
      id: "ules-voting-platform",
      title: "ULES Awards Voting Platform",
      description:
        "Secure e-voting rails verifying 3,500+ students, streaming 20,000+ ballots in real time, and exporting auditor packs.",
      image: ulesVotingImage,
      category: "Civic · Fintech",
      metric: "20K+ Verified Ballots",
    },
    {
      id: "gpai-assistant",
      title: "GPAi - AI GPA Assistant",
      description:
        "AI mentor simulating GPA trajectories and nudging 2,000+ undergraduates with actionable study plans.",
      image: gpaiImage,
      category: "EdTech · AI",
      metric: "2,000+ Student Users",
    },
    {
      id: "nevo-adaptive-learning",
      title: "Nevo - Adaptive Learning Coach",
      description:
        "3MTT South-West champion adapting neurodivergent lesson flows with Gemini-personalised content and calm prompts.",
      image: nevoImage,
      category: "Inclusive AI",
      metric: "3MTT SW Winner",
    },
  ];

  return (
    <section className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24">
        {/* Section Header */}
        <div
          ref={headerReveal.ref}
          style={headerReveal.style}
          className={`text-center mb-16 transition-all duration-700 ${
            headerReveal.isVisible
              ? "motion-safe:animate-reveal-up"
              : "opacity-0 translate-y-8"
          } motion-reduce:opacity-100 motion-reduce:translate-y-0`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-300">
            Flagship builds spanning AI surveillance, civic engagement, and student success—each shipped with measurable results.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-16">
          {showcaseStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-700/50 bg-slate-900/60 px-6 py-5 text-center shadow-inner shadow-black/40"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-violet-300/80">{stat.label}</p>
              <p className="mt-2 text-sm text-slate-300">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} delay={index * 140} />
          ))}
        </div>

        {/* "See More" Button */}
        <div className="mt-20 text-center">
          <Link
            to="/projects"
            className="inline-block bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 transform hover:scale-105"
          >
            View All My Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
