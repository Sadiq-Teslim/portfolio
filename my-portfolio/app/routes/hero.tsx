import React from 'react';
import { Link } from 'react-router-dom';
import { useRevealAnimation } from '../hooks/useRevealAnimation';
import myImage from '../assets/my-image.jpg'; 
import resumeFile from '../assets/Teslim Adetola Sadiq.docx.pdf';

const HeroSection = () => {
  const badgesReveal = useRevealAnimation<HTMLDivElement>({ delay: 80 });
  const headingReveal = useRevealAnimation<HTMLHeadingElement>({ delay: 200 });
  const paragraphReveal = useRevealAnimation<HTMLParagraphElement>({ delay: 320 });
  const ctaReveal = useRevealAnimation<HTMLDivElement>({ delay: 420 });
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 md:py-16">
      <div 
        className="relative grid min-h-[560px] grid-rows-[minmax(0,1fr)] overflow-hidden rounded-2xl border border-slate-700/30 shadow-2xl shadow-slate-900/40 sm:flex sm:flex-col sm:justify-end"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${myImage})` }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent sm:from-slate-900/90 sm:via-slate-900/55"
        />

        {/* Content Container */}
        <div className="relative z-10 grid grid-cols-1 gap-6 text-left animate-fade-up-soft p-6 sm:flex sm:flex-col sm:gap-6 sm:p-12">
          <div className="flex flex-col gap-6 rounded-2xl bg-slate-900/70 p-6 backdrop-blur-md shadow-[0_25px_60px_rgba(15,23,42,0.45)] sm:max-w-3xl sm:bg-transparent sm:p-0 sm:backdrop-blur-none sm:shadow-none">
            <div
              ref={badgesReveal.ref}
              style={badgesReveal.style}
              className={`flex flex-wrap items-center gap-3 transition-all duration-700 ${
                badgesReveal.isVisible ? 'motion-safe:animate-reveal-right' : 'opacity-0 -translate-x-6'
              } motion-reduce:opacity-100 motion-reduce:translate-x-0`}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                Open to Work
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-violet-200/90">
                8x Hackathon Winner · GPAi Founder
              </span>
            </div>
            <h1
              ref={headingReveal.ref}
              style={headingReveal.style}
              className={`text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent transition-all duration-700 ${
                headingReveal.isVisible ? 'motion-safe:animate-reveal-up' : 'opacity-0 translate-y-8'
              } motion-reduce:opacity-100 motion-reduce:translate-y-0`}
            >
              Hey, I'm Teslim Adetola Sadiq
            </h1>

            <p
              ref={paragraphReveal.ref}
              style={paragraphReveal.style}
              className={`text-base text-slate-100 sm:text-lg sm:text-slate-300 transition-all duration-700 ${
                paragraphReveal.isVisible ? 'motion-safe:animate-reveal-up' : 'opacity-0 translate-y-6'
              } motion-reduce:opacity-100 motion-reduce:translate-y-0`}
            >
              I’m a Lagos-based Fullstack Developer & AI Engineer shipping AI-first civic, security, and education platforms for Nigeria. From FairPlay Africa and Nevo to ULES voting and GPAi, I lead pods that blend expressive interfaces with dependable Node/FastAPI services plus payment and realtime rails that bridge the digital divide.
            </p>
          </div>
          <div
            ref={ctaReveal.ref}
            style={ctaReveal.style}
            className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between transition-all duration-700 ${
              ctaReveal.isVisible ? 'motion-safe:animate-reveal-up' : 'opacity-0 translate-y-8'
            } motion-reduce:opacity-100 motion-reduce:translate-y-0`}
          >
            <div className="flex flex-wrap gap-3 text-sm text-slate-200/90">
              <span className="rounded-full border border-slate-400/40 bg-slate-900/40 px-3 py-1 backdrop-blur-sm">
                FairPlay Africa · ACM 2025 Grand Prize
              </span>
              <span className="rounded-full border border-slate-400/40 bg-slate-900/40 px-3 py-1 backdrop-blur-sm">
                20,000+ secure civic ballots tallied
              </span>
              <span className="rounded-full border border-slate-400/40 bg-slate-900/40 px-3 py-1 backdrop-blur-sm">
                GPAi mentors 2,000+ students
              </span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link 
                to="projects" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 transform hover:scale-105"
              >
                Explore Recent Builds
              </Link>
              <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-violet-400/60 bg-slate-900/40 px-8 py-3 text-sm font-semibold text-violet-200 transition-all duration-300 hover:border-violet-300 hover:bg-violet-500/10 hover:text-violet-100 backdrop-blur"
              >
                Download Résumé
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;