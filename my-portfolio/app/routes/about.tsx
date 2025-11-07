import React from 'react';

const AboutSection = () => {
  const socialLinks = [
    {
      name: "Github",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.58 0-.287-.011-1.045-.017-2.051-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.833 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.019.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.839 1.235 1.909 1.235 3.22 0 4.609-2.807 5.624-5.479 5.921.43.371.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.192.694.801.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: "https://github.com/Sadiq-Teslim"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.761 0 5-2.24 5-5v-14c0-2.76-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.105-.895-2-2-2s-2 .895-2 2v4.5h-3v-9h3v1.086c.589-.805 1.52-1.086 2.438-1.086 1.962 0 3.562 1.6 3.562 3.562v5.438z"/>
        </svg>
      ),
      url: "https://linkedin.com/in/sadiq-ta"
    },
    {
      name: "X (Twitter)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
        </svg>
      ),
      url: "https://x.com/teslimadetola08"
    }
  ];

  return (
    <div className="bg-slate-900 text-slate-50">
      {/* Container with consistent padding and max-width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24">
        {/* Two-column grid for About and Contact sections on medium screens and up */}
        <div className="grid md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-16">
          
          {/* About Me Section */}
          <section id='about'>
            <h2 className="text-3xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Hey, I'm Teslim — a fullstack product engineer and AI specialist studying Mechanical Engineering at the University of Lagos.
              I architect resilient platforms that blend expressive frontends with dependable service layers, from piracy surveillance for Nollywood to predictive security at Avzdax and low-bandwidth health copilots.
              Beyond shipping code, I lead engineering pods, mentor builders in my community, and obsess over measurable outcomes that make technology genuinely useful.
            </p>
          </section>

          {/* Contact Section */}
          <section id='contact'>
            <h2 className="text-3xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Let's connect! I'm always open to cool collaborations, interesting projects, or just a good conversation about technology. Find me on my socials below.
            </p>

            {/* Revamped Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-14 h-14 bg-slate-800 rounded-full border-2 border-slate-700 transition-all duration-300 ease-in-out hover:scale-110 hover:border-violet-400 hover:bg-gradient-to-br from-violet-500 to-purple-600"
                >
                  <div className="text-slate-300 transition-colors group-hover:text-white">
                    {social.icon}
                  </div>
                  {/* Tooltip on hover */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-700 text-white text-xs font-semibold rounded-md py-1 px-3 whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
};

export default AboutSection;