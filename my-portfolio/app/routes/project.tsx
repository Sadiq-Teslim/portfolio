import React from 'react';
import { Link } from 'react-router-dom'; 
import { projectsData } from '../data/projectsData';
import Navbar from './navbar';
import Footer from './footer';

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
};

// A reusable Project Card component
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="block group">
      <div className="bg-slate-800/50 border-2 border-slate-700/60 rounded-xl overflow-hidden h-full
                      transition-all duration-300 ease-in-out
                      hover:scale-105 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-500/10">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
          <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech: string) => ( 
              <span key={tech} className="bg-slate-700 text-violet-300 text-xs font-semibold px-3 py-1 rounded-full">
              {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProjectsPage = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
            My Works
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-300">
            A collection of my  projects. Each one is a story of learning, challenge, and creation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projectsData.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;