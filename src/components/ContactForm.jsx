'use client';

import { useEffect } from 'react';
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCode, FaRocket } from 'react-icons/fa';

export default function ContactForm() {
  
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
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <FaRocket className="mr-2" />
            Vamos trabalhar juntos!
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Pronto para
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              começar?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Vamos conversar sobre como posso contribuir com seus objetivos!
          </p>
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
    </section>
  );
}