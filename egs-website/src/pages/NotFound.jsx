import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Página No Encontrada | EGS';
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-azul-profundo font-heading mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">La página que buscas no existe o ha sido movida.</p>
        <Link
          to="/"
          className="bg-cyan-acento text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-acento/90 transition-all"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}