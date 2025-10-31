"use client";

import { useEffect } from "react";

export default function Certifications() {
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    const elements = document.querySelectorAll("[data-scroll]");
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center min-h-svh">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          data-scroll
        >
          <span className="text-gray-800">Certificações e Cursos</span>
        </h2>
        <ol className="relative border-l-2 border-gray-100 ml-6">
          {/* Item 1 */}
          <li className="mb-14 ml-0 relative opacity-0 translate-y-10 transition-all duration-1000 ease-out" data-scroll>
            <span className="absolute -left-7 top-7 w-3.5 h-3.5 bg-gray-300 border-2 border-white rounded-full"></span>
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-xl font-bold text-gray-800 tracking-tight">Análise e Desenvolvimento de Sistemas</h3>
                <span className="inline-block bg-gray-50 text-gray-600 text-xs font-normal px-3 py-1 rounded-full border border-gray-200">Graduação</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2 gap-2">
                <span className="text-base text-gray-500 font-normal">Estácio</span>
                <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded">Concluído</span>
              </div>
            </div>
          </li>
          {/* Item 2 */}
          <li className="mb-14 ml-0 relative opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-100" data-scroll>
            <span className="absolute -left-7 top-7 w-3.5 h-3.5 bg-gray-300 border-2 border-white rounded-full"></span>
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-xl font-bold text-gray-800 tracking-tight">Inteligência Artificial</h3>
                <span className="inline-block bg-gray-50 text-gray-600 text-xs font-normal px-3 py-1 rounded-full border border-gray-200">Pós Graduação</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2 gap-2">
                <span className="text-base text-gray-500 font-normal">Anhembi Morumbi</span>
                <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded">Cursando</span>
              </div>
            </div>
          </li>
          {/* Item 3 */}
          <li className="mb-14 ml-0 relative opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200" data-scroll>
            <span className="absolute -left-7 top-7 w-3.5 h-3.5 bg-gray-300 border-2 border-white rounded-full"></span>
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-xl font-bold text-gray-800 tracking-tight">Google UX Design</h3>
                <span className="inline-block bg-gray-50 text-gray-600 text-xs font-normal px-3 py-1 rounded-full border border-gray-200">Curso</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2 gap-2">
                <span className="text-base text-gray-500 font-normal">Coursera</span>
                <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded">Concluído</span>
              </div>
            </div>
          </li>
          {/* Item 4 */}
          <li className="mb-14 ml-0 relative opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300" data-scroll>
            <span className="absolute -left-7 top-7 w-3.5 h-3.5 bg-gray-300 border-2 border-white rounded-full"></span>
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-xl font-bold text-gray-800 tracking-tight">Desenvolvimento Full-Stack</h3>
                <span className="inline-block bg-gray-50 text-gray-600 text-xs font-normal px-3 py-1 rounded-full border border-gray-200">Curso</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2 gap-2">
                <span className="text-base text-gray-500 font-normal">Trybe</span>
                <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded">Concluído</span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
// ...existing code...