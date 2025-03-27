'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const isFormValid =
    name.trim() !== '' && email.trim() !== '' && title.trim() !== '' && message.trim() !== '';

  // Inicializar o EmailJS com a Public Key
  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, // Usando a variável de ambiente
    });
  }, []);

  const redirectToWhatsApp = () => {
    const phoneNumber = "5521996501743"; // Seu número sem caracteres especiais
    const message = "Olá Matheus, gostaria de conversar sobre..."; // Mensagem pré-definida
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar e-mail usando EmailJS
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Usando a variável de ambiente
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Usando a variável de ambiente
        e.target,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, // Usando a variável de ambiente
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Mensagem enviada com sucesso!');
          setName('');
          setEmail('');
          setTitle('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
        }
      );
  };

  return (
    <div className="max-w-screen-lg mx-auto p-3 w-full ">
      <div className="grid grid-cols-1 md:grid-cols-12 border border-gray-300 rounded-lg overflow-hidden w-full ">
        {/* Seção de contato - ocupa 4 colunas */}
        <div className="md:col-span-4 p-10 text-white backdrop-blur-md bg-white/10 border-r border-white/20 ">
          <h3 className="text-3xl sm:text-3xl leading-normal font-extrabold tracking-tight text-gray-700">
          Vamos começar <span className="text-teal-500">Me chame no WhatsApp</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-700">
            Estou disponível para oportunidades de trabalho e colaborações.
          </p>
  
          <div className="flex items-center mt-5">
            <FaMapMarkerAlt className="h-5 w-5 mr-2 text-gray-600" />
            <span className="text-gray-700">Rio de Janeiro</span>
          </div>
          
          <div className="flex items-center mt-5">
            <FaEnvelope className="h-5 w-5 mr-2 text-gray-600" />
            <span className="text-gray-700">matheus_jesse@hotmail.com</span>
          </div>
          
          <div className="flex items-center mt-5">
            <FaPhoneAlt className="h-5 w-5 mr-2 text-gray-600" />
            <span className="text-gray-700">+55 (21) 99650-1743</span>
          </div>
  
          <div className="flex items-center mt-5">
            <FaClock className="h-5 w-5 mr-2 text-gray-600" />
            <span className="text-gray-700">24/7</span>
          </div>
          
          <button type="button" className="cursor-pointer  mt-5 gap-3 w-full text-white bg-teal-600  hover:bg-teal-700 focus:ring-2 focus:outline-none focus:ring-[#3b5998]/50 font-bold rounded-lg text-xl px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
                  onClick={redirectToWhatsApp}
                >
            
                  <FaWhatsapp className="text-2xl" />
                  WhatsApp
            
                </button>
        </div>
        
        {/* Seção do formulário - ocupa 8 colunas */}
        <div className="md:col-span-8  p-10 w-full flex items-center">
          <form onSubmit={handleSubmit} className="w-full">
            {/* Campos do formulário */}
            <h4 className="text-2xl mb-2 sm:text-2xl leading-normal font-extrabold tracking-tight text-gray-700">
              Caso prefira, você pode enviar um e-mail
            </h4>
            <div className="mb-4 " data-scroll>
              <label className="block text-gray-700">Nome</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                required
              />
            </div>
  
            <div className="mb-4 " data-scroll>
              <label className="block text-gray-700">E-mail</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                required
              />
            </div>
  
            <div className="mb-4 " data-scroll>
              <label className="block text-gray-700">Título</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                required
              />
            </div>
  
            <div className="mb-4" data-scroll>
              <label className="block text-gray-700">Mensagem</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                rows="4"
                required
              ></textarea>
            </div>
  
            <div className="flex justify-end" data-scroll>
              <button
                type="submit"
                disabled={!isFormValid}
                className={`bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 ${
                  !isFormValid ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}