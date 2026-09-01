'use client';

import { useEffect, useRef, useState } from 'react';
import { FaRedo, FaLightbulb } from 'react-icons/fa';

const SCENARIOS = [
  {
    id: 'feature-abandonada',
    context: 'Um cenário real do dia a dia de produto',
    situation: 'Uma funcionalidade nova foi lançada há 3 semanas. O time trabalhou 2 meses nela. Mas os dados mostram que menos de 5% dos usuários ativos chegaram a usar uma vez. O que você faz?',
    options: [
      { id: 'a', text: 'Investigar antes de qualquer decisão' },
      { id: 'b', text: 'Remover a funcionalidade para simplificar o produto' },
      { id: 'c', text: 'Reforçar a comunicação — o usuário não sabe que existe' },
      { id: 'd', text: 'Aguardar mais tempo. 3 semanas é pouco para avaliar' },
    ],
    thought: {
      headline: 'Investigar antes de qualquer decisão.',
      body: [
        'A baixa adoção pode ter várias causas: o usuário não sabe que existe, não chegou até a funcionalidade no fluxo, não entendeu o valor, ou simplesmente não precisa dela.',
        'Antes de remover ou investir em comunicação, eu tentaria entender o que está acontecendo. Onde o usuário desiste? Qual é o caminho até a feature? Alguém testou com usuários reais antes do lançamento?',
        'Remover sem entender o problema é perder aprendizado. Comunicar sem entender o problema é gastar energia no lugar errado.',
      ],
      tag: 'Descoberta antes de decisão',
    },
  },
  {
    id: 'crash-producao',
    context: 'Véspera de um lançamento importante',
    situation: 'São 18h de uma sexta-feira. O app vai ser lançado na segunda para 50 mil usuários. Um bug crítico foi encontrado: em alguns dispositivos Android específicos, o fluxo de pagamento quebra. Você consegue corrigir em 6 horas. O que você faz?',
    options: [
      { id: 'a', text: 'Corrigir agora e atrasar o lançamento — qualidade primeiro' },
      { id: 'b', text: 'Lançar com o bug e corrigir em hotfix logo depois' },
      { id: 'c', text: 'Lançar para um percentual menor (rollout gradual)' },
      { id: 'd', text: 'Depende — preciso entender o impacto real antes de decidir' },
    ],
    thought: {
      headline: 'Depende. E essa é a resposta mais honesta.',
      body: [
        'Qual percentual dos usuários usa esses dispositivos Android específicos? 0,5% ou 30%? O fluxo de pagamento é o principal, ou existe alternativa? Qual é o custo real de atrasar o lançamento para o negócio?',
        'Com rollout gradual, consigo lançar para a maioria enquanto corrijo em paralelo — sem atrasar o prazo nem expor todos ao problema. Mas isso exige infraestrutura preparada.',
        'O que me preocupa não é o bug. O que me preocupa é lançar sem entender o impacto real e sem um plano de resposta claro.',
      ],
      tag: 'Contexto antes de regra',
    },
  },
];

function ScenarioCard({ scenario }) {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const handleOption = (id) => {
    if (revealed) return;
    setSelected(id);
    setTimeout(() => setRevealed(true), 350);
  };

  const handleReset = () => {
    setSelected(null);
    setRevealed(false);
  };

  return (
    <div className="card overflow-hidden" style={{ padding: 0 }}>
      <div className="px-6 py-4" style={{ borderBottom: '1px solid var(--border-light)', background: 'var(--bg-gray-50)' }}>
        <p className="text-xs font-medium" style={{ color: 'var(--text-light)' }}>
          {scenario.context}
        </p>
      </div>

      <div className="p-6 space-y-5">
        <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--text-dark)' }}>
          {scenario.situation}
        </p>

        {!revealed ? (
          <div className="space-y-2">
            <p className="text-xs font-medium mb-3" style={{ color: 'var(--text-light)' }}>
              O que você faria?
            </p>
            {scenario.options.map((opt) => (
              <button
                key={opt.id}
                id={`option-${scenario.id}-${opt.id}`}
                onClick={() => handleOption(opt.id)}
                className="think-option"
                style={{
                  borderColor: selected === opt.id ? 'var(--accent-indigo)' : 'var(--border-light)',
                  background: selected === opt.id ? '#eef2ff' : 'var(--bg-white)',
                  color: selected === opt.id ? 'var(--accent-indigo)' : 'var(--text-body)',
                }}
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: selected === opt.id ? 'var(--accent-indigo)' : 'var(--bg-gray-100)',
                    color: selected === opt.id ? 'white' : 'var(--text-light)',
                  }}
                >
                  {opt.id.toUpperCase()}
                </span>
                {opt.text}
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-4 rounded-xl p-5" style={{ background: '#eef2ff', border: '1px solid #c7d2fe' }}>
            <div className="flex items-center gap-2 mb-1">
              <FaLightbulb size={13} style={{ color: 'var(--accent-indigo)' }} />
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--accent-indigo)' }}>
                Como eu pensaria sobre isso
              </p>
            </div>
            <p className="font-semibold text-sm" style={{ color: 'var(--text-dark)' }}>
              {scenario.thought.headline}
            </p>
            {scenario.thought.body.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                {p}
              </p>
            ))}
            <div className="flex items-center justify-between pt-2">
              <span className="tag">{scenario.thought.tag}</span>
              <button
                id={`reset-${scenario.id}`}
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs transition-opacity hover:opacity-60"
                style={{ color: 'var(--text-light)' }}
              >
                <FaRedo size={9} /> Recomeçar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HowIThink() {
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
      id="como-penso"
      ref={sectionRef}
      className="py-28"
      style={{ background: 'var(--bg-white)' }}
    >
      <div className="section-container">
        <div className="scroll-reveal mb-5">
          <p className="section-label mb-3">Processo de pensamento</p>
          <h2 className="section-title mb-4">Como penso</h2>
          <div className="divider" />
        </div>

        <p className="scroll-reveal text-base leading-relaxed mb-12 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          Em vez de dizer que tenho pensamento crítico, prefiro demonstrar. Escolha uma
          opção em cada cenário e veja como eu abordaria o mesmo problema.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SCENARIOS.map((scenario) => (
            <div key={scenario.id} className="scroll-reveal">
              <ScenarioCard scenario={scenario} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
