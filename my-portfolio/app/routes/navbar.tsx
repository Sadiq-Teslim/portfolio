import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);
  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="relative bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/30 text-slate-50 flex items-center justify-between px-8 py-6 shadow-lg shadow-slate-900/10">
        
        <div className="group">
          <Link to="/" onClick={closeMenu}>
            <div className="text-xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent hover:from-violet-300 hover:via-purple-300 hover:to-indigo-300 transition-all duration-500 cursor-pointer">
              Teslim Adetola Sadiq
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link 
              to="/" 
              className="relative text-slate-200 hover:text-white font-medium transition-all duration-300 group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/#about" 
              className="relative text-slate-200 hover:text-white font-medium transition-all duration-300 group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/#experience" 
              className="relative text-slate-200 hover:text-white font-medium transition-all duration-300 group"
              onClick={(event) => {
                event.preventDefault();
                document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className="relative text-slate-200 hover:text-white font-medium transition-all duration-300 group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/#contact" 
              className="relative text-slate-200 hover:text-white font-medium transition-all duration-300 group"
              onClick={(event) => {
                event.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <a
              href="https://bit.ly/STAResume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-violet-400/60 px-5 py-2.5 text-sm font-semibold text-violet-200 transition-all duration-300 hover:border-violet-300 hover:bg-violet-500/10 hover:text-violet-100"
            >
              Download Résumé
            </a>
          </div>
          <div className="hidden md:block">
            <Link to="https://wa.me/+2347063569494" target='_blank' rel='noopener noreferrer' className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-2.5 px-6 rounded-full shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 transform hover:scale-105 inline-block">
              Let's Talk
            </Link>
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              aria-label="Toggle Menu" 
              className="text-slate-200 hover:text-white focus:outline-none transition-colors hover:cursor-pointer duration-300 p-2"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2.5' : 'top-1'}`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 top-2.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2.5' : 'top-4'}`}></span>
              </div>
            </button>
          </div>
        </div>
        <div className={`md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl border-b border-slate-700/30 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <ul className="flex flex-col items-center space-y-6 py-8 px-8">
            <li>
              <Link to="/" onClick={handleLinkClick} className="text-slate-200 hover:text-white font-medium text-lg transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/#about" onClick={handleLinkClick} className="text-slate-200 hover:text-white font-medium text-lg transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link
                to="/#experience"
                onClick={(event) => {
                  event.preventDefault();
                  handleLinkClick();
                  setTimeout(() => {
                    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
                  }, 50);
                }}
                className="text-slate-200 hover:text-white font-medium text-lg transition-colors duration-300"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleLinkClick} className="text-slate-200 hover:text-white font-medium text-lg transition-colors duration-300">Projects</Link>
            </li>
            <li>
              <Link
                to="/#contact"
                onClick={(event) => {
                  event.preventDefault();
                  handleLinkClick();
                  setTimeout(() => {
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 50);
                }}
                className="text-slate-200 hover:text-white font-medium text-lg transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
            <li className="pt-2 w-full px-8">
              <a
                href="https://bit.ly/STAResume"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-full border border-violet-400/60 px-6 py-3 text-sm font-semibold text-violet-200 transition-all duration-300 hover:border-violet-300 hover:bg-violet-500/10 hover:text-violet-100"
              >
                Download Résumé
              </a>
            </li>
            <li className="pt-4 w-full px-8">
              <Link to="https://wa.me/+2347063569494" target='_blank' rel='noopener noreferrer' onClick={handleLinkClick} className="block w-full text-center bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-violet-500/25 transition-all duration-300">
                Let's Talk
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;