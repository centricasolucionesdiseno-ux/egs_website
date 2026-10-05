import Button from './Button';

export default function NebulaCard() {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-azul-profundo to-blue-700 rounded-2xl p-8 sm:p-12 text-white my-12">
      <div className="absolute top-[-60px] right-[-60px] w-72 h-72 bg-cyan-acento/20 rounded-full blur-2xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-cyan-acento/20 border border-cyan-acento/40 text-cyan-300 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider mb-4">
            <i className="fas fa-star" /> Diferenciador tecnológico
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-3.5">
            Nebula Vault <br />
            Bodega Virtual
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-7">
            Nuestro software de preservación digital desarrollado bajo el estándar internacional OAIS (Open Archival Information System). Una solución que muy pocas empresas del sector ofrecen en Colombia.[cite: 5]
          </p>
          <Button to="/contacto" variant="primary" icon="fas fa-arrow-right">
            Solicitar demo
          </Button>
        </div>

        <div className="space-y-3">
          {[
            { icon: 'fas fa-clock', text: 'Acceso 24/7 desde cualquier lugar' },
            { icon: 'fas fa-certificate', text: 'Estándar OAIS — Normatividad Internacional' },
            { icon: 'fas fa-shield-halved', text: 'Ciberseguridad de nivel institucional' },
            { icon: 'fas fa-magnifying-glass', text: 'Búsqueda y consulta de documentos digitales' },
            { icon: 'fas fa-layer-group', text: 'Integrable con sistemas existentes' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-xl p-3.5 px-4 backdrop-blur-xs">
              <i className={`${item.icon} text-cyan-acento text-base w-5`} aria-hidden="true" />
              <span className="text-xs sm:text-sm text-white/90 font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}