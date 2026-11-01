import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useGSAP(() => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return undefined;

    const root = cursorRef.current;
    const dot = root.querySelector('.cursor-dot');
    const ring = root.querySelector('.cursor-ring');
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.32, ease: 'power3' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.32, ease: 'power3' });

    const move = (event) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
    };
    const setInteractive = (event) => root.classList.toggle('is-interactive', Boolean(event.target.closest('a, button, [data-tilt]')));

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerover', setInteractive, { passive: true });
    document.addEventListener('pointerout', setInteractive, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerover', setInteractive);
      document.removeEventListener('pointerout', setInteractive);
    };
  }, { scope: cursorRef });

  return (
    <div className="custom-cursor" ref={cursorRef} aria-hidden="true">
      <span className="cursor-ring" />
      <span className="cursor-dot" />
    </div>
  );
}
