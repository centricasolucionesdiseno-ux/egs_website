// Botón flotante de WhatsApp (visible en todas las páginas desde Layout).
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573002057325"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      <span className="hidden sm:group-hover:block sm:group-focus-visible:block bg-surface border border-line rounded-full px-4 py-2 text-sm font-medium text-ink shadow-soft">
        ¿Desea chatear con nosotros?
      </span>
      <span className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition-transform group-hover:scale-110">
        <i className="fab fa-whatsapp" aria-hidden="true" />
      </span>
    </a>
  );
}
