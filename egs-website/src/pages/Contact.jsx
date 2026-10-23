import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const container = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

// Si defines VITE_FORM_ENDPOINT en .env (p. ej. Formspree), el formulario envía por POST.
// Si no, abre el correo del usuario con el mensaje ya redactado.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
const EMAIL = 'gerencia@egssas.com';

const interests = [
  'Organización integral de archivos',
  'Digitalización y preservación digital',
  'Lectura de medios magnéticos',
  'Microfilmación',
  'Custodia y administración de archivos físicos',
  'Logística documental',
  'Nebula Vault',
  'Consultoría archivística',
  'Otro',
];

const channels = [
  { icon: 'fas fa-phone', label: 'Teléfono', text: '300 205 7325', href: 'tel:+573002057325' },
  { icon: 'fas fa-envelope', label: 'Correo', text: EMAIL, href: `mailto:${EMAIL}` },
  { icon: 'fab fa-whatsapp', label: 'WhatsApp', text: 'Escríbanos por WhatsApp', href: 'https://wa.me/573002057325', external: true },
  { icon: 'fas fa-location-dot', label: 'Ubicación', text: 'Bogotá D.C., Colombia' },
];

const field =
  'w-full border border-line rounded-md px-4 py-3 text-base text-gris-oscuro bg-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-acento focus:ring-2 focus:ring-cyan-acento/40';
const labelClass = 'block text-sm font-semibold text-azul-profundo mb-1.5';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | mailto | error

  useEffect(() => {
    document.title = 'Contáctenos | EGS';
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (!ENDPOINT) {
      const body = [
        `Nombre: ${data.nombre}`,
        `Entidad: ${data.entidad || '-'}`,
        `Teléfono: ${data.telefono || '-'}`,
        `Correo: ${data.correo}`,
        `Servicio de interés: ${data.interes}`,
        '',
        data.mensaje,
      ].join('\n');
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        `Solicitud de contacto: ${data.interes}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <section className="hero-glow bg-gris-bg border-b border-line">
        <div className={`${container} pt-12 pb-16 md:pb-24`}>
          <nav aria-label="Ruta de navegación" className="text-xs text-gris-medio mb-10">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-azul-profundo">Inicio</Link>
              </li>
              <li aria-hidden="true"><i className="fas fa-chevron-right text-[10px]" /></li>
              <li aria-current="page" className="font-semibold text-azul-profundo">Contacto</li>
            </ol>
          </nav>
          <span className="text-xs font-bold tracking-widest uppercase text-cyan-texto block mb-3">Contáctenos</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-azul-profundo leading-[1.1] tracking-tight max-w-3xl mb-6">
            Cuéntenos cómo está hoy su archivo
          </h1>
          <p className="text-base sm:text-lg text-gris-medio leading-relaxed max-w-2xl">
            Déjenos sus datos y el servicio que le interesa. Le proponemos una ruta de organización, digitalización y
            preservación ajustada a su entidad.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className={`${container} grid md:grid-cols-12 gap-12`}>
          <div className="md:col-span-4">
            <h2 className="font-heading text-xl font-semibold text-azul-profundo mb-6">Otros canales</h2>
            <ul className="divide-y divide-line border-y border-line">
              {channels.map((c) => (
                <li key={c.label} className="flex items-start gap-4 py-4">
                  <span className="w-10 h-10 rounded-lg bg-cyan-claro text-cyan-texto flex items-center justify-center shrink-0">
                    <i className={c.icon} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-wider uppercase text-gris-medio">{c.label}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="text-sm font-medium text-azul-profundo hover:text-cyan-texto wrap-break-words"
                      >
                        {c.text}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-azul-profundo">{c.text}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-8">
            <form onSubmit={handleSubmit} className="bg-white border border-line rounded-card p-6 sm:p-10 shadow-soft">
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <label htmlFor="nombre" className={labelClass}>Nombre completo</label>
                  <input id="nombre" name="nombre" type="text" autoComplete="name" required className={field} />
                </div>
                <div>
                  <label htmlFor="entidad" className={labelClass}>Entidad o empresa</label>
                  <input id="entidad" name="entidad" type="text" autoComplete="organization" className={field} />
                </div>
                <div>
                  <label htmlFor="correo" className={labelClass}>Correo electrónico</label>
                  <input id="correo" name="correo" type="email" autoComplete="email" required className={field} />
                </div>
                <div>
                  <label htmlFor="telefono" className={labelClass}>Teléfono</label>
                  <input id="telefono" name="telefono" type="tel" autoComplete="tel" className={field} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="interes" className={labelClass}>Servicio de interés</label>
                  <select id="interes" name="interes" required defaultValue="" className={field}>
                    <option value="" disabled>Seleccione una opción</option>
                    {interests.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="mensaje" className={labelClass}>Mensaje</label>
                  <textarea id="mensaje" name="mensaje" rows={5} required className={field} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="acepto" className="flex items-start gap-3 text-sm text-gris-medio">
                    <input id="acepto" name="acepto" type="checkbox" required className="mt-1 w-4 h-4 accent-cyan-acento shrink-0" />
                    <span>
                      Autorizo el tratamiento de mis datos personales conforme a la{' '}
                      <Link to="/politica-de-privacidad" className="font-semibold text-azul-profundo underline">
                        política de privacidad
                      </Link>
                      .
                    </span>
                  </label>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button type="submit" variant="primary" icon="fas fa-paper-plane" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Enviando…' : 'Enviar solicitud'}
                </Button>
                <p role="status" aria-live="polite" className="text-sm text-gris-medio">
                  {status === 'sent' && 'Gracias, recibimos su solicitud. Le responderemos pronto.'}
                  {status === 'mailto' && 'Se abrió su programa de correo con el mensaje listo para enviar.'}
                  {status === 'error' && `No pudimos enviar el formulario. Escríbanos a ${EMAIL}.`}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}