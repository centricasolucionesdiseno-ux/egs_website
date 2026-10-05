import { useEffect } from 'react';
import Button from '../components/ui/Button';
import ServiceCard from '../components/ui/ServiceCard';
import SectionHeader from '../components/ui/SectionHeader';
import TestimonialCard from '../components/ui/TestimonialCard';

export default function Home() {
  useEffect(() => {
    document.title = 'EGS Soluciones Integrales | Gestión Documental Especializada en Colombia';
  }, []);

  return (
    <>
      {/* ======== HERO SECTION ======== */}
      <section className="relative overflow-hidden bg-linear-to-br from-azul-profundo via-azul-medio to-azul-profundo text-white pt-28 pb-20">
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
              <Button to="/contacto" variant="primary" icon="fas fa-paper-plane">
                Solicitar cotización
              </Button>
              <Button to="/servicios" variant="secondary" icon="fas fa-folder-open">
                Ver servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ======== BARRA DE ESTADÍSTICAS ======== */}
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
          <SectionHeader
            label="Nuestros servicios"
            title="Soluciones documentales para su organización"
            description="Ofrecemos soluciones integrales para organizar, proteger, preservar y administrar la información de su organización."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              id="organizacion"
              icon="fas fa-boxes-stacked"
              badgeText="Archivística"
              badgeType="azul"
              title="Organización integral de archivos"
              description="Organizamos y estructuramos sus archivos para facilitar el acceso a la información, optimizar la gestión documental y garantizar el cumplimiento de la normativa archivística."
              to="/servicios#organizacion"
            />
            <ServiceCard
              id="digitalizacion"
              icon="fas fa-scanner-image"
              badgeText="Más solicitado"
              badgeType="cyan"
              title="Digitalización y preservación digital"
              description="Transformamos sus documentos físicos en información digital organizada, segura y fácilmente accesible, sentando las bases para su preservación digital a largo plazo."
              to="/servicios#digitalizacion"
            />
            <ServiceCard
              id="nebula"
              icon="fas fa-cloud-arrow-up"
              badgeText="Tecnología"
              badgeType="azul"
              title="Nebula Vault — Bodega Virtual"
              description="Software OAIS de preservación digital con acceso 24/7. Tecnología propia que automatiza y optimiza todo el ciclo de vida de la información institucional."
              to="/servicios#nebula"
            />
          </div>

          <div className="text-center mt-10">
            <Button to="/servicios" variant="outline" icon="fas fa-arrow-right">
              Ver todos los servicios
            </Button>
          </div>
        </div>
      </section>

      {/* ======== TESTIMONIOS ======== */}
      <section className="py-16 sm:py-20 bg-gris-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Lo que dicen nuestros clientes"
            title="Satisfacción comprobada"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="EGS demostró un alto nivel de experticia y compromiso en la organización y digitalización de nuestros fondos acumulados. Los resultados superaron nuestras expectativas tanto en calidad como en cumplimiento de los plazos establecidos."
              author="Contraloría General de la República"
              org="Entidad de control fiscal del Estado colombiano"
              initials="CG"
            />
            <TestimonialCard
              quote="La gestión de EGS en la custodia y administración de nuestros archivos ha sido ejemplar. Su capacidad para manejar grandes volúmenes de documentación con precisión y seguridad es un activo invaluable para nuestra organización."
              author="Empresa de Acueducto y Alcantarillado de Bogotá"
              org="EAAB — Empresa de servicios públicos"
              initials="AB"
            />
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