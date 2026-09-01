'use client';

import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaHome, FaUser, FaBriefcase, FaCompass, FaEnvelope } from 'react-icons/fa';

const NAV_ITEMS = [
  { id: 'hero', label: 'Início', icon: FaHome },
  { id: 'quem-sou', label: 'Quem sou', icon: FaUser },
  { id: 'experiencia', label: 'Experiência', icon: FaBriefcase },
  { id: 'proximo-territorio', label: 'Competências', icon: FaCompass },
  { id: 'contato', label: 'Contato', icon: FaEnvelope },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (window.scrollY < 250) {
        setActiveSection('hero');
        return;
      }

      const sectionIds = ['quem-sou', 'experiencia', 'proximo-territorio', 'contato'];
      const scrollPos = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* TOP HEADER NAVBAR */}
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-400"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 #e5e7eb' : 'none',
        }}
      >
        <div className="section-container relative">
          <div className="flex justify-between items-center h-16 md:h-20">
            <button
              id="header-logo-btn"
              onClick={() => scrollToSection('hero')}
              className="font-bold text-base tracking-widest transition-all hover:opacity-70 border-none bg-transparent cursor-pointer"
              style={{
                color: scrolled ? '#ea580c' : 'white',
                fontFamily: 'monospace',
              }}
            >
              MB
            </button>

            {/* Middle Quote - Only visible on Web/Desktop when scrolled */}
            <div
              className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-all duration-500 pointer-events-none whitespace-nowrap ${
                scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <span 
                className="text-sm font-medium italic tracking-wide"
                style={{ color: 'var(--text-muted)' }}
              >
                "Nada grandioso se faz sozinho"
              </span>
            </div>

            {/* Right Action Icons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                id="header-linkedin"
                href="https://linkedin.com/in/matheusjesse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all hover:opacity-70"
                style={{ color: scrolled ? '#6b7280' : 'rgba(255,255,255,0.85)' }}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                id="header-github"
                href="https://github.com/matheusjesse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all hover:opacity-70"
                style={{ color: scrolled ? '#6b7280' : 'rgba(255,255,255,0.85)' }}
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="header-mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg border-none bg-transparent"
              style={{ color: scrolled ? '#374151' : 'white' }}
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden pb-4">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-3 space-y-1">
                {NAV_ITEMS.map(({ id, label }) => (
                  <button
                    key={id}
                    id={`mobile-nav-${id}`}
                    onClick={() => scrollToSection(id)}
                    className="flex w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all border-none bg-transparent text-left"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* FLOATING RIGHT DOCK (AUTHENTIC APPLE iOS 18 LIQUID GLASSMORPHISM) */}
      <div
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3 p-3 rounded-full transition-all duration-300"
        style={{
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(24px) saturate(200%)',
          WebkitBackdropFilter: 'blur(24px) saturate(200%)',
          border: '1px solid rgba(255, 255, 255, 0.22)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.35), inset 0 -1px 1px rgba(0, 0, 0, 0.4)',
        }}
      >
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <div key={id} className="relative flex items-center group">
              {/* Tooltip Label on Hover with iOS Glass Styling */}
              <div
                className="absolute right-14 opacity-0 translate-x-3 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white shadow-xl"
                style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                {label}
              </div>

              {/* Nav Button with Specular Glass Highlight */}
              <button
                id={`floating-nav-${id}`}
                onClick={() => scrollToSection(id)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative border-none cursor-pointer group-hover:scale-115"
                style={{
                  background: isActive ? '#ea580c' : 'rgba(255, 255, 255, 0.1)',
                  color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.12)',
                  transform: isActive ? 'scale(1.12)' : 'scale(1)',
                  boxShadow: 'none',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <Icon size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}