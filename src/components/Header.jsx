'use client'

import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaDownload, FaUser, FaBriefcase, FaEnvelope, FaHome, FaChevronDown } from 'react-icons/fa'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Fechar menu mobile após click
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              } hover:text-blue-500`}
            >
              MATHEUS BARBOZA
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToTop}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-300 hover:bg-white/10'
              }`}
            >
              <FaHome className="text-sm" />
              <span>Início</span>
            </button>
            
            <button
              onClick={() => scrollToSection('sobre-mim')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-300 hover:bg-white/10'
              }`}
            >
              <FaUser className="text-sm" />
              <span>Sobre</span>
            </button>

            <button
              onClick={() => scrollToSection('projetos')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-300 hover:bg-white/10'
              }`}
            >
              <FaBriefcase className="text-sm" />
              <span>Projetos</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-300 hover:bg-white/10'
              }`}
            >
              <FaEnvelope className="text-sm" />
              <span>Contato</span>
            </button>

            {/* Social Links Dropdown */}
            <div className="relative group">
              <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-300 hover:bg-white/10'
              }`}>
                <span>Redes</span>
                <FaChevronDown className="text-sm group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-2 space-y-1">
                  <a
                    href="https://linkedin.com/in/matheus-barboza-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                  >
                    <FaLinkedin className="w-4 h-4 mr-3" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/matheus-dev-fullstack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                  >
                    <FaGithub className="w-4 h-4 mr-3" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 space-y-2">
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300"
              >
                <FaHome />
                <span>Início</span>
              </button>
              
              <button
                onClick={() => scrollToSection('sobre-mim')}
                className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300"
              >
                <FaUser />
                <span>Sobre</span>
              </button>

              <button
                onClick={() => scrollToSection('projetos')}
                className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300"
              >
                <FaBriefcase />
                <span>Projetos</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300"
              >
                <FaEnvelope />
                <span>Contato</span>
              </button>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/matheusjesse" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/matheusjesse/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                </div>
                
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
                  <FaDownload className="text-sm" />
                  <span>CV</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}