import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/egs-logo.png';

export default function Footer() {
  return (
    <footer className="bg-azul-profundo text-white pt-16 pb-8 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="/">
            <img src={logoImg} alt="EGS Soluciones Integrales" className="h-12 w-auto mb-4" />
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed">
            Firma consultora especializada en gestión documental para entidades públicas y privadas de Colombia. Más de 10 años transformando la información en eficiencia.[cite: 1]
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold mb-4 border-b border-cyan-acento/30 pb-2">Navegación</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-cyan-acento transition-colors">Inicio</Link></li>
            <li><Link to="/acerca-de" className="hover:text-cyan-acento transition-colors">Acerca de</Link></li>
            <li><Link to="/servicios" className="hover:text-cyan-acento transition-colors">Servicios</Link></li>
            <li><Link to="/proyectos" className="hover:text-cyan-acento transition-colors">Proyectos</Link></li>
            <li><Link to="/contacto" className="hover:text-cyan-acento transition-colors">Contáctanos</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold mb-4 border-b border-cyan-acento/30 pb-2">Servicios</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/servicios#digitalizacion" className="hover:text-cyan-acento transition-colors">Digitalización</Link></li>
            <li><Link to="/servicios#custodia" className="hover:text-cyan-acento transition-colors">Custodia de Archivos</Link></li>
            <li><Link to="/servicios#nebula" className="hover:text-cyan-acento transition-colors">Nebula Vault</Link></li>
            <li><Link to="/servicios#medios" className="hover:text-cyan-acento transition-colors">Medios Magnéticos</Link></li>
            <li><Link to="/servicios#logistica" className="hover:text-cyan-acento transition-colors">Logística Documental</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold mb-4 border-b border-cyan-acento/30 pb-2">Contacto</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center space-x-3">
              <i className="fas fa-phone text-cyan-acento"></i>
              <a href="tel:+573002057325" className="hover:text-cyan-acento">300 205 7325</a>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fas fa-envelope text-cyan-acento"></i>
              <a href="mailto:gerencia@egssas.com" className="hover:text-cyan-acento">gerencia@egssas.com</a>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fas fa-location-dot text-cyan-acento"></i>
              <span>Bogotá D.C., Colombia</span>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fab fa-whatsapp text-cyan-acento"></i>
              <a href="https://wa.me/573002057325" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-acento">WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-blue-900/60 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <span>&copy; 2026 EGS Soluciones Integrales SAS. Todos los derechos reservados.</span>
        <a href="#" className="hover:text-white mt-2 md:mt-0">Política de privacidad</a>
      </div>
    </footer>
  );
}