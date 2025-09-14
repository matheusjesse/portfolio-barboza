'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Profile from '../utils/images/profile.jpg'; // Ajuste o caminho da imagem conforme necessário

export default function AboutMe() {
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
      {
        threshold: 0.1, // Aciona a animação quando 10% do elemento estiver visível
      }
    );

    // Observar todos os elementos com o atributo data-scroll
    const elements = document.querySelectorAll('[data-scroll]');
    elements.forEach((el) => observer.observe(el));

    // Limpar o observer ao desmontar o componente
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="sobre-mim" className="flex items-center justify-center py-20 bg-white min-h-screen max-w-screen">
      <div className="container max-w-7xl mx-auto px-6 text-neutral-600 md:px-12 xl:px-6">
        <div className="space-y-16 md:space-y-0 md:flex md:gap-12 lg:items-center lg:gap-16">
          {/* Seção Visual Criativa */}
          <div className="flex items-center justify-center md:w-5/12 lg:w-5/12 opacity-0 translate-y-10 transition-all duration-1000 ease-out" data-scroll>
            <div className="relative w-full max-w-md">
              {/* Background decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-purple-400 to-pink-600 rounded-3xl -rotate-6 opacity-20"></div>
              
              {/* Card principal */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                {/* Header do card */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                
                {/* Código simulado */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-600 font-mono text-sm">const</span>
                    <span className="text-blue-600 font-mono text-sm">developer</span>
                    <span className="text-gray-600 font-mono text-sm">=</span>
                    <span className="text-green-600 font-mono text-sm">{`{`}</span>
                  </div>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600 font-mono text-sm">name:</span>
                      <span className="text-green-600 font-mono text-sm">'Matheus'</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600 font-mono text-sm">role:</span>
                      <span className="text-green-600 font-mono text-sm">'Full-Stack'</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600 font-mono text-sm">skills:</span>
                      <span className="text-blue-600 font-mono text-sm">[</span>
                    </div>
                    <div className="ml-4 space-y-1">
                      <div className="text-green-600 font-mono text-sm">'React'</div>
                      <div className="text-green-600 font-mono text-sm">'Node.js'</div>
                      <div className="text-green-600 font-mono text-sm">'TypeScript'</div>
                      <div className="text-gray-400 font-mono text-sm">...</div>
                    </div>
                    <div className="text-blue-600 font-mono text-sm">]</div>
                  </div>
                  <div className="text-green-600 font-mono text-sm">{`}`}</div>
                </div>
                
                {/* Status indicator */}
                <div className="flex items-center space-x-2 pt-4 border-t border-gray-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-600 text-sm font-medium">Disponível</span>
                </div>
              </div>
              
              {/* Elementos flutuantes */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">💻</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="md:w-7/12 lg:w-6/12 space-y-6">
            <h2 className="opacity-0 translate-y-10 transition-all duration-1000 ease-out text-3xl text-neutral-900 font-bold md:text-4xl lg:text-5xl" data-scroll>
              Olá! Sou o <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Matheus</span>
            </h2>
            
            <p className="opacity-0 translate-y-10 transition-all duration-1000 ease-out text-lg text-neutral-600 leading-relaxed" data-scroll>
              Desenvolvedor Full-Stack com experiência em criar soluções completas para web e mobile. Utilizo tecnologias como 
              <span className="font-semibold text-blue-600"> React, React Native, TypeScript, Node.js, Nest.js</span> e outras 
              para entregar soluções robustas, escaláveis e eficientes.
            </p>
            
            <p className="opacity-0 translate-y-10 transition-all duration-1000 ease-out text-lg text-neutral-600 leading-relaxed" data-scroll>
              Além do desenvolvimento, possuo experiência em <span className="font-semibold text-purple-600">UX/UI Design</span>, 
              utilizando ferramentas como Figma para criar interfaces intuitivas e centradas no usuário. Também domino 
              <span className="font-semibold text-green-600"> Docker, Git e testes automatizados</span>, que me ajudam a garantir 
              a qualidade e a consistência dos projetos.
            </p>
            
            <p className="opacity-0 translate-y-10 transition-all duration-1000 ease-out text-lg text-neutral-600 leading-relaxed" data-scroll>
              Meu compromisso é entregar soluções que não apenas resolvam problemas técnicos, mas também 
              <span className="font-semibold text-blue-600"> gerem valor e satisfação para o usuário final</span>. 
              Acredito que a combinação de código limpo, boas práticas e design bem elaborado é a base para projetos de sucesso.
            </p>
            
            <div className="opacity-0 translate-y-10 transition-all duration-1000 ease-out" data-scroll>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Se você busca um desenvolvedor criativo, comprometido e sempre em busca de novos desafios, vamos conversar! 
                Estou aberto a oportunidades, parcerias e projetos inovadores.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Vamos Conversar!
                </button>
                <button 
                  onClick={() => scrollToSection('projetos')}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Ver Projetos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}