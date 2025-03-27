'use client';

import { useEffect } from 'react';
import { FaGraduationCap, FaRobot, FaLaptopCode, FaPalette } from 'react-icons/fa';

export default function Certifications() {
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
        rootMargin: '0px 0px -50px 0px' // Adiciona um pequeno offset
      }
    );

    const elements = document.querySelectorAll('[data-scroll]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center min-h-[900px]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-34 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          data-scroll
        >
          <span className="text-gray-800">
            Certificações e Cursos
          </span>
        </h2>

        {/* Cards - IMPORTANTE: Adicionei data-scroll aqui */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-24">
          {/* Card 1 */}
          <div
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out bg-white p-8 rounded-xl shadow-lg  hover:shadow-xl"
            data-scroll // Adicionei este atributo
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaGraduationCap className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700">Análise e Desenvolvimento de Sistemas</h3>
                <div className="flex items-center mt-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    Graduação
                  </span>
                  <span className="ml-2 text-sm text-gray-600">Concluído</span>
                </div>
                <p className="mt-3 text-gray-600 flex items-center">
                  <span className="font-medium">Estácio</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-100 bg-white p-8 rounded-xl shadow-lg  hover:shadow-xl"
            data-scroll // Adicionei este atributo
          >
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <FaRobot className="text-purple-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700">Inteligência Artificial</h3>
                <div className="flex items-center mt-2">
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    Pós Graduação
                  </span>
                  <span className="ml-2 text-sm text-gray-600">Cursando</span>
                </div>
                <p className="mt-3 text-gray-600 flex items-center">
                  <span className="font-medium">Anhembi Morumbi</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200 bg-white p-8 rounded-xl shadow-lg  hover:shadow-xl"
            data-scroll // Adicionei este atributo
          >
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-3 rounded-full">
                <FaPalette className="text-teal-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700">Google UX Design</h3>
                <div className="flex items-center mt-2">
                  <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    Curso
                  </span>
                  <span className="ml-2 text-sm text-gray-600">Concluído</span>
                </div>
                <p className="mt-3 text-gray-600 flex items-center">
                  <span className="font-medium">Coursera</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300 bg-white p-8 rounded-xl shadow-lg  hover:shadow-xl"
            data-scroll // Adicionei este atributo
          >
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <FaLaptopCode className="text-orange-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-700">Desenvolvimento Full-Stack</h3>
                <div className="flex items-center mt-2">
                  <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    Curso
                  </span>
                  <span className="ml-2 text-sm text-gray-600">Concluído</span>
                </div>
                <p className="mt-3 text-gray-600 flex items-center">
                  <span className="font-medium">Trybe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}