import { Link } from 'react-router-dom';

// Tarjeta plana de borde 1px; todo el bloque es clicable vía enlace extendido.
export default function BentoCard({ icon, label, title, description, to, className = '', children }) {
  return (
    <article
      className={`group relative flex flex-col bg-surface border border-line rounded-card p-7 sm:p-9 transition-shadow duration-200 hover:shadow-soft ${className}`}
    >
      <div className="flex items-center justify-between gap-4 mb-8">
        <span className="w-11 h-11 rounded-lg bg-cyan-claro text-cyan-texto flex items-center justify-center text-lg">
          <i className={icon} aria-hidden="true" />
        </span>
        <span className="text-xs font-semibold tracking-wider uppercase text-muted">{label}</span>
      </div>

      <h3 className="font-heading text-xl font-semibold text-ink mb-3">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
      {children}

      <Link
        to={to}
        className="mt-auto pt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-cyan-acento"
      >
        <span>
          Ver más<span className="sr-only"> sobre {title}</span>
        </span>
        <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
