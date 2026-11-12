import { useEffect } from 'react';
import Button from '../components/ui/Button';
import BentoCard from '../components/ui/BentoCard';
import CtaBand from '../components/ui/CtaBand';
import SectionHeader from '../components/ui/SectionHeader';
import TestimonialCard from '../components/ui/TestimonialCard';
import Reveal from '../components/ui/Reveal';
import VaultPreview from '../components/ui/VaultPreview';
import contraloriaLogo from '../assets/images/contraloria.png';
import acueductoLogo from '../assets/images/acueducto.png';

const container = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const section = 'py-20 md:py-28';

const chips = ['Empresa certificada · Bogotá, Colombia', 'Lineamientos AGN', 'Estándar OAIS'];

const clients = [
  { name: 'Contraloría General de la República', type: 'Entidad pública nacional', logo: contraloriaLogo },
  { name: 'Acueducto de Bogotá (EAAB)', type: 'Empresa de servicios públicos', logo: acueductoLogo },
  { name: 'Alcaldías de Envigado, La Estrella y Segovia', type: 'Entidades municipales', icon: 'fas fa-city' },
];

const stats = [
  { value: '27M+', label: 'Imágenes digitalizadas' },
  { value: '96.000+', label: 'Cajas en custodia' },
  { value: '3', label: 'Contratos con el Acueducto de Bogotá' },
  { value: '8+', label: 'Servicios especializados' },
];

const pillars = [
  {
    title: 'Alineados con el AGN',
    text: 'Organizamos, digitalizamos y describimos sus archivos bajo los lineamientos del Archivo General de la Nación.',
  },
  {
    title: 'Tecnología propia',
    text: 'Nebula Vault, nuestro software de preservación digital bajo el estándar OAIS, integrable con sus sistemas existentes.',
  },
  {
    title: 'Capacidad a gran escala',
    text: 'Más de 27 millones de imágenes digitalizadas y más de 96.000 cajas en custodia.',
  },
  {
    title: 'Servicios que pocas firmas ofrecen',
    text: 'Recuperamos información de soportes obsoletos: memorias USB, CD/DVD, cintas VHS y Betamax.',
  },
];

const steps = [
  { title: 'Diagnóstico', text: 'Evaluamos el estado de sus archivos e identificamos brechas frente a la normatividad del AGN.' },
  { title: 'Organización', text: 'Clasificamos, ordenamos e inventariamos fondos acumulados.' },
  { title: 'Digitalización', text: 'Convertimos documentos físicos en información digital con control de calidad, indexación y metadatos.' },
  { title: 'Preservación y custodia', text: 'Conservamos la información en custodia física y en Nebula Vault, con acceso 24/7.' },
];

const faqs = [
  {
    q: '¿Qué es el Programa de Gestión Documental (PGD)?',
    a: 'Es el instrumento archivístico que articula todos los procesos documentales de una entidad. Lo diseñamos e implementamos según los lineamientos del AGN.',
  },
  {
    q: '¿Qué es Nebula Vault?',
    a: 'Es nuestro software de preservación digital, desarrollado bajo el estándar OAIS. Ofrece acceso 24/7 y se integra con sistemas existentes.',
  },
  {
    q: '¿Pueden recuperar información de soportes antiguos?',
    a: 'Sí. Leemos y migramos memorias USB, CD/DVD y cintas VHS y Betamax, y digitalizamos su contenido.',
  },
  {
    q: '¿Atienden entidades públicas y privadas?',
    a: 'Sí. Trabajamos con entidades de los sectores público y privado en Colombia, desde Bogotá.',
  },
];

export default function Home() {
  useEffect(() => {
    document.title = 'EGS Soluciones Integrales | Gestión Documental Especializada en Colombia';
  }, []);

  return (
    <>
      {/* ======== HERO ======== */}
      <section className="hero-glow bg-surface-alt border-b border-line">
        <div className={`${container} pt-20 pb-20 md:pt-28 md:pb-28 grid md:grid-cols-12 gap-12 items-center`}>
          <div className="md:col-span-7">
            <ul className="flex flex-wrap gap-2 mb-8" aria-label="Enfoque">
              {chips.map((c, i) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-chip-text bg-surface border border-line rounded-full px-3 py-1"
                >
                  {i === 0 && <i className="fas fa-shield-halved text-cyan-texto" aria-hidden="true" />}
                  {c}
                </li>
              ))}
            </ul>

            <h1 className="text-3xl sm:text-4xl font-bold font-heading text-ink leading-[1.15] tracking-tight mb-6">
              Transformamos la gestión documental para garantizar la{' '}
              <span className="text-cyan-texto">preservación digital, la eficiencia y el control</span> de la información
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mb-10">
              Somos especialistas en organización, digitalización, preservación digital, custodia de archivos y
              soluciones tecnológicas para entidades del sector público y privado.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button to="/contacto" variant="primary" icon="fas fa-paper-plane">
                Solicitar cotización
              </Button>
              <Button to="/servicios" variant="outline" icon="fas fa-folder-open">
                Ver servicios
              </Button>
            </div>
          </div>

          <div className="hidden md:block md:col-span-5">
            <VaultPreview />
          </div>
        </div>
      </section>

      {/* ======== CIFRAS ======== */}
      <section aria-label="Cifras" className={`bg-surface ${section}`}>
        <div className={`${container} grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6`}>
          {stats.map((s, i) => (
            <Reveal key={s.label} index={i} className="border-l border-line pl-6">
              <div className="font-heading text-4xl md:text-5xl font-bold text-ink leading-none mb-3">
                {s.value}
              </div>
              <div className="text-sm text-muted">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ======== SERVICIOS (BENTO) ======== */}
      <section className={`bg-surface ${section} pt-0 md:pt-0`}>
        <div className={container}>
          <SectionHeader
            center={false}
            label="Nuestros servicios"
            title="Soluciones documentales para su organización"
            description="Ofrecemos soluciones integrales para organizar, proteger, preservar y administrar la información de su organización."
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <Reveal className="md:col-span-7 flex">
              <BentoCard
                className="w-full"
                icon="fas fa-file-arrow-up"
                label="Más solicitado"
                title="Digitalización y preservación digital"
                description="Transformamos sus documentos físicos en información digital organizada, segura y fácilmente accesible, sentando las bases para su preservación digital a largo plazo."
                to="/servicios#digitalizacion"
              >
                <ul className="mt-5 space-y-2">
                  {['Control de calidad documental', 'Indexación y metadatos descriptivos'].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <i className="fas fa-circle-check text-cyan-texto text-xs mt-1.5" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </Reveal>

            <Reveal index={1} className="md:col-span-5 flex">
              <BentoCard
                className="w-full"
                icon="fas fa-cloud-arrow-up"
                label="Tecnología"
                title="Nebula Vault — Bodega Virtual"
                description="Software OAIS de preservación digital con acceso 24/7. Tecnología propia que automatiza y optimiza todo el ciclo de vida de la información institucional."
                to="/servicios#nebula"
              />
            </Reveal>

            <Reveal className="md:col-span-4 flex">
              <BentoCard
                className="w-full"
                icon="fas fa-boxes-stacked"
                label="Archivística"
                title="Organización integral de archivos"
                description="Organizamos y estructuramos sus archivos para facilitar el acceso a la información y garantizar el cumplimiento de la normativa archivística."
                to="/servicios#organizacion"
              />
            </Reveal>

            <Reveal index={1} className="md:col-span-4 flex">
              <BentoCard
                className="w-full"
                icon="fas fa-compact-disc"
                label="Servicio de nicho"
                title="Lectura de medios magnéticos"
                description="Recuperamos información de soportes obsoletos: USB, CD/DVD, VHS y Betamax."
                to="/servicios#medios"
              />
            </Reveal>

            <Reveal index={2} className="md:col-span-4 flex">
              <BentoCard
                className="w-full"
                icon="fas fa-clipboard-list"
                label="Consultoría"
                title="Diagnóstico y PGD"
                description="Instrumentos archivísticos exigidos por la normativa del Archivo General de la Nación."
                to="/servicios#instrumentos"
              />
            </Reveal>
          </div>

          <div className="mt-10">
            <Button to="/servicios" variant="outline" icon="fas fa-arrow-right">
              Ver todos los servicios
            </Button>
          </div>
        </div>
      </section>

      {/* ======== QUIÉNES SOMOS + POR QUÉ EGS ======== */}
      <section className={`bg-surface-alt border-y border-line ${section}`}>
        <div className={`${container} grid md:grid-cols-12 gap-12`}>
          <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <SectionHeader
              center={false}
              label="Quiénes somos"
              title="Gestión documental y preservación digital integradas"
              description="EGS Soluciones Integrales S.A.S. es una firma consultora especializada en gestión documental que ofrece soluciones para entidades públicas y privadas. Contamos con un equipo multidisciplinario que combina experiencia técnica y tecnológica para diseñar e implementar procesos adaptados a las necesidades de cada organización."
            />
            <p className="-mt-6 mb-8 text-sm sm:text-base text-muted max-w-2xl">
              Trabajamos para optimizar la administración de la información mediante procesos seguros, eficientes y
              confiables, promoviendo el cumplimiento de la normativa archivística, la trazabilidad documental y la
              preservación del patrimonio documental.
            </p>
            <div className="border-l border-line pl-6 mb-8">
              <div className="font-heading text-4xl font-bold text-ink leading-none mb-2">+10</div>
              <div className="text-sm text-muted">Años de experiencia en gestión documental</div>
            </div>
            <Button to="/acerca-de" variant="outline" icon="fas fa-arrow-right">
              Conozca más sobre EGS
            </Button>
          </div>

          <ol className="md:col-span-7 divide-y divide-line border-y border-line self-start">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} index={i} className="grid grid-cols-[3rem_1fr] gap-4 py-8">
                <span className="font-heading text-sm font-semibold text-cyan-texto pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-ink mb-2">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed max-w-xl">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ======== CLIENTES DE ALTO NIVEL ======== */}
      <section className={`bg-surface ${section}`}>
        <div className={container}>
          <SectionHeader
            center={false}
            label="Clientes de alto nivel"
            title="Entidades que confían en EGS"
            description="Hemos ejecutado proyectos de gran escala para algunas de las instituciones más importantes del país."
          />
          <ul className="grid sm:grid-cols-3 gap-6">
            {clients.map((c, i) => (
              <Reveal as="li" key={c.name} index={i} className="flex">
                <div className="w-full border border-line rounded-card p-7">
                  <span className="w-14 h-14 rounded-xl border border-line bg-white flex items-center justify-center p-2.5 mb-5 text-xl text-cyan-texto">
                    {c.logo ? (
                      <img src={c.logo} alt="" width="80" height="80" className="max-h-full max-w-full object-contain" />
                    ) : (
                      <i className={c.icon} aria-hidden="true" />
                    )}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-ink mb-1.5">{c.name}</h3>
                  <p className="text-xs font-semibold tracking-wider uppercase text-muted">{c.type}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10">
            <Button to="/proyectos" variant="outline" icon="fas fa-arrow-right">
              Ver casos de éxito
            </Button>
          </div>
        </div>
      </section>

      {/* ======== PROCESO ======== */}
      <section className={`bg-surface-alt border-y border-line ${section}`}>
        <div className={container}>
          <SectionHeader
            center={false}
            label="Cómo trabajamos"
            title="Del documento físico al archivo preservado"
          />
          <ol className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
            {steps.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                index={i}
                className="relative border-t border-line pt-5 before:absolute before:-top-px before:left-0 before:h-px before:w-12 before:bg-cyan-acento"
              >
                <span className="font-heading text-sm font-semibold text-cyan-texto">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-lg font-semibold text-ink mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ======== TESTIMONIOS ======== */}
      <section className={`bg-surface ${section}`}>
        <div className={container}>
          <SectionHeader center={false} label="Lo que dicen nuestros clientes" title="Satisfacción comprobada" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <TestimonialCard
                quote="EGS demostró un alto nivel de experticia y compromiso en la organización y digitalización de nuestros fondos acumulados. Los resultados superaron nuestras expectativas tanto en calidad como en cumplimiento de los plazos establecidos."
                author="Contraloría General de la República"
                org="Entidad de control fiscal del Estado colombiano"
                initials="CG"
              />
            </Reveal>
            <Reveal index={1}>
              <TestimonialCard
                quote="La gestión de EGS en la custodia y administración de nuestros archivos ha sido ejemplar. Su capacidad para manejar grandes volúmenes de documentación con precisión y seguridad es un activo invaluable para nuestra organización."
                author="Empresa de Acueducto y Alcantarillado de Bogotá"
                org="EAAB — Empresa de servicios públicos"
                initials="AB"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======== FAQ ======== */}
      <section className={`bg-surface-alt border-y border-line ${section}`}>
        <div className={`${container} grid md:grid-cols-12 gap-12`}>
          <div className="md:col-span-4">
            <SectionHeader center={false} label="Preguntas frecuentes" title="Lo que suelen preguntarnos" />
          </div>
          <div className="md:col-span-8 border-t border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-line py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-heading font-semibold text-ink focus-visible:outline-2 focus-visible:outline-cyan-acento [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="text-cyan-texto shrink-0">
                    <i className="fas fa-plus group-open:hidden" />
                    <i className="fas fa-minus hidden group-open:inline" />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm text-muted leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CTA FINAL ======== */}
      <CtaBand
        label="Impulse su transformación"
        title="Impulse la transformación documental de su entidad"
        text="Contáctenos hoy y descubra cómo podemos optimizar la gestión de su información institucional."
        extra={
          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold">
            <i className="fas fa-phone text-cyan-acento" aria-hidden="true" />
            <a href="tel:+576013225214" className="hover:text-cyan-acento">601 322 5214</a>
            <span aria-hidden="true" className="text-white/40">|</span>
            <a href="tel:+573002057325" className="hover:text-cyan-acento">300 205 7325</a>
          </p>
        }
      >
        <Button to="/contacto" variant="primary" icon="fas fa-arrow-right">
          Solicitar cotización
        </Button>
        <Button to="/servicios" variant="secondary">
          Explorar servicios
        </Button>
      </CtaBand>
    </>
  );
}
