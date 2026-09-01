'use client';

import { useRef, useState } from 'react';
import { FaGithub, FaMobile, FaFigma, FaServer, FaCheckCircle, FaChevronRight } from 'react-icons/fa';

const CAPABILITIES = [
  {
    id: 'mobile',
    area: 'Aplicativos Mobile',
    icon: FaMobile,
    description: 'Aplicações nativas para iOS e Android com React Native e Expo. Da arquitetura à publicação nas lojas. Experiência na construção de interfaces fluidas e integração nativa.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Flutter', 'Firebase', 'iOS', 'Android', 'EAS Build'],
    project: {
      title: 'Notas App',
      description: 'App com SQLite, Markdown e CI/CD automatizado.',
      github: 'https://github.com/matheusjesse/notas_app',
    }
  },
  {
    id: 'ui-ux',
    area: 'UI/UX',
    icon: FaFigma,
    description: 'Interfaces criadas com atenção a hierarquia visual, microinterações e acessibilidade. Foco em traduzir requisitos de produto em experiências intuitivas para o usuário final.',
    technologies: ['Figma', 'Design Systems', 'Usability', 'Prototyping'],
    project: null,
    highlight: {
      title: 'Mentalidade Product Designer',
      description: 'Não apenas desenho telas, mas ajudo a definir a experiência. Facilito a ponte entre requisitos de negócio e componentes consistentes na implementação.',
    }
  },
  {
    id: 'backend',
    area: 'Backend & APIs',
    icon: FaServer,
    description: 'APIs RESTful, integrações de serviços e arquitetura de backend robusta para suportar aplicações mobile e web de alta performance.',
    technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Docker', 'JWT'],
    project: {
      title: 'Carteira Digital',
      description: 'Sistema completo com autenticação JWT e transações.',
      github: 'https://github.com/matheusjesse/carteira-digital',
    }
  },
  {
    id: 'quality',
    area: 'Qualidade',
    icon: FaCheckCircle,
    description: 'Testes automatizados, pipelines de CI/CD e cultura de qualidade ao longo de todo o ciclo de desenvolvimento, garantindo entregas confiáveis.',
    technologies: ['Jest', 'GitHub Actions', 'TDD', 'Integration Tests'],
    project: null,
    highlight: {
      title: 'Prevenção acima de correção',
      description: 'O código é escrito visando manutenibilidade. A aplicação de testes unitários e de integração garante que o produto não quebre a cada nova feature.',
    }
  },
];

export default function WhatIBuild() {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const activeData = CAPABILITIES[activeTab];
  const ActiveIcon = activeData.icon;

  return (
    <section
      id="o-que-construo"
      ref={sectionRef}
      style={{ background: 'var(--bg-white)', paddingTop: '6rem', paddingBottom: '5rem' }}
    >
      <div className="section-container">
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label mb-2">Capacidades técnicas</p>
          <h2 className="section-title mb-4">O que construo</h2>
          <div className="divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-start" style={{ gap: '3rem' }}>
          
          {/* MENU LATERAL (TABS) */}
          <div className="lg:col-span-4 flex flex-col" style={{ gap: '0.75rem' }}>
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              const isActive = activeTab === i;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(i)}
                  onMouseEnter={() => setActiveTab(i)}
                  className="text-left w-full transition-all duration-300 group cursor-pointer"
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderRadius: 'var(--radius-input)',
                    background: isActive ? 'var(--bg-gray-50)' : 'transparent',
                    border: isActive ? '1px solid var(--border-light)' : '1px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: isActive ? '0 4px 12px rgba(0, 0, 0, 0.03)' : 'none',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="transition-colors duration-300"
                      style={{ 
                        color: isActive ? 'var(--accent-indigo)' : 'var(--text-light)',
                      }}
                    >
                      <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span 
                      className="font-semibold text-base transition-colors duration-300" 
                      style={{ 
                        color: isActive ? 'var(--text-dark)' : 'var(--text-muted)',
                      }}
                    >
                      {cap.area}
                    </span>
                  </div>
                  <FaChevronRight 
                    size={14} 
                    className="transition-all duration-300"
                    style={{ 
                      color: isActive ? 'var(--accent-indigo)' : 'transparent',
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateX(0)' : 'translateX(-4px)',
                    }} 
                  />
                </button>
              );
            })}
          </div>

          {/* PAINEL DINÂMICO (SHOWCASE) */}
          <div className="lg:col-span-8">
            <div 
              className="card p-6 md:p-10" 
              style={{ 
                minHeight: '400px', 
                display: 'flex', 
                flexDirection: 'column',
                background: 'linear-gradient(145deg, #ffffff, #fafaf9)',
                border: '1px solid var(--border-light)',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Ornamento de fundo sutil */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'var(--accent-indigo)',
                opacity: 0.03,
                borderRadius: '50%',
                filter: 'blur(40px)',
                pointerEvents: 'none'
              }} />

              {/* Usamos key no container interno para forçar re-render e recriar animação ao trocar de tab */}
              <div key={activeData.id} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center rounded-2xl" style={{ 
                    width: '56px', 
                    height: '56px', 
                    background: 'rgba(234, 88, 12, 0.08)', 
                    color: '#ea580c'
                  }}>
                    <ActiveIcon size={26} />
                  </div>
                  <h3 className="font-bold text-2xl sm:text-3xl tracking-tight" style={{ color: 'var(--text-dark)' }}>
                    {activeData.area}
                  </h3>
                </div>

                <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-body)' }}>
                  {activeData.description}
                </p>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-light)' }}>
                    Tecnologias principais
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeData.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="inline-flex items-center px-3 py-1.5 text-xs font-semibold"
                        style={{ 
                          background: 'var(--bg-gray-50)', 
                          color: 'var(--text-body)', 
                          border: '1px solid var(--border-light)',
                          borderRadius: 'var(--radius-badge)' 
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {activeData.project && (
                  <div style={{ marginTop: '3rem' }}>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-light)', marginBottom: '1.25rem' }}>
                      Projeto Open Source
                    </p>
                    <a
                      href={activeData.project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col sm:flex-row sm:items-center justify-between transition-all"
                      style={{
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-input)',
                        background: 'white',
                        border: '1px solid var(--border-light)',
                        textDecoration: 'none',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#fed7aa';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(234, 88, 12, 0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-light)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.02)';
                      }}
                    >
                      <div className="mb-4 sm:mb-0">
                        <h4 className="font-bold text-base mb-1.5 transition-colors duration-300 group-hover:text-[#ea580c]" style={{ color: 'var(--text-dark)' }}>
                          {activeData.project.title}
                        </h4>
                        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                          {activeData.project.description}
                        </p>
                      </div>
                      <div 
                        className="flex items-center gap-2 transition-all duration-300 group-hover:bg-[#ea580c] group-hover:text-white group-hover:border-[#ea580c]" 
                        style={{ 
                          background: '#f8fafc',
                          padding: '8px 16px',
                          borderRadius: 'var(--radius-badge)',
                          color: 'var(--text-dark)',
                          border: '1px solid #e2e8f0',
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          whiteSpace: 'nowrap',
                          flexShrink: 0
                        }}
                      >
                        <FaGithub size={16} />
                        <span>Ver repositório</span>
                      </div>
                    </a>
                  </div>
                )}

                {activeData.highlight && (
                  <div style={{ marginTop: '3rem' }}>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-light)', marginBottom: '1.25rem' }}>
                      Princípio de trabalho
                    </p>
                    <div
                      className="flex flex-col sm:flex-row sm:items-center justify-between"
                      style={{
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-input)',
                        background: 'white',
                        border: '1px solid var(--border-light)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                      }}
                    >
                      <div>
                        <h4 className="font-bold text-base mb-1.5" style={{ color: 'var(--text-dark)' }}>
                          {activeData.highlight.title}
                        </h4>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                          {activeData.highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
