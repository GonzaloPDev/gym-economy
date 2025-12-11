import { useState } from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Users, Shield, Zap, DollarSign, BarChart3, Target, Calendar, Smartphone, Globe, Heart, QrCode, CreditCard, LineChart, X } from 'lucide-react';

// Contact Modal Component
const ContactModal = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gymName: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', phone: '', gymName: '', message: '' });
    }, 2000);
  };

  const titles = {
    demo: 'Solicitar Demo Gratuita',
    saas: 'Comenzar con SIG-FIT',
    license: 'Consultar Licencia',
    investor: 'Agendar Llamada de Inversión',
    support: 'Hablar con el Equipo'
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-white">{titles[type]}</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h4>
              <p className="text-slate-400">Nos pondremos en contacto contigo pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="juan@gimnasio.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="+54 11 1234-5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Nombre del gimnasio
                </label>
                <input
                  type="text"
                  value={formData.gymName}
                  onChange={(e) => setFormData({ ...formData, gymName: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Mi Gimnasio"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu gimnasio y qué necesitas..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2"
              >
                Enviar Solicitud
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-slate-400 text-center">
                Al enviar este formulario, aceptas que nos pongamos en contacto contigo.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
// Hero Section
const Hero = ({ openModal }) => {
  const base = import.meta.env.BASE_URL;
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">

          {/* Nombre del producto en grande */}
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent tracking-tight drop-shadow-lg">
            SIG-FIT
          </h1>

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
            <button
              onClick={() => openModal('demo')}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
            >
              Solicitar Demo Gratis
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* 🔽 Nuevo botón: Descargar Informe */}
            <a
              href="/assets/Modelo-negocio-SIG-FIT.pdf"
              href={`${base}/assets/Modelo-negocio-SIG-FIT.pdf`}
              download
              className="px-8 py-4 rounded-lg font-semibold text-lg border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
            >
              Descargar Informe Modelo de Negocio
            </a>
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


}


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

      </div>
    </section>
  );
};

// Pricing
const Pricing = ({ openModal }) => {
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

              <button
                onClick={() => openModal('saas')}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
              >
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

            <button
              onClick={() => openModal('license')}
              className="w-full border-2 border-slate-600 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-all"
            >
              Consultar Licencia
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">¿No estás seguro cuál elegir?</p>
          <button
            onClick={() => openModal('support')}
            className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 mx-auto"
          >
            Habla con nuestro equipo
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Demo CTA
const DemoCTA = ({ openModal }) => (
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
              <p className="text-blue-100 text-sm">Presentamos plan de implementación</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => openModal('demo')}
          className="bg-white text-blue-900 px-12 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl inline-flex items-center gap-3"
        >
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
// Investment Opportunity - DARK PREMIUM
const InvestmentOpportunity = () => (
  <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-black via-slate-900 to-black text-white overflow-hidden">

    {/* Capa oscura sutil */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

    {/* Textura de ruido */}
    <div className="absolute inset-0 opacity-25 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

    <div className="relative z-10 text-center px-6">
      <h1 className="text-6xl md:text-9xl font-black leading-tight drop-shadow-2xl">
        Oportunidad de
        <span className="block bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent drop-shadow-xl">
          Inversión
        </span>
      </h1>
    </div>
  </section>
);


// Investor Section Divider - DARK PREMIUM
const InvestorDivider = ({ openModal }) => (
  <section className="min-h-screen relative flex items-center bg-gradient-to-b from-black via-slate-900 to-black text-white overflow-hidden">

    {/* Capa oscura sutil */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

    {/* Textura de ruido fina */}
    <div className="absolute inset-0 opacity-25 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-5xl mx-auto text-center">

        {/* Título */}
        <h1 className="text-5xl md:text-8xl font-black mb-10 leading-tight drop-shadow-lg mt-28">
          Invertí en el futuro
          <span className="block bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent drop-shadow-xl">
            del fitness digital
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-2xl md:text-3xl text-slate-300 mb-14 max-w-4xl mx-auto font-light leading-snug">
          SIG-FIT está llevando gimnasios tradicionales hacia plataformas escalables.
          <span className="font-bold text-cyan-300"> Un mercado de +$10M solo en Argentina.</span>
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-14">
          {[
            { value: "131%", label: "TIR (Tasa Interna de Retorno)" },
            { value: "$89K", label: "Flujo a 5 años" },
            { value: "100+", label: "Clientes Año 5" },
            { value: "Año 1", label: "Cash Flow +" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/40 backdrop-blur-xl border border-cyan-300/20 rounded-2xl p-6 shadow-xl hover:bg-slate-800/60 transition-all"
            >
              <div className="text-5xl font-black mb-3 text-cyan-300 drop-shadow">
                {item.value}
              </div>
              <div className="text-slate-300 font-medium">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
          <button
            onClick={() => openModal('investor')}
            className="border border-cyan-300/40 bg-white/5 backdrop-blur-md px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 hover:scale-[1.02] transition-all"
          >
            Agendar Llamada
          </button>
        </div>
      </div>
    </div>
  </section>
);

// Investment Needed - DARK PREMIUM
const InvestmentNeeded = () => {
  const raised = 586;
  const goal = 4566;
  const percentage = (raised / goal) * 100;

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">
              Inversión Necesaria
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 drop-shadow">
              Buscamos{" "}
              <span className="text-cyan-200">
                ${goal.toLocaleString()} USD
              </span>
            </h2>

            <p className="text-xl text-slate-400 leading-relaxed">
              Para marketing, equipo comercial e infraestructura tecnológica.
            </p>
          </div>

          {/* Progreso */}
          <div className="bg-slate-900 border border-cyan-300/20 rounded-2xl p-10 shadow-xl">

            <div className="flex justify-between items-end mb-5">
              <div>
                <div className="text-sm text-slate-500 mb-1">Capital Comprometido</div>
                <div className="text-4xl font-bold text-cyan-300">
                  ${raised.toLocaleString()}
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-slate-500 mb-1">Meta Total</div>
                <div className="text-4xl font-bold">
                  ${goal.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Barra */}
            <div className="relative h-9 bg-slate-800 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 transition-all duration-1000 shadow-inner flex items-center justify-end pr-4"
                style={{ width: `${percentage}%` }}
              >
                <span className="text-black font-bold text-sm bg-white/80 px-2 py-1 rounded">
                  {percentage.toFixed(0)}%
                </span>
              </div>
            </div>

            <div className="flex justify-between text-sm text-slate-500">
              <span>🎯 ${(goal - raised).toLocaleString()} restantes</span>
              <span>⏱️ Ronda abierta hasta Q1 2026</span>
            </div>
          </div>

          {/* Distribución */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: "⚙️",
                pct: "32%",
                label: "Infraestructura",
                desc: "Servidores, cluster, almacenamiento y mantenimiento.",
                color: "blue",
              },
              {
                icon: "📢",
                pct: "52%",
                label: "Marketing Digital",
                desc: "Ads, SEO y contenido para adquisición.",
                color: "cyan",
              },
              {
                icon: "👥",
                pct: "15%",
                label: "Equipo Comercial",
                desc: "Sales reps, prospecting y appointment setting.",
                color: "emerald",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-${item.color}-500/10 to-${item.color}-700/10 border border-${item.color}-400/20 rounded-xl p-7 shadow-lg`}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-3xl font-bold text-${item.color}-300">{item.pct}</div>
                <div className={`text-${item.color}-300 font-semibold mb-2 text-lg`}>
                  {item.label}
                </div>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};




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

          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30 rounded-xl p-6 text-center">
            <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">10%</div>
            <div className="text-slate-400 text-sm">MRR Growth</div>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-xl p-6 text-center">
            <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">4-8</div>
            <div className="text-slate-400 text-sm">Clientes/mes (conservador)</div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-xl p-6 text-center">
            <DollarSign className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">$1,240</div>
            <div className="text-slate-400 text-sm">Ingreso anual/cliente</div>
          </div>

          <div className="bg-gradient-to-br from-amber-600/20 to-amber-800/20 border border-amber-500/30 rounded-xl p-6 text-center">
            <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">5%</div>
            <div className="text-slate-400 text-sm">Tasa de Churn</div>
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
    { year: 'Año 1', clients: 8, revenue: 5600, expenses: 4566, cashflow: 1034 },
    { year: 'Año 2', clients: 12, revenue: 11960, expenses: 5320, cashflow: 6640 },
    { year: 'Año 3', clients: 18, revenue: 22840, expenses: 6809, cashflow: 16031 },
    { year: 'Año 4', clients: 22, revenue: 34480, expenses: 7718, cashflow: 26762 },
    { year: 'Año 5', clients: 25, revenue: 48380, expenses: 8950, cashflow: 39430 }
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
              Proyección a 5 años con crecimiento conservador
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

          <div className="grid md:grid-cols-4 gap-6">

            {/* Flujo acumulado */}
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6">
              <LineChart className="w-10 h-10 text-green-400 mb-4" />
              <div className="text-3xl font-bold mb-2">$89,897</div>
              <div className="text-slate-400 text-sm">Flujo acumulado en 5 años</div>
            </div>

            {/* VAN */}
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-xl p-6">
              <TrendingUp className="w-10 h-10 text-blue-400 mb-4" />
              <div className="text-3xl font-bold mb-2">$12,266</div>
              <div className="text-slate-400 text-sm">VAN (Valor Actual Neto)</div>
            </div>

            {/* TIR */}
            <div className="bg-gradient-to-br from-amber-600/20 to-yellow-700/20 border border-amber-500/30 rounded-xl p-6">
              <BarChart3 className="w-10 h-10 text-amber-400 mb-4" />
              <div className="text-3xl font-bold mb-2">131%</div>
              <div className="text-slate-400 text-sm">TIR (Tasa Interna de Retorno)</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-xl p-6">
              <BarChart3 className="w-10 h-10 text-amber-400 mb-4" />
              <div className="text-3xl font-bold mb-2">5 clientes</div>
              <div className="text-slate-400 text-sm">Punto de equilibrio / año</div>
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
      title: "Lanzamiento & Validación",
      goals: [
        "Alcanzar 8 clientes activos (base actual proyectada)",
        "Implementar onboarding automatizado",
        "Liberar módulo estable de rutinas, pagos y asistencia",
      ],
      status: "En progreso",
    },
    {
      quarter: "Q2 2026",
      title: "Optimización del Producto",
      goals: [
        "Refinar UX con feedback real de gimnasios",
        "Mejorar desempeño de infraestructura (Cloudflare + DB tuning)",
        "Aumentar a 12–15 clientes activos",
      ],
      status: "Planificado",
    },
    {
      quarter: "Q3–Q4 2026",
      title: "Crecimiento Sostenido",
      goals: [
        "Implementar automatizaciones de marketing y remarketing",
        "Contratar appointment setter para prospección outbound",
        "Escalar a 18–22 clientes activos",
      ],
      status: "Planificado",
    },
    {
      quarter: "2027",
      title: "Consolidación & Expansión",
      goals: [
        "Optimizar costos de infraestructura y soporte",
        "Abrir mercado en LATAM",
        "Partnerships estratégicos",
        "Alcanzar +50 clientes activos",
      ],
      status: "Visión",
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wide">
              Hoja de Ruta
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Plan de Crecimiento 2026-2027
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500"></div>

            <div className="space-y-12">
              {phases.map((phase, idx) => (
                <div
                  key={idx}
                  className={`flex items-center ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                >
                  <div
                    className={`w-5/12 ${idx % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                      }`}
                  >
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                      <div className="text-sm text-amber-400 font-semibold mb-2">
                        {phase.quarter}
                      </div>
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


// Gallery Carousel Section
const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const base = import.meta.env.BASE_URL;
  const screenshots = [
    { src: `${base}assets/usuarios.png`, title: 'Usuarios', description: 'Lista de usuarios' },
    { src: `${base}assets/planes.png`, title: 'Planes', description: 'Vista de planes de suscripcion y extras' },
    { src: `${base}assets/crearPost.png`, title: 'Crear post', description: 'Crear post con imagenes' },
    { src: `${base}assets/posts.png`, title: 'Comunidad', description: 'Sección de comunidad y comentarios' },
    { src: `${base}assets/certificado.png`, title: 'Certificado médico', description: 'Se puede aprobar o rechazar el certificado medico en pdf o imagen' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
              Galería
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Experiencia Mobile Premium
            </h2>
            <p className="text-xl text-slate-300">
              Diseñada con React Native + Expo para iOS y Android
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Main Image Display */}
            <div className="relative bg-slate-950 rounded-3xl p-8 shadow-2xl overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>

              {/* Phone Mockup */}
              <div className="relative mx-auto max-w-sm">
                {/* Phone Frame */}
                <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-700">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-10"></div>

                  {/* Screen - aspect ratio 375:693 */}
                  <div className="relative bg-white rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: '375/693' }}>
                    <img
                      src={screenshots[currentIndex].src}
                      alt={screenshots[currentIndex].title}
                      className="w-full h-full object-contain bg-slate-100 transition-opacity duration-500"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="375" height="693"%3E%3Crect fill="%23334155" width="375" height="693"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%2394a3b8" text-anchor="middle" dominant-baseline="middle"%3EScreenshot%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                </div>

                {/* Info Overlay */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-slate-800/90 backdrop-blur-lg border border-slate-700 rounded-2xl p-4 shadow-xl">
                  <h3 className="font-bold text-lg mb-1">{screenshots[currentIndex].title}</h3>
                  <p className="text-sm text-slate-400">{screenshots[currentIndex].description}</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center transition-all hover:scale-110 z-20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center transition-all hover:scale-110 z-20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-3 mt-12">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all ${index === currentIndex
                    ? 'w-12 h-3 bg-blue-500'
                    : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
                    } rounded-full`}
                />
              ))}
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-8 flex gap-4 justify-center overflow-x-auto pb-4">
              <div className="flex gap-4">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 relative rounded-xl overflow-hidden transition-all ${index === currentIndex
                      ? 'ring-4 ring-blue-500 scale-105'
                      : 'ring-2 ring-slate-700 opacity-60 hover:opacity-100'
                      }`}
                  >
                    <div className="w-20 bg-slate-800" style={{ aspectRatio: '375/693' }}>
                      <img
                        src={screenshot.src}
                        alt={screenshot.title}
                        className="w-full h-full object-contain bg-slate-900"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="375" height="693"%3E%3Crect fill="%23334155" width="375" height="693"/%3E%3C/svg%3E';
                        }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid Below Carousel */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">React Native</h3>
              <p className="text-slate-400 text-sm">Rendimiento nativo en iOS y Android</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Expo SDK</h3>
              <p className="text-slate-400 text-sm">Desarrollo rápido y actualizaciones</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <svg className="w-12 h-12 text-orange-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <h3 className="font-bold text-lg mb-2">Firebase Cloud Messaging</h3>
              <p className="text-slate-400 text-sm">Notificaciones push en tiempo real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// Footer Component
const Footer = () => (
  <footer className="bg-slate-950 text-white border-t border-slate-800">
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            SIG-FIT
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            Transformando gimnasios tradicionales en plataformas digitales escalables.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="https://github.com/GonzaloPDev/gym-economy" target='_blank' className="text-slate-400 hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-bold text-lg mb-4">Producto</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Características</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Precios</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Casos de Éxito</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Demo</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Documentación</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-lg mb-4">Empresa</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Sobre Nosotros</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Inversores</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Carreras</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Blog</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Prensa</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg mb-4">Contacto</h4>
          <ul className="space-y-2">
            <li className="text-slate-400 text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contacto@sigfit.com
            </li>
            <li className="text-slate-400 text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +54 11 1234-5678
            </li>
            <li className="text-slate-400 text-sm flex items-start gap-2">
              <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              La Plata, Buenos Aires<br />Argentina
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-400 text-sm mb-4 md:mb-0">
          © 2025 SIG-FIT. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
            Términos y Condiciones
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
            Política de Privacidad
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
            Cookies
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// Main App Component
function App() {
  const [modalState, setModalState] = useState({ isOpen: false, type: 'demo' });

  const openModal = (type) => {
    setModalState({ isOpen: true, type });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: 'demo' });
  };

  return (
    <div className="min-h-screen">
      <ContactModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
      />
      <Hero openModal={openModal} />
      <Problem />
      <ValueProposition />
      <Features />
      <Comparison />
      <Testimonials />
      <Pricing openModal={openModal} />
      <DemoCTA openModal={openModal} />
      <InvestmentOpportunity />
      <MarketOpportunity />
      <InvestorDivider openModal={openModal} />
      <InvestmentNeeded />
      <KPIs />
      <FinancialProjections />
      <GalleryCarousel />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;