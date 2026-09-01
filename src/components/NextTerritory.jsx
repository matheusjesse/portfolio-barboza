'use client';

import { useState, useRef } from 'react';
import { FaChevronDown, FaMobileAlt, FaCode, FaServer, FaUsers, FaSearch, FaMapSigns, FaChalkboardTeacher, FaChartBar, FaListOl, FaBullseye } from 'react-icons/fa';

const ACCORDION_GROUPS = [
  {
    id: 'base',
    num: '01',
    title: 'Base Sólida em Engenharia & Desenvolvimento',
    status: 'Dominado / Apto',
    statusType: 'done',
    summary: 'Construção de aplicações mobile nativas (iOS/Android), web responsivas e APIs RESTful escaláveis.',
    items: [
      {
        title: 'Desenvolvimento Mobile',
        icon: FaMobileAlt,
        description: 'Construção de aplicações nativas e fluidas (iOS/Android) com React Native e Expo.',
        status: 'Apto',
        statusType: 'done',
      },
      {
        title: 'Desenvolvimento Web',
        icon: FaCode,
        description: 'Criação de interfaces complexas e responsivas utilizando React.',
        status: 'Apto',
        statusType: 'done',
      },
      {
        title: 'Backend API REST',
        icon: FaServer,
        description: 'Arquitetura de APIs escaláveis, integração de serviços e bancos de dados (Node/NestJS).',
        status: 'Apto',
        statusType: 'done',
      },
      {
        title: 'UX & Usabilidade',
        icon: FaUsers,
        description: 'Certificação Google UX Design concluída. Domínio prático em entrevistas, jornadas e testes de usabilidade.',
        status: 'Apto',
        statusType: 'done',
      },
    ],
  },
  {
    id: 'discovery',
    num: '02',
    title: 'Product Discovery & Facilitação de Workshops',
    status: 'Foco Atual',
    statusType: 'learning',
    summary: 'Mapeamento de dores reais dos usuários, facilitação Lean Inception e validação rápida de hipóteses.',
    items: [
      {
        title: 'Product Discovery',
        icon: FaSearch,
        description: 'Entender o problema antes da solução. Mapeamento de dores e validação contínua de hipóteses com usuários.',
        status: 'Foco Atual',
        statusType: 'learning',
      },
      {
        title: 'Estratégia de Produto',
        icon: FaMapSigns,
        description: 'Definição de OKRs, visão de produto e alinhamento do roadmap com os objetivos do negócio.',
        status: 'Foco Atual',
        statusType: 'learning',
      },
      {
        title: 'Lean Inception CLF',
        icon: FaChalkboardTeacher,
        description: 'Facilitação de workshops (em certificação). Alinhamento de negócio, UX e engenharia para MVP.',
        status: 'Foco Atual',
        statusType: 'learning',
      },
    ],
  },
  {
    id: 'strategy',
    num: '03',
    title: 'Estratégia de Produto, Métricas & Priorização',
    status: 'Foco Atual',
    statusType: 'learning',
    summary: 'Frameworks de priorização (RICE, ICE, MoSCoW), North Star Metric e alinhamento por OKRs.',
    items: [
      {
        title: 'Métricas & Dados',
        icon: FaChartBar,
        description: 'Métricas de vaidade vs ação. North Star Metric, análise de funil e retenção de usuários.',
        status: 'Foco Atual',
        statusType: 'learning',
      },
      {
        title: 'Frameworks de Priorização',
        icon: FaListOl,
        description: 'Domínio dos frameworks RICE, ICE e MoSCoW para decidir com clareza o que construir primeiro.',
        status: 'Foco Atual',
        statusType: 'learning',
      },
      {
        title: 'Certificação Team OKR',
        icon: FaBullseye,
        description: 'Estruturação de OKRs que conectam estratégia e entrega, engajando o time em metas mensuráveis.',
        status: 'Foco Atual',
        statusType: 'learning',
      },
    ],
  },
];

export default function NextTerritory() {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="proximo-territorio"
      ref={sectionRef}
      style={{
        background: 'var(--bg-white)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}
    >
      <div className="section-container w-full">
        {/* CABEÇALHO COMPACTO */}
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label mb-2">Competências & Evolução</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <h2 className="section-title">Visão de Produto & Competências</h2>

            <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--text-light)', maxWidth: '440px', borderLeft: '2px solid var(--border-medium)', paddingLeft: '1rem' }}>
              "Conectando a base sólida de engenharia de software com estratégias e métricas de Gestão de Produto."
            </p>
          </div>
          <div className="divider" />
        </div>

        {/* LISTA MINIMALISTA COM ACORDEÃO EXPANSÍVEL */}
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {ACCORDION_GROUPS.map((group, index) => {
            const isOpen = openIndex === index;
            const isDone = group.statusType === 'done';
            return (
              <div
                key={group.id}
                onMouseEnter={() => setOpenIndex(index)}
                className="card overflow-hidden transition-all duration-300"
                style={{
                  padding: 0,
                  borderRadius: 'var(--radius-card)',
                  border: '1px solid var(--border-light)',
                  background: 'var(--bg-white)',
                  boxShadow: isOpen ? '0 4px 20px rgba(0,0,0,0.03)' : 'none',
                }}
              >
                {/* Accordion Bar Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left p-6 sm:p-7 cursor-pointer transition-colors duration-200 border-none bg-transparent"
                  style={{ background: isOpen ? '#fafafa' : 'transparent' }}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-xs font-mono font-bold" style={{ color: 'var(--text-dark)' }}>
                      {group.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg mb-1" style={{ color: 'var(--text-dark)' }}>
                        {group.title}
                      </h3>
                      <p className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>
                        {group.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                    <span
                      className="hidden sm:inline-flex items-center text-[11px] font-bold px-3 py-1 rounded-full"
                      style={{
                        background: isDone ? '#f0fdf4' : '#fff7ed',
                        color: isDone ? '#16a34a' : '#c2410c',
                        border: isDone ? '1px solid #bbf7d0' : '1px solid #ffedd5',
                      }}
                    >
                      {group.status}
                    </span>
                    <FaChevronDown
                      size={14}
                      style={{
                        color: isOpen ? 'var(--text-dark)' : 'var(--text-light)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </div>
                </button>

                {/* Accordion Body Content */}
                {isOpen && (
                  <div className="p-6 sm:p-7 pt-2 border-t border-gray-100 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        const itemDone = item.statusType === 'done';
                        return (
                          <div
                            key={item.title}
                            className="p-4 rounded-xl transition-all duration-200"
                            style={{
                              background: 'var(--bg-gray-50)',
                              border: '1px solid var(--border-light)',
                            }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2.5">
                                <Icon size={14} style={{ color: 'var(--text-body)' }} />
                                <h4 className="font-bold text-sm" style={{ color: 'var(--text-dark)' }}>
                                  {item.title}
                                </h4>
                              </div>
                              <span
                                className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5"
                                style={{
                                  background: itemDone ? '#f0fdf4' : '#fff7ed',
                                  color: itemDone ? '#16a34a' : '#c2410c',
                                  border: itemDone ? '1px solid #bbf7d0' : '1px solid #ffedd5',
                                  borderRadius: 'var(--radius-badge)',
                                }}
                              >
                                {item.status}
                              </span>
                            </div>
                            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                              {item.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
