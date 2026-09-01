'use client';

import { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import {
  SiReact,
  SiTypescript,
  SiExpo,
  SiNodedotjs,
  SiFlutter,
  SiPostgresql,
  SiDocker,
  SiFigma,
  SiJest,
  SiNestjs,
  SiGit,
  SiFirebase,
  SiApple,
  SiAndroid
} from 'react-icons/si';
import Image from 'next/image';
import Profile from '../utils/images/profile.jpg';

const STATIC_TECHS = [
  { name: 'React Native', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Expo', icon: SiExpo },
  { name: 'iOS', icon: SiApple },
  { name: 'Android', icon: SiAndroid },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'NestJS', icon: SiNestjs },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Docker', icon: SiDocker },
  { name: 'Figma', icon: SiFigma },
  { name: 'Git', icon: SiGit },
  { name: 'Jest', icon: SiJest },
  { name: 'Flutter', icon: SiFlutter },
];

const HIGHLIGHTS = [
  {
    title: 'Desenvolvimento Mobile',
    description: 'React Native, Expo, TypeScript. Publicação para App Store e Google Play com experiência real em produtos.',
  },
  {
    title: 'UI/UX Design',
    description: 'Google UX Design Certificate. Figma, hierarquia visual, microinterações e atenção a detalhes de interface.',
  },
  {
    title: 'Visão de Produto',
    description: 'Em transição para Gestão de Produto. Interesse crescente em entender o problema antes de construir a solução.',
  },
];

export default function WhoIAm() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="quem-sou"
      ref={sectionRef}
      style={{ background: 'var(--bg-white)', paddingTop: '6rem', paddingBottom: '5rem' }}
    >
      <div className="section-container">
        <div className="scroll-reveal" style={{ marginBottom: '2.5rem' }}>
          <p className="section-label mb-2">Quem sou</p>
          <h2 className="section-title mb-4">Matheus Barboza</h2>
          <div className="divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '3rem' }}>
          <div className="scroll-reveal" style={{ display: 'block' }}>
            <div
              style={{
                float: 'left',
                marginRight: '1.5rem',
                marginBottom: '0.5rem',
                width: '160px',
                height: '160px',
                position: 'relative',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid white',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
              }}
            >
              <Image
                src={Profile}
                alt="Matheus Barboza"
                fill
                sizes="160px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-body)' }}>
              Desenvolvedor mobile com experiência em React Native, Expo e TypeScript.
              Já atuei em times de produto, construindo aplicações com foco em qualidade,
              performance e experiência do usuário.
            </p>

            <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-body)' }}>
              Minha trajetória começou na construção de software. Ao longo do tempo,
              fui percebendo que meu interesse não estava só no <em style={{ color: '#ea580c', fontStyle: 'normal', fontWeight: 600 }}>como</em> construir,
              mas também no <em style={{ color: '#ea580c', fontStyle: 'normal', fontWeight: 600 }}>por quê</em> e <em style={{ color: '#ea580c', fontStyle: 'normal', fontWeight: 600 }}>para quem</em>.
            </p>

            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              Hoje estou expandindo meu repertório em direção à Gestão de Produto —
              não para deixar de construir, mas para entender melhor os problemas,
              decisões e objetivos por trás do que construímos.
            </p>

            <div className="flex flex-wrap items-center gap-3" style={{ clear: 'both', marginTop: '2rem' }}>
              <a href="https://linkedin.com/in/matheusjesse" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                <FaLinkedin size={16} /> LinkedIn
              </a>
              <a href="https://github.com/matheusjesse" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                <FaGithub size={16} /> GitHub
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:pl-6" style={{ gap: '1rem' }}>
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="card group cursor-default"
                style={{ 
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-card)',
                  background: '#ffffff',
                  border: '1px solid var(--border-light)',
                }}
              >
                <div className="relative inline-block mb-2">
                  <h3 className="font-bold text-base transition-colors duration-300 group-hover:text-[#ea580c]" style={{ color: 'var(--text-dark)' }}>
                    {item.title}
                  </h3>
                  <div 
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
                    style={{ background: 'linear-gradient(90deg, #ea580c, #f97316)' }}
                  />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {item.description}
                </p>
              </div>
            ))}

            <div className="pt-2">
              <div
                className="flex items-center gap-2"
                style={{
                  display: 'inline-flex',
                  background: 'white',
                  border: '1px solid var(--border-medium)',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '999px',
                  color: 'var(--text-dark)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                }}
              >
                <FaMapMarkerAlt size={14} style={{ color: 'var(--text-muted)' }} />
                Queimados, RJ — Brasil
              </div>
            </div>
          </div>
        </div>

        {/* TECNOLOGIAS E FERRAMENTAS (ÍCONES VETORIAIS NÍTIDOS EM CINZA ESCURO) */}
        <div className="scroll-reveal" style={{ marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)' }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>
            Tecnologias & Ferramentas
          </p>
          <div className="flex flex-wrap gap-2.5">
            {STATIC_TECHS.map(({ name, icon: IconComponent }) => (
              <div
                key={name}
                className="flex items-center gap-2.5"
                style={{
                  padding: '8px 16px',
                  background: 'var(--bg-white)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '10px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease'
                }}
              >
                <IconComponent size={16} style={{ color: '#374151', flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
