import React from 'react';
import { Link } from 'react-router'; 

const Footer = () => {
  const socialLinks = [
    { name: "Github", url: "https://github.com/Sadiq-Teslim", icon: <svg>...</svg> },
    { name: "LinkedIn", url: "https://linkedin.com/in/sadiq-ta", icon: <svg>...</svg> },
    { name: "X (Twitter)", url: "https://x.com/teslimadetola08", icon: <svg>...</svg> }
  ];

  // Helper for social icon SVGs for brevity
  const SocialIcon: React.FC<{ name: string; url: string }> = ({ name, url }) => {
    let iconPath;
    switch(name) {
      case 'Github':
        iconPath = <path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.58 0-.287-.011-1.045-.017-2.051-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.833 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.019.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.839 1.235 1.909 1.235 3.22 0 4.609-2.807 5.624-5.479 5.921.43.371.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.192.694.801.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>;
        break;
      case 'LinkedIn':
        iconPath = <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.761 0 5-2.24 5-5v-14c0-2.76-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.105-.895-2-2-2s-2 .895-2 2v4.5h-3v-9h3v1.086c.589-.805 1.52-1.086 2.438-1.086 1.962 0 3.562 1.6 3.562 3.562v5.438z"/>;
        break;
      case 'X (Twitter)':
        iconPath = <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>;
        break;
      default:
        iconPath = null;
    }
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 transition-colors duration-300 hover:text-violet-400"
      >
        <span className="sr-only">{name}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">{iconPath}</svg>
      </a>
    );
  };
  
  return (
    <footer className="bg-slate-950/70 backdrop-blur-xl border-t border-slate-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        {/* Top section: Logo and Nav Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Sadiq Teslim Adetola
          </div>
          <ul className="flex items-center flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-8">
            <li><Link to="#about" className="text-slate-300 hover:text-white font-medium transition-colors duration-300">About</Link></li>
            <li><Link to="projects" className="text-slate-300 hover:text-white font-medium transition-colors duration-300">Projects</Link></li>
            <li><Link to="#contact" className="text-slate-300 hover:text-white font-medium transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>
        
        {/* Divider */}
        <hr className="my-8 border-slate-700" />
        
        {/* Bottom section: Copyright and Social Icons */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-100">
            © {new Date().getFullYear()} Sadiq Teslim Adetola. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map(social => (
              <SocialIcon key={social.name} name={social.name} url={social.url} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;