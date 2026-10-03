import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../../assets/images/egs-logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-cyan-acento font-semibold transition-colors"
      : "text-white hover:text-cyan-acento transition-colors";

  return (
    <header className="bg-azul-profundo sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img
            src={logoImg}
            alt="EGS Soluciones Integrales"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={linkClass}>Inicio</NavLink>
          <NavLink to="/acerca-de" className={linkClass}>Acerca de</NavLink>
          <NavLink to="/servicios" className={linkClass}>Servicios</NavLink>
          <NavLink to="/proyectos" className={linkClass}>Proyectos</NavLink>
          <NavLink
            to="/contacto"
            className="bg-cyan-acento text-white px-5 py-2.5 rounded-md font-semibold hover:bg-cyan-acento/90 transition-all"
          >
            Contáctanos
          </NavLink>
        </nav>

        {/* Botón Móvil */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none p-2"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <nav className="md:hidden bg-azul-profundo border-t border-blue-900 px-4 pt-2 pb-6 space-y-3 flex flex-col">
          <NavLink to="/" className={linkClass} onClick={closeMenu}>Inicio</NavLink>
          <NavLink to="/acerca-de" className={linkClass} onClick={closeMenu}>Acerca de</NavLink>
          <NavLink to="/servicios" className={linkClass} onClick={closeMenu}>Servicios</NavLink>
          <NavLink to="/proyectos" className={linkClass} onClick={closeMenu}>Proyectos</NavLink>
          <NavLink
            to="/contacto"
            className="inline-block bg-cyan-acento text-white px-5 py-2 rounded-md font-semibold text-center mt-2"
            onClick={closeMenu}
          >
            Contáctanos
          </NavLink>
        </nav>
      )}
    </header>
  );
}