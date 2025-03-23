'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

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
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {/* Campo Nome */}
      <div
        className="mb-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        data-scroll
      >
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

      {/* Campo E-mail */}
      <div
        className="mb-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-100"
        data-scroll
      >
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

      {/* Campo Título */}
      <div
        className="mb-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200"
        data-scroll
      >
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

      {/* Campo Mensagem */}
      <div
        className="mb-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300"
        data-scroll
      >
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

      {/* Botão Enviar */}
      <div
        className="opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-400"
        data-scroll
      >
        <button
          type="submit"
          disabled={!isFormValid}
          className={`bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 ${
            !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Enviar
        </button>
      </div>
    </form>
  );
}