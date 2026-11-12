import { useEffect, useRef } from 'react';

// Fade-in al entrar en viewport. El CSS (.reveal) se desactiva con prefers-reduced-motion.
export default function Reveal({ as: Tag = 'div', index = 0, className = '', children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} style={{ '--i': index }} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
