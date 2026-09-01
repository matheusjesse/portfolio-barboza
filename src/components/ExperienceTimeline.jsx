'use client';

import { useEffect, useRef } from 'react';

const EXPERIENCES = [
  {
    company: 'Emetor LTDA',
    role: 'Desenvolvedor de aplicativos móveis',
    period: 'mar de 2026 — Presente',
    description: 'Desenvolvimento e evolução de aplicações mobile corporativas para iOS e Android, utilizando React Native, Expo e TypeScript. Trabalho na criação de novas funcionalidades, otimização de performance e integração com serviços backend.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'iOS', 'Android'],
    current: true,
  },
  {
    company: 'markts.',
    role: 'Desenvolvedor Mobile Full-Stack',
    period: 'ago de 2024 — mar de 2026',
    description: 'Desenvolvimento e manutenção de aplicações web e mobile. Criação de dashboards interativos com React e Styled Components, além do desenvolvimento de funcionalidades mobile com React Native.',
    technologies: ['React', 'Styled Components', 'React Native', 'JavaScript', 'TypeScript'],
    current: false,
  },
  {
    company: 'Freelance / Autônomo',
    role: 'Desenvolvedor Front-End Freelancer',
    period: '2023 — 2024',
    description: 'Desenvolvimento de aplicações web responsivas e landing pages de alta conversão. Foco em arquitetura front-end, componentes reutilizáveis, UI/UX, SEO e fidelidade de design.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'UI/UX', 'SEO'],
    current: false,
  },
];

const EDUCATION = [
  {
    title: 'Cert. Lean Inception CLF',
    institution: 'Caroli.org',
    period: 'Em processo',
    type: 'Certificação',
  },
  {
    title: 'Google UX Design',
    institution: 'Coursera',
    period: '2023',
    type: 'Certificação',
  },
  {
    title: 'Desenvolvimento Full-Stack',
    institution: 'Trybe',
    period: '2022',
    type: 'Bootcamp',
  },
  {
    title: 'Análise e Dev. de Sistemas',
    institution: 'Estácio',
    period: 'Concluído',
    type: 'Graduação',
  },
];

export default function ExperienceTimeline() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      style={{ background: 'var(--bg-gray-50)', paddingTop: '7rem', paddingBottom: '6rem' }}
    >
      <div className="section-container">
        <div className="scroll-reveal" style={{ marginBottom: '4.5rem' }}>
          <p className="section-label mb-4">Trajetória</p>
          <h2 className="section-title mb-5">Experiência profissional</h2>
          <div className="divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '4rem' }}>
          <div className="lg:col-span-2">
            <p className="scroll-reveal text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--text-light)', marginBottom: '3rem' }}>
              Profissional
            </p>
            <div className="space-y-12">
              {EXPERIENCES.map((exp) => (
                <div key={exp.company} className="scroll-reveal timeline-line">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-lg" style={{ color: 'var(--text-dark)' }}>
                          {exp.role}
                        </h3>
                        <p className="text-base font-medium" style={{ color: 'var(--accent-indigo)' }}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.current && (
                          <span className="text-xs rounded-full font-bold uppercase tracking-wider" style={{
                            background: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0', padding: '0.35rem 1rem'
                          }}>
                            atual
                          </span>
                        )}
                        <span className="text-sm" style={{ color: 'var(--text-light)' }}>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2" style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="scroll-reveal text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--text-light)', marginBottom: '3rem' }}>
              Formação
            </p>
            <div className="flex flex-col" style={{ gap: '1rem' }}>
              {EDUCATION.map((edu, i) => (
                <div 
                  key={edu.title} 
                  className="card"
                  style={{ padding: '1.25rem 1.5rem', animation: 'revealIn 0.5s ease forwards' }}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-base font-semibold leading-tight" style={{ color: 'var(--text-dark)' }}>
                      {edu.title}
                    </h4>
                    <span className="tag flex-shrink-0" style={{ fontSize: '0.75rem' }}>{edu.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{edu.institution}</p>
                    <p className="text-sm" style={{ color: 'var(--text-light)' }}>{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
