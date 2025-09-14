'use client';

import { useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDesktop, FaMobile } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Notas App - Flutter",
    description: "Aplicativo Flutter para gerenciamento de notas com SQLite, suporte a Markdown e CI/CD automatizado com GitHub Actions.",
    image: "/api/placeholder/300/200",
    technologies: ["Flutter", "SQLite", "Dart", "GitHub Actions", "Markdown"],
    category: "Mobile",
    github: "https://github.com/matheusjesse/notas_app",
    live: null,
    featured: true,
    highlights: [
      "✅ CI/CD com GitHub Actions",
      "✅ Testes unitários e de widgets",
      "✅ Build automático de APK",
      "✅ Merge protegido por testes"
    ]
  },
  {
    id: 2,
    title: "Carteira Digital Full-Stack",
    description: "Sistema completo de carteira digital com autenticação JWT, transações seguras e histórico. Backend API REST e frontend responsivo.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "JWT"],
    category: "Web",
    github: "https://github.com/matheusjesse/carteira-digital",
    live: null,
    featured: true,
    highlights: [
      "✅ Autenticação JWT completa",
      "✅ Sistema de transações seguras", 
      "✅ API REST com múltiplos endpoints",
      "✅ Dockerizado front e back"
    ]
  },
  {
    id: 3,
    title: "ToDo API - Sistema de Tarefas",
    description: "API completa para gerenciamento de tarefas com autenticação JWT, CRUD completo e testes de integração automatizados.",
    image: "/api/placeholder/400/250",
    technologies: ["Node.js", "TypeScript", "Express", "MySQL", "Sequelize", "Docker"],
    category: "Backend",
    github: "https://github.com/matheusjesse/todo-api",
    live: null,
    featured: false,
    highlights: [
      "📝 CRUD completo de tarefas",
      "🔐 Sistema de autenticação JWT",
      "🧪 Testes de integração",
      "🐳 Setup Docker completo"
    ]
  }
];

export default function Projects() {
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
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-scroll]');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getProjectVisual = (project) => {
    if (project.id === 1) { // Notas App Flutter
      return (
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-6 gap-4 p-4 h-full">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="bg-white rounded-md opacity-30"></div>
              ))}
            </div>
          </div>
          
          {/* Main Content */}
          <div className="relative flex items-center justify-center h-full">
            <div className="text-center text-white">
              <FaMobile className="text-6xl mx-auto mb-4 opacity-90" />
              <div className="space-y-2">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
                   Flutter App
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
                   CI/CD Actions
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute bottom-4 left-4 bg-orange-400 text-white rounded-full w-10 h-10 flex items-center justify-center text-xs">
            🔧
          </div>
        </div>
      );
    } else if (project.id === 2) { // Carteira Digital
      return (
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 gap-2 p-4 h-full">
              {[
                25, 45, 35, 20, 50, 30, 40, 15,
                35, 25, 45, 40, 20, 50, 30, 35,
                40, 30, 25, 45, 35, 20, 50, 40,
                30, 45, 35, 25, 40, 35, 20, 45
              ].map((height, i) => (
                <div key={i} className="bg-white rounded-sm opacity-40" style={{
                  height: `${height}%`,
                  alignSelf: 'flex-end'
                }}></div>
              ))}
            </div>
          </div>
          
          {/* Main Content */}
          <div className="relative flex items-center justify-center h-full">
            <div className="text-center text-white">
              <FaDesktop className="text-6xl mx-auto mb-4 opacity-90" />
              <div className="space-y-2">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
                   Digital Wallet
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
                   JWT Security
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute bottom-4 left-4 bg-blue-400 text-white rounded-full w-10 h-10 flex items-center justify-center text-xs">
            🐳
          </div>
        </div>
      );
    }
    
    // Fallback para outros projetos
    return (
      <div className="relative h-64 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-6xl text-gray-400 opacity-20">
            {getCategoryIcon(project.category)}
          </div>
        </div>
      </div>
    );
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web': return <FaDesktop />;
      case 'Mobile': return <FaMobile />;
      case 'Backend': return <FaCode />;
      default: return <FaCode />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Web': return 'bg-blue-100 text-blue-800';
      case 'Mobile': return 'bg-green-100 text-green-800';
      case 'Backend': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projetos" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            data-scroll
          >
            Meus <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out text-xl text-gray-600 max-w-3xl mx-auto"
            data-scroll
          >
            Uma seleção dos projetos que desenvolvi, demonstrando minha experiência 
            em diferentes tecnologias e tipos de aplicação.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out text-2xl font-semibold text-gray-900 mb-8"
            data-scroll
          >
            Projetos em Destaque
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div
                key={project.id}
                className="opacity-0 translate-y-10 transition-all duration-1000 ease-out group bg-white rounded-2xl shadow-soft hover:shadow-medium overflow-hidden"
                data-scroll
              >
                {getProjectVisual(project)}
                
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                    {getCategoryIcon(project.category)}
                    <span className="ml-1">{project.category}</span>
                  </span>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed min-h-[3rem]">
                    {project.description}
                  </p>
                  
                  {project.highlights && (
                    <div className="mb-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <div className="space-y-1">
                        {project.highlights.map((highlight, index) => (
                          <div key={index} className="text-sm text-green-700 font-medium">
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <FaGithub className="mr-2" />
                      Código
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out text-2xl font-semibold text-gray-900 mb-8"
            data-scroll
          >
            Outros Projetos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(project => !project.featured).map((project) => (
              <div
                key={project.id}
                className="opacity-0 translate-y-10 transition-all duration-1000 ease-out group bg-white rounded-xl shadow-soft hover:shadow-medium p-6"
                data-scroll
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg ${getCategoryColor(project.category)}`}>
                      {getCategoryIcon(project.category)}
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-sm text-gray-500">{project.category}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Aprimorado */}
        <div className="text-center mt-16">
          <div
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out relative overflow-hidden rounded-3xl p-12 text-white"
            data-scroll
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
            }}
          >
            {/* Elementos decorativos animados */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
            </div>
            
            {/* Conteúdo principal */}
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Transformando ideias em
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  soluções reais
                </span>
              </h3>
              
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Desenvolvedor especializado em criar aplicações web e mobile robustas, 
                com foco em performance, qualidade e experiência do usuário.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="mr-2">Vamos conversar</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <button
                  onClick={() => window.open('https://github.com/matheusjesse', '_blank')}
                  className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>Explorar código</span>
                </button>
              </div>
              
              {/* Estatísticas rápidas */}
              <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">23+</div>
                  <div className="text-sm opacity-80">Tecnologias</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2+</div>
                  <div className="text-sm opacity-80">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Dedicação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}