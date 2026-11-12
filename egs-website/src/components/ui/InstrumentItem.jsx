export default function InstrumentItem({ icon, title, description }) {
  return (
    <div className="w-full flex items-start gap-4 p-6 bg-surface rounded-card border border-line transition-shadow duration-200 hover:shadow-soft">
      <div className="w-11 h-11 bg-cyan-claro rounded-lg flex items-center justify-center text-lg text-cyan-texto shrink-0">
        <i className={icon} aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-heading font-semibold text-ink text-base mb-1.5">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
