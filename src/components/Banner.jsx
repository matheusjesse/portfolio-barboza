'use client';

import { useEffect, useRef, useState } from 'react';
import { FaEye, FaDownload, FaCalculator } from 'react-icons/fa';
import Image from 'next/image';
import Profile from '../utils/images/profile.jpg';
import { stacks } from '../utils/stacks';
import QuoteModal from './QuoteModal';

export default function Banner() {
  const scrollRef = useRef(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-scroll]');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const scrollToProjects = () => {
    const section = document.getElementById('projetos');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          
          <div className="text-center lg:text-left space-y-8">
            <div 
              className="opacity-0 translate-y-10 transition-all duration-1000 ease-out inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium"
              data-scroll
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Disponível
            </div>

            <div className="space-y-4">
              <h1
                className="opacity-0 translate-y-10 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                data-scroll
              >
                Desenvolvedor Full-Stack Web e Mobile
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Matheus Barboza
                </span>
              </h1>
            </div>

            <p
              className="opacity-0 translate-y-10 transition-all duration-1000 ease-out text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
              data-scroll
            >
              Desenvolvo aplicações modernas e escaláveis <br />
              <strong className="text-white">
                React, React Native, TypeScript, Node.js 
              </strong>
              <br/>
              <strong className="text-white">
                Figma, Docker, Git, ferramentas testes automatizados e muito mais
              </strong>
              <br />
              Além disso, também possuo experiência em UX/UI.
            </p>

            <div
              className="opacity-0 translate-y-10 transition-all duration-1000 ease-out flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              data-scroll
            >
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <FaEye className="mr-2" />
                Ver Projetos
              </button>
              
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                <FaCalculator className="mr-2" />
                Orçamento Grátis
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              className="opacity-0 translate-y-10 transition-all duration-1000 ease-out relative"
              data-scroll
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 scale-110"></div>
              
              <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 group cursor-pointer">
                <Image
                  src={Profile}
                  alt="Matheus Barboza"
                  fill
                  className="rounded-full object-cover border-4 border-white/20 shadow-2xl"
                  priority
                />
                
                {/* Efeito de hover interativo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer group-hover:animate-pulse"></div>
                
                {/* Partículas flutuantes */}
                <div className="absolute -inset-4">
                  <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-1/4 left-0 w-1 h-1 bg-pink-400/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-0 right-1/3 w-2 h-2 bg-indigo-400/40 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Carousel */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <h3 className="text-white/80 text-sm font-medium">Tecnologias que domino</h3>
          </div>
          <div className="relative overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex animate-scroll-infinite"
              style={{ width: 'max-content' }}
            >
              {/* Criar 3 conjuntos para garantir loop perfeito */}
              {Array.from({ length: 3 }, (_, setIndex) => 
                stacks.map((stack, index) => (
                  <div
                    key={`set-${setIndex}-${index}`}
                    className="flex-shrink-0 mx-4 flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 transition-transform hover:scale-105"
                  >
                    <img
                      src={stack.icon}
                      alt={stack.name}
                      className="w-6 h-6"
                      loading="lazy"
                      decoding="async"
                      width="24"
                      height="24"
                    />
                    <span className="text-white text-sm font-medium whitespace-nowrap">
                      {stack.name}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-infinite {
          animation: scroll-infinite 60s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
        
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
      `}</style>
      
      {/* Modal de Orçamento */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
}
