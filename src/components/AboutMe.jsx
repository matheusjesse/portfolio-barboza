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

  return (
    <div id="sobre-mim" className="flex items-center justify-center py-16 bg-white min-h-screen">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          {/* Imagem */}
          <div className="md:5/12 lg:w-5/12 opacity-0 translate-y-10 transition-all duration-1000 ease-out" data-scroll>
            <Image
              src={Profile}
              alt="Matheus Barboza"
              className="rounded-full"
              loading="lazy"
              width={300}
              height={300}
            />
          </div>

          {/* Texto */}
          <div className="md:7/12 lg:w-6/12">
            <h2 className="opacity-0 translate-y-10 transition-all duration-1000 ease-out text-2xl text-gray-900 font-bold md:text-4xl" data-scroll>
              Olá! Sou o Matheus
            </h2>
            <p className="opacity-0 translate-y-10 transition-all duration-1000 ease-out mt-6 text-gray-600" data-scroll>
              Desenvolvedor Full-Stack com experiência em criar soluções completas para web e mobile, utilizo tecnologias como React, React Native, TypeScript, Node.js, Nest.js e outras. Para entregar soluções robustas, escaláveis e eficientes.
            </p>
            <p className="opacity-0 translate-y-10 transition-all duration-1000 ease-out mt-4 text-gray-600" data-scroll>
              Além do desenvolvimento, possuo experiência em UX/UI Design, utilizando ferramentas como Figma para criar interfaces intuitivas e centradas no usuário. Também domino Docker, Git e testes automatizados, que me ajudam a garantir a qualidade e a consistência dos projetos.
            </p>
            <p className="opacity-0 translate-y-10 transition-all duration-1000 ease-out mt-6 text-gray-600" data-scroll>
              Meu compromisso é entregar soluções que não apenas resolvam problemas técnicos, mas também gerem valor e satisfação para o usuário final. Acredito que a combinação de código limpo, boas práticas e design bem elaborado é a base para projetos de sucesso.
            </p>
            <p className="opacity-0 translate-y-10 transition-all duration-1000 ease-out mt-6 text-gray-600" data-scroll>
              Se você busca um desenvolvedor criativo, comprometido e sempre em busca de novos desafios, vamos conversar! Estou aberto a oportunidades, parcerias e projetos inovadores. Entre em contato — adoraria colaborar em algo extraordinário com você!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}