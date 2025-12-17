import React from 'react';
import { Link } from 'react-router-dom';
import resumeFile from '../assets/Teslim Adetola Sadiq.docx.pdf';

const Footer = () => {
  const socialLinks = [
    { name: 'Github', url: 'https://github.com/Sadiq-Teslim' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/sadiq-ta' },
    { name: 'X (Twitter)', url: 'https://x.com/teslimadetola08' }
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
        className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-violet-500/40 bg-slate-900/60 text-violet-200 shadow-lg shadow-violet-500/20 transition-all duration-300 hover:border-violet-300 hover:bg-violet-500/10 hover:text-violet-100"
      >
        <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="absolute inset-0 animate-gradient-x bg-[linear-gradient(120deg,rgba(139,92,246,0.4),rgba(59,130,246,0.2),rgba(6,182,212,0.35))] bg-[length:200%_200%]" />
        </span>
        <span className="absolute inset-0 scale-150 animate-sparkle rounded-full bg-violet-500/20 blur-2xl" aria-hidden />
        <span className="sr-only">{name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="relative z-10"
        >
          {iconPath}
        </svg>
      </a>
    );
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-800/60 bg-slate-950/85 py-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-[12%] h-72 w-72 rounded-full bg-gradient-to-br from-violet-500/35 via-purple-500/30 to-cyan-400/35 blur-3xl animate-aurora" />
        <div className="absolute -bottom-20 right-[15%] h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-3xl animate-float-bubble" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-70 animate-gradient-x" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-40 animate-gradient-x" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-8">
        <div className="grid gap-8 rounded-3xl border border-slate-800/60 bg-slate-900/70 p-8 shadow-[0_35px_120px_rgba(15,23,42,0.55)] backdrop-blur-xl md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="relative overflow-hidden rounded-2xl border border-violet-500/25 bg-slate-950/60 px-6 py-6 shadow-lg shadow-violet-500/25">
            <div className="absolute -right-16 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-cyan-400/25 blur-2xl animate-float-bubble" />
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-violet-200/80">Teslim Codes</span>
            <p className="mt-3 text-3xl font-extrabold text-white">Teslim Adetola Sadiq</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300">
              Crafting joyful, resilient AI experiences for teams that want speed without sacrificing reliability. Drop by, browse the builds, and let&apos;s ship something unforgettable.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/80">
              <span className="rounded-full border border-violet-500/30 bg-slate-900/60 px-4 py-2">AI-first delivery</span>
              <span className="rounded-full border border-cyan-400/30 bg-slate-900/60 px-4 py-2">Payments-ready</span>
              <span className="rounded-full border border-purple-400/30 bg-slate-900/60 px-4 py-2">Community-built</span>
            </div>
            <span className="absolute left-6 top-6 h-1 w-12 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 opacity-70" />
          </div>

          <div className="flex flex-col justify-between gap-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end">
              <li>
                <Link
                  to="/#about"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-950/60 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-violet-400 transition-transform duration-300 group-hover:scale-125" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-950/60 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-violet-400 transition-transform duration-300 group-hover:scale-125" />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-950/60 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-violet-400 transition-transform duration-300 group-hover:scale-125" />
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-violet-500/60 bg-gradient-to-r from-violet-500/20 via-purple-500/10 to-cyan-400/20 px-5 py-2.5 text-sm font-semibold text-violet-100 transition-all duration-300 hover:from-violet-500/30 hover:to-cyan-400/25"
                >
                  Résumé
                  <span className="text-xs">↗</span>
                </a>
              </li>
            </ul>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-end">
              <div className="flex items-center gap-5">
                {socialLinks.map((social) => (
                  <SocialIcon key={social.name} name={social.name} url={social.url} />
                ))}
              </div>
              <div className="flex items-center gap-3 rounded-full border border-violet-500/30 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-violet-200/90">
                <span className="relative block h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
                Always shipping
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 text-center text-sm text-slate-300/80 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Teslim Adetola Sadiq. All rights reserved. Built with intent, caffeine, and endless curiosity.
          </p>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-slate-500">
            <span className="rounded-full border border-slate-700 px-3 py-1">FairPlay</span>
            <span className="rounded-full border border-slate-700 px-3 py-1">ULES</span>
            <span className="rounded-full border border-slate-700 px-3 py-1">GPAi</span>
            <span className="rounded-full border border-slate-700 px-3 py-1">Kula</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;