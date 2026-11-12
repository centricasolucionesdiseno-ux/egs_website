export default function SectionHeader({ label, title, description, center = true, dark = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      {label && (
        <span className={`text-xs font-bold tracking-widest uppercase block mb-2 ${dark ? 'text-cyan-acento' : 'text-cyan-texto'}`}>
          {label}
        </span>
      )}
      <h2 className={`text-2xl sm:text-3xl font-extrabold font-heading mb-4 ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-sm sm:text-base max-w-2xl ${center ? 'mx-auto' : ''} ${dark ? 'text-gray-300' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
