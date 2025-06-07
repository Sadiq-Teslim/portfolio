import React from 'react';
  const Navbar = () => {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-700/20 text-gray-50 flex items-center justify-between px-6 py-4">
      <div className="text-2xl font-bold text-techBlue hover:text-neonGreen cursor-pointer">
        Sadiq Teslim Adetola
      </div>

      {/* Menu Links */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <a href="#home" className="hover:text-[#38BDF8] hover:underline text-primary transition-colors duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#38BDF8] hover:underline transition-colors duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-[#38BDF8] hover:underline transition-colors duration-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#38BDF8] hover:underline transition-colors duration-300">
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger Menu for mobile */}
      <div className="md:hidden">
        <button aria-label="Toggle Menu" className="text-techBlue hover:text-neonGreen focus:outline-none">
          {/* You can swap with a hamburger icon SVG */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;