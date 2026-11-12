import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Sin hash: sube al inicio. Con hash (#nebula): espera a que la página lazy monte y baja a la sección.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    let tries = 0;
    const timer = setInterval(() => {
      const el = document.getElementById(hash.slice(1));
      if (el || ++tries > 20) {
        clearInterval(timer);
        el?.scrollIntoView();
      }
    }, 50);
    return () => clearInterval(timer);
  }, [pathname, hash]);

  return null;
}
