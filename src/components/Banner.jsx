'use client';

import { useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import { stacks } from '@/utils/stacks';

export default function Banner() {
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
    <div className="max-w-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-green-900 min-h-screen overflow-auto">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Título */}
        <div className="w-full md:w-4/5">
          <h1
            className="pt-18 opacity-0 translate-y-10 transition-all duration-1000 ease-out text-white text-4xl md:text-6xl font-bold"
            data-scroll
          >
            Desenvolvedor Full-Stack Web e Mobile <br />
            <span className="text-blue-400">Matheus Barboza</span>
          </h1>
        </div>

        {/* Descrição */}
        <div className="w-full md:w-5/6 my-6 md:my-10 ml-0 md:ml-6">
          <h3
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out text-gray-300 text-sm md:text-base"
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
            Também possuo experiência em UX/UI.
          </h3>
        </div>

        {/* Bolhas decorativas */}
        <div className="hidden sm:block opacity-50 z-0">
          <div className="shadow-2xl w-96 h-96 rounded-full -mt-72"></div>
          <div className="shadow-2xl w-96 h-96 rounded-full -mt-96"></div>
          <div className="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96"></div>
        </div>

        {/* Carrossel de Stacks */}
        <div className="text-white relative pb-18">
          <h3
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out uppercase font-semibold"
            data-scroll
          >
            Minhas Stacks e Ferramentas
          </h3>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1, // Mostra 1 slide por vez
                spaceBetween: 10, // Espaçamento menor entre os slides
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="px-[48px] pb-[18px] sm:px-[24px] md:px-[16px] 2x1:w-400 x1:w-300 lg:w-250 md:w-174 sm:w-140"
          >
            {stacks.map((stack, index) => (
              <SwiperSlide key={index}>
                <div
                  className="opacity-0 translate-y-10 transition-all duration-1000 ease-out group flex items-center bg-white bg-opacity-40 shadow-xl gap-4 px-6 py-4 mb-4 rounded-lg  mt-5 cursor-pointer hover:bg-gray-300 hover:bg-opacity-200 transition w-full sm:w-64 mx-auto"
                  data-scroll
                >
                  <img className="w-9" src={stack.icon} alt={stack.name} />
                  <div>
                    <span className="text-gray-900">{stack.name}</span>
                    <span className="text-xs text-gray-600 block">{stack.description}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}