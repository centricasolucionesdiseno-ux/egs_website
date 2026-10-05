export default function TestimonialCard({ quote, author, org, initials }) {
  return (
    <div className="bg-white rounded-card shadow-card p-8 border-l-4 border-cyan-acento flex flex-col justify-between h-full">
      <div>
        <div className="text-4xl text-cyan-acento font-serif leading-none mb-3">&ldquo;</div>
        <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed mb-6">
          {quote}
        </p>
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-11 h-11 bg-azul-medio text-white font-bold text-sm rounded-full flex items-center justify-center shrink-0">
          {initials}
        </div>
        <div>
          <h4 className="font-bold text-sm text-azul-profundo">{author}</h4>
          <p className="text-xs text-gray-500">{org}</p>
        </div>
      </div>
    </div>
  );
}