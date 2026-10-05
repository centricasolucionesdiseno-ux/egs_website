export default function CaseBlock({
  logoUrl,
  clientName,
  clientType,
  statVal1,
  statDesc1,
  statVal2,
  statDesc2,
  tagText,
  title,
  description,
  achievements = [],
  badges = [],
  quote,
  author,
  reverse = false,
  customGradient
}) {
  return (
    <article
      className={`grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-hover mb-12 border border-azul-profundo/10 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Sidebar Lateral de Marca */}
      <div
        className={`lg:col-span-5 p-8 sm:p-12 text-white flex flex-col justify-between ${
          customGradient || 'bg-linear-to-b from-azul-profundo to-azul-medio'
        } ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div>
          <div className="w-18 h-18 bg-white/12 border border-white/20 rounded-xl flex items-center justify-center p-3 mb-5">
            <img src={logoUrl} alt={clientName} className="max-h-full max-w-full object-contain" />
          </div>
          <h3 className="text-xl font-bold font-heading text-white mb-1">{clientName}</h3>
          <p className="text-xs font-semibold tracking-wider text-white/60 uppercase">{clientType}</p>
        </div>

        <div className="space-y-3 mt-8">
          <div className="bg-white/10 border border-white/15 rounded-xl p-4">
            <div className="text-2xl font-extrabold font-heading text-cyan-acento leading-none mb-1">
              {statVal1}
            </div>
            <div className="text-xs text-white/70">{statDesc1}</div>
          </div>
          <div className="bg-white/10 border border-white/15 rounded-xl p-4">
            <div className="text-2xl font-extrabold font-heading text-cyan-acento leading-none mb-1">
              {statVal2}
            </div>
            <div className="text-xs text-white/70">{statDesc2}</div>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className={`lg:col-span-7 bg-white p-8 sm:p-11 flex flex-col justify-between ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div>
          <span className="inline-flex items-center gap-1.5 bg-cyan-claro text-cyan-acento px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3.5">
            <i className="fas fa-trophy" /> {tagText}
          </span>
          <h2 className="text-2xl font-bold font-heading text-azul-profundo mb-3.5">
            {title}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            {description}
          </p>

          {achievements.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {achievements.map((item, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-3.5 text-center">
                  <div className="text-lg font-extrabold font-heading text-azul-profundo leading-tight mb-0.5">
                    {item.val}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">{item.desc}</div>
                </div>
              ))}
            </div>
          )}

          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {badges.map((badge, idx) => (
                <span key={idx} className="bg-azul-medio/10 text-azul-medio text-xs font-medium px-3 py-1 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>

        {quote && (
          <blockquote className="bg-gray-50 border-l-4 border-cyan-acento p-4 rounded-r-lg italic text-xs sm:text-sm text-gray-700">
            "{quote}"
            <span className="block not-italic font-bold text-azul-profundo text-xs mt-2">
              — {author}
            </span>
          </blockquote>
        )}
      </div>
    </article>
  );
}