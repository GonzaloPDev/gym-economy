import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, DollarSign, Users, TrendingUp, AlertTriangle, Target, Wrench, Sparkles, Zap, BarChart3 } from 'lucide-react';



const StatCard = ({ label, value, subtext, color = "blue" }) => {
  const colors = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600"
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
      <div className={`relative bg-gradient-to-br ${colors[color]} p-6 rounded-2xl shadow-lg text-white transform transition-all duration-300 hover:scale-105`}>
        <p className="text-sm opacity-90 mb-2 font-medium">{label}</p>
        <p className="text-4xl font-bold mb-1">{value}</p>
        {subtext && <p className="text-xs opacity-80">{subtext}</p>}
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, tech, color = "blue" }) => {
  const colors = {
    blue: "border-blue-200 bg-blue-50 hover:border-blue-400",
    green: "border-green-200 bg-green-50 hover:border-green-400",
    purple: "border-purple-200 bg-purple-50 hover:border-purple-400",
    orange: "border-orange-200 bg-orange-50 hover:border-orange-400"
  };

  return (
    <div className={`bg-white p-6 rounded-xl shadow-md border-2 ${colors[color]} transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
      <h5 className="font-bold text-lg mb-3 flex items-center gap-2">
        <Sparkles size={20} className={`text-${color}-600`} />
        {title}
      </h5>
      <p className="text-sm text-gray-700 mb-3">{description}</p>
      {tech && <p className="text-xs text-gray-500 italic"><strong>Tecnología:</strong> {tech}</p>}
    </div>
  );
};

const RiskCard = ({ severity, title, description, mitigation }) => {
  const severityColors = {
    ALTO: { badge: "bg-red-200 text-red-800", border: "border-red-300" },
    MEDIO: { badge: "bg-orange-200 text-orange-800", border: "border-orange-300" },
    BAJO: { badge: "bg-yellow-200 text-yellow-800", border: "border-yellow-300" }
  };

  return (
    <div className={`bg-white p-5 rounded-xl shadow-md border-2 ${severityColors[severity].border} transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}>
      <div className="flex items-start gap-3">
        <span className={`px-3 py-1 ${severityColors[severity].badge} rounded-lg text-sm font-bold`}>
          {severity}
        </span>
        <div className="flex-1">
          <p className="font-bold text-gray-800 mb-2">{title}</p>
          <p className="text-sm text-gray-700 mb-3">{description}</p>
          <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-blue-900"><strong>Mitigación:</strong> {mitigation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Header con parallax */}
      <div 
        className="relative overflow-hidden mb-8"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-white">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <Zap size={40} className="text-yellow-300" />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              XtremeGym
            </h1>
          </div>
          <p className="text-2xl md:text-3xl font-light mb-4 opacity-90">
            Sistema Integral de Gestión para Gimnasios
          </p>
          <p className="text-xl opacity-80 mb-8">
            Transformación Digital del Sector Fitness
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md rounded-full font-semibold">
              📱 Multiplataforma
            </div>
            <div className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md rounded-full font-semibold">
              🚀 Software a Medida
            </div>
            <div className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md rounded-full font-semibold">
              💰 ROI Excepcional
            </div>
          </div>

          <div className="text-sm opacity-75 space-y-1">
            <p>📚 Trabajo Final de Modelo de Negocios y Finanzas</p>
            <p>🎓 Estudiantes de Ingeniería en Sistemas</p>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-16 fill-current text-slate-100">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Quick Stats Overview */}
        <div className="mb-12 grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-blue-200 text-center transform hover:scale-105 transition-all duration-300">
            <p className="text-sm text-gray-600 mb-2">Inversión Inicial</p>
            <p className="text-3xl font-bold text-blue-600">$125</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-green-200 text-center transform hover:scale-105 transition-all duration-300">
            <p className="text-sm text-gray-600 mb-2">TIR</p>
            <p className="text-3xl font-bold text-green-600">1,750%</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-purple-200 text-center transform hover:scale-105 transition-all duration-300">
            <p className="text-sm text-gray-600 mb-2">Retorno 5 años</p>
            <p className="text-3xl font-bold text-purple-600">$94k</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-orange-200 text-center transform hover:scale-105 transition-all duration-300">
            <p className="text-sm text-gray-600 mb-2">Payback</p>
            <p className="text-3xl font-bold text-orange-600">&lt; 1 año</p>
          </div>
        </div>

        <AnimatedSection
          id="intro"
          title="1. INTRODUCCIÓN"
          icon={Target}
          gradient="from-blue-600 to-blue-800"
          isExpanded={expandedSection === 'intro'}
          onToggle={() => toggleSection('intro')}
        >
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              La gestión administrativa de gimnasios se ha mantenido tradicionalmente en métodos manuales
              y sistemas desactualizados que generan ineficiencias operativas, pérdidas económicas por
              errores en el control de pagos, y una experiencia limitada para los usuarios. En gimnasios
              ubicados fuera de las grandes ciudades, esta problemática se agudiza por la falta de acceso
              a soluciones tecnológicas modernas y accesibles.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Sparkles className="text-blue-600" />
                Cinco Capas de Valor Integradas
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <FeatureCard
                  title="Gestión de Rutinas"
                  description="Los entrenadores asignan planes específicos según las necesidades de cada usuario, con videos de corrección técnica integrados."
                  color="blue"
                />
                <FeatureCard
                  title="Pagos Digitales"
                  description="Integración con Mercado Pago para suscripciones automáticas y compras one-click, eliminando la morosidad."
                  color="green"
                />
                <FeatureCard
                  title="Control de Acceso"
                  description="Sistema de QR integrado con molinetes para gestión automatizada de asistencias."
                  color="purple"
                />
                <FeatureCard
                  title="Gestión de Recursos"
                  description="Administración de horarios, lockers y capacidad de clases en tiempo real."
                  color="orange"
                />
              </div>
              <div className="mt-4">
                <FeatureCard
                  title="Comunidad Digital"
                  description="Red social interna que fortalece el engagement y la retención de usuarios."
                  color="blue"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl border-l-4 border-green-500 shadow-md">
              <p className="font-bold text-green-900 mb-2 text-lg">✨ Diferenciación Clave</p>
              <p className="text-gray-800">
                A diferencia de las aplicaciones genéricas disponibles en el mercado, XtremeGym es un
                <strong> software a medida</strong> multiplataforma (Android, iOS, Windows) que se adapta
                completamente a las necesidades específicas de cada gimnasio, ofreciendo personalización
                total y soporte continuo.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="canvas"
          title="2. MODELO DE NEGOCIOS"
          icon={Target}
          gradient="from-purple-600 to-purple-800"
          isExpanded={expandedSection === 'canvas'}
          onToggle={() => toggleSection('canvas')}
        >
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-300 shadow-xl">
              <h4 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                <BarChart3 size={32} className="text-blue-600" />
                2.1. Propuesta de Valor
              </h4>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h5 className="font-bold text-xl text-blue-800 mb-4">Problema Actual de la Industria</h5>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">💸</span>
                      <span>Pérdidas económicas por mal manejo de pagos y control manual de membresías</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">📋</span>
                      <span>Sistemas administrativos obsoletos basados en planillas y papel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">📱</span>
                      <span>Falta de herramientas digitales que mejoren la experiencia del usuario</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">⚡</span>
                      <span>Sobrecarga de trabajo administrativo que impide a los profesores enfocarse en el entrenamiento</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">📉</span>
                      <span>Baja retención de clientes por falta de engagement digital</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-2xl shadow-xl text-white">
                  <h5 className="font-bold text-2xl mb-4">💎 Qué Hace Diferente a XtremeGym</h5>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl">
                      <p className="font-bold mb-2">🎯 Gestión Completa</p>
                      <p className="text-sm">Rutinas, clases, asistencia, pagos, lockers en un solo lugar</p>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl">
                      <p className="font-bold mb-2">💳 Pagos Inteligentes</p>
                      <p className="text-sm">Integración Mercado Pago, suscripciones automáticas</p>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl">
                      <p className="font-bold mb-2">🤖 Automatización Total</p>
                      <p className="text-sm">QR acceso, notificaciones push, recordatorios</p>
                    </div>
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl">
                      <p className="font-bold mb-2">👥 Comunidad Digital</p>
                      <p className="text-sm">Red social interna para engagement</p>
                    </div>
                  </div>
                  
                  <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-xl border-2 border-white border-opacity-40">
                    <p className="font-bold text-xl mb-2">🎯 Slogan de XtremeGym</p>
                    <p className="italic text-lg">
                      "Transformamos la gestión tradicional de gimnasios en una experiencia digital completa,
                      automatizando operaciones, maximizando ingresos y creando comunidades fitness comprometidas."
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h5 className="font-bold text-xl text-purple-800 mb-4">🏆 Beneficios Directos Medibles</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                      <p className="font-bold text-green-800 mb-1">📉 90% reducción</p>
                      <p className="text-sm text-gray-700">en errores de pago y morosidad</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                      <p className="font-bold text-blue-800 mb-1">💰 $500-800/mes ahorro</p>
                      <p className="text-sm text-gray-700">Eliminación de recepcionista</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                      <p className="font-bold text-purple-800 mb-1">📈 +30% conversión</p>
                      <p className="text-sm text-gray-700">por facilidad de compra one-click</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
                      <p className="font-bold text-orange-800 mb-1">🎯 +25% retención</p>
                      <p className="text-sm text-gray-700">gracias a comunidad y automatización</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-300 shadow-xl">
              <h4 className="text-2xl font-bold text-green-900 mb-6">2.2. Segmentos de Clientes</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md">
                  <span className="text-3xl">🏋️</span>
                  <div>
                    <p className="font-bold text-lg">Gimnasios Medianos/Grandes</p>
                    <p className="text-gray-700">100-500+ socios, con infraestructura establecida</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md">
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="font-bold text-lg">Ubicación Estratégica</p>
                    <p className="text-gray-700">Ciudades medianas y zonas semi-urbanas sin competencia digital</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md">
                  <span className="text-3xl">💡</span>
                  <div>
                    <p className="font-bold text-lg">Perfil Ideal</p>
                    <p className="text-gray-700">Dueños/administradores con mentalidad innovadora y ganas de crecer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border-2 border-yellow-300 shadow-xl">
              <h4 className="text-2xl font-bold text-yellow-900 mb-6">2.5. Fuentes de Ingresos</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <h5 className="font-bold text-xl">Modelo SaaS</h5>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-blue-900">Plan Básico</p>
                      <p className="text-2xl font-bold text-blue-700">$150-250/mes</p>
                      <p className="text-sm text-gray-600">hasta 200 usuarios</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-blue-900">Plan Pro</p>
                      <p className="text-2xl font-bold text-blue-700">$300-450/mes</p>
                      <p className="text-sm text-gray-600">hasta 500 usuarios</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                      <p className="font-semibold">Plan Enterprise</p>
                      <p className="text-2xl font-bold">$500-800/mes</p>
                      <p className="text-sm opacity-90">+500 usuarios + custom</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <h5 className="font-bold text-xl">Licencia Única</h5>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-semibold text-green-900">Licencia Base</p>
                      <p className="text-2xl font-bold text-green-700">$3,000-5,000</p>
                      <p className="text-sm text-gray-600">Pago único</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white">
                      <p className="font-semibold">Licencia Premium</p>
                      <p className="text-2xl font-bold">$6,000-10,000</p>
                      <p className="text-sm opacity-90">Con personalizaciones</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-300">
                      <p className="text-sm text-gray-700">✅ 6 meses actualizaciones gratis</p>
                      <p className="text-sm text-gray-700">💰 Post: $50-100/mes opcional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="financial"
          title="3. PLAN FINANCIERO"
          icon={DollarSign}
          gradient="from-green-600 to-green-800"
          isExpanded={expandedSection === 'financial'}
          onToggle={() => toggleSection('financial')}
        >
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <StatCard
                label="VAN (Tasa 10%)"
                value="$78,453"
                subtext="Valor Actual Neto"
                color="green"
              />
              <StatCard
                label="TIR"
                value="1,750%"
                subtext="Tasa Interna de Retorno"
                color="blue"
              />
              <StatCard
                label="Payback"
                value="< 1 año"
                subtext="Período de Recupero"
                color="purple"
              />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-200">
              <h4 className="text-2xl font-bold text-blue-900 mb-6">Proyección de Ingresos (5 años)</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-blue-300 bg-blue-50">
                      <th className="text-left p-4 font-bold">Año</th>
                      <th className="text-right p-4 font-bold">Clientes</th>
                      <th className="text-right p-4 font-bold">Ingresos SaaS</th>
                      <th className="text-right p-4 font-bold">Ingresos Licencia</th>
                      <th className="text-right p-4 font-bold">Total Anual</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold">1</td>
                      <td className="text-right p-4">1</td>
                      <td className="text-right p-4">$3,600</td>
                      <td className="text-right p-4">$0</td>
                      <td className="text-right p-4 font-bold text-green-600">$3,600</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold">2</td>
                      <td className="text-right p-4">4</td>
                      <td className="text-right p-4">$8,640</td>
                      <td className="text-right p-4">$5,000</td>
                      <td className="text-right p-4 font-bold text-green-600">$13,640</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold">3</td>
                      <td className="text-right p-4">7</td>
                      <td className="text-right p-4">$15,120</td>
                      <td className="text-right p-4">$5,000</td>
                      <td className="text-right p-4 font-bold text-green-600">$20,120</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-4 font-semibold">4</td>
                      <td className="text-right p-4">11</td>
                      <td className="text-right p-4">$23,760</td>
                      <td className="text-right p-4">$10,000</td>
                      <td className="text-right p-4 font-bold text-green-600">$33,760</td>
                    </tr>
                    <tr className="bg-green-100 hover:bg-green-200">
                      <td className="p-4 font-bold">5</td>
                      <td className="text-right p-4 font-bold">16</td>
                      <td className="text-right p-4 font-bold">$34,560</td>
                      <td className="text-right p-4 font-bold">$15,000</td>
                      <td className="text-right p-4 font-bold text-green-700 text-xl">$49,560</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-300 shadow-xl">
              <h4 className="text-2xl font-bold text-purple-900 mb-6">Flujo de Fondos Acumulado</h4>
              <div className="space-y-4">
                {[
                  { year: 0, amount: -125, color: 'red' },
                  { year: 1, amount: 2084, color: 'green' },
                  { year: 2, amount: 11808, color: 'green' },
                  { year: 3, amount: 26437, color: 'green' },
                  { year: 4, amount: 53031, color: 'green' },
                  { year: 5, amount: 93955, color: 'green' }
                ].map((item) => (
                  <div key={item.year} className="flex items-center gap-4">
                    <div className="w-20 text-center font-bold text-gray-700">
                      Año {item.year}
                    </div>
                    <div className="flex-1 bg-white rounded-full h-12 overflow-hidden shadow-md relative">
                      <div 
                        className={`h-full bg-gradient-to-r ${item.color === 'green' ? 'from-green-400 to-green-600' : 'from-red-400 to-red-600'} flex items-center justify-end pr-4 text-white font-bold transition-all duration-1000`}
                        style={{ width: item.year === 0 ? '5%' : `${Math.min((Math.abs(item.amount) / 100000) * 100, 100)}%` }}
                      >
                        <span className="drop-shadow-lg">${item.amount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl text-white">
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp size={32} />
                Conclusión Financiera
              </h4>
              <p className="text-lg leading-relaxed">
                El proyecto XtremeGym presenta una <strong>rentabilidad excepcional</strong> con inversión inicial mínima ($125),
                recuperación inmediata y flujos positivos desde el primer año. La TIR extremadamente alta refleja
                el bajo capital inicial y el potencial de escalamiento con costos marginales reducidos.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="risks"
          title="4. ANÁLISIS DE RIESGOS"
          icon={AlertTriangle}
          gradient="from-red-600 to-red-800"
          isExpanded={expandedSection === 'risks'}
          onToggle={() => toggleSection('risks')}
        >
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-2 border-red-300 shadow-xl">
              <h4 className="text-2xl font-bold text-red-900 mb-6">4.1. Riesgos Técnicos</h4>
              <div className="space-y-4">
                <RiskCard
                  severity="MEDIO"
                  title="Bugs críticos en producción"
                  description="Errores en sistema de pagos o acceso podrían generar insatisfacción del cliente."
                  mitigation="Testing exhaustivo, staging environment, rollback automático, monitoreo 24/7 con alertas."
                />
                <RiskCard
                  severity="BAJO"
                  title="Escalabilidad técnica"
                  description="Sistema podría saturarse si un gimnasio crece exponencialmente (+1000 usuarios)."
                  mitigation="Arquitectura cloud escalable (AWS auto-scaling), optimización de queries, CDN para assets."
                />
                <RiskCard
                  severity="BAJO"
                  title="Dependencia de APIs terceros"
                  description="Cambios en API de Mercado Pago, Firebase o servicios críticos."
                  mitigation="Abstracción de servicios, fallbacks, múltiples proveedores de pago como backup."
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border-2 border-orange-300 shadow-xl">
              <h4 className="text-2xl font-bold text-orange-900 mb-6">4.2. Riesgos de Mercado</h4>
              <div className="space-y-4">
                <RiskCard
                  severity="ALTO"
                  title="Resistencia al cambio del sector"
                  description="Gimnasios tradicionales pueden rechazar digitalización por desconfianza o desconocimiento."
                  mitigation="Demos gratis 30 días, casos de éxito documentados, testimonials en video, garantía de devolución primer mes."
                />
                <RiskCard
                  severity="MEDIO"
                  title="Aparición de competidores"
                  description="Empresas grandes podrían desarrollar soluciones similares con más recursos."
                  mitigation="Ventaja first-mover en nichos rurales, personalización extrema, relación cercana cliente, innovación continua."
                />
                <RiskCard
                  severity="BAJO"
                  title="Desaceleración económica"
                  description="Crisis económica podría reducir inversión de gimnasios en tecnología."
                  mitigation="Enfatizar ROI y ahorros operativos, planes de pago flexibles, modelo de licencia única."
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-300 shadow-xl">
              <h4 className="text-2xl font-bold text-purple-900 mb-6">4.4. Riesgos Financieros</h4>
              <div className="space-y-4">
                <RiskCard
                  severity="ALTO"
                  title="Inflación y devaluación (Argentina)"
                  description="Contratos en pesos pierden valor real, costos en USD (licencias) se encarecen."
                  mitigation="Facturación en USD, cláusulas de ajuste por inflación, conversión inmediata a moneda dura."
                />
                <RiskCard
                  severity="MEDIO"
                  title="Demora en cobros"
                  description="Clientes podrían retrasar pagos de licencias o cancelar suscripciones."
                  mitigation="Pago anticipado 50%, cláusulas contractuales claras, suspensión automática por falta de pago."
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="agile"
          title="5. METODOLOGÍA ÁGIL Y GESTIÓN"
          icon={Wrench}
          gradient="from-indigo-600 to-indigo-800"
          isExpanded={expandedSection === 'agile'}
          onToggle={() => toggleSection('agile')}
        >
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-300 shadow-xl">
              <h4 className="text-2xl font-bold text-blue-900 mb-6">5.1. Metodología de Desarrollo</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
                  <h5 className="font-bold text-xl text-blue-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🏃</span> Scrum
                  </h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Sprints:</strong> 2 semanas con objetivos claros</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Ceremonias:</strong> Planning, Daily async, Review, Retrospectiva</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span><strong>Definition of Done:</strong> Testeado, documentado, deployado</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
                  <h5 className="font-bold text-xl text-purple-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">📋</span> Kanban
                  </h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Tablero:</strong> Por Hacer → En Progreso → Testing → Resuelto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>WIP Limits:</strong> Máximo 3 tickets simultáneos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>SLA:</strong> P1 &lt;4h, P2 &lt;24h, P3 &lt;72h</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-300 shadow-xl">
              <h4 className="text-2xl font-bold text-purple-900 mb-6">5.3. KPIs de Gestión</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h5 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <BarChart3 className="text-blue-600" />
                    Desarrollo
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-blue-50 rounded">
                      <span>Code coverage</span>
                      <span className="font-bold text-blue-700">&gt;70%</span>
                    </div>
                    <div className="flex justify-between p-2 bg-blue-50 rounded">
                      <span>Deployment freq.</span>
                      <span className="font-bold text-blue-700">1/semana</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h5 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <DollarSign className="text-green-600" />
                    Negocio
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-green-50 rounded">
                      <span>Conversión demos</span>
                      <span className="font-bold text-green-700">&gt;30%</span>
                    </div>
                    <div className="flex justify-between p-2 bg-green-50 rounded">
                      <span>NPS</span>
                      <span className="font-bold text-green-700">&gt;50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="ai"
          title="6. INTEGRACIÓN DE IA"
          icon={TrendingUp}
          gradient="from-cyan-600 to-cyan-800"
          isExpanded={expandedSection === 'ai'}
          onToggle={() => toggleSection('ai')}
        >
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-8 rounded-2xl border-2 border-cyan-300 shadow-xl">
              <h4 className="text-2xl font-bold text-cyan-900 mb-6">6.1. IA en el Producto</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Recomendación de Rutinas"
                  description="Personalizar planes basándose en objetivos, historial y progreso del usuario."
                  tech="Machine Learning (collaborative filtering, regresión)"
                  color="blue"
                />
                <FeatureCard
                  title="Predicción de Churn"
                  description="Identificar usuarios con alta probabilidad de abandonar para intervención proactiva."
                  tech="Random Forest, XGBoost, alertas automáticas"
                  color="purple"
                />
                <FeatureCard
                  title="Optimización de Horarios"
                  description="Sugerir horarios óptimos basándose en patrones históricos de asistencia."
                  tech="Análisis de series temporales"
                  color="green"
                />
                <FeatureCard
                  title="Asistente Virtual (Chatbot)"
                  description="Resolver consultas frecuentes 24/7 sin intervención humana."
                  tech="NLP (GPT-4 API, fine-tuning)"
                  color="orange"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-300 shadow-xl">
              <h4 className="text-2xl font-bold text-purple-900 mb-6">Roadmap de Implementación IA</h4>
              <div className="space-y-4">
                {[
                  { phase: 'Año 1-2', feature: 'Chatbot FAQ, Reportes automáticos', complexity: 'Baja', impact: 'Alto' },
                  { phase: 'Año 2-3', feature: 'Predicción churn, Anomaly detection', complexity: 'Media', impact: 'Alto' },
                  { phase: 'Año 3-4', feature: 'Recomendación rutinas, Optimización', complexity: 'Alta', impact: 'Muy Alto' },
                  { phase: 'Año 4-5', feature: 'Gemelo digital, Simulaciones', complexity: 'Muy Alta', impact: 'Diferenciador' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl shadow-lg flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg">{item.phase}</p>
                      <p className="text-gray-700">{item.feature}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.complexity === 'Baja' ? 'bg-yellow-200 text-yellow-800' :
                        item.complexity === 'Media' ? 'bg-orange-200 text-orange-800' :
                        'bg-red-200 text-red-800'
                      }`}>
                        {item.complexity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-2xl shadow-2xl text-white">
              <h4 className="text-2xl font-bold mb-6">💎 Impacto Esperado de IA</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl">
                  <p className="font-bold text-xl mb-4">Para el Cliente</p>
                  <ul className="space-y-2 text-sm">
                    <li>✅ +20% retención de usuarios</li>
                    <li>✅ +15% engagement</li>
                    <li>✅ -50% tiempo administrativo</li>
                    <li>✅ Decisiones basadas en datos</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl">
                  <p className="font-bold text-xl mb-4">Para XtremeGym</p>
                  <ul className="space-y-2 text-sm">
                    <li>✅ Diferenciación sostenible</li>
                    <li>✅ -60% costos de soporte</li>
                    <li>✅ Precio premium justificado</li>
                    <li>✅ Escalabilidad mejorada</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="conclusion"
          title="7. CONCLUSIONES"
          icon={Target}
          gradient="from-emerald-600 to-emerald-800"
          isExpanded={expandedSection === 'conclusion'}
          onToggle={() => toggleSection('conclusion')}
        >
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-10 rounded-2xl shadow-2xl text-white">
              <h4 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Sparkles size={36} />
                Conclusiones del Proyecto
              </h4>
              <p className="text-xl leading-relaxed">
                XtremeGym representa una <strong>oportunidad excepcional</strong> en el mercado de soluciones digitales
                para el sector fitness, combinando una propuesta de valor sólida, un modelo financiero
                robusto y una ventana de oportunidad única en mercados desatendidos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-300 shadow-xl">
                <h5 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-2">
                  <span className="text-3xl">💪</span> Fortalezas Clave
                </h5>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📈</span>
                    <div>
                      <p className="font-bold">Modelo Financiero Excepcional</p>
                      <p className="text-sm">Inversión $125, retorno $94k en 5 años, TIR 1,750%</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <p className="font-bold">Ventaja Competitiva</p>
                      <p className="text-sm">Software a medida en nicho desatendido</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <p className="font-bold">Escalabilidad</p>
                      <p className="text-sm">Costos marginales bajos, crecimiento rentable</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-300 shadow-xl">
                <h5 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                  <span className="text-3xl">🎯</span> Proyección
                </h5>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow">
                    <p className="font-bold text-blue-800">Fase 1 (Años 1-2)</p>
                    <p className="text-sm text-gray-700">4-6 clientes • Validación</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow">
                    <p className="font-bold text-purple-800">Fase 2 (Años 3-4)</p>
                    <p className="text-sm text-gray-700">11-15 clientes • Escalamiento</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-xl shadow text-white">
                    <p className="font-bold">Fase 3 (Año 5+)</p>
                    <p className="text-sm">16+ clientes • Expansión regional</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-10 rounded-2xl shadow-2xl text-white">
              <h5 className="text-3xl font-bold mb-6">⚡ Recomendación Final</h5>
              <div className="space-y-4 text-lg">
                <p className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>El proyecto XtremeGym es <strong>ALTAMENTE VIABLE</strong> y presenta una de las mejores relaciones riesgo-retorno.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Inversión mínima ($125) vs. retorno potencial (~$94k) es <strong>excepcional</strong>.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>La ventana de oportunidad es <strong>INMEDIATA</strong>: mercado listo, producto validado.</span>
                </p>
                
                <div className="mt-6 p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-xl border-2 border-white border-opacity-40">
                  <p className="font-bold text-2xl mb-2">🚀 ACCIÓN RECOMENDADA</p>
                  <p className="text-lg">
                    Acelerar comercialización, objetivo 3 clientes nuevos en 6 meses, reinvertir 20-30% en marketing,
                    preparar casos de éxito para escalar agresivamente.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-slate-800 to-slate-900 p-10 rounded-2xl text-white shadow-2xl">
              <p className="text-4xl font-bold mb-4">🏆 El futuro es digital</p>
              <p className="text-2xl font-light mb-6">XtremeGym está listo para liderarlo</p>
              <div className="flex justify-center gap-4 flex-wrap">
                <span className="px-6 py-3 bg-blue-500 rounded-full font-semibold">Innovación</span>
                <span className="px-6 py-3 bg-green-500 rounded-full font-semibold">Rentabilidad</span>
                <span className="px-6 py-3 bg-purple-500 rounded-full font-semibold">Escalabilidad</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg font-semibold mb-2">© 2024 XtremeGym</p>
          <p className="text-sm text-gray-400">Trabajo Final de Modelo de Negocios y Finanzas</p>
          <p className="text-xs text-gray-500 mt-2">Desarrollado por Estudiantes de Ingeniería en Sistemas</p>
        </div>
      </div>
    </div>
  );
};

export default App;