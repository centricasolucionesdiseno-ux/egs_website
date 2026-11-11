import { Link } from 'react-router-dom';

// Encabezado común de páginas internas: breadcrumb, etiqueta, único H1 y descripción.
export default function PageHeader({ crumb, label, title, description }) {
  return (
    <section className="hero-glow bg-gris-bg border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pb-24">
        <nav aria-label="Ruta de navegación" className="text-xs text-gris-medio mb-10">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="hover:text-azul-profundo">Inicio</Link>
            </li>
            <li aria-hidden="true"><i className="fas fa-chevron-right text-[10px]" /></li>
            <li aria-current="page" className="font-semibold text-azul-profundo">{crumb}</li>
          </ol>
        </nav>
        <span className="text-xs font-bold tracking-widest uppercase text-cyan-texto block mb-3">{label}</span>
        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-azul-profundo leading-[1.1] tracking-tight max-w-3xl mb-6">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-gris-medio leading-relaxed max-w-2xl">{description}</p>
      </div>
    </section>
  );
}