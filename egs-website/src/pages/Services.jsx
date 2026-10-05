import { useEffect } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/ui/ServiceCard';
import NebulaCard from '../components/ui/NebulaCard';
import InstrumentItem from '../components/ui/InstrumentItem';

export default function Services() {
  useEffect(() => {
    document.title = 'Servicios de Gestión Documental | EGS';
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Portafolio 2026"
          title="Servicios especializados en el ciclo completo del documento"
          description="Desde la organización inicial hasta la preservación digital a largo plazo. Ofrecemos soluciones integrales con los más altos estándares técnicos y normativos."
        />

        {/* Componente Nebula Destacado */}
        <NebulaCard />

        {/* Cuadrícula de Servicios Reutilizables */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          <ServiceCard
            id="organizacion"
            icon="fas fa-boxes-stacked"
            badgeText="Archivística"
            badgeType="azul"
            title="Organización Integral de Archivos"
            description="Organizamos y estructuramos sus archivos para facilitar el acceso a la información, optimizar la gestión documental y garantizar el cumplimiento de la normativa archivística."
            features={[
              'Organización y clasificación documental',
              'Inventarios documentales y fondos acumulados',
              'Aplicación de lineamientos del AGN',
            ]}
          />
          <ServiceCard
            id="digitalizacion"
            icon="fas fa-scanner-image"
            badgeText="Más solicitado"
            badgeType="cyan"
            title="Digitalización y Preservación Digital"
            description="Transformamos sus documentos físicos en información digital organizada, segura y fácilmente accesible, optimizando la gestión documental."
            features={[
              'Control de calidad documental',
              'Digitalización bajo lineamientos archivísticos',
              'Indexación y metadatos descriptivos',
            ]}
          />
          <ServiceCard
            id="medios"
            icon="fas fa-compact-disc"
            badgeText="Servicio de nicho"
            badgeType="azul"
            title="Lectura y Acceso de Medios Magnéticos"
            description="Recuperamos la información almacenada en soportes obsoletos. Un servicio especializado que muy pocas empresas del sector ofrecen."
            features={[
              'Memorias USB, CD / DVD',
              'Cintas VHS y Betamax',
              'Copia, migración y digitalización',
            ]}
          />
        </div>

        {/* Sección de Instrumentos */}
        <div className="mt-16">
          <SectionHeader
            label="Consultoría especializada"
            title="Consultoría Archivística Especializada"
            description="Diseñamos e implementamos los instrumentos archivísticos requeridos por la normativa del Archivo General de la Nación."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InstrumentItem
              icon="fas fa-clipboard-list"
              title="Diagnóstico de Gestión Documental"
              description="Evaluación integral del estado actual de los archivos y procesos documentales, identificando brechas frente a la normatividad del AGN."
            />
            <InstrumentItem
              icon="fas fa-book-open"
              title="Programa de Gestión Documental (PGD)"
              description="Diseño e implementación del instrumento archivístico que articula todos los procesos documentales de la entidad."
            />
          </div>
        </div>
      </div>
    </div>
  );
}