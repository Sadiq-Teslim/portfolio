import React from 'react';
import { Link } from 'react-router-dom'; 
import verifactImage from '../assets/verifact-thumbnail.png';
import agroscanImage from '../assets/agroscan-thumbnail.png';
import deenwiseImage from '../assets/deenwise-thumbnail.png';
const FeaturedProjects = () => {
  const projects = [
    {
      id: "rumor-verification-platform", 
      title: "Verifact - AI Rumor Verification Platform",
      description: "A web platform using AI to verify the authenticity of news and claims. Built with React, Node.js, and OpenAI.",
      image: verifactImage,
    },
    {
      id: "deenwise-video-management", 
      title: "DeenWise - Tutor & Student Platform",
      description: "An Islamic learning platform where tutors upload video lessons and manage assignments. Built using React and Spring Boot.",
      image: deenwiseImage,
    },
    {
      id: "techstars-unilag-portal", 
      title: "AgroScan: Crop Diagnosis for Farmers",
      description: "A platform where farmers can upload a crop picture and get the current health status. SMS-based diagnosis is also supported.",
      image: agroscanImage,
    },
  ];

  return (
    <section className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-300">
            Here are a few selected projects that showcase my passion for building impactful solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project) => (
            <Link 
              key={project.id}
              to={`/projects/${project.id}`} 
              className="block group bg-slate-800/50 border-2 border-slate-700/60 rounded-xl overflow-hidden
                         transition-all duration-300 ease-in-out
                         hover:scale-[1.03] hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <span className="text-white text-lg font-bold">View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mt-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </Link>
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