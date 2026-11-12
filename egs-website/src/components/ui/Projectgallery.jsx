import { useRef, useState } from 'react';
import Reveal from './Reveal';

// Galería con ampliación (<dialog> nativo: Esc cierra y el foco regresa al botón).
// Si la foto aún no existe, muestra un marcador con el ícono y el título del espacio.
export default function ProjectGallery({ items }) {
  const [failed, setFailed] = useState({});
  const [active, setActive] = useState(null);
  const dialogRef = useRef(null);

  const open = (i) => {
    setActive(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const current = active === null ? null : items[active];

  return (
    <>
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <Reveal as="li" key={it.id} index={i % 4}>
            <figure>
              {failed[it.id] ? (
                <div className="aspect-4/3 bg-surface-alt border border-line rounded-card flex flex-col items-center justify-center gap-3 text-muted p-4 text-center">
                  <i className={`${it.icon} text-3xl text-cyan-texto`} aria-hidden="true" />
                  <span className="text-sm">{it.title}</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => open(i)}
                  aria-label={`Ampliar: ${it.caption}`}
                  className="group relative block w-full overflow-hidden rounded-card border border-line focus-visible:outline-2 focus-visible:outline-cyan-acento"
                >
                  <img
                    src={it.src}
                    alt={it.caption}
                    loading="lazy"
                    onError={() => setFailed((f) => ({ ...f, [it.id]: true }))}
                    className="w-full aspect-4/3 object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-azul-profundo/50 text-white text-2xl opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <i className="fas fa-magnifying-glass-plus" aria-hidden="true" />
                  </span>
                </button>
              )}
              <figcaption className="mt-2 text-sm text-muted">{it.title}</figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>

      <p className="mt-8 text-sm text-muted">
        <i className="fas fa-circle-info mr-2" aria-hidden="true" />
        Haga clic en una imagen para ampliarla.
      </p>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === e.currentTarget && close()}
        aria-label={current ? current.caption : 'Imagen ampliada'}
        className="m-auto w-full max-w-4xl bg-transparent p-4 backdrop:bg-black/75"
      >
        {current && (
          <div className="bg-surface rounded-card overflow-hidden">
            <img src={current.src} alt={current.caption} className="w-full max-h-[75vh] object-contain bg-black" />
            <div className="flex items-center justify-between gap-4 p-4">
              <p className="text-sm text-body">{current.caption}</p>
              <button
                type="button"
                onClick={close}
                className="shrink-0 px-4 py-2 rounded-md border border-line text-sm font-semibold text-ink hover:bg-surface-alt focus-visible:outline-2 focus-visible:outline-cyan-acento"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}