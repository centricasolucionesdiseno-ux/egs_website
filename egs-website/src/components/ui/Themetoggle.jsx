import { useState } from 'react';

const current = () => (document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

// Interruptor claro/oscuro. Solo guarda la preferencia en localStorage cuando el usuario la cambia.
export default function ThemeToggle() {
  const [theme, setTheme] = useState(current);
  const isDark = theme === 'dark';

  const toggle = () => {
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Sin almacenamiento disponible: el cambio dura mientras la pestaña esté abierta.
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label="Modo oscuro"
      className="w-10 h-10 rounded-md text-muted hover:text-ink hover:bg-surface-alt flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-cyan-acento"
    >
      <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true" />
    </button>
  );
}
