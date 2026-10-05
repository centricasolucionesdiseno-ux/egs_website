import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  icon,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-acento/50';

  const variants = {
    primary: 'bg-cyan-acento hover:bg-cyan-acento/90 text-white shadow-sm',
    secondary: 'bg-white/10 hover:bg-white/20 border border-white/20 text-white',
    outline: 'border-2 border-azul-profundo text-azul-profundo hover:bg-azul-profundo hover:text-white',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {icon && <i className={icon} aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}