import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));
const PrivacyPolicy = lazy(() => import('../pages/Privacy-policies'));
const Terms = lazy(() => import('../pages/Terms-of-service'));
const LegalNotice = lazy(() => import('../pages/Legal-notice'));
const CookiesPolicy = lazy(() => import('../pages/Cookies-policy'));
const NotFound = lazy(() => import('../pages/NotFound'));

const LoadingFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center" role="status" aria-label="Cargando">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-acento"></div>
  </div>
);

export default function AppRouter() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="acerca-de" element={<About />} />
          <Route path="servicios" element={<Services />} />
          <Route path="proyectos" element={<Projects />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="terminos-de-servicio" element={<Terms />} />
          <Route path="aviso-legal" element={<LegalNotice />} />
          <Route path="politica-de-cookies" element={<CookiesPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}