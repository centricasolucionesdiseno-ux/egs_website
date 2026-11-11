// Caso de éxito: columna de cliente + cifras, y columna con alcance, logros, etapas, etiquetas y testimonio.
export default function CaseBlock({
  logoUrl,
  clientName,
  clientType,
  stats = [],
  tagText,
  tagIcon = 'fas fa-trophy',
  title,
  description,
  achievements = [],
  steps = [],
  badges = [],
  quote,
  author,
  reverse = false,
}) {
  return (
    <article className="grid md:grid-cols-12 bg-white border border-line rounded-card overflow-hidden">
      <div
        className={`md:col-span-4 bg-gris-bg p-8 sm:p-10 flex flex-col justify-between gap-10 border-b md:border-b-0 border-line ${
          reverse ? 'md:order-2 md:border-l' : 'md:border-r'
        }`}
      >
        <div>
          <div className="w-16 h-16 bg-white border border-line rounded-xl flex items-center justify-center p-2.5 mb-5">
            <img src={logoUrl} alt="" width="80" height="80" className="max-h-full max-w-full object-contain" />
          </div>
          <h2 className="text-xl font-semibold font-heading text-azul-profundo mb-1">{clientName}</h2>
          <p className="text-xs font-semibold tracking-wider uppercase text-gris-medio">{clientType}</p>
        </div>

        <dl className="space-y-3">
          {stats.map((s) => (
            <div key={s.desc} className="bg-white border border-line rounded-lg p-4">
              <dt className="sr-only">{s.desc}</dt>
              <dd>
                <span className="block text-2xl font-bold font-heading text-azul-profundo leading-none mb-1">{s.val}</span>
                <span className="text-xs text-gris-medio">{s.desc}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={`md:col-span-8 p-8 sm:p-10 flex flex-col gap-6 ${reverse ? 'md:order-1' : ''}`}>
        <div>
          <span className="inline-flex items-center gap-2 bg-cyan-claro text-cyan-texto px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <i className={tagIcon} aria-hidden="true" /> {tagText}
          </span>
          <h3 className="text-xl sm:text-2xl font-semibold font-heading text-azul-profundo mb-3">{title}</h3>
          <p className="text-sm text-gris-medio leading-relaxed">{description}</p>
        </div>

        {achievements.length > 0 && (
          <ul className="grid sm:grid-cols-3 gap-3">
            {achievements.map((a) => (
              <li key={a.desc} className="border border-line rounded-lg p-4 text-center">
                <span className="block text-base font-bold font-heading text-azul-profundo leading-tight mb-0.5">{a.val}</span>
                <span className="text-xs text-gris-medio">{a.desc}</span>
              </li>
            ))}
          </ul>
        )}

        {steps.length > 0 && (
          <ol className="divide-y divide-line border-y border-line">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4">
                <span className="font-heading text-sm font-semibold text-cyan-texto pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="font-heading text-base font-semibold text-azul-profundo mb-1">{s.title}</h4>
                  <p className="text-sm text-gris-medio leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        )}

        {badges.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <li key={b} className="bg-azul-medio/10 text-azul-medio text-xs font-medium px-3 py-1 rounded-full">
                {b}
              </li>
            ))}
          </ul>
        )}

        {quote && (
          <blockquote className="mt-auto border-l-4 border-cyan-acento bg-gris-bg rounded-r-lg p-5">
            <p className="text-sm italic text-gris-oscuro leading-relaxed">“{quote}”</p>
            <footer className="mt-3 text-xs font-bold text-azul-profundo">— {author}</footer>
          </blockquote>
        )}
      </div>
    </article>
  );
}