import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import { footerLine } from '../../data/company';

const text = 'text-sm sm:text-base text-muted leading-relaxed';

function Block({ b }) {
  if (b.p) return <p className={`${text} mb-4 max-w-3xl`}>{b.p}</p>;

  if (b.h) return <h3 className="font-heading text-base font-semibold text-ink mt-8 mb-3">{b.h}</h3>;

  if (b.ul)
    return (
      <ul className="space-y-2 mb-4 max-w-3xl">
        {b.ul.map((t) => (
          <li key={t} className={`flex gap-3 ${text}`}>
            <i className="fas fa-circle-check text-cyan-texto text-xs mt-2 shrink-0" aria-hidden="true" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    );

  if (b.ol)
    return (
      <ol className="divide-y divide-line border-y border-line mb-4 max-w-3xl">
        {b.ol.map((t, i) => (
          <li key={t} className={`grid grid-cols-[2.5rem_1fr] gap-3 py-4 ${text}`}>
            <span className="font-heading text-sm font-semibold text-cyan-texto pt-0.5">{String(i + 1).padStart(2, '0')}</span>
            <span>{t}</span>
          </li>
        ))}
      </ol>
    );

  if (b.kv)
    return (
      <dl className="divide-y divide-line border-y border-line mb-4 max-w-3xl">
        {b.kv.map(([k, v, href]) => (
          <div key={k} className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-4 py-3 text-sm sm:text-base">
            <dt className="font-semibold text-ink">{k}</dt>
            <dd className="text-muted break-words">
              {href ? <a href={href} className="text-ink underline">{v}</a> : v}
            </dd>
          </div>
        ))}
      </dl>
    );

  if (b.compare)
    return (
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        {[b.compare.yes, b.compare.no].map((side, i) => (
          <div key={side.title} className="border border-line rounded-card p-6">
            <h3 className="font-heading text-base font-semibold text-ink mb-3">{side.title}</h3>
            <ul className="space-y-2">
              {side.items.map((t) => (
                <li key={t} className={`flex gap-3 ${text}`}>
                  <i
                    className={`fas ${i === 0 ? 'fa-circle-check text-cyan-texto' : 'fa-circle-xmark text-muted'} text-xs mt-2 shrink-0`}
                    aria-hidden="true"
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );

  if (b.table)
    return (
      <div className="overflow-x-auto mb-4 border border-line rounded-card">
        <table className="w-full text-sm text-left">
          <thead className="bg-surface-alt text-ink">
            <tr>
              {b.table.head.map((h) => (
                <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line text-muted">
            {b.table.rows.map((r) => (
              <tr key={r[0]}>
                {r.map((c, i) => (
                  <td key={c} className={`px-4 py-3 align-top ${i === 0 ? 'font-semibold text-ink' : ''}`}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

  if (b.links)
    return (
      <p className={`${text} mb-4`}>
        Vea también:{' '}
        {b.links.map((l, i) => (
          <span key={l.to}>
            {i > 0 && ' · '}
            <Link to={l.to} className="font-semibold text-ink underline">{l.label}</Link>
          </span>
        ))}
      </p>
    );

  return null;
}

// Documento legal: encabezado, resumen "En pocas palabras", índice lateral y secciones numeradas.
export default function LegalDocument({ doc }) {
  useEffect(() => {
    document.title = `${doc.metaTitle} | EGS`;
  }, [doc.metaTitle]);

  return (
    <>
      <PageHeader crumb={doc.crumb} label="Legal" title={doc.title} description={`Vigente desde el ${doc.effective}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-12 gap-12">
        <nav aria-label="Contenido del documento" className="hidden md:block md:col-span-3 md:sticky md:top-28 md:self-start">
          <p className="text-xs font-bold tracking-widest uppercase text-muted mb-4">Contenido</p>
          <ol className="space-y-2 border-l border-line">
            {doc.sections.map((s, i) => (
              <li key={s.title}>
                <a href={`#s${i + 1}`} className="block pl-4 text-sm text-muted hover:text-ink">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="md:col-span-9">
          <section aria-labelledby="resumen" className="border border-line rounded-card p-6 sm:p-8 mb-12 bg-surface-alt">
            <h2 id="resumen" className="font-heading text-lg font-semibold text-cyan-texto mb-5">En pocas palabras</h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {doc.summary.map((s) => (
                <li key={s.text} className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-lg bg-surface border border-line text-cyan-texto flex items-center justify-center shrink-0">
                    <i className={s.icon} aria-hidden="true" />
                  </span>
                  <span className={text}>{s.text}</span>
                </li>
              ))}
            </ul>
          </section>

          {doc.sections.map((s, i) => (
            <section key={s.title} id={`s${i + 1}`} className="scroll-mt-28 border-t border-line py-10 first:border-t-0 first:pt-0">
              <h2 className="font-heading text-xl font-semibold text-ink mb-5">{s.title}</h2>
              {s.blocks.map((b, j) => (
                <Block key={j} b={b} />
              ))}
            </section>
          ))}

          <p className="mt-6 pt-6 border-t border-line text-xs text-muted">{footerLine}</p>
        </article>
      </div>
    </>
  );
}
