'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp, FaEnvelope, FaTimes, FaCalculator, FaRocket, FaCheckCircle, FaLightbulb, FaGlobe, FaMobile, FaDesktop, FaBolt, FaBullseye, FaPaintBrush, FaShieldAlt, FaClock, FaStar, FaAward, FaHeart, FaFileAlt, FaCalendarAlt, FaHandshake } from 'react-icons/fa';

export default function QuoteModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Dados pessoais/empresa
    contactName: '',
    companyName: '',
    email: '',
    phone: '',
    // Detalhes do projeto
    projectType: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    features: [],
    platform: [],
    designNeeded: '',
    // Informações adicionais
    hasExistingCode: '',
    priority: '',
    additionalInfo: ''
  });
  const [errors, setErrors] = useState({ email: '', phone: '' });
  // Regex robusto para email (RFC 5322, cobre maioria dos casos reais)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  // Regex para telefone brasileiro (celular ou fixo, com ou sem máscara)
  // Aceita DDD obrigatório, 8 ou 9 dígitos, permite espaços, parênteses e traços
  const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;

  const totalSteps = 5;

  // Opções pré-definidas para facilitar o preenchimento
  const projectTypes = [
    { value: 'website', label: 'Website Institucional', description: 'Site para apresentar sua empresa' },
    { value: 'landing', label: 'Landing Page', description: 'Página de vendas/captação' },
    { value: 'ecommerce', label: 'E-commerce', description: 'Loja virtual completa' },
    { value: 'webapp', label: 'Aplicação Web', description: 'Sistema web complexo' },
    { value: 'mobile', label: 'App Mobile', description: 'Aplicativo para celular' },
    { value: 'fullstack', label: 'Sistema Completo', description: 'Web + Mobile + Backend' }
  ];

  const budgetRanges = [
    { value: '1000-3000', label: 'R$ 1.000 - R$ 3.000', description: 'Projetos simples' },
    { value: '3000-8000', label: 'R$ 3.000 - R$ 8.000', description: 'Projetos médios' },
    { value: '8000-15000', label: 'R$ 8.000 - R$ 15.000', description: 'Projetos complexos' },
    { value: '15000+', label: 'R$ 15.000+', description: 'Projetos enterprise' },
    { value: 'negociar', label: 'Preferir negociar', description: 'Vamos conversar sobre valores' }
  ];

  const timelineOptions = [
    { value: '1-2semanas', label: '1-2 semanas', description: 'Projeto urgente' },
    { value: '1mes', label: '1 mês', description: 'Prazo padrão' },
    { value: '2-3meses', label: '2-3 meses', description: 'Projeto elaborado' },
    { value: '3meses+', label: '3+ meses', description: 'Projeto complexo' },
    { value: 'flexivel', label: 'Flexível', description: 'Sem pressa' }
  ];

  const platformOptions = [
    { value: 'web', label: 'Web (Navegador)', icon: FaGlobe },
    { value: 'mobile', label: 'Mobile (App)', icon: FaMobile },
    { value: 'desktop', label: 'Desktop', icon: FaDesktop },
    { value: 'all', label: 'Multiplataforma', icon: FaRocket }
  ];

  const featuresList = [
    { value: 'auth', label: 'Sistema de Login', description: 'Cadastro e autenticação' },
    { value: 'payment', label: 'Pagamentos Online', description: 'Integração com gateways' },
    { value: 'admin', label: 'Painel Administrativo', description: 'Área de gestão' },
    { value: 'api', label: 'API Personalizada', description: 'Backend robusto' },
    { value: 'chat', label: 'Chat/Mensagens', description: 'Comunicação em tempo real' },
    { value: 'notifications', label: 'Notificações Push', description: 'Alertas automáticos' },
    { value: 'analytics', label: 'Relatórios/Analytics', description: 'Dashboards e métricas' },
    { value: 'integration', label: 'Integrações', description: 'APIs externas' }
  ];

  // Sugestões de texto para campos
  const projectSuggestions = {
    website: 'Ex: Site institucional para minha clínica médica com agendamento online',
    landing: 'Ex: Landing page para vender meu curso online de marketing digital',
    ecommerce: 'Ex: Loja virtual para vender roupas femininas com entrega nacional',
    webapp: 'Ex: Sistema de gestão para minha empresa de contabilidade',
    mobile: 'Ex: App de delivery para meu restaurante com GPS e pagamentos',
    fullstack: 'Ex: Plataforma completa de ensino online com web e mobile'
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Função para aplicar máscara visual ao telefone
  function formatPhone(value) {
    // Remove tudo que não for número
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 2) return digits;
    if (digits.length <= 6) return `(${digits.slice(0,2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0,2)}) ${digits.slice(2,6)}-${digits.slice(6,10)}`;
    return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7,11)}`;
  }

  const handleInputChange = (field, value) => {
    if (field === 'phone') {
      // Só permite números e aplica máscara visual
      const digits = value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        phone: digits
      }));
      // Validação instantânea
      setErrors(prev => ({
        ...prev,
        phone: digits && !phoneRegex.test(digits) ? 'Digite um número de WhatsApp válido (com DDD).' : ''
      }));
      return;
    }
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (field === 'email') {
      setErrors(prev => ({
        ...prev,
        email: value && !emailRegex.test(value) ? 'Digite um e-mail válido.' : ''
      }));
    }
  };

  const handleArrayChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateQuoteMessage = () => {
    const selectedProjectType = projectTypes.find(p => p.value === formData.projectType);
    const selectedBudget = budgetRanges.find(b => b.value === formData.budget);
    const selectedTimeline = timelineOptions.find(t => t.value === formData.timeline);
    
    return `*SOLICITAÇÃO DE ORÇAMENTO - MATHEUS BARBOZA*

*DADOS PESSOAIS:*
Nome: ${formData.contactName}
${formData.companyName ? `Empresa: ${formData.companyName}` : ''}
Email: ${formData.email}
Telefone: ${formData.phone}

*DETALHES DO PROJETO:*
Tipo: ${selectedProjectType?.label}
Descrição: ${formData.projectDescription}

*INVESTIMENTO:* ${selectedBudget?.label}
*PRAZO:* ${selectedTimeline?.label}

*PLATAFORMAS:* ${formData.platform.map(p => platformOptions.find(opt => opt.value === p)?.label).join(', ')}

${formData.features.length > 0 ? `*FUNCIONALIDADES NECESSÁRIAS:*
${formData.features.map(f => `- ${featuresList.find(feat => feat.value === f)?.label}`).join('\n')}` : ''}

*DESIGN:* ${formData.designNeeded === 'yes' ? 'Preciso de design completo' : formData.designNeeded === 'no' ? 'Já tenho design pronto' : 'Vamos conversar sobre design'}

${formData.additionalInfo ? `*INFORMAÇÕES ADICIONAIS:*
${formData.additionalInfo}` : ''}

---
Enviado através do portfólio: matheusbarboza.com
Aguardo seu contato para discutirmos os detalhes!`;
  };

  const sendViaWhatsApp = () => {
    const message = generateQuoteMessage();
    const phoneNumber = "5521996501743";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  const sendViaEmail = () => {
    const message = generateQuoteMessage();
    const subject = `Solicitação de Orçamento - ${formData.projectType} - ${formData.contactName}`;
    const url = `mailto:matheus_jesse@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      {/* Modal */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-4xl h-[90vh] max-h-[800px] bg-white rounded-3xl shadow-2xl transform transition-all flex flex-col">
          
          {/* Header */}
          <div className="bg-gradient-to-br from-[#232946] via-[#2a2550] to-[#1a1a2e] rounded-t-3xl p-8 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div>
                  <h2 className="text-3xl font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]">Solicitar Orçamento</h2>
                  <p className="text-blue-100">Vamos transformar sua ideia em realidade!</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Etapa {currentStep} de {totalSteps}</span>
                <span>{Math.round((currentStep / totalSteps) * 100)}% completo</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white rounded-full h-2 transition-all duration-500"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Content - Area com scroll */}
          <div className="flex-1 overflow-y-auto p-8">
            
            {/* Step 1: Dados Pessoais */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Vamos nos conhecer!</h3>
                  <p className="text-gray-600 text-sm mb-14">Preciso de alguns dados para criar um orçamento personalizado especialmente para você</p>
                </div>

                {/* Explicação do processo - Compacta */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange('contactName', e.target.value)}
                      placeholder="Ex: João Silva"
                      className="w-full px-3 py-1.5 h-10 border rounded-lg focus:outline-none focus:border-gray-400 transition-colors text-sm border-gray-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome da empresa (opcional)
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="Ex: Tech Solutions LTDA"
                      className="w-full px-3 py-1.5 border h-10 rounded-lg focus:outline-none focus:border-gray-400 transition-colors text-sm border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Ex: joao.silva@empresa.com"
                      className={`w-full px-3 py-1.5 border h-10 rounded-lg focus:outline-none focus:border-gray-400 transition-colors text-sm ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      required
                    />
                      <span className="text-xs block min-h-[1.25em] mt-1" style={{ color: errors.email ? '#dc2626' : 'transparent' }}>
                      {errors.email || '.'}
                    </span>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      value={formatPhone(formData.phone)}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Ex: (21) 99999-9999"
                      className={`w-full px-3 py-1.5 h-10 border rounded-lg focus:outline-none focus:border-gray-400 transition-colors text-sm ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      required
                      maxLength={15}
                    />
                      <span className="text-xs block min-h-[1.25em] mt-1" style={{ color: errors.phone ? '#dc2626' : 'transparent' }}>
                      {errors.phone || '.'}
                    </span>
                  </div>
                </div>

                {/* Segurança e próximos passos */}
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                  <div className="flex items-start space-x-3 mb-3">
                    <FaShieldAlt className="text-gray-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Seus dados estão seguros</h4>
                      <p className="text-gray-700 text-xs leading-relaxed">
                        Seus dados só serão usados para este orçamento. Nada de spam ou compartilhamento.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <FaRocket className="text-gray-600" />
                      <span className="font-semibold text-gray-900 text-sm">Próximos passos:</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                      <div className="flex items-center text-gray-600">
                        <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
                        <span>Tipo de projeto</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">3</span>
                        <span>Orçamento e prazo</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">4</span>
                        <span>Detalhes técnicos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Tipo de Projeto */}
            {currentStep === 2 && (
              <div className="space-y-3">
                <div className="text-center mb-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Que tipo de projeto você precisa?</h3>
                  <p className="text-gray-600 text-xs">Escolha a opção que mais se encaixa com sua necessidade</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {projectTypes.map((type) => (
                    <div
                      key={type.value}
                      onClick={() => handleInputChange('projectType', type.value)}
                      className={`relative p-3 border rounded-xl cursor-pointer transition-all duration-200 hover:shadow-sm focus:outline-none ${
                        formData.projectType === type.value
                          ? 'border-gray-400 bg-gray-100 shadow'
                          : 'border-gray-300'
                      }`}
                    >
                      {formData.projectType === type.value && (
                        <span className="absolute top-2 right-2 text-green-500 opacity-70 transition-all">
                          <FaCheckCircle size={18} />
                        </span>
                      )}
                      <h4 className="font-bold text-gray-900 mb-1 text-sm">{type.label}</h4>
                      <p className="text-gray-600 text-xs">{type.description}</p>
                    </div>
                  ))}
                </div>

                {formData.projectType && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descreva seu projeto em detalhes *
                    </label>
                    <textarea
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      placeholder={projectSuggestions[formData.projectType]}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-400 transition-colors"
                      required
                    />
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>Quanto mais detalhes, mais preciso será o orçamento!</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Orçamento e Prazo */}
            {currentStep === 3 && (
              <div className="space-y-3">
                <div className="text-center mb-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Vamos falar de investimento</h3>
                  <p className="text-gray-600 text-xs">Essas informações me ajudam a criar a proposta ideal para você</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qual é seu orçamento previsto? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {budgetRanges.map((range) => (
                      <div
                        key={range.value}
                        onClick={() => handleInputChange('budget', range.value)}
                        className={`relative p-2 border rounded-xl cursor-pointer transition-all duration-200 hover:shadow-sm focus:outline-none ${
                          formData.budget === range.value
                            ? 'border-gray-400 bg-gray-100 shadow'
                            : 'border-gray-300'
                        }`}
                      >
                        {formData.budget === range.value && (
                          <span className="absolute top-2 right-2 text-green-500 opacity-70 transition-all">
                            <FaCheckCircle size={16} />
                          </span>
                        )}
                        <div className="font-bold text-gray-900 text-sm">{range.label}</div>
                        <div className="text-xs text-gray-600">{range.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qual é o prazo ideal? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {timelineOptions.map((time) => (
                      <div
                        key={time.value}
                        onClick={() => handleInputChange('timeline', time.value)}
                        className={`relative p-2 border rounded-xl cursor-pointer transition-all duration-200 hover:shadow-sm focus:outline-none ${
                          formData.timeline === time.value
                            ? 'border-gray-400 bg-gray-100 shadow'
                            : 'border-gray-300'
                        }`}
                      >
                        {formData.timeline === time.value && (
                          <span className="absolute top-2 right-2 text-green-500 opacity-70 transition-all">
                            <FaCheckCircle size={16} />
                          </span>
                        )}
                        <div className="font-bold text-gray-900 text-sm">{time.label}</div>
                        <div className="text-xs text-gray-600">{time.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className=" p-4 rounded-2xl">
                  <div className="flex items-start space-x-3">
                    <div>
                      <h4 className="font-medium text-black-900">Transparência total:</h4>
                      <p className="text-black-700 text-sm">Estes valores são apenas para eu entender seu perfil. O orçamento final será sempre personalizado e justo!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Detalhes Técnicos */}
            {currentStep === 4 && (
              <div className="space-y-3">
                <div className="text-center mb-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Últimos detalhes técnicos</h3>
                  <p className="text-gray-600 text-xs">Essas informações me ajudam a calcular o escopo exato</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Em quais plataformas deve funcionar?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {platformOptions.map((platform) => (
                      <div
                        key={platform.value}
                        onClick={() => handleArrayChange('platform', platform.value)}
                        className={`relative p-2 border rounded-xl cursor-pointer transition-all duration-200 text-center hover:shadow-sm focus:outline-none ${
                          formData.platform.includes(platform.value)
                            ? 'border-gray-400 bg-gray-100 shadow'
                            : 'border-gray-300'
                        }`}
                      >
                        {formData.platform.includes(platform.value) && (
                          <span className="absolute top-2 right-2 text-green-500 opacity-70 transition-all">
                            <FaCheckCircle size={16} />
                          </span>
                        )}
                        <platform.icon className="text-lg mb-1 mx-auto text-blue-600" />
                        <div className="font-medium text-xs">{platform.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Que funcionalidades especiais você precisa? (opcional)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {featuresList.map((feature) => (
                      <div
                        key={feature.value}
                        onClick={() => handleArrayChange('features', feature.value)}
                        className={`relative p-2 border rounded-xl cursor-pointer transition-all duration-200 hover:shadow-sm focus:outline-none ${
                          formData.features.includes(feature.value)
                            ? 'border-gray-400 bg-gray-100 shadow'
                            : 'border-gray-300'
                        }`}
                      >
                        {formData.features.includes(feature.value) && (
                          <span className="absolute top-2 right-2 text-green-500 opacity-70 transition-all">
                            <FaCheckCircle size={16} />
                          </span>
                        )}
                        <div className="font-medium text-gray-900 text-sm">{feature.label}</div>
                        <div className="text-xs text-gray-600">{feature.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Você já tem design/layout definido?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { value: 'no', label: 'Preciso de design', description: 'Crie do zero' },
                      { value: 'partial', label: 'Tenho algumas ideias', description: 'Vamos desenvolver juntos' },
                      { value: 'yes', label: 'Já tenho tudo', description: 'Só programar' }
                    ].map((option) => (
                      <div
                        key={option.value}
                        onClick={() => handleInputChange('designNeeded', option.value)}
                        className={`relative p-2 border rounded-xl cursor-pointer transition-all duration-200 hover:shadow-sm focus:outline-none ${
                          formData.designNeeded === option.value
                            ? 'border-gray-400 bg-gray-100 shadow'
                            : 'border-gray-300'
                        }`}
                      >
                        {formData.designNeeded === option.value && (
                          <span className="absolute top-2 right-2 text-green-500 opacity-70 transition-all">
                            <FaCheckCircle size={16} />
                          </span>
                        )}
                        <div className="font-bold text-gray-900 text-sm">{option.label}</div>
                        <div className="text-xs text-gray-600">{option.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alguma informação adicional importante?
                  </label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    placeholder="Ex: Preciso integrar com meu sistema atual, tenho preferência por cores específicas, etc."
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-400 transition-colors text-sm"
                  />
                </div>
              </div>
            )}

            {/* Step 5: Envio */}
            {currentStep === 5 && (
              <div className="space-y-3">
                <div className="text-center mb-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Orçamento Finalizado!</h3>
                  <p className="text-gray-600 text-sm">Agora vou preparar uma proposta personalizada para você.</p>
                </div>

                {/* Resumo das informações coletadas - Compacto */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-xl border border-blue-200">
                  <h4 className="font-semibold text-blue-900 text-sm mb-2 flex items-center">
                    <FaFileAlt className="mr-2" />
                    Suas necessidades:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-700 mr-1">Projeto:</span>
                      <span className="text-gray-600 truncate">{formData.projectType || 'A definir'}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-700 mr-1">Orçamento:</span>
                      <span className="text-gray-600 truncate">{formData.budget ? `R$ ${formData.budget}` : 'A definir'}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-700 mr-1">Prazo:</span>
                      <span className="text-gray-600 truncate">{formData.timeline || 'A definir'}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-700 mr-1">Plataformas:</span>
                      <span className="text-gray-600 truncate">{formData.platform.length ? formData.platform.join(', ') : 'A definir'}</span>
                    </div>
                  </div>
                </div>

                {/* O que será enviado - Compacto */}
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2 flex items-center">
                    Sua proposta incluirá:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center text-gray-700">
                      <FaCheckCircle className="mr-1 text-gray-400 flex-shrink-0" />
                      <span>Orçamento detalhado</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaCheckCircle className="mr-1 text-gray-400 flex-shrink-0" />
                      <span>Cronograma realista</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaCheckCircle className="mr-1 text-gray-400 flex-shrink-0" />
                      <span>Consultoria técnica</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaCheckCircle className="mr-1 text-gray-400 flex-shrink-0" />
                      <span>Plano de otimização</span>
                    </div>
                  </div>
                </div>

                {/* CTA Principal */}
                <div className="text-center mb-3">
                  <p className="text-gray-900 font-semibold text-sm mb-1">Enviar orçamento via:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <button
                    onClick={sendViaWhatsApp}
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-white border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all font-medium text-sm group"
                  >
                    <FaWhatsapp className="text-lg text-green-600 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-xs opacity-90 text-gray-500">Resposta mais rápida</div>
                    </div>
                  </button>
                  <button
                    onClick={sendViaEmail}
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-white border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all font-medium text-sm group"
                  >
                    <FaEnvelope className="text-lg text-purple-600 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="font-semibold">Email</div>
                      <div className="text-xs opacity-90 text-gray-500">Conversa direta</div>
                    </div>
                  </button>
                </div>

                {/* Compromisso final */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <FaClock className="text-gray-600" />
                    <span className="font-semibold text-gray-900 text-sm">Compromisso de 24 horas</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Você receberá uma resposta completa em até 24 horas úteis, incluindo esclarecimentos sobre qualquer dúvida 
                    e possíveis ajustes na proposta conforme suas necessidades específicas.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer - Fixo na base */}
          <div className="flex-shrink-0 px-6 pb-4 border-t border-gray-100 bg-gray-50 rounded-b-3xl">
            <div className="flex items-center justify-between pt-3">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-4 py-2 rounded-xl font-medium transition-all text-sm ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                ← Voltar
              </button>

              <div className="flex space-x-3">
                {currentStep < totalSteps ? (
                  <button
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && (!formData.contactName || !formData.email || !formData.phone || errors.email || errors.phone)) ||
                      (currentStep === 2 && (!formData.projectType || !formData.projectDescription)) ||
                      (currentStep === 3 && (!formData.budget || !formData.timeline))
                    }
                    className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${
                      (currentStep === 1 && (!formData.contactName || !formData.email || !formData.phone)) ||
                      (currentStep === 2 && (!formData.projectType || !formData.projectDescription)) ||
                      (currentStep === 3 && (!formData.budget || !formData.timeline))
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-br from-[#232946] via-[#2a2550] to-[#1a1a2e] text-white shadow-md hover:brightness-110'
                    }`}
                  >
                    Continuar →
                  </button>
                ) : (
                  <>
                    <button
                      onClick={onClose}
                      className="px-6 py-2 rounded-xl font-bold transition-all text-sm bg-gray-200 text-gray-700 hover:bg-gray-300"
                    >
                      Fechar
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}