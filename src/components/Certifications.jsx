'use client';

import { useEffect } from 'react';

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

  return (
    <section className="py-16 bg-gray-100 mb-24 flex items-center justify-center h-194">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out text-3xl font-bold text-center mb-8"
          data-scroll
        >
          Certificações e Cursos
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24">
          {/* Card 1 */}
          <div
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out bg-white p-6 rounded-lg shadow-lg"
            data-scroll
          >
            <h3 className="text-xl font-semibold">Análise e Desenvolvimento de Sistemas</h3>
            <p className="text-gray-600">Graduação - concluído</p>
            <p className="text-gray-600 mt-2">Estácio</p>
          </div>

          {/* Card 2 */}
          <div
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out bg-white p-6 rounded-lg shadow-lg"
            data-scroll
          >
            <h3 className="text-xl font-semibold">Inteligência Artificial</h3>
            <p className="text-gray-600">Pós Graduação - cursando</p>
            <p className="text-gray-600 mt-2">Anhembi Morumbi</p>
          </div>

          {/* Card 3 */}
          <div
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out bg-white p-6 rounded-lg shadow-lg"
            data-scroll
          >
            <h3 className="text-xl font-semibold">Google UX Design</h3>
            <p className="text-gray-600">Curso - concluído</p>
            <p className="text-gray-600 mt-2">Coursera</p>
          </div>

          {/* Card 4 */}
          <div
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out bg-white p-6 rounded-lg shadow-lg"
            data-scroll
          >
            <h3 className="text-xl font-semibold">Desenvolvimento Full-Stack</h3>
            <p className="text-gray-600">Curso - concluído</p>
            <p className="text-gray-600 mt-2">Trybe</p>
          </div>
        </div>
      </div>
    </section>
  );
}