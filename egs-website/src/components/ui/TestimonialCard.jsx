export default function TestimonialCard({ quote, author, org, initials }) {
  return (
    <div className="bg-surface rounded-card shadow-card p-8 border border-line border-l-4 border-l-cyan-acento flex flex-col justify-between h-full">
      <div>
        <div className="text-4xl text-cyan-texto font-serif leading-none mb-3" aria-hidden="true">&ldquo;</div>
        <p className="text-sm sm:text-base text-body italic leading-relaxed mb-6">{quote}</p>
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-line">
        <div className="w-11 h-11 bg-azul-medio text-white font-bold text-sm rounded-full flex items-center justify-center shrink-0">
          {initials}
        </div>
        <div>
          <h4 className="font-bold text-sm text-ink">{author}</h4>
          <p className="text-xs text-muted">{org}</p>
        </div>
      </div>
    </div>
  );
}
