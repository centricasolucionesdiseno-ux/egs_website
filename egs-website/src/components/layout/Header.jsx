import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoLight from '../../assets/images/egs-logo.png';
import logoDark from '../../assets/images/egs-logo-dark.png';
import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Escritorio: ítem activo con subrayado cyan
  const linkClass = ({ isActive }) =>
    `pb-1 border-b-2 font-medium transition-colors ${
      isActive ? 'text-ink border-cyan-acento' : 'text-muted border-transparent hover:text-ink'
    }`;

  // Móvil: ítem activo en negrita
  const mobileLinkClass = ({ isActive }) =>
    `py-2 transition-colors ${isActive ? 'text-ink font-semibold' : 'text-muted hover:text-ink'}`;

  const ctaClass =
    'bg-cyan-acento text-azul-profundo px-5 py-2.5 rounded-md font-semibold hover:bg-cyan-acento/90 transition-all';

  return (
    <header className="bg-surface sticky top-0 z-50 border-b border-line shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img
            src={logoLight}
            alt="EGS Soluciones Integrales"
            className="h-12 w-auto object-contain dark:hidden"
          />
          <img
            src={logoDark}
            alt="EGS Soluciones Integrales"
            className="h-12 w-auto object-contain hidden dark:block"
          />
        </Link>

        <div className="flex items-center gap-2">
          {/* Menú Desktop */}
          <nav aria-label="Principal" className="hidden md:flex items-center space-x-8 mr-4">
            <NavLink to="/" className={linkClass}>Inicio</NavLink>
            <NavLink to="/acerca-de" className={linkClass}>Acerca de</NavLink>
            <NavLink to="/servicios" className={linkClass}>Servicios</NavLink>
            <NavLink to="/proyectos" className={linkClass}>Proyectos</NavLink>
            <NavLink to="/contacto" className={ctaClass}>Contáctenos</NavLink>
          </nav>

          <ThemeToggle />

          {/* Botón Móvil */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden text-ink text-2xl focus:outline-none p-2"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            <i className={`fas ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <nav aria-label="Principal móvil" className="md:hidden bg-surface border-t border-line px-4 pt-2 pb-6 flex flex-col">
          <NavLink to="/" className={mobileLinkClass} onClick={closeMenu}>Inicio</NavLink>
          <NavLink to="/acerca-de" className={mobileLinkClass} onClick={closeMenu}>Acerca de</NavLink>
          <NavLink to="/servicios" className={mobileLinkClass} onClick={closeMenu}>Servicios</NavLink>
          <NavLink to="/proyectos" className={mobileLinkClass} onClick={closeMenu}>Proyectos</NavLink>
          <NavLink to="/contacto" className={`${ctaClass} text-center mt-3`} onClick={closeMenu}>
            Contáctenos
          </NavLink>
        </nav>
      )}
    </header>
  );
}
