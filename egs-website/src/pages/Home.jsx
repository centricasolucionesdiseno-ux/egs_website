import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    document.title = 'EGS Soluciones Integrales | Gestión Documental Especializada en Colombia';
  }, []);

  return (
    <>
      {/* ======== HERO SECTION ======== */}
        <section className="relative overflow-hidden bg-linear-to-br from-azul-profundo via-azul-medio to-azul-profundo text-white pt-28 pb-20">
        {/* Adorno de fondo circular */}
        <div className="absolute top-[-20%] right-[-10%] w-150 h-150 bg-cyan-acento/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-cyan-acento/20 border border-cyan-acento/40 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-6">
              <i className="fas fa-shield-halved" />
              Empresa certificada · Bogotá, Colombia
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white leading-tight mb-5">
              Transformamos la gestión documental para garantizar la{' '}
              <span className="text-cyan-acento">preservación digital, la eficiencia y el control</span> de la información
            </h1>

            <p className="text-base sm:text-lg text-white/80 mb-9 max-w-xl">
              Somos especialistas en organización, digitalización, preservación digital, custodia de archivos y soluciones tecnológicas para entidades del sector público y privado.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contacto"
                className="bg-cyan-acento hover:bg-cyan-acento/90 text-white px-6 py-3 rounded-md font-semibold transition-all inline-flex items-center gap-2"
              >
                <i className="fas fa-paper-plane" /> Solicitar cotización
              </Link>
              <Link
                to="/servicios"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-md font-semibold transition-all inline-flex items-center gap-2"
              >
                <i className="fas fa-folder-open" /> Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======== STATS BAR ======== */}
      <section className="bg-azul-profundo py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-cyan-acento mb-1">27M+</div>
              <div className="text-xs sm:text-sm text-white/70 font-medium">Imágenes digitalizadas</div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-cyan-acento mb-1">96.000+</div>
              <div className="text-xs sm:text-sm text-white/70 font-medium">Cajas en custodia</div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-cyan-acento mb-1">3</div>
              <div className="text-xs sm:text-sm text-white/70 font-medium">Contratos con el Acueducto de Bogotá</div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-cyan-acento mb-1">8+</div>
              <div className="text-xs sm:text-sm text-white/70 font-medium">Servicios especializados</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== SERVICIOS DESTACADOS ======== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-cyan-acento uppercase block mb-2">Nuestros servicios</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-azul-profundo mb-4">
              Soluciones documentales para su organización
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Ofrecemos soluciones integrales para organizar, proteger, preservar y administrar la información de su organización.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/servicios#organizacion"
              className="bg-white rounded-card shadow-card hover:shadow-hover border border-azul-profundo/10 border-t-4 border-t-cyan-acento p-8 transition-all hover:-translate-y-1 group"
            >
              <div className="text-cyan-acento text-3xl mb-4">
                <i className="fas fa-boxes-stacked" />
              </div>
              <h3 className="text-xl font-bold font-heading text-azul-profundo mb-2">Organización integral de archivos</h3>
              <p className="text-sm text-gray-600 mb-4">
                Organizamos y estructuramos sus archivos para facilitar el acceso a la información, optimizar la gestión documental y garantizar el cumplimiento de la normativa archivística.
              </p>
              <span className="text-xs font-semibold text-cyan-acento inline-flex items-center gap-2 group-hover:underline">
                Ver más <i className="fas fa-arrow-right" />
              </span>
            </Link>

            <Link
              to="/servicios#digitalizacion"
              className="bg-white rounded-card shadow-card hover:shadow-hover border border-azul-profundo/10 border-t-4 border-t-cyan-acento p-8 transition-all hover:-translate-y-1 group"
            >
              <div className="text-cyan-acento text-3xl mb-4">
                <i className="fas fa-scanner-image" />
              </div>
              <h3 className="text-xl font-bold font-heading text-azul-profundo mb-2">Digitalización y preservación digital</h3>
              <p className="text-sm text-gray-600 mb-4">
                Transformamos sus documentos físicos en información digital organizada, segura y fácilmente accesible, sentando las bases para su preservación digital a largo plazo.
              </p>
              <span className="text-xs font-semibold text-cyan-acento inline-flex items-center gap-2 group-hover:underline">
                Ver más <i className="fas fa-arrow-right" />
              </span>
            </Link>

            <Link
              to="/servicios#nebula"
              className="bg-white rounded-card shadow-card hover:shadow-hover border border-azul-profundo/10 border-t-4 border-t-cyan-acento p-8 transition-all hover:-translate-y-1 group"
            >
              <div className="text-azul-medio text-3xl mb-4">
                <i className="fas fa-cloud-arrow-up" />
              </div>
              <h3 className="text-xl font-bold font-heading text-azul-profundo mb-2">Nebula Vault — Bodega Virtual</h3>
              <p className="text-sm text-gray-600 mb-4">
                Software OAIS de preservación digital con acceso 24/7. Tecnología propia que automatiza y optimiza todo el ciclo de vida de la información institucional.
              </p>
              <span className="text-xs font-semibold text-cyan-acento inline-flex items-center gap-2 group-hover:underline">
                Ver más <i className="fas fa-arrow-right" />
              </span>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 border-2 border-azul-profundo text-azul-profundo hover:bg-azul-profundo hover:text-white px-6 py-2.5 rounded-md font-semibold transition-all"
            >
              Ver todos los servicios <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======== SOBRE EGS ======== */}
      <section className="py-16 sm:py-20 bg-gris-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-linear-to-br from-azul-profundo to-azul-medio rounded-2xl aspect-4/3 flex items-center justify-center relative overflow-hidden p-8 text-white">
              <i className="fas fa-folder-tree text-8xl text-white/10 absolute" />
              <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 w-full mt-auto">
                <div className="text-3xl font-extrabold font-heading text-cyan-acento">+10</div>
                <p className="text-xs text-white/80">Años de experiencia en gestión documental</p>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold tracking-widest text-cyan-acento uppercase block mb-2">Quiénes somos</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-azul-profundo mb-4">
                Gestión documental y preservación digital integradas
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                EGS Soluciones Integrales S.A.S. es una firma consultora especializada en gestión documental que ofrece soluciones para entidades públicas y privadas. Contamos con un equipo multidisciplinario que combina experiencia técnica y tecnológica para diseñar e implementar procesos adaptados a las necesidades de cada organización.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                Trabajamos para optimizar la administración de la información mediante procesos seguros, eficientes y confiables, promoviendo el cumplimiento de la normativa archivística, la trazabilidad documental y la preservación del patrimonio documental.
              </p>
              <Link
                to="/acerca-de"
                className="inline-flex items-center gap-2 bg-azul-profundo hover:bg-azul-profundo/90 text-white px-6 py-3 rounded-md font-semibold transition-all"
              >
                Conoce más sobre EGS <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======== BOTÓN FLOTANTE WHATSAPP ======== */}
      <a
        href="https://wa.me/573002057325"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-all z-40"
      >
        <i className="fab fa-whatsapp" />
      </a>
    </>
  );
}