'use client';

import { useEffect, useRef } from 'react';
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const CONTACTS = [
  {
    id: 'whatsapp',
    Icon: FaWhatsapp,
    label: 'WhatsApp',
    description: 'A forma mais direta. Resposta rápida.',
    action: 'Chamar agora',
    iconColor: '#16a34a',
    iconBg: '#f0fdf4',
    href: 'https://wa.me/5521996501743?text=Olá%20Matheus!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.',
  },
  {
    id: 'linkedin',
    Icon: FaLinkedin,
    label: 'LinkedIn',
    description: 'Networking e conexão profissional.',
    action: 'Conectar',
    iconColor: '#0077b5',
    iconBg: '#eff6ff',
    href: 'https://linkedin.com/in/matheusjesse',
  },
  {
    id: 'email',
    Icon: FaEnvelope,
    label: 'Email',
    description: 'Para propostas mais detalhadas.',
    action: 'Enviar email',
    iconColor: '#7c3aed',
    iconBg: '#faf5ff',
    href: 'mailto:matheus_jesse@hotmail.com?subject=Oportunidade Profissional&body=Olá Matheus, vi seu portfólio e gostaria de conversar sobre...',
  },
];

export default function Contact() {
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
      id="contato"
      ref={sectionRef}
      style={{
        background: 'var(--bg-gray-50)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7rem',
        paddingBottom: '4rem'
      }}
    >
      <div className="section-container w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal" style={{ marginBottom: '4rem' }}>
            <p className="section-label mb-4">Vamos conversar</p>
            <h2 className="section-title mb-5">Entre em contato</h2>
            <div className="divider mx-auto" />
          </div>

          <p className="scroll-reveal text-lg leading-relaxed px-4" style={{ color: 'var(--text-muted)', marginBottom: '5rem' }}>
            Estou disponível para oportunidades de desenvolvimento mobile, posições que
            valorizem visão de produto, ou qualquer conversa sobre construir coisas que
            realmente importam para o usuário.
          </p>

          <div className="scroll-reveal grid grid-cols-1 md:grid-cols-3" style={{ gap: '1.75rem', marginBottom: '4rem' }}>
            {CONTACTS.map(({ id, Icon, label, description, action, iconColor, iconBg, href }) => (
              <a
                key={id}
                id={`contact-${id}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group card text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  padding: '2.25rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  borderRadius: 'var(--radius-card)',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.06)';
                  const btn = e.currentTarget.querySelector('.contact-btn');
                  if (btn) {
                    btn.style.background = iconColor;
                    btn.style.color = '#ffffff';
                    btn.style.borderColor = iconColor;
                    btn.style.boxShadow = `0 4px 14px ${iconColor}40`;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.boxShadow = 'none';
                  const btn = e.currentTarget.querySelector('.contact-btn');
                  if (btn) {
                    btn.style.background = '#f8fafc';
                    btn.style.color = 'var(--text-dark)';
                    btn.style.borderColor = '#e2e8f0';
                    btn.style.boxShadow = 'none';
                  }
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: iconBg, flexShrink: 0 }}
                >
                  <Icon size={20} style={{ color: iconColor }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text-dark)' }}>
                  {label}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                  {description}
                </p>
                <div
                  className="contact-btn text-xs font-bold tracking-wider flex items-center justify-center gap-2 uppercase transition-all duration-300"
                  style={{
                    background: '#f8fafc',
                    color: 'var(--text-dark)',
                    border: '1px solid #e2e8f0',
                    padding: '0.85rem 1.25rem',
                    borderRadius: 'var(--radius-input)',
                    marginTop: 'auto'
                  }}
                >
                  {action}
                </div>
              </a>
            ))}
          </div>

          <div className="scroll-reveal flex items-center justify-center gap-2 text-sm" style={{ color: 'var(--text-light)' }}>
            <FaMapMarkerAlt size={13} style={{ color: 'var(--text-muted)' }} />
            <span>Rio de Janeiro, Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
}