'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function FloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      id="floating-scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
      className="fixed bottom-8 right-8 w-10 h-10 rounded-full flex items-center justify-center z-40"
      style={{
        background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.8)',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: visible ? 'auto' : 'none',
        boxShadow: '0 4px 16px rgba(79,70,229,0.35)',
      }}
    >
      <FaArrowUp size={13} color="white" />
    </button>
  );
}