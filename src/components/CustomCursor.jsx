import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return undefined;

    let cancelled = false;
    let idleHandle;
    let fallbackHandle;
    let removeListeners;

    const initialize = async () => {
      const gsapModule = await import('gsap');
      if (cancelled || !cursorRef.current) return;

      const gsap = gsapModule.gsap ?? gsapModule.default;
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
      removeListeners = () => {
        window.removeEventListener('pointermove', move);
        document.removeEventListener('pointerover', setInteractive);
        document.removeEventListener('pointerout', setInteractive);
      };
    };

    if (window.requestIdleCallback) {
      idleHandle = window.requestIdleCallback(() => initialize().catch(() => undefined), { timeout: 1500 });
    } else {
      fallbackHandle = window.setTimeout(() => initialize().catch(() => undefined), 0);
    }

    return () => {
      cancelled = true;
      if (idleHandle !== undefined) window.cancelIdleCallback(idleHandle);
      if (fallbackHandle !== undefined) window.clearTimeout(fallbackHandle);
      removeListeners?.();
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef} aria-hidden="true">
      <span className="cursor-ring" />
      <span className="cursor-dot" />
    </div>
  );
}
