import React from 'react';
import { Link } from 'react-router-dom'; 
import { useRevealAnimation } from '../hooks/useRevealAnimation';
import { projectsData } from '../data/projectsData';
import Navbar from './navbar';
import Footer from './footer';

export const meta = () => [
  { title: 'Projects | Teslim Sadiq' },
  {
    name: 'description',
    content:
      'Explore Teslim Sadiq’s flagship projects across AI, fintech, civic tech, and health—from FairPlay Africa to GPAi and EchoWatch.',
  },
  { property: 'og:title', content: 'Projects | Teslim Sadiq' },
  {
    property: 'og:description',
    content: 'Award-winning AI and fullstack builds including FairPlay Africa, ULES Voting, GPAi, Kula, and more.',
  },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://teslimcodes.tech/projects' },
  { property: 'og:site_name', content: 'Teslim Codes' },
  { property: 'og:image', content: 'https://teslimcodes.tech/og-image.svg' },
  { property: 'og:image:type', content: 'image/svg+xml' },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Projects | Teslim Sadiq' },
  {
    name: 'twitter:description',
    content: 'Award-winning AI and fullstack builds including FairPlay Africa, ULES Voting, GPAi, Kula, and more.',
  },
  { name: 'twitter:site', content: '@teslimadetola08' },
  { name: 'twitter:image', content: 'https://teslimcodes.tech/og-image.svg' },
];

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
};

// A reusable Project Card component
const ProjectCard = ({ project, delay }: { project: Project; delay: number }) => {
  const { ref, style, isVisible } = useRevealAnimation<HTMLDivElement>({ delay });

  return (
    <div
      ref={ref}
      style={style}
      className={`transition-all duration-700 ${
        isVisible ? 'motion-safe:animate-reveal-up' : 'opacity-0 translate-y-8'
      } motion-reduce:opacity-100 motion-reduce:translate-y-0`}
    >
      <Link to={`/projects/${project.id}`} className="block group">
        <div className="bg-slate-800/50 border-2 border-slate-700/60 rounded-xl overflow-hidden h-full
                        transition-all duration-300 ease-in-out
                        hover:scale-105 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-500/10">
          <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech: string, index) => ( 
                <span
                  key={tech}
                  style={{ animationDelay: `${index * 70}ms` }}
                  className="bg-slate-700 text-violet-300 text-xs font-semibold px-3 py-1 rounded-full motion-safe:animate-reveal-scale"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const ProjectsPage = () => {
  const headerReveal = useRevealAnimation<HTMLDivElement>({ delay: 60 });
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24">
        <div
          ref={headerReveal.ref}
          style={headerReveal.style}
          className={`text-center mb-16 transition-all duration-700 ${
            headerReveal.isVisible ? 'motion-safe:animate-reveal-up' : 'opacity-0 translate-y-8'
          } motion-reduce:opacity-100 motion-reduce:translate-y-0`}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
            My Works
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-300">
            Each build pairs thoughtful interfaces with resilient backends—from hackathon-winning AI surveillance to student civic tech and health PWAs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projectsData.map((project: Project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 120} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;