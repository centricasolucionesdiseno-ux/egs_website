import { Link } from 'react-router-dom';
import logoLight from '../../assets/images/egs-logo.png';
import logoDark from '../../assets/images/egs-logo-dark.png';

const linkClass = 'hover:text-cyan-texto transition-colors';
const headingClass = 'font-heading text-lg font-bold text-ink mb-4 border-b border-line pb-2';

export default function Footer() {
  return (
    <footer className="bg-surface text-muted pt-16 pb-8 border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="/">
            <img src={logoLight} alt="EGS Soluciones Integrales" className="h-12 w-auto mb-4 dark:hidden" />
            <img src={logoDark} alt="EGS Soluciones Integrales" className="h-12 w-auto mb-4 hidden dark:block" />
          </Link>
          <p className="text-sm leading-relaxed">
            Firma consultora especializada en gestión documental para entidades públicas y privadas de Colombia. Más de 10 años transformando la información en eficiencia.
          </p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <h2 className={headingClass}>Navegación</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className={linkClass}>Inicio</Link></li>
            <li><Link to="/acerca-de" className={linkClass}>Acerca de</Link></li>
            <li><Link to="/servicios" className={linkClass}>Servicios</Link></li>
            <li><Link to="/proyectos" className={linkClass}>Proyectos</Link></li>
            <li><Link to="/contacto" className={linkClass}>Contáctenos</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>Servicios</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/servicios#digitalizacion" className={linkClass}>Digitalización</Link></li>
            <li><Link to="/servicios#custodia" className={linkClass}>Custodia de Archivos</Link></li>
            <li><Link to="/servicios#nebula" className={linkClass}>Nebula Vault</Link></li>
            <li><Link to="/servicios#medios" className={linkClass}>Medios Magnéticos</Link></li>
            <li><Link to="/servicios#logistica" className={linkClass}>Logística Documental</Link></li>
          </ul>
        </div>

        <div>
          <h2 className={headingClass}>Contacto</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-3">
              <i className="fas fa-phone text-cyan-texto" aria-hidden="true"></i>
              <a href="tel:+576013225214" className={linkClass}>601 322 5214</a>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fas fa-mobile-screen text-cyan-texto" aria-hidden="true"></i>
              <a href="tel:+573002057325" className={linkClass}>300 205 7325</a>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fas fa-envelope text-cyan-texto" aria-hidden="true"></i>
              <a href="mailto:gerencia@egssas.com" className={linkClass}>gerencia@egssas.com</a>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fas fa-location-dot text-cyan-texto" aria-hidden="true"></i>
              <span>Bogotá D.C., Colombia</span>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fab fa-whatsapp text-cyan-texto" aria-hidden="true"></i>
              <a href="https://wa.me/573002057325" target="_blank" rel="noopener noreferrer" className={linkClass}>WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-line flex flex-col md:flex-row justify-between items-center text-xs">
        <span>&copy; 2026 EGS Soluciones Integrales SAS. Todos los derechos reservados.</span>
        <nav aria-label="Legal" className="mt-3 md:mt-0">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <li><Link to="/politica-de-privacidad" className="hover:text-ink">Política de privacidad</Link></li>
            <li><Link to="/terminos-de-servicio" className="hover:text-ink">Términos de servicio</Link></li>
            <li><Link to="/aviso-legal" className="hover:text-ink">Aviso legal</Link></li>
            <li><Link to="/politica-de-cookies" className="hover:text-ink">Cookies</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}