// Franja final de llamada a la acción (único bloque azul profundo de cada página).
export default function CtaBand({ label, title, text, extra, children }) {
  return (
    <section className="bg-azul-profundo text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          {label && (
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-acento block mb-3">{label}</span>
          )}
          <h2 className="font-heading text-2xl sm:text-3xl font-bold max-w-xl mb-3">{title}</h2>
          {text && <p className="text-sm sm:text-base text-white/75 max-w-xl">{text}</p>}
          {extra}
        </div>
        <div className="flex flex-wrap gap-4">{children}</div>
      </div>
    </section>
  );
}