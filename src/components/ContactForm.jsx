'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCode, FaRocket, FaCalculator, FaLightbulb, FaBolt, FaBullseye, FaShieldAlt } from 'react-icons/fa';
import QuoteModal from './QuoteModal';

export default function ContactForm() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  // Configuração do IntersectionObserver para animações
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
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('[data-scroll]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const redirectToWhatsApp = () => {
    const phoneNumber = "5521996501743";
    const message = "Olá Matheus! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const redirectToLinkedIn = () => {
    window.open('https://linkedin.com/in/matheusjesse', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:matheus_jesse@hotmail.com?subject=Oportunidade Profissional&body=Olá Matheus, vi seu portfólio e gostaria de conversar sobre...', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-scroll>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Pronto para
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              começar?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Vamos conversar sobre como posso contribuir com seus objetivos!
          </p>
          
          {/* CTA Principal - Botão de Orçamento */}
          <div className="flex justify-center">
            {/* Botão de orçamento removido conforme solicitado */}
          </div>
        </div>

        {/* Quick Quote Card - Destaque especial */}
        <div className="mb-12" data-scroll>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 text-center">
              
              <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
                Orçamento Inteligente em 5 Minutos
              </h3>
              
              <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                Responda algumas perguntas rápidas e receba uma proposta detalhada e personalizada!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 rounded-2xl p-4">
                  <FaBolt className="text-2xl mb-2 text-yellow-300 mx-auto" />
                  <div className="font-bold">Resposta Rápida</div>
                  <div className="text-blue-200 text-sm">Em até 24 horas</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <FaBullseye className="text-2xl mb-2 text-yellow-300 mx-auto" />
                  <div className="font-bold">100% Personalizado</div>
                  <div className="text-blue-200 text-sm">Para seu projeto específico</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <FaShieldAlt className="text-2xl mb-2 text-yellow-300 mx-auto" />
                  <div className="font-bold">Sem Compromisso</div>
                  <div className="text-blue-200 text-sm">Análise gratuita</div>
                </div>
              </div>
              
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <FaCalculator className="mr-3" />
                Começar Orçamento Agora
              </button>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* WhatsApp Card */}
          <div 
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out group"
            data-scroll
          >
            <div 
              onClick={redirectToWhatsApp}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaWhatsapp className="text-2xl text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-6">
                A forma mais rápida de me contactar. Ideal para conversar sobre oportunidades!
              </p>
              
              <div className="flex items-center text-green-600 font-semibold">
                <span>Chamar agora</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div 
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out group"
            data-scroll
          >
            <div 
              onClick={redirectToLinkedIn}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaLinkedin className="text-2xl text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">LinkedIn</h3>
              <p className="text-gray-600 mb-6">
                Vamos nos conectar! Perfeito para networking e discussões sobre carreira.
              </p>
              
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Conectar</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div 
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out group"
            data-scroll
          >
            <div 
              onClick={openEmail}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-2xl text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-600 mb-6">
                Prefere algo mais formal? Ideal para propostas detalhadas.
              </p>
              
              <div className="flex items-center text-purple-600 font-semibold">
                <span>Enviar email</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center" data-scroll>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8 space-y-4 sm:space-y-0 bg-gray-50 rounded-2xl px-6 py-6 border border-gray-200">
            <div className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="mr-3 text-blue-500" />
              <span>Rio de Janeiro, Brasil</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <FaCode className="mr-3 text-green-500" />
              <span>Disponível</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal de Orçamento */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </section>
  );
}