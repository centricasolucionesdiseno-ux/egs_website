import { useEffect } from 'react';
import Button from '../components/ui/Button';
import CtaBand from '../components/ui/CtaBand';
import PageHeader from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import SectionHeader from '../components/ui/SectionHeader';

const container = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const section = 'py-20 md:py-28';

const pillars = [
  {
    title: 'Equipo multidisciplinario especializado',
    text: 'Nos distinguimos por contar con un equipo técnico y profesional altamente capacitado que participa en todas las etapas del proyecto, desde el diagnóstico inicial hasta la entrega final, garantizando soluciones eficientes y adaptadas a las necesidades de cada cliente.',
  },
  {
    title: 'Cumplimiento normativo garantizado',
    text: 'Nuestros servicios están alineados con la normatividad nacional e internacional vigente, combinando el cumplimiento legal con la más alta precisión técnica, garantizando seguridad, calidad y confiabilidad.',
  },
  {
    title: 'Tecnologías propias de innovación',
    text: 'Ofrecemos un modelo completo de gestión documental apoyado en herramientas tecnológicas de última generación. Automatizamos y optimizamos todo el ciclo de vida de la información —organización, digitalización y preservación digital—, asegurando la trazabilidad, el cumplimiento normativo y la máxima protección del patrimonio documental.',
  },
  {
    title: 'Cobertura nacional y experiencia institucional',
    text: 'Hemos desarrollado proyectos de alta complejidad para entidades de carácter nacional, distrital y municipal, consolidando una amplia experiencia en el sector público. Nuestra trayectoria refleja la capacidad de ejecutar soluciones documentales eficientes, confiables y adaptadas a los requerimientos de cada organización.',
  },
];

const values = [
  { icon: 'fas fa-shield-halved', title: 'Confiabilidad', text: 'Garantizamos la seguridad e integridad de la información de nuestros clientes en cada proceso.' },
  { icon: 'fas fa-magnifying-glass-chart', title: 'Transparencia', text: 'Trazabilidad total en cada etapa del ciclo documental, con reportes claros y verificables.' },
  { icon: 'fas fa-rotate', title: 'Mejora continua', text: 'Actualizamos constantemente nuestros métodos y tecnologías para ofrecer el mejor servicio posible.' },
  { icon: 'fas fa-handshake', title: 'Compromiso', text: 'Nos involucramos profundamente con las necesidades de cada cliente para entregar resultados superiores.' },
];

const allyItems = [
  { icon: 'fas fa-cloud-arrow-up', title: 'Nebula Vault — Software OAIS', text: 'Plataforma de preservación digital desarrollada bajo el estándar Open Archival Information System, con acceso 24/7 y cumplimiento de normatividad internacional de ciberseguridad.' },
  { icon: 'fas fa-lock', title: 'Ciberseguridad y normatividad internacional', text: 'Todos los sistemas cumplen con estándares de ciberseguridad actualizados, garantizando la protección de la información institucional de nuestros clientes.' },
  { icon: 'fas fa-gears', title: 'Integración con sistemas existentes', text: 'Nuestras soluciones se adaptan a la infraestructura tecnológica de cada entidad, facilitando una adopción sin fricciones.' },
];

const iconBox = 'w-11 h-11 rounded-lg bg-cyan-claro text-cyan-texto flex items-center justify-center text-lg shrink-0';

export default function About() {
  useEffect(() => {
    document.title = 'Quiénes Somos | EGS Soluciones Integrales';
  }, []);

  return (
    <>
      <PageHeader
        crumb="Acerca de"
        label="Quiénes somos"
        title="Especialistas en gestión documental y preservación de la información"
        description="Una firma colombiana con experiencia comprobada que combina gestión documental y preservación digital para proteger el patrimonio de su organización."
      />

      {/* ======== MISIÓN Y VISIÓN ======== */}
      <section className={`bg-white ${section}`}>
        <div className={container}>
          <SectionHeader center={false} label="Nuestra razón de ser" title="Misión y Visión" />
          <div className="grid sm:grid-cols-2 gap-6">
            <Reveal className="flex">
              <article className="w-full bg-white border border-line rounded-card p-8 sm:p-10">
                <span className={`${iconBox} mb-6`}><i className="fas fa-bullseye" aria-hidden="true" /></span>
                <h3 className="font-heading text-xl font-semibold text-azul-profundo mb-3">Misión</h3>
                <p className="text-sm text-gris-medio leading-relaxed">
                  Brindar servicios especializados en gestión documental para entidades públicas y privadas, mediante soluciones que garanticen el cumplimiento de la normatividad vigente, la transparencia, la trazabilidad de la información y la conservación del patrimonio documental, contribuyendo al fortalecimiento de la eficiencia administrativa a través de procesos seguros, confiables y orientados a la mejora continua.
                </p>
              </article>
            </Reveal>
            <Reveal index={1} className="flex">
              <article className="w-full bg-white border border-line rounded-card p-8 sm:p-10">
                <span className={`${iconBox} mb-6`}><i className="fas fa-eye" aria-hidden="true" /></span>
                <h3 className="font-heading text-xl font-semibold text-azul-profundo mb-3">Visión</h3>
                <p className="text-sm text-gris-medio leading-relaxed">
                  Consolidarnos como una empresa líder en soluciones de gestión documental y preservación digital, reconocida por la innovación, seguridad y calidad de nuestros servicios. Trascender en el tiempo preservando el legado del presente para el futuro, consolidándonos como referentes de la conservación del patrimonio documental a través de la memoria histórica como motor de identidad, conocimiento y progreso.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======== POR QUÉ EGS ======== */}
      <section className={`bg-gris-bg border-y border-line ${section}`}>
        <div className={`${container} grid md:grid-cols-12 gap-12`}>
          <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
            <SectionHeader
              center={false}
              label="Nuestra propuesta de valor"
              title="¿Por qué elegir a EGS?"
              description="En EGS Soluciones Integrales nos distinguimos por ofrecer servicios respaldados por la experiencia, el cumplimiento y el uso de tecnologías especializadas, garantizando altos estándares de calidad."
            />
          </div>
          <ol className="md:col-span-8 divide-y divide-line border-y border-line">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} index={i} className="grid grid-cols-[3rem_1fr] gap-4 py-8">
                <span className="font-heading text-sm font-semibold text-cyan-texto pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-azul-profundo mb-2">{p.title}</h3>
                  <p className="text-sm text-gris-medio leading-relaxed max-w-2xl">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ======== VALORES ======== */}
      <section className={`bg-white ${section}`}>
        <div className={container}>
          <SectionHeader center={false} label="Nuestros valores" title="Los principios que nos guían" />
          <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} index={i} className="flex">
                <div className="w-full border border-line rounded-card p-7">
                  <span className={`${iconBox} mb-5`}><i className={v.icon} aria-hidden="true" /></span>
                  <h3 className="font-heading text-lg font-semibold text-azul-profundo mb-2">{v.title}</h3>
                  <p className="text-sm text-gris-medio leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ======== ALIADO TECNOLÓGICO ======== */}
      <section className={`bg-gris-bg border-y border-line ${section}`}>
        <div className={container}>
          <SectionHeader center={false} label="Respaldo tecnológico" title="Nuestro aliado estratégico" />
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-5">
              <div className="bg-white border border-line rounded-card p-8 sm:p-10 h-full">
                <span className={`${iconBox} mb-6`}><i className="fas fa-microchip" aria-hidden="true" /></span>
                <h3 className="font-heading text-xl font-semibold text-azul-profundo mb-1">
                  Céntrica Soluciones Innovadoras
                </h3>
                <p className="text-xs font-semibold tracking-wider uppercase text-cyan-texto mb-4">
                  Aliado tecnológico oficial de EGS
                </p>
                <p className="text-sm text-gris-medio leading-relaxed">
                  La alianza con Céntrica Soluciones Innovadoras le otorga a EGS un respaldo tecnológico de primer nivel, que se materializa en soluciones digitales robustas, seguras y alineadas con estándares internacionales.
                </p>
              </div>
            </div>
            <ul className="md:col-span-7 divide-y divide-line border-y border-line self-start">
              {allyItems.map((a) => (
                <li key={a.title} className="flex items-start gap-4 py-6">
                  <span className={iconBox}><i className={a.icon} aria-hidden="true" /></span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-azul-profundo mb-1.5">{a.title}</h3>
                    <p className="text-sm text-gris-medio leading-relaxed">{a.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Trabajamos con las entidades más exigentes del país"
        text="Desde fondos acumulados de nivel nacional hasta historias laborales de grandes empresas, EGS tiene la experiencia, el equipo y la tecnología para cada desafío documental."
      >
        <Button to="/contacto" variant="primary" icon="fas fa-arrow-right">
          Hablar con un experto
        </Button>
      </CtaBand>
    </>
  );
}