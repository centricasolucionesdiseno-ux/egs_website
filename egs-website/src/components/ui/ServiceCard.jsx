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
  ctaTo = '/contacto'
}) {
  return (
    <article
      id={id}
      className="bg-white rounded-card shadow-card hover:shadow-hover border border-azul-profundo/10 flex flex-col transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      <div className="p-7 pb-0 flex items-start justify-between gap-4">
        <div className="w-14 h-14 rounded-xl bg-cyan-claro text-cyan-acento flex items-center justify-center text-2xl shrink-0">
          <i className={icon} aria-hidden="true" />
        </div>
        {badgeText && (
          <span
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold ${
              badgeType === 'cyan'
                ? 'bg-cyan-claro text-cyan-acento'
                : 'bg-azul-medio/10 text-azul-medio'
            }`}
          >
            {badgeText}
          </span>
        )}
      </div>

      <div className="p-7 pt-4 flex-1 flex flex-col">
        <h3 className="text-xl font-bold font-heading text-azul-profundo mb-2.5">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="space-y-2 mb-6 mt-auto">
            {features.map((item, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-gray-600 flex items-start gap-2">
                <i className="fas fa-circle-check text-cyan-acento text-xs mt-1 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="px-7 pb-7 mt-auto">
        <Button to={ctaTo} variant="outline" className="w-full">
          {ctaText} <i className="fas fa-arrow-right" aria-hidden="true" />
        </Button>
      </div>
    </article>
  );
}