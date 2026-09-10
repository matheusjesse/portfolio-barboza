'use client';

import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsHandIndexThumb } from 'react-icons/bs';
import Image from 'next/image';
import HeroImage from '../utils/images/representations-user-experience-interface-design.png';
import TechBg from '../utils/images/3d-render-abstract-technology-background-network-communications.jpg';
import { stacks } from '../utils/stacks';

export default function Banner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const mobileStacks = stacks.filter((s) =>
    ['React Native', 'TypeScript', 'Expo', 'React', 'Node.js', 'Flutter', 'Jest', 'Figma', 'Git', 'Docker', 'NestJS', 'PostgreSQL'].includes(s.name)
  );

  const tickerStacks = [...mobileStacks, ...mobileStacks, ...mobileStacks];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 45%, #ea580c 80%, #9a3412 100%)'
      }}
    >
      {/* Base Technology Image Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={TechBg}
          alt="Technology Background"
          fill
          priority
          className="object-cover opacity-30 mix-blend-overlay"
        />
      </div>

      {/* Base Vibrant Solar Yellow/Orange Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 25%, rgba(254, 240, 138, 0.4) 0%, rgba(249, 115, 22, 0.2) 60%, transparent 100%)'
        }}
      />

      {/* Tailwind UI Top-Left Glowing Polygon Blob (Yellow/Amber Glow) */}
      <div
        className="absolute inset-x-0 -top-40 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-18rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-80 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
          style={{
            background: 'linear-gradient(to top right, #fef08a 0%, #f59e0b 50%, #ea580c 100%)',
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      {/* Tailwind UI Bottom-Right Glowing Polygon Blob (Orange/Gold Glow) */}
      <div
        className="absolute inset-x-0 top-[calc(100%-15rem)] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-70 sm:left-[calc(50%+25rem)] sm:w-[72.1875rem]"
          style={{
            background: 'linear-gradient(to top right, #fbbf24 0%, #f97316 50%, #ea580c 100%)',
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      {/* Product Journey Waves (Organic User Flow Lines - Spaced Vertically Apart) */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        {/* Flow Line 1 - Top Area Wave Pathway */}
        <path 
          d="M-100,120 C300,280 650,60 1050,240 C1350,380 1500,180 1600,120" 
          fill="none" 
          stroke="rgba(255, 255, 255, 0.35)" 
          strokeWidth="2" 
        />
        {/* Flow Line 2 - Middle Area Wave Accent */}
        <path 
          className="animate-wave-float-1"
          d="M-100,450 C380,280 780,580 1200,380 C1420,240 1550,360 1600,400" 
          fill="none" 
          stroke="rgba(255, 255, 255, 0.25)" 
          strokeWidth="1.5" 
        />
        {/* Flow Line 3 - Bottom Area Deep Ambient Wave (Spaced Down towards the bottom) */}
        <path 
          className="animate-wave-float-2"
          d="M-100,780 C300,620 700,880 1100,680 C1350,560 1500,780 1650,750" 
          fill="none" 
          stroke="rgba(255, 255, 255, 0.2)" 
          strokeWidth="1.5" 
        />
      </svg>

      <div className="section-container relative z-10 flex-1 flex items-center justify-center w-full">
        <div
          className="flex flex-col items-center text-center w-full max-w-3xl mx-auto"
          style={{ paddingTop: '40px', paddingBottom: '40px' }}
        >
          {/* CENTERED TEXT CONTENT */}
          <div
            className="flex flex-col items-center text-center w-full"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <h1
              className="leading-none text-white text-center w-full px-2"
              style={{
                fontFamily: "'Caveat', 'Dancing Script', cursive",
                fontSize: 'clamp(2.5rem, 11.5vw, 7.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '2rem',
                textShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}
            >
              Matheus Barboza
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 w-full px-4" style={{ marginBottom: '1.75rem' }}>
              <button
                id="hero-cta-quick"
                onClick={() => scrollToSection('quem-sou')}
                className="btn-primary text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-3.5"
                style={{ background: 'white', color: '#ea580c' }}
              >
                Quem sou
              </button>
              <button
                id="hero-cta-explore"
                onClick={() => scrollToSection('o-que-construo')}
                className="btn-secondary text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-3.5"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}
              >
                O que construo
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 px-4">
              <a href="https://linkedin.com/in/matheusjesse" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs sm:text-sm transition-opacity hover:opacity-70 text-white font-medium">
                <FaLinkedin size={16} /> LinkedIn
              </a>
              <span className="opacity-40 text-white text-xs sm:text-sm">|</span>
              <a href="https://github.com/matheusjesse" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs sm:text-sm transition-opacity hover:opacity-70 text-white font-medium">
                <FaGithub size={16} /> GitHub
              </a>
              <span className="opacity-40 text-white text-xs sm:text-sm">|</span>
              <span className="text-xs sm:text-sm text-white font-medium opacity-90">
                Rio de Janeiro
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* PREMIUM HERO SCROLL INDICATOR */}
      <button
        onClick={() => scrollToSection('quem-sou')}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 group text-white/85 hover:text-white transition-all bg-transparent border-none"
        aria-label="Rolar para baixo"
      >
        <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.8 }}>
          Role para explorar
        </span>

        {/* Hand Pointer Icon on Mobile */}
        <div className="sm:hidden animate-bounce mt-1">
          <BsHandIndexThumb size={22} className="text-white drop-shadow-md" />
        </div>

        {/* Classic Mouse Icon on Desktop */}
        <div
          className="hidden sm:flex w-5 h-8 border-2 border-white/40 rounded-full justify-center p-1 group-hover:border-white transition-colors"
          style={{ width: '20px', height: '32px', border: '2px solid rgba(255,255,255,0.4)', borderRadius: '9999px', justifyContent: 'center', padding: '4px' }}
        >
          <div
            className="w-1 h-2 bg-white rounded-full animate-bounce"
            style={{ width: '4px', height: '8px', background: 'white', borderRadius: '9999px' }}
          />
        </div>
      </button>
    </section>
  );
}
