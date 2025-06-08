import React from "react";
import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import Navbar from "./navbar";
import Footer from "./footer";

const NotFound = () => (
  <div className="text-center py-40">
    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
    <p className="text-slate-400 mb-8">
      Sorry, I haven't worked on that project yet. Perhaps you could check my
      other ones
    </p>
    <Link
      to="/projects"
      className="inline-block bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-violet-500/25 transition-all duration-300"
    >
      Back to Projects
    </Link>
  </div>
);

const ProjectDetailPage = () => {
  const { id } = useParams(); 
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="bg-slate-900 min-h-screen">
        <Navbar />
        <NotFound />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen text-slate-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24">
        {/* Back to projects link */}
        <div className="mb-12">
          <Link
            to="/projects"
            className="text-violet-400 hover:text-violet-300 transition-colors duration-300 group flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to All Projects
          </Link>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
          {project.title}
        </h1>
        <p className="text-lg text-slate-400 mb-12">{project.category}</p>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Description */}
          <div className="lg:col-span-2">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full rounded-xl mb-8 shadow-2xl shadow-slate-900/50 border border-slate-700"
            />
            <div className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-headings:text-slate-100">
              <h2 className="text-3xl font-bold mb-4">About the Project</h2>
              {project.longDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Details & Links */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-6 sticky top-28">
              <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-700 text-violet-300 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Links</h3>
              <div className="flex flex-col gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-violet-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
