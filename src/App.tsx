import { useState } from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Users, Shield, Zap, DollarSign, BarChart3, Target, Calendar, Smartphone, Globe, Heart, QrCode, CreditCard, LineChart } from 'lucide-react';

// Hero Section
const Hero = () => (
  <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white flex items-center relative overflow-hidden">
    <div className="absolute inset-0 bg-black opacity-30"></div>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl">
        <div className="inline-block bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
          <span className="text-blue-200 text-sm font-medium">🚀 Sistema Integral de Gestión</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transforma tu gimnasio en una
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> máquina digital</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
          SIG-FIT automatiza pagos, gestiona accesos, personaliza rutinas y crea comunidad. 
          Todo en una plataforma escalable para gimnasios que quieren crecer.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
            Solicitar Demo Gratis
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-white/30 backdrop-blur-sm px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all">
            Ver Presentación
          </button>
        </div>
        
        <div className="flex flex-wrap gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-blue-300" />
            <span>Android + iOS + Web</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-300" />
            <span>Infraestructura Escalable</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-300" />
            <span>Implementación en 48hs</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Problem Section
const Problem = () => (
  <section className="py-20 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">El Problema</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
          Los gimnasios pierden hasta un 15% de sus ingresos
        </h2>
        <p className="text-xl text-slate-600">
          Por falta de seguimiento en renovaciones, control manual de pagos y deserción silenciosa de clientes
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
          <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl">📋</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Gestión Manual</h3>
          <p className="text-slate-600">
            Planillas Excel desconectadas, cuadernos manuales y sistemas obsoletos que no escalan con el negocio
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
          <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl">💸</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Pérdidas Constantes</h3>
          <p className="text-slate-600">
            Errores en cobros, morosidad por olvido y falta de visibilidad sobre el estado financiero real
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
          <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl">👤</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Baja Retención</h3>
          <p className="text-slate-600">
            Sin herramientas de engagement ni comunidad digital que mantenga motivados a los usuarios
          </p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-block bg-red-50 border-2 border-red-200 rounded-lg px-6 py-4">
          <p className="text-slate-700">
            <span className="font-bold text-red-600">Los SaaS genéricos</span> no se adaptan a tu gimnasio.
            <span className="font-bold text-red-600"> Los sistemas legacy</span> están obsoletos.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Value Proposition - 5 Layers
const ValueProposition = () => {
  const layers = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Rutinas Personalizadas",
      description: "Los entrenadores asignan planes específicos con videos de corrección técnica integrados en la app móvil"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Pagos Automatizados",
      description: "Integración con Mercado Pago: suscripciones automáticas y compras one-click. Adiós a la morosidad"
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "Acceso Inteligente",
      description: "QR dinámicos que se integran con molinetes. Bloqueo automático por cuotas vencidas"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestión de Recursos",
      description: "Horarios, lockers, clases grupales y balance financiero en tiempo real"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Comunidad Digital",
      description: "Red social interna: logros compartidos, comentarios y likes que fortalecen el engagement"
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">La Solución</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            5 Capas de Valor Integradas
          </h2>
          <p className="text-xl text-slate-600">
            Una plataforma completa que transforma la operación y la experiencia del usuario
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {layers.map((layer, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
                {layer.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{layer.title}</h3>
              <p className="text-slate-700">{layer.description}</p>
            </div>
          ))}
          
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl text-white hover:shadow-2xl transition-all">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-3">Todo en Uno</h3>
            <p className="text-blue-100 mb-4">
              No necesitas 5 herramientas diferentes. SIG-FIT unifica todo en una experiencia coherente.
            </p>
            <div className="text-sm font-semibold text-blue-200">
              Software a medida + Soporte continuo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Detail
const Features = () => (
  <section className="py-20 bg-slate-900 text-white">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Tecnología que escala contigo
        </h2>
        <p className="text-xl text-slate-300">
          Arquitectura moderna, segura y pensada para el crecimiento
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Globe className="w-8 h-8 text-blue-400" />
            Multiplataforma Real
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">App Móvil Nativa:</span> React Native + Expo para Android e iOS
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Panel Web:</span> React + Shadcn/UI para administración
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Backend Robusto:</span> Django Rest Framework con API segura
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-purple-400" />
            Seguridad Empresarial
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Endpoints Protegidos:</span> Decoradores de seguridad por rol
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Tests Automatizados:</span> Integración continua en flujos críticos
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">PostgreSQL:</span> Base de datos relacional con integridad
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8 text-yellow-400" />
            Integraciones Poderosas
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Mercado Pago API:</span> Pagos automáticos y one-click
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Firebase Cloud Messaging:</span> Notificaciones en tiempo real
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">QR Dinámicos:</span> Control de acceso físico automatizado
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-green-400" />
            Escalabilidad Garantizada
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Kubernetes Cluster:</span> Infraestructura que crece contigo
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">CDN Global:</span> Carga rápida en cualquier ubicación
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Monitoreo 24/7:</span> Alertas automáticas y backups diarios
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// Comparison Table
const Comparison = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Comparativa</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
          ¿Por qué elegir SIG-FIT?
        </h2>
      </div>
      
      <div className="max-w-5xl mx-auto overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-xl">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-4 text-left font-bold text-slate-900">Característica</th>
              <th className="p-4 text-center font-bold text-slate-600">Software Legacy</th>
              <th className="p-4 text-center font-bold text-slate-600">SaaS Global</th>
              <th className="p-4 text-center font-bold text-blue-600 bg-blue-50">SIG-FIT</th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: "App Móvil Nativa", legacy: "❌", saas: "✅", sigfit: "✅" },
              { feature: "Personalización Profunda", legacy: "❌", saas: "❌", sigfit: "✅" },
              { feature: "Pagos Automáticos", legacy: "❌", saas: "✅", sigfit: "✅" },
              { feature: "Red Social Integrada", legacy: "❌", saas: "❌", sigfit: "✅" },
              { feature: "Control de Acceso QR", legacy: "❌", saas: "⚠️", sigfit: "✅" },
              { feature: "Soporte Dedicado", legacy: "⚠️", saas: "⚠️", sigfit: "✅" },
              { feature: "Precios en ARS", legacy: "✅", saas: "❌", sigfit: "✅" },
              { feature: "Evolución Continua", legacy: "❌", saas: "⚠️", sigfit: "✅" }
            ].map((row, idx) => (
              <tr key={idx} className="border-t border-slate-200 hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                <td className="p-4 text-center text-2xl">{row.legacy}</td>
                <td className="p-4 text-center text-2xl">{row.saas}</td>
                <td className="p-4 text-center text-2xl bg-blue-50">{row.sigfit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

// Testimonials
const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Méndez",
      role: "Dueño - Fitness Center Norte",
      image: "👨‍💼",
      quote: "Redujimos la morosidad en un 80% en solo 3 meses. El sistema de pagos automáticos es increíble."
    },
    {
      name: "Ana Rodríguez",
      role: "Gerente - MegaGym",
      image: "👩‍💼",
      quote: "La red social interna mejoró notablemente la retención. Los usuarios se sienten parte de una comunidad."
    },
    {
      name: "Roberto Silva",
      role: "Director - Iron Training",
      image: "🧑‍💼",
      quote: "Pasamos de Excel a una plataforma profesional. Ahora tenemos visibilidad total de nuestro negocio."
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Casos de Éxito</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Gimnasios que ya transformaron su gestión
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">{t.image}</div>
              <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
              <div>
                <div className="font-bold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-600">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
            <div className="text-slate-600">Margen de rentabilidad promedio de nuestros clientes</div>
          </div>
        </div>
      </div>
    </section>
);
};

// Pricing
const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Planes</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Precios transparentes y justos
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Sin costos ocultos. Sin sorpresas. Elige el modelo que mejor se adapte a tu negocio.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-slate-800 p-2 rounded-lg">
            <button 
              onClick={() => setAnnual(false)}
              className={`px-6 py-2 rounded-md transition-all ${!annual ? 'bg-blue-600 text-white' : 'text-slate-300'}`}
            >
              Mensual
            </button>
            <button 
              onClick={() => setAnnual(true)}
              className={`px-6 py-2 rounded-md transition-all ${annual ? 'bg-blue-600 text-white' : 'text-slate-300'}`}
            >
              Anual <span className="text-green-400 text-sm ml-2">(ahorra 15%)</span>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* SaaS Plan */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-2xl">
            <div className="bg-slate-800 p-8 rounded-2xl h-full">
              <div className="text-sm font-semibold text-blue-400 mb-2">MODELO SAAS</div>
              <h3 className="text-3xl font-bold mb-4">Suscripción Cloud</h3>
              <div className="mb-6">
                <div className="text-5xl font-bold mb-2">
                  ${annual ? '460' : '45'}
                  <span className="text-2xl text-slate-400">/{annual ? 'año' : 'mes'}</span>
                </div>
                <div className="text-slate-400 text-sm">Setup inicial: $700 USD</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span>Infraestructura compartida escalable</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span>Actualizaciones automáticas</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span>Backups diarios incluidos</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span>Soporte técnico prioritario</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span>Sin costos de servidor</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all">
                Empezar Ahora
              </button>
            </div>
          </div>
          
          {/* License Plan */}
          <div className="bg-slate-800 p-8 rounded-2xl border-2 border-slate-700">
            <div className="text-sm font-semibold text-slate-400 mb-2">LICENCIA PERPETUA</div>
            <h3 className="text-3xl font-bold mb-4">Instalación Propia</h3>
            <div className="mb-6">
              <div className="text-5xl font-bold mb-2">
                $700
                <span className="text-2xl text-slate-400"> único</span>
              </div>
              <div className="text-slate-400 text-sm">Mantenimiento opcional: $110/año</div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Servidor dedicado para tu gimnasio</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Control total de los datos</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Personalización extrema del código</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Ideal para gimnasios con IT propio</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Actualizaciones bajo demanda</span>
              </li>
            </ul>
            
            <button className="w-full border-2 border-slate-600 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-all">
              Consultar Licencia
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">¿No estás seguro cuál elegir?</p>
          <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 mx-auto">
            Habla con nuestro equipo
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Demo CTA
const DemoCTA = () => (
  <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Agenda una demo consultiva gratuita
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Te mostramos cómo SIG-FIT puede transformar tu gimnasio en una sesión personalizada de 30 minutos
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Diagnóstico</h3>
              <p className="text-blue-100 text-sm">Analizamos tu situación actual y necesidades específicas</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💡</div>
              <h3 className="font-bold mb-2">Demo Personalizada</h3>
              <p className="text-blue-100 text-sm">Mostramos funciones relevantes para tu caso</p>
            </div>
            <div>
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold mb-2">Plan de Acción</h3>
              <p className="text-blue-100 text-sm">Proyectamos ROI y plan de implementación</p>
            </div>
          </div>
        </div>
        
        <button className="bg-white text-blue-900 px-12 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl inline-flex items-center gap-3">
          Solicitar Demo Gratuita
          <ArrowRight className="w-6 h-6" />
        </button>
        
        <p className="text-blue-200 text-sm mt-6">
          ✅ Sin compromiso • ✅ 30 días de garantía • ✅ Implementación en 48hs
        </p>
      </div>
    </div>
  </section>
);

// Investor Section Divider
const InvestorDivider = () => (
  <section className="py-12 bg-slate-950">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm mb-6">
          🚀 OPORTUNIDAD DE INVERSIÓN
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Un mercado en expansión con un modelo probado
        </h2>
        <p className="text-slate-400 text-lg">
          Conoce los números detrás de SIG-FIT y por qué es una oportunidad estratégica
        </p>
      </div>
    </div>
  </section>
);

// Market Opportunity
const MarketOpportunity = () => (
  <section className="py-20 bg-slate-950 text-white">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wide">Mercado Objetivo</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              El fitness está creciendo, pero la tecnología no
            </h2>
            <p className="text-slate-300 text-lg mb-6">
              Gimnasios medianos y grandes (&gt;5M ARS mensuales) están atrapados entre Excel y SaaS rígidos que no se adaptan.
            </p>
            <p className="text-slate-400">
              Existe una brecha tecnológica clara: son demasiado grandes para gestión manual, pero requieren flujos muy específicos que los SaaS globales no cubren.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">15%</div>
              <div className="text-slate-300 text-sm">Pérdida promedio de ingresos por gestión manual</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
              <div className="text-slate-300 text-sm">De gimnasios aún usan planillas Excel</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">3-6</div>
              <div className="text-slate-300 text-sm">Meses promedio de retorno de inversión</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">$45</div>
              <div className="text-slate-300 text-sm">USD/mes modelo SaaS escalable</div>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Ventaja Competitiva Sostenible</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold mb-2">Nicho Especializado</h4>
              <p className="text-slate-400 text-sm">No competimos con gigantes tech. Atacamos un segmento ignorado.</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🛠️</div>
              <h4 className="font-bold mb-2">Boutique de Software</h4>
              <p className="text-slate-400 text-sm">Personalización profunda que los SaaS globales no pueden ofrecer.</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-bold mb-2">Relación Directa</h4>
              <p className="text-slate-400 text-sm">Soporte dedicado y evolución conjunta con cada cliente.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Business Model
const BusinessModel = () => (
  <section className="py-20 bg-slate-900 text-white">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wide">Modelo de Negocio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            SaaS Escalable con Ingresos Recurrentes
          </h2>
          <p className="text-slate-300 text-xl">
            Economías de escala que maximizan el margen a medida que crece la base de clientes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-green-400" />
              Estructura de Ingresos
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <div>
                  <div className="font-semibold">Setup Inicial</div>
                  <div className="text-sm text-slate-400">Implementación y configuración</div>
                </div>
                <div className="text-2xl font-bold text-green-400">$700</div>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <div>
                  <div className="font-semibold">Mantenimiento SaaS</div>
                  <div className="text-sm text-slate-400">Recurrente mensual</div>
                </div>
                <div className="text-2xl font-bold text-blue-400">$45/mes</div>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-4 mt-4">
                <div className="text-sm text-slate-400 mb-2">Ingreso anual por cliente (SaaS)</div>
                <div className="text-3xl font-bold">$1,240 <span className="text-lg text-slate-400">USD</span></div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 border-2 border-amber-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-amber-400" />
              Estructura de Costos
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">Costos Fijos Anuales</span>
                  <span className="font-bold">$1,300-2,000</span>
                </div>
                <div className="text-xs text-slate-400">Infraestructura compartida, soporte, herramientas</div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">Costo Variable/Cliente</span>
                  <span className="font-bold text-green-400">$25-35</span>
                </div>
                <div className="text-xs text-slate-400">CPU, RAM, tráfico incremental (muy bajo)</div>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-4 mt-4">
                <div className="text-sm text-slate-400 mb-2">Margen de Rentabilidad</div>
                <div className="text-3xl font-bold text-green-400">~85%</div>
                <div className="text-xs text-slate-400 mt-2">A partir del segundo año con 10+ clientes</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">🚀 Por qué el modelo SaaS es superior</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">Economías de Escala</div>
              <p className="text-slate-400 text-sm">Costos fijos se distribuyen entre todos los clientes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">Ingresos Recurrentes</div>
              <p className="text-slate-400 text-sm">Flujo predecible que crece mes a mes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">Alto LTV</div>
              <p className="text-slate-400 text-sm">Clientes permanecen 3-5 años promedio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// KPIs & Metrics
const KPIs = () => (
  <section className="py-20 bg-slate-950 text-white">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wide">Métricas Clave</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            KPIs que Importan
          </h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-xl p-6 text-center">
            <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">4-8</div>
            <div className="text-slate-400 text-sm">Clientes/mes (conservador)</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30 rounded-xl p-6 text-center">
            <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">15-25</div>
            <div className="text-slate-400 text-sm">Clientes/mes (optimizado)</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-xl p-6 text-center">
            <DollarSign className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">$1,240</div>
            <div className="text-slate-400 text-sm">Ingreso anual/cliente</div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-600/20 to-amber-800/20 border border-amber-500/30 rounded-xl p-6 text-center">
            <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">85%</div>
            <div className="text-slate-400 text-sm">Margen de rentabilidad</div>
          </div>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Estrategia de Adquisición Multi-Canal</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-blue-400">Canales de Marketing</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Marketing Digital:</span>
                    <span className="text-slate-400 text-sm ml-2">Meta Ads + Google Ads ($150-300/mes)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Appointment Setting:</span>
                    <span className="text-slate-400 text-sm ml-2">15% comisión sobre ventas</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Demos Consultivas:</span>
                    <span className="text-slate-400 text-sm ml-2">15-25% tasa de conversión</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Outbound Manual:</span>
                    <span className="text-slate-400 text-sm ml-2">LinkedIn + Email directo</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-green-400">Conversión Esperada</h4>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Lead → Demo</span>
                    <span className="font-bold text-blue-400">20-35%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 w-[30%]"></div>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Demo → Cliente</span>
                    <span className="font-bold text-green-400">15-25%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 w-[20%]"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-4 mt-4">
                  <div className="text-sm text-slate-400 mb-1">Pipeline Mensual Proyectado</div>
                  <div className="text-2xl font-bold">8-15 clientes nuevos</div>
                  <div className="text-xs text-slate-400 mt-1">Escenario realista 3-6 meses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Financial Projections
const FinancialProjections = () => {
  const data = [
    { year: 'Año 1', clients: 3, revenue: 3600, expenses: 535, cashflow: 2912 },
    { year: 'Año 2', clients: 10, revenue: 10400, expenses: 1100, cashflow: 8835 },
    { year: 'Año 3', clients: 25, revenue: 24000, expenses: 2350, cashflow: 20568 },
    { year: 'Año 4', clients: 40, revenue: 32100, expenses: 3500, cashflow: 27170 },
    { year: 'Año 5', clients: 50, revenue: 34000, expenses: 4200, cashflow: 28310 }
  ];
  
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wide">Proyección Financiera</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Cash Flow Positivo desde el Año 1
            </h2>
            <p className="text-slate-300 text-xl">
              Proyección a 5 años con crecimiento conservador y margen superior al 85%
            </p>
          </div>
          
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-4 px-4 font-bold">Año</th>
                    <th className="text-right py-4 px-4 font-bold">Clientes</th>
                    <th className="text-right py-4 px-4 font-bold">Ingresos</th>
                    <th className="text-right py-4 px-4 font-bold">Egresos</th>
                    <th className="text-right py-4 px-4 font-bold text-green-400">Cash Flow</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                      <td className="py-4 px-4 font-semibold">{row.year}</td>
                      <td className="text-right py-4 px-4">{row.clients}</td>
                      <td className="text-right py-4 px-4 text-blue-400">${row.revenue.toLocaleString()}</td>
                      <td className="text-right py-4 px-4 text-red-400">${row.expenses.toLocaleString()}</td>
                      <td className="text-right py-4 px-4 font-bold text-green-400">${row.cashflow.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6">
              <LineChart className="w-10 h-10 text-green-400 mb-4" />
              <div className="text-3xl font-bold mb-2">$88,795</div>
              <div className="text-slate-400 text-sm">Flujo acumulado 5 años</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-xl p-6">
              <TrendingUp className="w-10 h-10 text-blue-400 mb-4" />
              <div className="text-3xl font-bold mb-2">845%</div>
              <div className="text-slate-400 text-sm">Crecimiento ingresos (Año 1 vs Año 5)</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
              <BarChart3 className="w-10 h-10 text-purple-400 mb-4" />
              <div className="text-3xl font-bold mb-2">$28,310</div>
              <div className="text-slate-400 text-sm">Cash Flow Año 5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Roadmap
const Roadmap = () => {
  const phases = [
    {
      quarter: "Q1 2026",
      title: "Consolidación",
      goals: ["Alcanzar 15 clientes activos", "Refinar procesos de onboarding", "Implementar feedback inicial"],
      status: "En progreso"
    },
    {
      quarter: "Q2-Q3 2026",
      title: "Escalamiento",
      goals: ["Automatizar marketing digital", "Contratar appointment setter", "Expandir a 25-30 clientes"],
      status: "Planificado"
    },
    {
      quarter: "Q4 2026",
      title: "Optimización",
      goals: ["Optimizar infraestructura cloud", "Lanzar programa de referidos", "Superar 40 clientes"],
      status: "Planificado"
    },
    {
      quarter: "2027",
      title: "Expansión Regional",
      goals: ["Abrir mercado LATAM", "Partnerships estratégicos", "Alcanzar 100+ clientes"],
      status: "Visión"
    }
  ];
  
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wide">Hoja de Ruta</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Plan de Crecimiento 2026-2027
            </h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500"></div>
            
            <div className="space-y-12">
              {phases.map((phase, idx) => (
                <div key={idx} className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                      <div className="text-sm text-amber-400 font-semibold mb-2">{phase.quarter}</div>
                      <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                      <div className="text-xs text-slate-400 mb-4">{phase.status}</div>
                      <ul className="space-y-2">
                        {phase.goals.map((goal, goalIdx) => (
                          <li key={goalIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-1" />
                            <span className="text-slate-300 text-sm">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <ValueProposition />
      <Features />
      <Comparison />
      <Testimonials />
      <Pricing />
      <DemoCTA />
      <InvestorDivider />
      <MarketOpportunity />
      <BusinessModel />
      <KPIs />
      <FinancialProjections />
      <Roadmap />
    </div>
  );
}

export default App;