export default function InstrumentItem({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-card shadow-card hover:shadow-hover border border-azul-profundo/10 transition-all duration-300 hover:translate-x-1">
      <div className="w-12 h-12 bg-cyan-claro rounded-xl flex items-center justify-center text-xl text-cyan-acento shrink-0">
        <i className={icon} aria-hidden="true" />
      </div>
      <div>
        <h4 className="font-bold text-azul-profundo text-base mb-1.5">{title}</h4>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}