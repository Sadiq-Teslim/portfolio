import React from 'react';
import { Link } from 'react-router';
import myImage from '../../assets/my-image.jpg'; 

const HeroSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 md:py-16">
      <div 
        className="relative min-h-[520px] rounded-2xl flex flex-col justify-end p-8 md:p-12 shadow-2xl shadow-slate-900/40 border border-slate-700/30 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${myImage})` }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col gap-5 text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
            Hi, I'm Sadiq Teslim Adetola
          </h1>
          
          <p className="max-w-2xl text-lg text-slate-300">
            I build sleek, high-performance web experiences that blend creativity with code — responsive, accessible, and user-first.
          </p>
          <div className="mt-4">
            <Link 
              to="projects" 
              className="inline-block bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 transform hover:scale-105"
            >
              View My Works
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;