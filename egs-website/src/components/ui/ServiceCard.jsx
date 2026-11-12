import Button from './Button';

export default function ServiceCard({
  id,
  icon,
  badgeText,
  badgeType = 'azul',
  title,
  description,
  features = [],
  ctaText = 'Solicitar cotización',
  ctaTo = '/contacto',
}) {
  return (
    <article
      id={id}
      className="scroll-mt-28 w-full bg-surface border border-line rounded-card flex flex-col overflow-hidden transition-shadow duration-200 hover:shadow-soft"
    >
      <div className="p-7 pb-0 flex items-start justify-between gap-4">
        <div className="w-12 h-12 rounded-lg bg-cyan-claro text-cyan-texto flex items-center justify-center text-xl shrink-0">
          <i className={icon} aria-hidden="true" />
        </div>
        {badgeText && (
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${
              badgeType === 'cyan' ? 'bg-cyan-claro text-cyan-texto' : 'bg-chip-bg text-chip-text'
            }`}
          >
            {badgeText}
          </span>
        )}
      </div>

      <div className="p-7 pt-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold font-heading text-ink mb-2.5">{title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-5">{description}</p>

        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((item) => (
              <li key={item} className="text-sm text-muted flex items-start gap-2">
                <i className="fas fa-circle-check text-cyan-texto text-xs mt-1.5 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="px-7 pb-7">
        <Button to={ctaTo} variant="outline" className="w-full">
          {ctaText} <i className="fas fa-arrow-right" aria-hidden="true" />
        </Button>
      </div>
    </article>
  );
}
