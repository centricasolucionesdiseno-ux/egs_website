import { useEffect } from 'react';
import Button from '../components/ui/Button';
import CtaBand from '../components/ui/CtaBand';
import PageHeader from '../components/ui/PageHeader';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/ui/ServiceCard';
import InstrumentItem from '../components/ui/InstrumentItem';
import Reveal from '../components/ui/Reveal';
import VaultPreview from '../components/ui/VaultPreview';

const container = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const section = 'py-20 md:py-28';

const nebulaFeatures = [
  { icon: 'fas fa-clock', text: 'Acceso 24/7 desde cualquier lugar' },
  { icon: 'fas fa-certificate', text: 'Estándar OAIS — Normatividad Internacional' },
  { icon: 'fas fa-shield-halved', text: 'Ciberseguridad de nivel institucional' },
  { icon: 'fas fa-magnifying-glass', text: 'Búsqueda y consulta de documentos digitales' },
  { icon: 'fas fa-layer-group', text: 'Integrable con sistemas existentes' },
];

const services = [
  {
    id: 'organizacion',
    icon: 'fas fa-boxes-stacked',
    badgeText: 'Archivística',
    title: 'Organización Integral de Archivos',
    description:
      'Organizamos y estructuramos sus archivos para facilitar el acceso a la información, optimizar la gestión documental y garantizar el cumplimiento de la normativa archivística.',
    features: [
      'Organización y clasificación documental',
      'Inventarios documentales',
      'Intervención de fondos acumulados',
      'Implementación de Tablas de Retención Documental (TRD)',
      'Aplicación de lineamientos del Archivo General de la Nación (AGN)',
      'Preparación documental para digitalización y preservación digital',
    ],
  },
  {
    id: 'digitalizacion',
    icon: 'fas fa-file-arrow-up',
    badgeText: 'Más solicitado',
    badgeType: 'cyan',
    title: 'Digitalización y Preservación Digital',
    description:
      'Transformamos sus documentos físicos en información digital organizada, segura y fácilmente accesible, optimizando la gestión documental y sentando las bases para su preservación digital a largo plazo.',
    features: [
      'Preparación de documentos para preservación digital',
      'Control de calidad documental',
      'Digitalización bajo lineamientos archivísticos y de preservación',
      'Conversión de documentos para consulta y conservación a largo plazo',
      'Indexación, metadatos descriptivos e integración con Nebula Vault',
    ],
  },
  {
    id: 'medios',
    icon: 'fas fa-compact-disc',
    badgeText: 'Servicio de nicho',
    title: 'Lectura y Acceso de Medios Magnéticos',
    description:
      'Recuperamos la información almacenada en soportes obsoletos. Un servicio especializado que muy pocas empresas del sector pueden ofrecer en Colombia.',
    features: [
      'Memorias USB y discos CD / DVD',
      'Cintas VHS y Betamax',
      'Verificación de estado del soporte',
      'Copia, migración y digitalización',
    ],
  },
  {
    id: 'microfilmacion',
    icon: 'fas fa-film',
    badgeText: 'Largo plazo',
    title: 'Microfilmación',
    description:
      'Técnica fotográfica de registro en películas de sales de plata que permite preservar una reproducción exacta del documento sobre soporte fotográfico normalizado.',
    features: [
      'Ahorro de más del 98% en espacio físico',
      'Preservación a largo plazo garantizada',
      'Soporte normalizado internacionalmente',
      'Validez legal del documento',
    ],
  },
  {
    id: 'custodia',
    icon: 'fas fa-warehouse',
    badgeText: 'Alta demanda',
    badgeType: 'cyan',
    title: 'Custodia y Administración de Archivos Físicos',
    description:
      'Almacenamiento seguro de archivos físicos en bodegas especializadas, con control de inventario, servicio de préstamo y consulta eficiente.',
    features: [
      'Más de 96.000 cajas en custodia',
      'Alquiler de bodegas documentales',
      'Control de inventario en tiempo real',
      'Servicio de préstamo y devolución',
    ],
  },
  {
    id: 'logistica',
    icon: 'fas fa-truck-moving',
    badgeText: 'Traslado seguro',
    title: 'Logística Documental',
    description:
      'Traslado y transporte seguro de documentos físicos entre sedes, bodegas o entidades. Garantizamos la cadena de custodia en todo momento del recorrido.',
    features: [
      'Embalaje especializado y trazable',
      'Cadena de custodia documentada',
      'Cobertura en Bogotá y Colombia',
      'Actas de entrega y recibo',
    ],
  },
];

const instruments = [
  { icon: 'fas fa-clipboard-list', title: 'Diagnóstico de Gestión Documental', description: 'Evaluación integral del estado actual de los archivos y procesos documentales, identificando brechas frente a la normatividad del AGN.' },
  { icon: 'fas fa-book-open', title: 'Programa de Gestión Documental (PGD)', description: 'Diseño e implementación del instrumento archivístico que articula todos los procesos documentales de la entidad.' },
  { icon: 'fas fa-map', title: 'Plan Institucional de Archivos (PINAR)', description: 'Herramienta de planeación que permite proyectar los recursos necesarios para el desarrollo de los procesos archivísticos de la entidad.' },
  { icon: 'fas fa-list-check', title: 'Tablas de Retención Documental (TRD)', description: 'Elaboración e implementación de las TRD que establecen el ciclo de vida de cada tipo documental según la normatividad vigente.' },
  { icon: 'fas fa-scale-balanced', title: 'Tablas de Valoración Documental (TVD)', description: 'Instrumento para la valoración de los documentos de los fondos acumulados, determinando su disposición final según criterios técnicos.' },
  { icon: 'fas fa-sitemap', title: 'Cuadros de Clasificación Documental (CCD)', description: 'Estructuración lógica de los fondos documentales que facilita la organización, recuperación y control de la información institucional.' },
  { icon: 'fas fa-shield-halved', title: 'Sistema Integrado de Conservación (SIC)', description: 'Conjunto de planes, programas, estrategias y acciones orientadas a la conservación y preservación del patrimonio documental.' },
  { icon: 'fas fa-magnifying-glass', title: 'Inventarios Documentales', description: 'Elaboración de instrumentos de descripción archivística que permiten conocer, controlar y localizar los documentos de la entidad.' },
  { icon: 'fas fa-spell-check', title: 'Banco Terminológico', description: 'Recopilación y normalización de términos archivísticos institucionales para garantizar coherencia en la descripción y recuperación documental.' },
  { icon: 'fas fa-chart-line', title: 'Programas de Conservación, Digitalización y Preservación Digital', description: 'Planes específicos que integran la conservación preventiva, la digitalización y la preservación digital como estrategias complementarias de largo plazo.' },
];

export default function Services() {
  useEffect(() => {
    document.title = 'Servicios de Gestión Documental | EGS';
  }, []);

  return (
    <>
      <PageHeader
        crumb="Servicios"
        label="Portafolio 2026"
        title="Servicios especializados en el ciclo completo del documento"
        description="Desde la organización inicial hasta la preservación digital a largo plazo. Ofrecemos soluciones integrales con los más altos estándares técnicos y normativos."
      />

      {/* ======== NEBULA VAULT ======== */}
      <section id="nebula" className={`scroll-mt-28 bg-surface ${section}`}>
        <div className={`${container} grid md:grid-cols-12 gap-12 items-center`}>
          <div className="md:col-span-6">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-texto block mb-3">
              Diferenciador tecnológico
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-ink mb-4">
              Nebula Vault, bodega virtual
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-8 max-w-xl">
              Nuestro software de preservación digital desarrollado bajo el estándar internacional OAIS (Open Archival
              Information System). Una solución que muy pocas empresas del sector ofrecen en Colombia.
            </p>

            <ul className="divide-y divide-line border-y border-line mb-8">
              {nebulaFeatures.map((f) => (
                <li key={f.text} className="flex items-center gap-4 py-3.5 text-sm font-medium text-ink">
                  <i className={`${f.icon} text-cyan-texto w-5 text-center`} aria-hidden="true" />
                  {f.text}
                </li>
              ))}
            </ul>

            <Button to="/contacto" variant="primary" icon="fas fa-arrow-right">
              Solicitar demo
            </Button>
          </div>

          <div className="md:col-span-6">
            <VaultPreview />
          </div>
        </div>
      </section>

      {/* ======== PORTAFOLIO ======== */}
      <section className={`bg-surface-alt border-y border-line ${section}`}>
        <div className={container}>
          <SectionHeader
            center={false}
            label="Nuestros servicios"
            title="Portafolio completo de gestión documental"
            description="Cada servicio está diseñado para dar cumplimiento a la normatividad del Archivo General de la Nación y las mejores prácticas internacionales."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.id} index={i % 3} className="flex">
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CONSULTORÍA ======== */}
      <section id="instrumentos" className={`scroll-mt-28 bg-surface ${section}`}>
        <div className={container}>
          <SectionHeader
            center={false}
            label="Consultoría especializada"
            title="Consultoría Archivística Especializada"
            description="Diseñamos e implementamos los instrumentos archivísticos requeridos por la normativa del Archivo General de la Nación, fortaleciendo la gestión documental, el cumplimiento normativo y la preservación digital de la información."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {instruments.map((item, i) => (
              <Reveal key={item.title} index={i % 2} className="flex">
                <InstrumentItem {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="¿Necesita asesoría sobre cuál instrumento aplica a su entidad?"
        text="Nuestro equipo de especialistas le ayudará a identificar la solución más adecuada para su caso."
      >
        <Button to="/contacto" variant="primary" icon="fas fa-arrow-right">
          Hablar con un experto
        </Button>
      </CtaBand>
    </>
  );
}
