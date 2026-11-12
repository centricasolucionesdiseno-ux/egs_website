import { useEffect } from 'react';
import Button from '../components/ui/Button';
import CaseBlock from '../components/ui/CaseBlock';
import CtaBand from '../components/ui/CtaBand';
import PageHeader from '../components/ui/PageHeader';
import ProjectGallery from '../components/ui/ProjectGallery';
import Reveal from '../components/ui/Reveal';
import SectionHeader from '../components/ui/SectionHeader';
import contraloriaLogo from '../assets/images/contraloria.png';
import acueductoLogo from '../assets/images/acueducto.png';

const container = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const section = 'py-20 md:py-28';

const cases = [
  {
    logoUrl: contraloriaLogo,
    clientName: 'Contraloría General de la República',
    clientType: 'Entidad pública nacional · Bogotá',
    stats: [
      { val: '+27M', desc: 'Imágenes digitalizadas' },
      { val: '100%', desc: 'Cumplimiento normativo AGN' },
    ],
    tagText: 'Proyecto insignia',
    title: 'Organización, digitalización y recuperación documental a gran escala',
    description:
      'EGS ejecutó para la Contraloría General de la República un proyecto integral que abarcó la organización de sus fondos acumulados históricos, la digitalización masiva de documentos y la recuperación de información almacenada en medios magnéticos obsoletos, asegurando la trazabilidad y acceso oportuno al patrimonio documental de la institución.',
    achievements: [
      { val: '+27M', desc: 'Imágenes digitalizadas' },
      { val: 'Fondos acumulados', desc: 'Organización total' },
      { val: 'USB · CD · VHS', desc: 'Medios recuperados' },
    ],
    badges: ['Organización de archivos', 'Digitalización masiva', 'Lectura de medios magnéticos', 'Instrumentos archivísticos'],
    quote:
      'EGS demostró un alto nivel de experticia y compromiso en la organización y digitalización de nuestros fondos acumulados. Los resultados superaron nuestras expectativas tanto en calidad como en cumplimiento de los plazos establecidos.',
    author: 'Contraloría General de la República',
  },
  {
    logoUrl: acueductoLogo,
    clientName: 'Empresa de Acueducto y Alcantarillado de Bogotá',
    clientType: 'EAAB — Empresa de servicios públicos',
    stats: [
      { val: '+96K', desc: 'Cajas en custodia' },
      { val: '3', desc: 'Contratos ejecutados' },
    ],
    tagText: 'Relación de largo plazo',
    tagIcon: 'fas fa-star',
    title: 'Custodia, administración y gestión de historias laborales',
    description:
      'La EAAB ha confiado en EGS la gestión integral de su patrimonio documental a través de tres contratos sucesivos que demuestran la solidez de la relación y la calidad del servicio prestado. EGS administra hoy más de 96.000 cajas de archivo físico para esta empresa.',
    steps: [
      { title: 'Custodia de archivos físicos', text: 'Almacenamiento y administración de más de 96.000 cajas de archivo en instalaciones seguras y especializadas, con control de inventario y préstamo documental.' },
      { title: 'Administración documental activa', text: 'Gestión del ciclo de vida de los documentos activos de la empresa, garantizando el acceso oportuno y la trazabilidad en cada operación.' },
      { title: 'Gestión de historias laborales', text: 'Organización, digitalización y custodia del archivo de historias laborales, con acceso controlado para el área de gestión humana de la organización.' },
    ],
    badges: ['Custodia documental', 'Administración de archivos', 'Historias laborales', 'Logística documental'],
    quote:
      'La gestión de EGS en la custodia y administración de nuestros archivos ha sido ejemplar. Su capacidad para manejar grandes volúmenes de documentación con precisión y seguridad es un activo invaluable para nuestra organización.',
    author: 'Empresa de Acueducto y Alcantarillado de Bogotá (EAAB)',
  },
];

const otherClients = [
  { name: 'Alcaldía de Envigado', text: 'Organización y gestión documental del archivo municipal. Antioquia.' },
  { name: 'Alcaldía de La Estrella', text: 'Implementación de instrumentos archivísticos y digitalización. Antioquia.' },
  { name: 'Alcaldía de Segovia', text: 'Custodia y organización de fondos acumulados municipales. Antioquia.' },
];

// Fotos en public/images/proyectos/ (ver nombres de archivo). Si una foto aún no existe, se muestra un marcador.
const photo = (file) => `/images/proyectos/${file}`;
const gallery = [
  { id: 'digitalizacion', icon: 'fas fa-file-arrow-up', title: 'Digitalización de documentos', caption: 'Proceso de digitalización masiva de documentos', src: photo('digitalizacion.jpg') },
  { id: 'organizacion', icon: 'fas fa-boxes-stacked', title: 'Organización de archivos', caption: 'Organización de fondos acumulados', src: photo('organizacion.jpg') },
  { id: 'custodia', icon: 'fas fa-warehouse', title: 'Custodia en bodega', caption: 'Bodega de custodia documental', src: photo('custodia.jpg') },
  { id: 'medios', icon: 'fas fa-compact-disc', title: 'Medios magnéticos', caption: 'Lectura de medios magnéticos', src: photo('medios-magneticos.jpg') },
  { id: 'nebula', icon: 'fas fa-cloud-arrow-up', title: 'Nebula Vault', caption: 'Nebula Vault — Bodega virtual', src: photo('nebula-vault.jpg') },
  { id: 'microfilmacion', icon: 'fas fa-film', title: 'Microfilmación', caption: 'Microfilmación de documentos históricos', src: photo('microfilmacion.jpg') },
  { id: 'logistica', icon: 'fas fa-truck-moving', title: 'Logística documental', caption: 'Logística documental — Traslado seguro', src: photo('logistica.jpg') },
  { id: 'equipo', icon: 'fas fa-people-group', title: 'Equipo EGS', caption: 'Equipo profesional EGS en acción', src: photo('equipo.jpg') },
];

export default function Projects() {
  useEffect(() => {
    document.title = 'Casos de Éxito | Proyectos de Gestión Documental — EGS';
  }, []);

  return (
    <>
      <PageHeader
        crumb="Proyectos"
        label="Casos de éxito"
        title="Proyectos que respaldan nuestra experiencia"
        description="Hemos ejecutado proyectos de alto nivel para entidades de referencia nacional, demostrando capacidad técnica, cumplimiento y resultados medibles."
      />

      <section className={`bg-surface ${section}`}>
        <div className={`${container} space-y-8`}>
          {cases.map((c, i) => (
            <Reveal key={c.clientName}>
              <CaseBlock {...c} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className={`bg-surface-alt border-y border-line ${section}`}>
        <div className={container}>
          <SectionHeader center={false} label="También hemos trabajado con" title="Otros clientes destacados" />
          <ul className="grid sm:grid-cols-3 gap-6">
            {otherClients.map((c, i) => (
              <Reveal as="li" key={c.name} index={i} className="flex">
                <div className="w-full bg-surface border border-line rounded-card p-7">
                  <span className="w-11 h-11 rounded-lg bg-cyan-claro text-cyan-texto flex items-center justify-center text-lg mb-5">
                    <i className="fas fa-building-columns" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-ink mb-2">{c.name}</h3>
                  <p className="text-sm text-muted leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="galeria" className={`scroll-mt-28 bg-surface ${section}`}>
        <div className={container}>
          <SectionHeader
            center={false}
            label="Galería de proyectos"
            title="Nuestro trabajo en imágenes"
            description="Evidencia visual de los procesos de digitalización, custodia y organización documental que ejecutamos para nuestros clientes."
          />
          <ProjectGallery items={gallery} />
        </div>
      </section>

      <CtaBand
        label="¿Su entidad es el próximo caso de éxito?"
        title="Trabajemos juntos en su proyecto documental"
        text="Cuéntenos su desafío y le presentaremos una solución a la medida de sus necesidades y normatividad."
      >
        <Button to="/contacto" variant="primary" icon="fas fa-paper-plane">
          Solicitar cotización
        </Button>
        <Button to="/servicios" variant="secondary">
          Ver nuestros servicios
        </Button>
      </CtaBand>
    </>
  );
}